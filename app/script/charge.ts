import * as THREE from "three";


/// @brief 電荷の正負
export enum ChargeType {
    Plus,
    Minus,
    Neutral,
}


/// @brief 値の符号から電荷の正負を取得する
export const ChargeToChargeType = (charge: number) => {
    if (charge > 0)
        return ChargeType.Plus;
    else if (charge < 0)
        return ChargeType.Minus;
    else
        return ChargeType.Neutral;
};


/// @brief 電荷
export abstract class Charge extends THREE.Object3D {


    /// @brief 電荷の正負を取得する
    abstract getChargeType: () => ChargeType;


    /// @brief 任意の座標における電荷との距離ベクトルを返す
    abstract distanceFrom: (position: THREE.Vector3) => THREE.Vector3;


    /// @brief 距離ベクトルを基に接触判定を行う
    abstract isContact: (distanceFrom: THREE.Vector3) => boolean;


    /// @brief 指定座標における、この電荷からの電界ベクトルを返す
    abstract electricFieldVector: (position: THREE.Vector3) => THREE.Vector3;


    /// @brief 電気力線の始点、方向ベクトルの配列を返す
    abstract electricForceLinesDirection: () => { begin: THREE.Vector3, direction: THREE.Vector3 }[];


    /// @brief 解放
    /// @note ジオメトリやマテリアルを解放する
    abstract dispose: () => void;


};
