import * as THREE from 'three';
import { PointCharge } from './pointCharge.js';

// THREE.Vector3 が等しいかどうかを判定
const EqualsVector = (lhs: THREE.Vector3, rhs: THREE.Vector3, eps = Number.EPSILON) => {
    return (
        Math.abs(lhs.x - rhs.x) < eps &&
        Math.abs(lhs.y - rhs.y) < eps &&
        Math.abs(lhs.z - rhs.z) < eps);
};

// 1つの点電荷から受ける電界ベクトルを算出
// @param pos 観測点の座標
// @param pointCharge 点電荷
const EFVectorFromSingleCharge = (
    pos: THREE.Vector3,
    pointCharge: PointCharge
) => {

    if (EqualsVector(pos, pointCharge.position)) {
        return new THREE.Vector3();  // 観測点が点電荷と重なっている場合
    }

    const diff = new THREE.Vector3();
    diff.subVectors(pos, pointCharge.position);    // 点電荷と観測点との差分

    const k = 8.987552 * 10 ** 9;          // クーロン定数
    const r_sq4 = diff.lengthSq() ** 2;    // 点電荷と観測点との距離^4

    diff.multiplyScalar((k * pointCharge.charge) / r_sq4);

    return diff;

};

// 指定座標における電場ベクトルを計算
// @param pos 観測点の座標
// @param pointCharges 点電荷の配列
const EFVector = (
    pos: THREE.Vector3,
    pointCharges: PointCharge[]
) => {

    let electric_field_vector = new THREE.Vector3();

    for (const pointCharge of pointCharges) {
        electric_field_vector.add(EFVectorFromSingleCharge(pos, pointCharge));
    }

    return electric_field_vector;

};

// 電気力線の連続点を生成
// @param origin_charge 始点 (PointCharge)
// @param pointCharges 点電荷の配列
// @param dirVector 方向ベクトル
// @param simDistance シミュレーション距離 (原点からの距離)
const ElectricForceLinePoints = (
    origin_charge: PointCharge,
    pointCharges: PointCharge[],
    dirVector: THREE.Vector3,
    simDistance: number
) => {

    const points = [origin_charge.position.clone()];
    const origin = points[0]!.clone().add(dirVector);

    for (; ;) {

        const d_vector = EFVector(origin, pointCharges).normalize();

        if (origin_charge.charge < 0)
            d_vector.multiplyScalar(-1);

        // 点電荷との衝突判定
        for (const pointCharge of pointCharges) {
            if (origin.distanceToSquared(pointCharge.position) < 1) {
                return points;
            }
        }
        origin.add(d_vector);

        // 原点からの距離が一定以上なら終了
        if (origin.lengthSq() > simDistance ** 2) {
            break;
        }

        points.push(origin.clone());
    }

    return points;

};

// 球の面に均一な点ベクトルを生成しコールバック関数を呼び出す
// @param count theta, phi の分割数
// @param callback (vector) => {}
const UniformPointsOnSphere = (
    count: number,
    callback: (vector: THREE.Vector3) => void
) => {

    const dirVector = new THREE.Vector3();

    for (let n_theta = 0; n_theta < count; n_theta++) {

        const theta = (Math.PI * 2) * n_theta / count;
        const sin_theta = Math.sin(theta);

        dirVector.z = Math.cos(theta);

        for (let n_phi = 0; n_phi < count; n_phi++) {
            const phi = (Math.PI * 2) * n_phi / count;

            dirVector.x = Math.cos(phi) * sin_theta;
            dirVector.y = Math.sin(phi) * sin_theta;

            callback(dirVector.clone());
        }
    }

};


/// 電気力線
class ElectricLines3D extends THREE.Object3D {

    private pointCharges: PointCharge[];
    private lineMaterial: THREE.LineBasicMaterial;
    private coneGeometry: THREE.ConeGeometry;
    private coneMaterial: THREE.MeshBasicMaterial;

