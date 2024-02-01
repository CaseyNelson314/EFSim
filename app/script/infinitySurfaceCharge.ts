import * as THREE from 'three';
import { Charge, ChargeType, ChargeToChargeType } from './charge';
import { permittivity } from './constants';
import { Editor, PositionEditor, NumberEditor, RotationEditor } from './editor';
import { Store } from './store';


/**
 * 無限平面電荷
 */
export class InfinitySurfaceCharge extends Charge {


    private surfaceDensity: number;


    /**
     * 無限平面電荷を構築する
     * @param position 無限平面電荷の座標
     * @param rotate 回転
     * @param surfaceDensity 面密度
     */
    constructor(position: THREE.Vector3, rotate: THREE.Euler, surfaceDensity: number) {

        const geometry = new THREE.PlaneGeometry(200, 200);
        const material = InfinitySurfaceCharge.getMaterial(surfaceDensity);
        super(geometry, material);

        this.position.copy(position);
        this.rotation.copy(rotate);

        this.surfaceDensity = surfaceDensity;

    }


    /**
     * 電荷の正負を取得する
     * @returns 電荷の正負
     */
    override getChargeType = (): ChargeType => {

        return ChargeToChargeType(this.surfaceDensity);

    }


    /**
     * 任意の座標における電荷との距離ベクトルを取得する
     * @param position 任意の座標
     * @returns 電荷との距離ベクトル
     */
    private distanceFrom = (position: THREE.Vector3): THREE.Vector3 => {

        // 計算を行いやすいよう、面電荷がz=0に位置するように観測点の座標を変換する
        const positionTransformed = position.clone().sub(this.position);         // 面電荷の中心を原点に移動
        positionTransformed.applyQuaternion(this.quaternion.clone().invert());   // 面電荷を逆クオータニオン分回転させるとz=0となるので、観測点の座標も同じく回転させる
        positionTransformed.x = 0;                                               // z 軸以外無視
        positionTransformed.y = 0;

        return positionTransformed.applyQuaternion(this.quaternion);             // 観測点との差分の角度を元に戻す

    }


    /**
     * 任意の座標が電荷に接触しているかどうかを判定する
     * @param position 任意の座標
     * @param threshold 閾値
     * @returns 接触しているかどうか
     */
    override isContact = (position: THREE.Vector3, threshold: number): boolean => {

        return this.distanceFrom(position).lengthSq() < threshold ** 2;

    }


    /**
     * 任意の座標における、この電荷からの電界ベクトルを返す
     * @param position 任意の座標
     * @returns 電界ベクトル
     */
    override electricFieldVector = (position: THREE.Vector3): THREE.Vector3 => {

        const distance = this.distanceFrom(position);

        if (distance.lengthSq() < Number.EPSILON) {
            return new THREE.Vector3();  // 観測点が点電荷と重なっている場合 (0除算防止)
        }

        return distance.multiplyScalar(this.surfaceDensity / (2 * permittivity * distance.length()));

    }


    /**
     * 電気力線の始点、方向ベクトルの配列を返す
     * @returns 電気力線の始点、方向ベクトルの配列
     */
    override electricForceLinesDirection = (): { begin: THREE.Vector3, direction: THREE.Vector3 }[] => {

        const widthCount = 6;
        const heightCount = 6;

        const beginWidth = -(this.geometry as THREE.PlaneGeometry).parameters.width / 2;
        const beginHeight = -(this.geometry as THREE.PlaneGeometry).parameters.height / 2;

        const stepWidth = (this.geometry as THREE.PlaneGeometry).parameters.width / widthCount;
        const stepHeight = (this.geometry as THREE.PlaneGeometry).parameters.height / heightCount;

        const result: { begin: THREE.Vector3, direction: THREE.Vector3 }[] = [];

        for (let nWidth = 1; nWidth < widthCount; nWidth++) {
            for (let nHeight = 1; nHeight < heightCount; nHeight++) {

                const x = beginWidth + nWidth * stepWidth;
                const y = beginHeight + nHeight * stepHeight;

                const pos = new THREE.Vector3(x, y, 0).applyQuaternion(this.quaternion).add(this.position);
                const directionUp = new THREE.Vector3(0, 0, 1).applyQuaternion(this.quaternion);
                const directionDown = new THREE.Vector3(0, 0, -1).applyQuaternion(this.quaternion);

                result.push({ begin: pos, direction: directionUp });
                result.push({ begin: pos, direction: directionDown });

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
     * JSONから電荷を生成する
     */
    static override fromJSON = (json: any): Charge => {
        
        return new InfinitySurfaceCharge(
            new THREE.Vector3(json.position.x, json.position.y, json.position.z),
            new THREE.Euler(json.rotation.x, json.rotation.y, json.rotation.z),
            json.surfaceDensity
        );
        
    }


    /**
     * 電荷をJSONに変換する
     */
    override toJSON = () => {
        
        return {
            position: {
                x: this.position.x,
                y: this.position.y,
                z: this.position.z
            },
            rotation: {
                x: this.rotation.x,
                y: this.rotation.y,
                z: this.rotation.z
            },
            surfaceDensity: this.surfaceDensity
        };

    }


    /**
     * パラメーター設定用エディタを生成する
     */
    override createEditor = (): Editor => {

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
            name: "面密度[C/m²]",
            value: this.surfaceDensity,
            onChange: (value: number) => {
                this.surfaceDensity = value;
                this.material = InfinitySurfaceCharge.getMaterial(this.surfaceDensity);
            }
        });

        return new Editor()
            .add(positionEditor)
            .add(rotationEditor)
            .add(chargeEditor)
            ;

    }


    private static plusMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
    private static minusMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
    private static neutralMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });


    /**
     * 面電荷のマテリアルを取得する
     * @param surfaceDensity 面電荷の面密度
     * @returns 面電荷のマテリアル
     */
    private static getMaterial = (surfaceDensity: number) => {

        if (surfaceDensity > 0)
            return InfinitySurfaceCharge.plusMaterial;
        else if (surfaceDensity < 0)
            return InfinitySurfaceCharge.minusMaterial;
        else
            return InfinitySurfaceCharge.neutralMaterial;

    }

}

Store.RegisterChargeGenerator("InfinitySurfaceCharge", InfinitySurfaceCharge.fromJSON);
        