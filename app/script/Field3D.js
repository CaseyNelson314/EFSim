import * as THREE from 'three';

// THREE.Vector3 が等しいかどうかを判定
const EqualsVector = (v1, v2, eps = Number.EPSILON) => {
    return (
        Math.abs(v1.x - v2.x) < eps && Math.abs(v1.y - v2.y) < eps &&
        Math.abs(v1.z - v2.z) < eps);
};

// 1つの点電荷から受ける電界ベクトルを算出
// @param pos 観測点の座標
// @param point_charge 点電荷
const EFVectorFromSingleCharge = (pos, point_charge) => {

    if (EqualsVector(pos, point_charge.pos)) {
        return new THREE.Vector3();  // 観測点が点電荷と重なっている場合
    }

    const diff = new THREE.Vector3();
    diff.subVectors(pos, point_charge.pos);    // 点電荷と観測点との差分

    const k = 8.987552 * 10 ** 9;    // クーロン定数
    const r_sq4 = diff.lengthSq() ** 2;    // 点電荷と観測点との距離^4

    diff.multiplyScalar((k * point_charge.charge) / r_sq4);    // クーロン力算出

    return diff;    // ベクトルにかける係数
};

// 指定座標における電場ベクトルを計算
// @param pos 観測点の座標
// @param point_charges 点電荷の配列
const EFVector = (pos, point_charges) => {
    let electric_field_vector = new THREE.Vector3();

    for (const point_charge of point_charges) {
        electric_field_vector.add(EFVectorFromSingleCharge(pos, point_charge));
    }

    return electric_field_vector;
};

/// 電気力線
class ElectricLines3D extends THREE.Object3D {
    constructor(point_charges) {
        super();
        this.point_charges = point_charges;
        this.line_material = new THREE.LineBasicMaterial({ color: 0xaaaaff });

        this.createField(point_charges);
    }

    /// @param origin 始点 (PointCharge)
    createElectricLineGeometry = (origin_charge, dir_vector, point_charges, length) => {
        const points = [origin_charge.pos.clone()];
        const _origin = origin_charge.pos.clone();
        _origin.add(dir_vector);
        for (let i = 0; i < length; i++) {
            const d_vector = EFVector(_origin, point_charges).normalize();
            
            if (origin_charge.charge < 0)
                d_vector.multiplyScalar(-1);

            // 点電荷との衝突判定
            for (const point_charge of point_charges) {
                const diff = new THREE.Vector3();
                diff.subVectors(_origin, point_charge.pos);
                if (diff.length() < 1) {
                    return new THREE.BufferGeometry().setFromPoints(points);
                }
            }
            _origin.add(d_vector);
            points.push(_origin.clone());
        }
        return new THREE.BufferGeometry().setFromPoints(points);
    };

    createField(point_charges) {
        const theta_count = 8;
        const phi_count = 8;
        const dir_vector = new THREE.Vector3();
        for (const point_charge of point_charges) {
            for (let n_theta = 0; n_theta < theta_count; n_theta++) {

                const theta = (Math.PI * 2) * n_theta / theta_count;
                const sin_theta = Math.sin(theta);

                dir_vector.z = Math.cos(theta);

                for (let n_phi = 0; n_phi < phi_count; n_phi++) {
                    const phi = (Math.PI * 2) * n_phi / phi_count;

                    dir_vector.x = Math.cos(phi) * sin_theta;
                    dir_vector.y = Math.sin(phi) * sin_theta;

                    const line = new THREE.Line(
                        this.createElectricLineGeometry(point_charge, dir_vector, point_charges, 3000),
                        this.line_material);
                    this.add(line);
                }
            }
        }
    }

    update() {
        this.children = [];
        this.createField(this.point_charges);
    }
}

// 点電荷
class PointCharges3D extends THREE.Object3D {
    constructor(point_charges) {
        super();
        this.point_charges = point_charges;
        this.geometry = new THREE.SphereGeometry(5, 32, 32);
        this.material_minus = new THREE.MeshBasicMaterial({ color: 0x0000ff });
        this.material_plus = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        this.createPointChargesGeometry();
    }

    createPointChargesGeometry = () => {
        for (const point_charge of this.point_charges) {
            const material = point_charge.charge > 0 ? this.material_plus : this.material_minus;
            const sphere = new THREE.Mesh(this.geometry, material);
            sphere.position.copy(point_charge.pos);
            this.add(sphere);
        }
    }

    update() {
        this.children = [];
        this.createPointChargesGeometry();
    }
}

// 電界ベクトル
class ElectricFieldVectors3D extends THREE.Object3D {
    constructor(point_charges) {
        super();
        this.point_charges = point_charges;
        this.createEFVectorGeometry();
    }

    createEFVectorGeometry = () => {
        const AddArrow = (point_charge, origin) => {
            origin.add(point_charge.pos);
            const electric_field_vector = EFVector(origin, this.point_charges);

            const len = electric_field_vector.length();
            this.add(new THREE.ArrowHelper(electric_field_vector.normalize(), origin, 3, 0xffffff, 3, 1));
        }
        const count = 4;
        for (let point_charge of this.point_charges) {
            for (let x = -count; x <= count; x++) {
                for (let y = -count; y <= count; y++) {
                    for (let z = -count; z <= count; z++) {
                        if (x ** 2 + y ** 2 + z ** 2 > count ** 2)
                            continue;
                        if (x === 0 && y === 0 && z === 0) continue;
                        AddArrow(point_charge, new THREE.Vector3(x * 20, y * 20, z * 20));
                    }
                }
            }
        }
    }

    update() {
        this.children = [];
        this.createEFVectorGeometry();
    }
}

/// 電界
export class Field3D extends THREE.Object3D {
    constructor(dom, camera, trans_controls, point_charges) {
        super();
        this.dom = dom;
        this.camera = camera;
        this.trans_controls = trans_controls;
        this.point_charges = point_charges;

        this.point_charges_3d = null;
        this.electric_lines_3d = null;
        this.electric_field_vectors_3d = null;

        this.enablePointCharges(true);
    }

    /// フィールドの更新
    update = () => {
        if (this.children.find((child) => child === this.point_charges_3d) != null)
            this.point_charges_3d.update();

        if (this.children.find((child) => child === this.electric_lines_3d) != null)
            this.electric_lines_3d.update();

        if (this.children.find((child) => child === this.electric_field_vectors_3d) != null)
            this.electric_field_vectors_3d.update();
    }

    /// 点電荷の表示切替
    enablePointCharges = (enable) => {
        if (enable) {
            if (this.point_charges_3d == null)
                this.point_charges_3d = new PointCharges3D(this.point_charges);
            else
                this.point_charges_3d.update();
            this.add(this.point_charges_3d);
        }
        else {
            this.remove(this.point_charges_3d);
        }
    };

    /// 電気力線の表示切替
    enableElectricLines = (enable) => {
        if (enable) {
            if (this.electric_lines_3d == null)
                this.electric_lines_3d = new ElectricLines3D(this.point_charges);
            else
                this.electric_lines_3d.update();
            this.add(this.electric_lines_3d);
        }
        else {
            this.remove(this.electric_lines_3d);
        }
    };

    /// 電界ベクトルの表示切替
    enableElectricFieldVectors = (enable) => {
        if (enable) {
            if (this.electric_field_vectors_3d == null)
                this.electric_field_vectors_3d = new ElectricFieldVectors3D(this.point_charges);
            else
                this.electric_field_vectors_3d.update();
            this.add(this.electric_field_vectors_3d);
        }
        else {
            this.remove(this.electric_field_vectors_3d);
        }
    };
}