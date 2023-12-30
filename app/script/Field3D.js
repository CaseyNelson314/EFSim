import * as THREE from 'three';
import { Measure } from "./Measure.js";

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
    if (EqualsVector(pos, point_charge.mesh.position)) {
        return new THREE.Vector3();  // 観測点が点電荷と重なっている場合
    }

    const diff = new THREE.Vector3();
    diff.subVectors(pos, point_charge.mesh.position);    // 点電荷と観測点との差分

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

// 電気力線の連続点を生成
// @param origin_charge 始点 (PointCharge)
// @param point_charges 点電荷の配列
// @param dir_vector 方向ベクトル
// @param sim_distance シミュレーション距離 (原点からの距離)
const ElectricForceLinePoints = (origin_charge, point_charges, dir_vector, sim_distance) => {
    const points = [origin_charge.mesh.position.clone()];
    const origin = points[0].clone().add(dir_vector);
    for (; ;) {

        const d_vector = EFVector(origin, point_charges).normalize();

        if (origin_charge.charge < 0)
            d_vector.multiplyScalar(-1);

        // 点電荷との衝突判定
        for (const point_charge of point_charges) {
            if (origin.distanceToSquared(point_charge.mesh.position) < 1) {
                return points;
            }
        }
        origin.add(d_vector);

        // 原点からの距離が一定以上なら終了
        if (origin.lengthSq() > sim_distance ** 2) {
            break;
        }

        points.push(origin.clone());
    }
    return points;
};

// 球の面に均一な点ベクトルを生成しコールバック関数を呼び出す
// @param count theta, phi の分割数
// @param callback (vector) => {}
const UniformPointsOnSphere = (count, callback) => {
    const dir_vector = new THREE.Vector3();

    for (let n_theta = 0; n_theta < count; n_theta++) {

        const theta = (Math.PI * 2) * n_theta / count;
        const sin_theta = Math.sin(theta);

        dir_vector.z = Math.cos(theta);

        for (let n_phi = 0; n_phi < count; n_phi++) {
            const phi = (Math.PI * 2) * n_phi / count;

            dir_vector.x = Math.cos(phi) * sin_theta;
            dir_vector.y = Math.sin(phi) * sin_theta;

            callback(dir_vector.clone());
        }
    }

};


/// 電気力線
class ElectricLines3D extends THREE.Object3D {
    constructor(point_charges) {
        super();
        this.point_charges = point_charges;
        this.line_material = new THREE.LineBasicMaterial({ color: 0xccccff });

        this.cone_geometry = new THREE.ConeGeometry(1, 5, 10);
        this.cone_material = new THREE.MeshBasicMaterial({ color: 0xffffff });

        this.createELines();
    }

    createELines() {
        // const dir_vector = new THREE.Vector3();

        for (const point_charge of this.point_charges) {
            if (point_charge.charge === 0) continue;

            UniformPointsOnSphere(8, (vector) => {
                // const cone = new THREE.Mesh(this.cone_geometry, this.cone_material);
                // cone.position.copy(vector);
                // cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), vector.normalize());
                // this.add(cone);

                // 電気力線の連続点から線分ジオメトリを生成
                const points = ElectricForceLinePoints(point_charge, this.point_charges, vector, 1000);
                const geometry = new THREE.BufferGeometry().setFromPoints(points);
                const line = new THREE.Line(geometry, this.line_material);
                this.add(line);
            });
        }
    }

    update() {
        // ジオメトリをすべて破棄
        for (const child of this.children) {
            child.geometry.dispose();
        }
        this.children = [];
        this.createELines();
        // Measure("createELines", () => this.createELines());
    }
}

// 電界ベクトル
class ElectricFieldVectors3D extends THREE.Object3D {
    constructor(point_charges) {
        super();
        this.point_charges = point_charges;
        this.geometry = new THREE.ConeGeometry(1, 5, 10);
        this.createEFVectorGeometry();
    }

    createEFVectorGeometry = () => {

        const AddArrow = (position, opacity) => {

            // 遠いほど矢印の色が薄くなる
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: opacity });
            const cone = new THREE.Mesh(this.geometry, material);

            cone.position.copy(position);

            const ef_vector = EFVector(position, this.point_charges);
            cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), ef_vector.normalize());

            this.add(cone);

        }

        const count = 4;
        for (let point_charge of this.point_charges) {

            if (point_charge.charge === 0) {
                continue;
            }

            for (let x = -count; x <= count; x++) {
                for (let y = -count; y <= count; y++) {
                    for (let z = -count; z <= count; z++) {

                        const length_sq = x ** 2 + y ** 2 + z ** 2;
                        if (length_sq > count ** 2) {
                            continue;
                        }

                        if (x === 0 && y === 0 && z === 0) {
                            continue;
                        }

                        const opacity = Math.abs(1 - length_sq / (count ** 2));
                        AddArrow(new THREE.Vector3(x * 20, y * 20, z * 20).add(point_charge.mesh.position), opacity);

                    }
                }
            }

        }

    }

    update() {
        this.children = [];
        this.createEFVectorGeometry();
        // Measure("createEFVectorGeometry", () => this.createEFVectorGeometry());
    }
}

/// 電界
export class Field3D extends THREE.Object3D {
    constructor(point_charges) {
        super();

        this.point_charges = point_charges;
        this.electric_lines_3d = null;
        this.electric_field_vectors_3d = null;
    }

    /// フィールドの更新
    update = () => {
        if (this.children.find((child) => child === this.electric_lines_3d) != null)
            this.electric_lines_3d.update();

        if (this.children.find((child) => child === this.electric_field_vectors_3d) != null)
            this.electric_field_vectors_3d.update();
    }

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
            else;
            this.electric_field_vectors_3d.update();
            this.add(this.electric_field_vectors_3d);
        }
        else {
            this.remove(this.electric_field_vectors_3d);
        }
    };
}
