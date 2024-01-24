import * as THREE from 'three';
import { Charge, ChargeToChargeType } from './charge';
import { permittivity } from './constants';
import { Editor, PositionEditor, NumberEditor, RotationEditor } from './editor';


/**
 * 無限線電荷
 */
export class InfinityLineCharge extends Charge {


    private lineDensity: number;


    /**
     * 線電荷を構築する
     * @param center 中心座標
     * @param rotate 回転
     * @param lineDensity 線密度
     */
    constructor(center: THREE.Vector3, rotate: THREE.Euler, lineDensity: number) {

        const geometry = new THREE.CylinderGeometry(1, 1, 400, 10);
        const material = InfinityLineCharge.getMaterial(lineDensity);
        super(geometry, material);
        
        this.position.copy(center);
        this.rotation.copy(rotate);

        this.lineDensity = lineDensity;

    }

    
    /**
     * 電荷の正負を取得する
     * @returns 電荷の正負
     */
    override getChargeType = () => {

        return ChargeToChargeType(this.lineDensity);

    }


    /**
     * 任意の座標における電荷との距離ベクトルを取得する
     * @param position 任意の座標
     * @returns 電荷との距離ベクトル
     */
    override distanceFrom = (position: THREE.Vector3) => {

        // 計算を行いやすいよう、線電荷がx=z=0に位置するように観測点の座標を変換する
        const positionTransformed = position.clone().sub(this.position);              // 線電荷の中心を原点に移動
        positionTransformed.applyQuaternion(this.quaternion.clone().invert());   // 線電荷を逆クオータニオン分回転させるとx=z=0となるので、観測点の座標も同じく回転させる
        positionTransformed.y = 0;                                                    // 線電荷はy軸に沿っているのため、y座標を無視

        return positionTransformed.applyQuaternion(this.quaternion);             // 観測点との差分の角度を元に戻す

    }


    /**
     * 距離ベクトルを基に接触判定を行う
     * @param distanceFrom 電荷との距離ベクトル
     * @returns 接触しているかどうか
     */
    override isContact = (distanceFrom: THREE.Vector3) => {

        return distanceFrom.lengthSq() < 1;

    }


    /**
     * 任意の座標における、この電荷からの電界ベクトルを返す
     * @param position 任意の座標
     * @returns 電界ベクトル
     */
    override electricFieldVector = (position: THREE.Vector3) => {

        const distance = this.distanceFrom(position);

        if (distance.lengthSq() < Number.EPSILON) {
            return new THREE.Vector3();  // 観測点が点電荷と重なっている場合 (0除算防止)
        }

        return distance.multiplyScalar((this.lineDensity) / (2 * Math.PI * permittivity * distance.lengthSq()));

    }


    /**
     * 電気力線の始点、方向ベクトルの配列を返す
     * @returns 電気力線の始点、方向ベクトルの配列
     */
    override electricForceLinesDirection = () => {

        const heightCount = 6;
        const thetaCount = 10;

        const beginHeight = (this.geometry as THREE.CylinderGeometry).parameters.height / 2;
        const step = ((this.geometry as THREE.CylinderGeometry).parameters.height) / heightCount;

        const result: { begin: THREE.Vector3, direction: THREE.Vector3 }[] = [];

        // 高さを等分する
        for (let nHeight = 1; nHeight < heightCount; ++nHeight) {

            const pos = new THREE.Vector3(0, beginHeight - step * nHeight, 0).applyQuaternion(this.quaternion).add(this.position);

            // 円周を等分する
            for (let nTheta = 0.5; nTheta < thetaCount; ++nTheta) {
                const theta = 2 * Math.PI / thetaCount * nTheta;

                const direction = new THREE.Vector3(Math.cos(theta), 0, Math.sin(theta)).applyQuaternion(this.quaternion);

                result.push({ begin: pos, direction: direction });
            }

        }

        return result;

    }


    /**
     * 解放
     * @note ジオメトリの破棄等を行う
     */
    override dispose = () => {

        this.geometry.dispose();

    }


    /**
     * パラメーター設定用エディタを生成する
     */
    override createEditor = () => {

        const positionEditor = new PositionEditor({
            position: this.position,
            onChange: (value: THREE.Vector3) => {
                this.position.copy(value);
            }
        });

        const rotationEditor = new RotationEditor({
            rotation: this.rotation,
            onChange: (value: THREE.Euler) => {
                this.rotation.copy(value);
            }
        });

        const chargeEditor = new NumberEditor({
            name: "線密度[C/m]",
            value: this.lineDensity,
            onChange: (value: number) => {
                this.lineDensity = value;
                this.material = InfinityLineCharge.getMaterial(this.lineDensity);
            }
        });

        return new Editor()
            .add(positionEditor)
            .add(rotationEditor)
            .add(chargeEditor)
            ;

    }


    private static plusMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    private static minusMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    private static neutralMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });


    /**
     * 線電荷のマテリアルを取得する
     * @param lineDensity 線電荷の線密度
     * @returns マテリアル
     */
    private static getMaterial = (lineDensity: number) => {

        if (lineDensity > 0)
            return InfinityLineCharge.plusMaterial;
        else if (lineDensity < 0)
            return InfinityLineCharge.minusMaterial;
        else
            return InfinityLineCharge.neutralMaterial;

    }

}
