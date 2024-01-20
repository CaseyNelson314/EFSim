import * as THREE from 'three';
import { Charge, ChargeToChargeType } from './charge';
import { permittivity } from './constants';
import { GSS } from './gss';

/**
 * 球面上に電荷が分布している電荷
 */
export class SphereSurfaceCharge extends Charge {


    private mesh: THREE.Mesh;
    private radius: number;
    private arealDensity: number;


    /**
     * 球面電荷を構築する
     * @param position 球の中心座標
     * @param radius 球の半径
     * @param arealDensity 面電荷密度
     */
    constructor(position: THREE.Vector3, radius: number, arealDensity: number) {
        super();
        this.position.copy(position);
        this.radius = radius;
        this.arealDensity = arealDensity;
        this.sphereSurfaceChargeGeometry = new THREE.SphereGeometry(radius, 32, 32);
        this.mesh = new THREE.Mesh(this.sphereSurfaceChargeGeometry, SphereSurfaceCharge.getMaterial(arealDensity));
    }


    /**
     * 球の半径を更新する
     * @returns 球の半径
     */
    updateRadius = (radius: number) => {
        this.radius = radius;
        this.sphereSurfaceChargeGeometry.dispose();
        this.sphereSurfaceChargeGeometry = new THREE.SphereGeometry(radius, 32, 32);
        this.mesh.geometry = this.sphereSurfaceChargeGeometry;
    }


    /**
     * 球の半径を取得する
     * @returns 球の半径
     */
    getRadius = () => {
        return this.radius;
    }


    /**
     * 面電荷密度を更新する
     * @param arealDensity 面電荷密度
     */
    updateArealDensity = (arealDensity: number) => {
        this.arealDensity = arealDensity;
        this.mesh.material = SphereSurfaceCharge.getMaterial(arealDensity);
    }

    /**
     * 面電荷密度を取得する
     * @returns 面電荷密度
     */
    getArealDensity = () => {
        return this.arealDensity;
    }


    /**
     * 電荷の正負を取得する
     * @returns 電荷の正負
     */
    override getChargeType = () => {
        return ChargeToChargeType(this.arealDensity);
    }


    /**
     * 任意の座標における電荷との距離ベクトルを返す
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
        return distanceFrom.lengthSq() < this.radius ** 2;
    }
    

    /**
     * 任意の座標における、この電荷からの電界ベクトルを返す
     * @param position 任意の座標
     * @returns 電界ベクトル
     */
    override electricFieldVector = (position: THREE.Vector3) => {

        const diffVector = this.distanceFrom(position);
        const diffLengthSq = diffVector.lengthSq();

        if (diffLengthSq < Number.EPSILON) {
            return new THREE.Vector3();  // 観測点が点電荷と重なっている場合
        }

        if (diffLengthSq < this.radius ** 2) {
            // E=0
            return new THREE.Vector3();  // 観測点が球の内部にある場合
        }
        else {
            // E=(σa^2)/(εr^2)
            return diffVector.multiplyScalar(
                (this.arealDensity * this.radius ** 2) / (permittivity * diffLengthSq)
            );
        }

    }


    /**
     * 電気力線の始点、方向ベクトルの配列を返す
     * @returns 電気力線の始点、方向ベクトルの配列
     */
    override electricForceLinesDirection = () => {
        return GSS(25).map((vector) => {
            return {
                begin: this.position.clone().add(vector.clone().multiplyScalar(this.radius)),  // 始点は球の外周上
                direction: vector
            }
        });
    }

    
    /**
     * 解放
     * @note ジオメトリやマテリアルの破棄を行う
     */
    override dispose = () => {
        this.sphereSurfaceChargeGeometry.dispose();
    }


    private static readonly plusMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.5 });
    private static readonly minusMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.5 });
    private static readonly neutralMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0.5 });
    private sphereSurfaceChargeGeometry;

    /**
     * 電荷の正負に応じたマテリアルを返す
     * @param chargeType 電荷の正負
     * @returns マテリアル
     */
    private static getMaterial = (chargeType: number) => {
        if (chargeType > 0)
            return SphereSurfaceCharge.plusMaterial;
        else if (chargeType < 0)
            return SphereSurfaceCharge.minusMaterial;
        else
            return SphereSurfaceCharge.neutralMaterial;
    }

}
