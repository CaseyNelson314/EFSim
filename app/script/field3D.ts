import * as THREE from 'three';
import { Charge } from './charge';


// 指定座標における電場ベクトルを計算
// @param pos 観測点の座標
// @param charge 点電荷の配列
const ElectricFieldVector = (
    pos: THREE.Vector3,
    charge: Charge[]
) => {

    let electricFieldVector = new THREE.Vector3();

    for (const pointCharge of charge) {
        electricFieldVector.add(pointCharge.electricFieldVector(pos));
    }

    return electricFieldVector;

};

// 電気力線の連続点を生成
// @param origin_charge 始点 (Charge)
// @param charge 点電荷の配列
// @param dirVector 方向ベクトル
// @param simDistance シミュレーション距離 (原点からの距離)
const ElectricForceLinePoints = (
    origin_charge: Charge,
    charge: Charge[],
    beginPoint: THREE.Vector3,
    dirVector: THREE.Vector3,
    simDistance: number
) => {

    const points = [beginPoint.clone()];
    const origin = points[0]!.clone().add(dirVector);


    for (let i = 0; i < 5000; ++i) {

        const d_vector = ElectricFieldVector(origin, charge).normalize();

        if (origin_charge.charge < 0)
            d_vector.multiplyScalar(-1);

        // 点電荷との衝突判定
        for (const pointCharge of charge) {
            if (pointCharge === origin_charge) {
                continue;
            }

            // 電荷との距離が一定以下なら終了
            if (pointCharge.distanceSqFrom(origin) < 0.5) {
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


/// 電気力線
class ElectricLines3D extends THREE.Object3D {

    private charge: Charge[];
    private lineMaterial: THREE.LineBasicMaterial;
    private coneGeometry: THREE.ConeGeometry;
    private coneMaterial: THREE.MeshBasicMaterial;

    constructor(charge: Charge[]) {
        super();
        this.charge = charge;
        this.lineMaterial = new THREE.LineBasicMaterial({ color: 0xccccff });

        this.coneGeometry = new THREE.ConeGeometry(1, 3, 10);
        this.coneMaterial = new THREE.MeshBasicMaterial({ color: 0xaeaece, opacity: 1 });

        this.createELines();
    }

    createELines() {
        // const dirVector = new THREE.Vector3();

        for (const pointCharge of this.charge) {
            if (pointCharge.charge === 0) continue;

            const points = pointCharge.electricForceLinesDirection();

            for (const point of points) {

                // 電気力線の連続点から線分ジオメトリを生成
                const points = ElectricForceLinePoints(pointCharge, this.charge, point.begin, point.direction, 300);
                const geometry = new THREE.BufferGeometry().setFromPoints(points);
                const line = new THREE.Line(geometry, this.lineMaterial);
                this.add(line);

                // 電気力線上に一定間隔で矢印を生成
                const step = points.length / 3;
                for (let i = step; i + 1 < points.length; i += step) {

                    const origin = points[Math.floor(i)]!;
                    const diff = new THREE.Vector3();
                    diff.subVectors(points[Math.floor(i + 1)]!, origin);

                    const cone = new THREE.Mesh(this.coneGeometry, this.coneMaterial);
                    cone.position.copy(origin);

                    if (pointCharge.charge < 0) {
                        diff.multiplyScalar(-1);
                    }

                    cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), diff.normalize());
                    this.add(cone);

                }
            }
        }
    }

    update() {
        // ジオメトリをすべて破棄
        for (const child of this.children) {
            if (child instanceof THREE.Line) {
                child.geometry.dispose();
            }
            if (child instanceof THREE.Mesh) {
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

    private charge: Charge[];
    private coneGeometry: THREE.ConeGeometry;

    constructor(charge: Charge[]) {
        super();
        this.charge = charge;
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

            const ef_vector = ElectricFieldVector(position, this.charge);
            cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), ef_vector.normalize());

            this.add(cone);

        }

        const count = 4;
        for (let pointCharge of this.charge) {

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

    private charge: Charge[];
    private electric_lines_3d: ElectricLines3D | null;
    private electric_field_vectors_3d: ElectricFieldVectors3D | null;

    constructor(charge: Charge[]) {
        super();

        this.charge = charge;
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
                this.electric_lines_3d = new ElectricLines3D(this.charge);
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
                this.electric_field_vectors_3d = new ElectricFieldVectors3D(this.charge);
            else
                this.electric_field_vectors_3d.update();
            this.add(this.electric_field_vectors_3d);
        }
        else {
            this.remove(this.electric_field_vectors_3d as ElectricFieldVectors3D);
        }
    };
}
