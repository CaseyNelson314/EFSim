import * as THREE from 'three';
import { Charge, ChargeType } from './charge';
import { MeshLineGeometry, MeshLineMaterial } from '@lume/three-meshline'

// 指定座標における電場ベクトルを計算
// @param pos 観測点の座標
// @param charge 点電荷の配列
const ElectricFieldVector = (
    pos: THREE.Vector3,
    charges: Charge[]
) => {

    let electricFieldVector = new THREE.Vector3();

    for (const charge of charges) {
        electricFieldVector.add(charge.electricFieldVector(pos));
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
    charges: Charge[],
    beginPoint: THREE.Vector3,
    dirVector: THREE.Vector3,
    simDistance: number
) => {

    const points = [beginPoint.clone()];
    const origin = points[0]!.clone().add(dirVector);


    for (let i = 0; i < 5000; ++i) {

        const d_vector = ElectricFieldVector(origin, charges).normalize();

        if (origin_charge.getChargeType() === ChargeType.Minus)
            d_vector.multiplyScalar(-1);

        // 点電荷との衝突判定
        for (const charge of charges) {
            if (charge === origin_charge) {
                continue;
            }

            // 電荷との距離が一定以下なら終了
            if (charge.distanceSqFrom(origin) < 0.5) {
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

    private charges: Charge[];
    private lineMaterial: MeshLineMaterial;
    private coneGeometry: THREE.ConeGeometry;
    private coneMaterial: THREE.MeshBasicMaterial;

    constructor(charges: Charge[]) {
        super();
        this.charges = charges;

        this.lineMaterial = new MeshLineMaterial({ color: 0xffffff, lineWidth: 1 });

        this.coneGeometry = new THREE.ConeGeometry(1.5, 4, 10);
        this.coneMaterial = new THREE.MeshBasicMaterial({ color: 0xbbbbbb });

        this.createELines();
    }

    createELines() {
        // const dirVector = new THREE.Vector3();

        for (const charge of this.charges) {
            if (charge.getChargeType() === ChargeType.Neutral) continue;

            const points = charge.electricForceLinesDirection();

            for (const point of points) {

                // 電気力線の連続点から線分ジオメトリを生成
                const points = ElectricForceLinePoints(charge, this.charges, point.begin, point.direction, 300);
                if (points.length < 2) {
                    // 2点以上ないと線分を生成できない
                    continue;
                }
                const geometry = new MeshLineGeometry();
                geometry.setPoints(points);
                const line = new THREE.Mesh(geometry, this.lineMaterial);
                this.add(line);


                // 電気力線上に一定間隔で矢印を生成
                const step = points.length / 3;
                for (let i = step; i + 1 < points.length; i += step) {

                    const origin = points[Math.floor(i)]!;
                    const diff = new THREE.Vector3();
                    diff.subVectors(points[Math.floor(i + 1)]!, origin);

                    const cone = new THREE.Mesh(this.coneGeometry, this.coneMaterial);
                    cone.position.copy(origin);

                    if (charge.getChargeType() === ChargeType.Minus) {
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
            if (child instanceof THREE.Mesh) {
                child.geometry.dispose();
            }
            if (child instanceof THREE.Mesh) {
                child.geometry.dispose();
            }
        }
        this.children = [];
        this.createELines();
    }
}

// 電界ベクトル
class ElectricFieldVectors3D extends THREE.Object3D {

    private charges: Charge[];
    private coneGeometry: THREE.ConeGeometry;

    constructor(charges: Charge[]) {
        super();
        this.charges = charges;
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

            const ef_vector = ElectricFieldVector(position, this.charges);
            cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), ef_vector.normalize());

            this.add(cone);

        }

        for (const charge of this.charges) {

            if (charge.getChargeType() === ChargeType.Neutral) {
                continue;
            }

            const points = charge.electricFieldVectorBeginPositions();
            for (const point of points) {
                AddArrow(point.vector.add(charge.position), point.opacity);
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

    private charges: Charge[];
    private electric_lines_3d: ElectricLines3D | null;
    private electric_field_vectors_3d: ElectricFieldVectors3D | null;

    constructor(charges: Charge[]) {
        super();

        this.charges = charges;
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
                this.electric_lines_3d = new ElectricLines3D(this.charges);
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
                this.electric_field_vectors_3d = new ElectricFieldVectors3D(this.charges);
            else
                this.electric_field_vectors_3d.update();
            this.add(this.electric_field_vectors_3d);
        }
        else {
            this.remove(this.electric_field_vectors_3d as ElectricFieldVectors3D);
        }
    };
}
