import * as THREE from 'three';
import { Charge, ChargeType } from './charge';
import { MeshLineGeometry, MeshLineMaterial } from '@lume/three-meshline'
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils';

/**
 * 電気力線
 */
export class ElectricLines3D extends THREE.Object3D {

    private field: ElectricField;
    private lineMaterial = new MeshLineMaterial({ color: new THREE.Color(0xffffff), lineWidth: 1 })
    private coneMaterial = new THREE.MeshBasicMaterial({ color: 0xbbbbbb });

    constructor(field: ElectricField) {
        super();
        this.field = field;
        this.createELines();
    }

    createELines() {

        const lines: MeshLineGeometry[] = [];
        const cones: THREE.ConeGeometry[] = [];

        for (const charge of this.field.charges) {

            // 中性電荷は力線を生成しない
            if (charge.getChargeType() === ChargeType.Neutral) {
                continue;
            }

            const points = charge.electricForceLinesDirection();

            for (const point of points) {

                // 電気力線の連続点から線分ジオメトリを生成
                const points = this.field.electricForceLinePoints(charge, point.begin, point.direction, 1000);

                // 力線を生成
                if (points.length < 2) {
                    // 2点以上ないと線分を生成できない
                    continue;
                }
                const lineGeometry = new MeshLineGeometry();
                lineGeometry.setPoints(points);
                lines.push(lineGeometry);


                // 矢印を生成
                if (points.length < 20) {
                    // 3点以上ないと矢印を生成できない
                    continue;
                }
                const step = points.length / 3;
                for (let i = step; i + 1 < points.length; i += step) {

                    const origin = points[Math.floor(i)]!;
                    const diff = new THREE.Vector3();
                    diff.subVectors(points[Math.floor(i + 1)]!, origin);

                    if (charge.getChargeType() === ChargeType.Minus) {
                        diff.multiplyScalar(-1);
                    }

                    const coneGeometry = new THREE.ConeGeometry(1.5, 4, 10);
                    coneGeometry.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), diff.normalize()));
                    coneGeometry.translate(origin.x, origin.y, origin.z);
                    cones.push(coneGeometry);

                }
            }
        }

        // ジオメトリを結合し、描画負荷を軽減 (draw call削減)
        if (lines.length !== 0) {
            const lineGeometry = BufferGeometryUtils.mergeGeometries(lines);
            const line = new THREE.Mesh(lineGeometry, this.lineMaterial);
            this.add(line);
        }

        if (cones.length !== 0) {
            const coneGeometry = BufferGeometryUtils.mergeGeometries(cones);
            const cone = new THREE.Mesh(coneGeometry, this.coneMaterial);
            this.add(cone);
        }

    }

    update() {
        // const start = performance.now();


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



/**
 * 電界
 */
export class ElectricField extends THREE.Object3D {


    private charges: Charge[];


    /**
     * コンストラクタ
     * @param charges 電荷の配列
     */
    constructor(charges: Charge[] = []) {
        super();
        this.charges = charges;
    }


    /**
     * 電荷を追加
     * @param charge 電荷
     */
    addCharge(charge: Charge) {

        this.charges.push(charge);
        this.add(charge);

    }


    /**
     * 電荷の個数を取得
     * @returns 電荷の個数
     */
    getChargeCount() {

        return this.charges.length;

    }


    /**
     * 電荷を削除
     * @param charge 電荷
     * @returns 削除に成功したかどうか
     */
    removeCharge(charge: Charge) {

        const index = this.charges.indexOf(charge);
        if (index !== -1) {
            this.charges.splice(index, 1);
            this.remove(charge);
            return true;
        }

        return false;

    }



    /**
     * 任意の座標における全電荷からの電界ベクトルを計算
     * @param position 任意の座標
     * @returns 
     */
    electricFieldVector = (position: THREE.Vector3) => {

        const electricFieldVector = new THREE.Vector3();

        for (const charge of this.charges) {
            electricFieldVector.add(charge.electricFieldVector(position));
        }

        return electricFieldVector;

    }

    
    /**
     * 特定の電荷からでる電気力線の連続点を生成
     * @param originCharge 線電荷が出る電荷
     * @param beginPoint 始点座標
     * @param dirVector 方向ベクトル (単位ベクトル)
     * @param simDistance シミュレーション距離 (原点からの距離)
     * @returns 電気力線の連続点
     */
    electricForceLinePoints = (
        originCharge: Charge,
        beginPoint: THREE.Vector3,
        dirVector: THREE.Vector3,
        simDistance: number
    ) => {

        // 電気力線の連続点
        const points = [beginPoint.clone()];

        // 始点から方向ベクトルの方向に1だけ移動した座標を新たな始点とする
        const origin = beginPoint.clone().add(dirVector);

        // 始点を電界ベクトルを基に移動させる
        for (let i = 0; i < 2000; ++i) {

            const electricFieldVector = this.electricFieldVector(origin);

            // 負電荷の場合も正電荷と同様の力線を描画するため、電界ベクトルを反転させる
            if (originCharge.getChargeType() === ChargeType.Minus) {
                electricFieldVector.multiplyScalar(-1);
            }

            // 電界ベクトルの方向に長さ1だけ移動 (これを繰り返すことで電気力線を生成)
            origin.add(electricFieldVector.normalize().multiplyScalar(2));
            points.push(origin.clone());

            // 力線が他の電荷と接触したら終了
            for (const charge of this.charges) {

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
                if (charge.isContact(origin, 2)) {
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



}
