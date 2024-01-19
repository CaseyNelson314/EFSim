import * as THREE from "three";

export enum ChargeType {
    Plus,
    Minus,
    Neutral,
}

export const ChargeToChargeType = (charge: number) => {
    if (charge > 0)
        return ChargeType.Plus;
    else if (charge < 0)
        return ChargeType.Minus;
    else
        return ChargeType.Neutral;
};

// 電荷
export interface Charge extends THREE.Object3D {

    /// @brief 座標の参照
    readonly position: THREE.Vector3;

    /// @brief シーンにこの電荷を追加する
    attachScene: (scene: THREE.Scene) => Charge;

    /// @brief 指定座標における、この電荷からの電界ベクトルを返す
    electricFieldVector: (position: THREE.Vector3) => THREE.Vector3;

    /// @brief 任意の座標における電荷との距離ベクトルを返す
    distanceFrom: (position: THREE.Vector3) => THREE.Vector3;

    /// @brief 距離ベクトルを基に接触判定を行う
    isContact: (distanceFrom: THREE.Vector3) => boolean;

    /// @brief 電気力線の始点、方向ベクトルの配列を返す
    electricForceLinesDirection: () => { begin: THREE.Vector3, direction: THREE.Vector3 }[];

    /// @brief 電荷の正負を取得する
    getChargeType: () => ChargeType;

    /// @brief 解放
    /// @note ジオメトリやマテリアルを解放する
    dispose: () => void;
};
