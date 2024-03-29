import * as THREE from 'three';
import { Editor } from './editor';


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
export abstract class Charge extends THREE.Mesh {


    /**
     * 電荷の正負を取得する
     * @returns 電荷の正負
     */
    abstract getChargeType: () => ChargeType;


    /**
     * 任意の座標が電荷に接触しているかどうかを判定する
     * @param position 任意の座標
     * @param threshold 閾値
     * @returns 接触しているかどうか
     */
    abstract isContact: (position: THREE.Vector3, threshold: number) => boolean;


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
     * @note ジオメトリの破棄等を行う
     */
    abstract dispose: () => void;


    /**
     * JSONから電荷を生成する
     */
    static fromJSON: (json: any) => Charge;


    /**
     * 電荷をJSONに変換する
     */
    abstract override toJSON(): any;


    /**
     * パラメーター設定用エディタを生成する
     */
    abstract createEditor: () => Editor;

};