    constructor(pointCharges: PointCharge[]) {
        super();
        this.pointCharges = pointCharges;
        this.lineMaterial = new THREE.LineBasicMaterial({ color: 0xccccff });

        this.coneGeometry = new THREE.ConeGeometry(1, 5, 10);
        this.coneMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

        this.createELines();
    }

    createELines() {
        // const dirVector = new THREE.Vector3();

        for (const pointCharge of this.pointCharges) {
            if (pointCharge.charge === 0) continue;

            UniformPointsOnSphere(8, (vector) => {
                // const cone = new THREE.Mesh(this.coneGeometry, this.coneMaterial);
                // cone.position.copy(vector);
                // cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), vector.normalize());
                // this.add(cone);

                // 電気力線の連続点から線分ジオメトリを生成
                const points = ElectricForceLinePoints(pointCharge, this.pointCharges, vector, 1000);
                const geometry = new THREE.BufferGeometry().setFromPoints(points);
                const line = new THREE.Line(geometry, this.lineMaterial);
                this.add(line);
            });
        }
    }

    update() {
        // ジオメトリをすべて破棄
        for (const child of this.children) {
            if (child instanceof THREE.Line) {
                child.geometry.dispose();
            }
        }
        this.children = [];
        this.createELines();
        // Measure("createELines", () => this.createELines());
    }
}

// 電界ベクトル
class ElectricFieldVectors3D extends THREE.Object3D {

    private pointCharges: PointCharge[];
    private coneGeometry: THREE.ConeGeometry;

    constructor(pointCharges: PointCharge[]) {
        super();
        this.pointCharges = pointCharges;
        this.coneGeometry = new THREE.ConeGeometry(1, 5, 10);
        this.createEFVectorGeometry();
    }

    createEFVectorGeometry = () => {

        const AddArrow = (
            position: THREE.Vector3,
            opacity: number
        ) => {

            // 遠いほど矢印の色が薄くなる
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: opacity });
            const cone = new THREE.Mesh(this.coneGeometry, material);

            cone.position.copy(position);

            const ef_vector = EFVector(position, this.pointCharges);
            cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), ef_vector.normalize());

            this.add(cone);

        }

        const count = 4;
        for (let pointCharge of this.pointCharges) {

            if (pointCharge.charge === 0) {
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
                        AddArrow(new THREE.Vector3(x * 20, y * 20, z * 20).add(pointCharge.position), opacity);

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

    private pointCharges: PointCharge[];
    private electric_lines_3d: ElectricLines3D | null;
    private electric_field_vectors_3d: ElectricFieldVectors3D | null;

    constructor(pointCharges: PointCharge[]) {
        super();

        this.pointCharges = pointCharges;
        this.electric_lines_3d = null;
        this.electric_field_vectors_3d = null;
    }

    /// フィールドの更新
    update = () => {
        if (this.children.find((child) => child === this.electric_lines_3d) != null)
            this.electric_lines_3d?.update();

        if (this.children.find((child) => child === this.electric_field_vectors_3d) != null)
            this.electric_field_vectors_3d?.update();
    }

    /// 電気力線の表示切替
    enableElectricLines = (enable: boolean) => {
        if (enable) {
            if (this.electric_lines_3d == null)
                this.electric_lines_3d = new ElectricLines3D(this.pointCharges);
            else
                this.electric_lines_3d.update();
            this.add(this.electric_lines_3d);
        }
        else {
            this.remove(this.electric_lines_3d as ElectricLines3D);
        }
    };

    /// 電界ベクトルの表示切替
    enableElectricFieldVectors = (enable: boolean) => {
        if (enable) {
            if (this.electric_field_vectors_3d == null)
                this.electric_field_vectors_3d = new ElectricFieldVectors3D(this.pointCharges);
            else;
            this.electric_field_vectors_3d.update();
            this.add(this.electric_field_vectors_3d);
        }
        else {
            this.remove(this.electric_field_vectors_3d as ElectricFieldVectors3D);
        }
    };
}
