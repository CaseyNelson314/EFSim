import * as THREE from 'three';


/**
 *  電荷の正負
 */
export enum ChargeType {
    Plus,
    Minus,
    Neutral,
}


/**
 * 値の符号から電荷の正負を取得する
 * @param charge 電荷
 * @returns 電荷の正負
 */
export const ChargeToChargeType = (charge: number) => {
    if (charge > 0)
        return ChargeType.Plus;
    else if (charge < 0)
        return ChargeType.Minus;
    else
        return ChargeType.Neutral;
};


/**
 * 電荷
 * @note 全ての電荷はこのクラスを継承する
 */
export abstract class Charge extends THREE.Object3D {


    /**
     * 電荷の正負を取得する
     * @returns 電荷の正負
     */
    abstract getChargeType: () => ChargeType;


    /**
     * 任意の座標における電荷との距離ベクトルを取得する
     * @param position 任意の座標
     * @returns 電荷との距離ベクトル
     */
    abstract distanceFrom: (position: THREE.Vector3) => THREE.Vector3;


    /**
     * 距離ベクトルを基に接触判定を行う
     * @param distanceFrom 電荷との距離ベクトル
     * @returns 接触しているかどうか
     */
    abstract isContact: (distanceFrom: THREE.Vector3) => boolean;


    /**
     * 任意の座標における、この電荷からの電界ベクトルを返す
     * @param position 任意の座標
     * @returns 電界ベクトル
     */
    abstract electricFieldVector: (position: THREE.Vector3) => THREE.Vector3;


    /**
     * 電気力線の始点、方向ベクトルの配列を返す
     * @returns 電気力線の始点、方向ベクトルの配列
     */
    abstract electricForceLinesDirection: () => { begin: THREE.Vector3, direction: THREE.Vector3 }[];


    /**
     * 解放
     * @note ジオメトリやマテリアルの破棄を行う
     */
    abstract dispose: () => void;


};
