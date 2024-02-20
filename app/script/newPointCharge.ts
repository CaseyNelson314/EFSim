import { Charge, ChargeType, ChargeToChargeType } from './charge';
import { permittivity } from './constants';
import { GSS } from './gss';
import { Editor, PositionEditor, NumberEditor } from './editor';

export class NewPointCharge extends Charge {

    charge: number;

    constructor(charge: number) {
        super();
        this.charge = charge;
    }


    /**
     * 電荷の正負を取得する
     * @returns 電荷の正負
     */
    override getChargeType = (): ChargeType => {
        return ChargeToChargeType(this.charge);
        // 同義
        // if (this.charge > 0)
        //     return ChargeType.Plus;
        // else if (this.charge < 0)
        //     return ChargeType.Minus;
        // else
        //     return ChargeType.Neutral;
    }


    /**
     * 任意の座標が電荷に接触しているかどうかを判定する
     * @param position 任意の座標
     * @param threshold 閾値
     * @returns 接触しているかどうか
     */
    // override isContact: (position: THREE.Vector3, threshold: number) => boolean;
    override isContact = (position: THREE.Vector3, threshold: number): boolean => {
        if (this.position.clone().sub(position).length() < threshold) {
            return true;
        }
        return false;
    }


    /**
     * 任意の座標における、この電荷からの電界ベクトルを返す
     * @param position 任意の座標
     * @returns 電界ベクトル
     */
    // override electricFieldVector: (position: THREE.Vector3) => THREE.Vector3;
    override electricFieldVector = (position: THREE.Vector3): THREE.Vector3 => {
        const r = this.position.clone().sub(position);
        r.multiplyScalar(this.charge / (4 * Math.PI * permittivity * r.length() ** 3));
        return r;
    }

    // class {
    //      begin: THREE.Vector3;
    //      direction: THREE.Vector3;
    // }

    /**
     * 電気力線の始点、方向ベクトルの配列を返す
     * @returns 電気力線の始点、方向ベクトルの配列
     */
    // override electricForceLinesDirection: () => { begin: THREE.Vector3, direction: THREE.Vector3 }[];
    override electricForceLinesDirection = (): { begin: THREE.Vector3, direction: THREE.Vector3 }[] => {
        const points = GSS(20);
        return points.map((point) => {
            return { begin: this.position, direction: point };
        });
    }


    /**
     * 解放
     * @note ジオメトリの破棄等を行う
     */
    override dispose = (): void => { }


    /**
     * JSONから電荷を生成する
     */
    // static override fromJSON: (json: any) => Charge;
    static override fromJSON = (json: any): Charge => { };


    /**
     * 電荷をJSONに変換する
     */
    override toJSON = (): any => { };


    /**
     * パラメーター設定用エディタを生成する
     */
    override createEditor = (): Editor => {

        const positionEditor = new PositionEditor({
            position: this.position,
            onChange: (position) => {
                this.position.copy(position);
            }
        });

        const chargeEditor = new NumberEditor({
            name: '電荷量',
            value: this.charge,
            onChange: (value) => {
                this.charge = value;
            }
        });

        const editor = new Editor();
        editor.add(positionEditor);
        editor.add(chargeEditor);

        return editor;

    }
    

}
