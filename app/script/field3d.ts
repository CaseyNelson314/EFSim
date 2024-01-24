import * as THREE from 'three';
import { Charge, ChargeType } from './charge';
import { MeshLineGeometry, MeshLineMaterial } from '@lume/three-meshline'


/**
 * 任意の座標における全電荷からの電界ベクトルを計算
 * @param charges 電荷の配列
 * @param position 任意の座標
 * @returns 
 */
const ElectricFieldVector = (
    charges: Charge[],
    position: THREE.Vector3
) =>
    charges.reduce((electricFieldVector, charge) => {
        return electricFieldVector.add(charge.electricFieldVector(position));
    }, new THREE.Vector3());



/**
 * 電気力線の連続点を生成
 * @param originCharge 線電荷が出る電荷
 * @param charges 電荷の配列
 * @param beginPoint 始点
 * @param dirVector 方向ベクトル
 * @param simDistance シミュレーション距離 (原点からの距離)
 * @returns 
 */
const ElectricForceLinePoints = (
    originCharge: Charge,
    charges: Charge[],
    beginPoint: THREE.Vector3,
    dirVector: THREE.Vector3,
    simDistance: number
) => {

    const points = [beginPoint.clone()];
    const origin = points[0]!.clone().add(dirVector);

    for (let i = 0; i < 2000; ++i) {

        // 任意の座標における電界ベクトルを計算
        const electricFieldVector = ElectricFieldVector(charges, origin);

        // 負電荷の場合も正電荷と同様の力線を描画するため、電界ベクトルを反転させる
        if (originCharge.getChargeType() === ChargeType.Minus) {
            electricFieldVector.multiplyScalar(-1);
        }

        // 電界ベクトルの方向に長さ1だけ移動 (これを繰り返すことで電気力線を生成)
        origin.add(electricFieldVector.normalize());
        points.push(origin.clone());

        // 力線が他の電荷と接触したら終了
        for (const charge of charges) {

            // 自分自身との衝突判定は行わない
            if (charge === originCharge) {
                continue;
            }

            // 電荷同士の正負が同じなら衝突判定を行わない
            if (charge.getChargeType() === originCharge.getChargeType()) {
                continue;
            }

            // 中性電荷との衝突判定は行わない
            if (charge.getChargeType() === ChargeType.Neutral) {
                continue;
            }

            // 他電荷との衝突判定
            if (charge.isContact(charge.distanceFrom(origin))) {
                return points;
            }

        }

        // 原点からの距離がシミュレーション距離を超えたら終了
        if (origin.lengthSq() > simDistance ** 2) {
            break;
        }
    }

    return points;

};


/**
 * 電気力線
 */
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
        for (const charge of this.charges) {

            if (charge.getChargeType() === ChargeType.Neutral) continue;

            const points = charge.electricForceLinesDirection();

            for (const point of points) {

                // 電気力線の連続点から線分ジオメトリを生成
                const points = ElectricForceLinePoints(charge, this.charges, point.begin, point.direction, 500);
                if (points.length < 2) {
                    // 2点以上ないと線分を生成できない
                    continue;
                }
                const geometry = new MeshLineGeometry();
                geometry.setPoints(points);
                const line = new THREE.Mesh(geometry, this.lineMaterial);
                this.add(line);

                if (points.length < 20) {
                    // 3点以上ないと矢印を生成できない
                    continue;
                }
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
        }
        this.children = [];
        this.createELines();
    }
}

/// 電界
export class Field3D extends THREE.Object3D {

    private charges: Charge[];
    private electric_lines_3d: ElectricLines3D | null;

    constructor(charges: Charge[]) {
        super();

        this.charges = charges;
        this.electric_lines_3d = null;
    }

    /// フィールドの更新
    update = () => {
        if (this.children.find((child) => child === this.electric_lines_3d) != null)
            this.electric_lines_3d?.update();
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
}
