import * as THREE from 'three';
import { Charge, ChargeToChargeType } from './charge';
import { permittivity } from './constants';

/**
 * 球面上に電荷が分布している電荷
 */
export class InfinityCylinderVolumeCharge extends Charge {


    private radius: number;
    private volumeDensity: number;


    /**
     * 球面電荷を構築する
     * @param position 球の中心座標
     * @param radius 球の半径
     * @param arealDensity 面電荷密度
     */
    constructor(position: THREE.Vector3, rotation: THREE.Euler, radius: number, volumeDensity: number) {

        const geometry = new THREE.CylinderGeometry(radius, radius, 400, 20);
        const material = InfinityCylinderVolumeCharge.getMaterial(volumeDensity);
        super(geometry, material);

        this.position.copy(position);
        this.rotation.copy(rotation);

        this.radius = radius;
        this.volumeDensity = volumeDensity;
    }


    /**
     * 球の半径を更新する
     * @returns 球の半径
     */
    updateRadius = (radius: number) => {

        this.radius = radius;
        this.geometry.dispose();
        this.geometry = new THREE.CylinderGeometry(radius, radius, 400, 20);

    }


    /**
     * 球の半径を取得する
     * @returns 球の半径
     */
    getRadius = () => {

        return this.radius;

    }


    /**
     * 体積電荷密度を更新する
     * @param volumeDensity 体積電荷密度
     */
    updateVolumeDensity = (volumeDensity: number) => {

        this.volumeDensity = volumeDensity;
        this.material = InfinityCylinderVolumeCharge.getMaterial(volumeDensity);

    }


    /**
     * 体積電荷密度を取得する
     * @returns 体積電荷密度
     */
    getVolumeDensity = () => {

        return this.volumeDensity;

    }


    /**
     * 電荷の正負を取得する
     * @returns 電荷の正負
     */
    override getChargeType = () => {

        return ChargeToChargeType(this.volumeDensity);

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

        return distanceFrom.lengthSq() < this.radius ** 2;

    }


    /**
     * 任意の座標における、この電荷からの電界ベクトルを返す
     * @param position 任意の座標
     * @returns 電界ベクトル
     */
    override electricFieldVector = (position: THREE.Vector3) => {

        const distance = this.distanceFrom(position);

        const lengthSq = distance.lengthSq();

        if (lengthSq < Number.EPSILON) {
            return new THREE.Vector3();  // 観測点が点電荷と重なっている場合 (0除算防止)
        }

        if (lengthSq < this.radius ** 2) {
            // E=rp/(2εr)
            return distance.multiplyScalar((this.volumeDensity * this.radius) / (2 * permittivity * distance.length()));
        }
        else {
            // E=a^2p/(2εr^2)
            return distance.multiplyScalar((this.volumeDensity * this.radius ** 2) / (2 * permittivity * lengthSq));
        }

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

                // 外向き
                result.push({ begin: pos.clone().add(direction.clone().multiplyScalar(this.radius)), direction: direction });
            }

        }

        return result;

    }


    /**
     * 解放
     * @note ジオメトリやマテリアルの破棄を行う
     */
    override dispose = () => {

        this.geometry.dispose();

    }


    private static readonly plusMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.5 });
    private static readonly minusMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.5 });
    private static readonly neutralMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0.5 });

    /**
     * 電荷の正負に応じたマテリアルを返す
     * @param chargeType 電荷の正負
     * @returns マテリアル
     */
    private static getMaterial = (chargeType: number) => {
        if (chargeType > 0)
            return InfinityCylinderVolumeCharge.plusMaterial;
        else if (chargeType < 0)
            return InfinityCylinderVolumeCharge.minusMaterial;
        else
            return InfinityCylinderVolumeCharge.neutralMaterial;
    }

}
