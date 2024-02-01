import * as THREE from 'three';
import { Charge, ChargeType, ChargeToChargeType } from './charge';
import { permittivity } from './constants';
import { Editor, PositionEditor, NumberEditor, RotationEditor } from './editor';
import { Store } from './store';


/**
 * 球面上に電荷が分布している電荷
 */
export class InfinityCylinderSurfaceCharge extends Charge {


    private radius: number;
    private surfaceDensity: number;


    /**
     * 球面電荷を構築する
     * @param position 球の中心座標
     * @param radius 球の半径
     * @param arealDensity 面電荷密度
     */
    constructor(position: THREE.Vector3, rotation: THREE.Euler, radius: number, surfaceDensity: number) {

        const geometry = new THREE.CylinderGeometry(radius, radius, 400, 20, 1, true);
        const material = InfinityCylinderSurfaceCharge.getMaterial(surfaceDensity);
        super(geometry, material);

        this.position.copy(position);
        this.rotation.copy(rotation);

        this.radius = radius;
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

        // 計算を行いやすいよう、線電荷がx=z=0に位置するように観測点の座標を変換する
        const positionTransformed = position.clone().sub(this.position);              // 線電荷の中心を原点に移動
        positionTransformed.applyQuaternion(this.quaternion.clone().invert());   // 線電荷を逆クオータニオン分回転させるとx=z=0となるので、観測点の座標も同じく回転させる
        positionTransformed.y = 0;                                                    // 線電荷はy軸に沿っているのため、y座標を無視

        return positionTransformed.applyQuaternion(this.quaternion);             // 観測点との差分の角度を元に戻す

    }


    /**
     * 任意の座標が電荷に接触しているかどうかを判定する
     * @param position 任意の座標
     * @param threshold 閾値
     * @returns 接触しているかどうか
     */
    override isContact = (position: THREE.Vector3, threshold: number): boolean => {

        const lengthSq = this.distanceFrom(position).lengthSq();

        if (lengthSq > this.radius ** 2) {
            return false;  // 外周より外側
        }
        else if (lengthSq < (this.radius - threshold) ** 2) {
            return false;  // 内周より内側
        }
        else {
            return true;   // それ以外
        }

    }

    /**
     * 任意の座標における、この電荷からの電界ベクトルを返す
     * @param position 任意の座標
     * @returns 電界ベクトル
     */
    override electricFieldVector = (position: THREE.Vector3): THREE.Vector3 => {

        const distance = this.distanceFrom(position);

        const lengthSq = distance.lengthSq();

        if (lengthSq < Number.EPSILON) {
            return new THREE.Vector3();  // 観測点が点電荷と重なっている場合 (0除算防止)
        }

        if (lengthSq < this.radius ** 2) {
            // E=0
            return new THREE.Vector3();
        }
        else {
            // E=aσ/εr^2
            return distance.multiplyScalar((this.radius * this.surfaceDensity) / (permittivity * distance.lengthSq()));
        }

    }


    /**
     * 電気力線の始点、方向ベクトルの配列を返す
     * @returns 電気力線の始点、方向ベクトルの配列
     */
    override electricForceLinesDirection = (): { begin: THREE.Vector3, direction: THREE.Vector3 }[] => {

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
     * @note ジオメトリの破棄等を行う
     */
    override dispose = () => {

        this.geometry.dispose();

    }


    /**
     * JSONから電荷を生成する
     */
    static override fromJSON = (json: any): Charge => {

        return new InfinityCylinderSurfaceCharge(
            new THREE.Vector3(json.position.x, json.position.y, json.position.z),
            new THREE.Euler(json.rotation.x, json.rotation.y, json.rotation.z),
            json.radius,
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
            radius: this.radius,
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
                this.material = InfinityCylinderSurfaceCharge.getMaterial(this.surfaceDensity);
            }
        });

        const radiusEditor = new NumberEditor({
            name: "半径[m]",
            value: this.radius,
            onChange: (value: number) => {
                this.radius = value;
                this.geometry.dispose();
                this.geometry = new THREE.CylinderGeometry(this.radius, this.radius, 400, 20, 1, true);
            },
            min: 0.1,
            step: 0.1,
            digits: 2
        });

        return new Editor()
            .add(positionEditor)
            .add(rotationEditor)
            .add(chargeEditor)
            .add(radiusEditor)
            ;

    }


    private static readonly plusMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.5, side: THREE.DoubleSide });
    private static readonly minusMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.5, side: THREE.DoubleSide });
    private static readonly neutralMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0.5, side: THREE.DoubleSide });

    /**
     * 電荷の正負に応じたマテリアルを返す
     * @param chargeType 電荷の正負
     * @returns マテリアル
     */
    private static getMaterial = (chargeType: number) => {
        if (chargeType > 0)
            return InfinityCylinderSurfaceCharge.plusMaterial;
        else if (chargeType < 0)
            return InfinityCylinderSurfaceCharge.minusMaterial;
        else
            return InfinityCylinderSurfaceCharge.neutralMaterial;
    }

}

Store.RegisterChargeGenerator("InfinityCylinderSurfaceCharge", InfinityCylinderSurfaceCharge.fromJSON);
