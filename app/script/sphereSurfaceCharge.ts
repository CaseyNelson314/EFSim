import * as THREE from 'three';
import { Charge, ChargeToChargeType } from './charge';
import { permittivity } from './constants';
import { GSS } from './gss';
import { Editor, PositionEditor, NumberEditor } from './editor';

/**
 * 球面上に電荷が分布している電荷
 */
export class SphereSurfaceCharge extends Charge {


    private radius: number;
    private arealDensity: number;


    /**
     * 球面電荷を構築する
     * @param position 球の中心座標
     * @param radius 球の半径
     * @param arealDensity 面電荷密度
     */
    constructor(position: THREE.Vector3, radius: number, arealDensity: number) {

        const geometry = new THREE.SphereGeometry(radius, 32, 32);
        const material = SphereSurfaceCharge.getMaterial(arealDensity);
        super(geometry, material);

        this.position.copy(position);

        this.radius = radius;
        this.arealDensity = arealDensity;

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
            return new THREE.Vector3();  // 観測点が点電荷と重なっている場合 (0除算防止)
        }

        if (diffLengthSq < this.radius ** 2) {
            // E=0
            return new THREE.Vector3();  // 観測点が球の内部にある場合
        }
        else {
            // E=(σa^2)/(εr^3)
            return diffVector.multiplyScalar(
                (this.arealDensity * this.radius ** 2) / (permittivity * diffLengthSq ** (3/2))
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

        const chargeEditor = new NumberEditor({
            name: "面密度[C/m²]",
            value: this.arealDensity,
            onChange: (value: number) => {
                this.arealDensity = value;
                this.material = SphereSurfaceCharge.getMaterial(this.arealDensity);
            }
        });

        const radiusEditor = new NumberEditor({
            name: "半径[m]",
            value: this.radius,
            onChange: (value: number) => {
                this.radius = value;
                this.geometry = new THREE.SphereGeometry(this.radius, 32, 32);
            },
            min: 0.1,
            step: 0.1,
            digits: 2
        });

        return new Editor()
            .add(positionEditor)
            .add(chargeEditor)
            .add(radiusEditor)
            ;

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
            return SphereSurfaceCharge.plusMaterial;
        else if (chargeType < 0)
            return SphereSurfaceCharge.minusMaterial;
        else
            return SphereSurfaceCharge.neutralMaterial;
    }

}
