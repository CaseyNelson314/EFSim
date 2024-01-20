import * as THREE from 'three';
import { Charge, ChargeToChargeType } from './charge';
import { kCoulomb } from './constants';
import { GSS } from './gss';



/**
 * 点電荷
 */
export class PointCharge extends Charge {


    private mesh: THREE.Mesh;
    private charge: number;

    
    /**
     * 点電荷を構築する
     * @param position 点電荷の座標
     * @param charge 電荷量
     */
    constructor(position: THREE.Vector3, charge: number) {
        super();
        this.charge = charge;
        this.mesh = new THREE.Mesh(PointCharge.pointChargeGeometry, PointCharge.getMaterial(this.charge));
        this.position.copy(position);
        this.add(this.mesh);
    }


    /**
     * 電荷量を更新する
     * @param charge 電荷量
     */
    updateCharge = (charge: number) => {
        this.charge = charge;
        this.mesh.material = PointCharge.getMaterial(this.charge);
    }


    /**
     * 電荷量を取得する
     * @returns 電荷量
     */
    getCharge = () => {
        return this.charge;
    }


    /**
     * 電荷の正負を取得する
     * @returns 電荷の正負
     */
    override getChargeType = () => {
        return ChargeToChargeType(this.charge);
    }


    /**
     * 任意の座標における電荷との距離ベクトルを取得する
     * @param position 任意の座標
     * @returns 電荷との距離ベクトル
     */
    override distanceFrom = (position: THREE.Vector3) => {
        return position.clone().sub(this.position);
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

        const diffVector = this.distanceFrom(position);

        if (diffVector.lengthSq() < Number.EPSILON) {
            return new THREE.Vector3();  // 観測点が点電荷と重なっている場合 (ゼロ割り防止)
        }

        // E=kq/r^3
        return diffVector.multiplyScalar((kCoulomb * this.charge) / (diffVector.length() ** 3));

    }


    /**
     * 電気力線の始点、方向ベクトルの配列を返す
     * @returns 電気力線の始点、方向ベクトルの配列
     */
    override electricForceLinesDirection = () => {
        return GSS(25).map((vector) => { return { begin: this.position, direction: vector } });
    }


    /**
     * 解放
     * @note ジオメトリやマテリアルの破棄を行う
     */
    override dispose = () => { }


    private static readonly plusMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    private static readonly minusMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    private static readonly neutralMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    private static readonly pointChargeGeometry = new THREE.SphereGeometry(4, 32, 32);

    /**
     * 電荷量からマテリアルを取得する
     * @param charge 電荷量
     * @returns マテリアル
    */
    private static getMaterial = (charge: number) => {
        if (charge > 0)
            return PointCharge.plusMaterial;
        else if (charge < 0)
            return PointCharge.minusMaterial;
        else
            return PointCharge.neutralMaterial;
    }


}
