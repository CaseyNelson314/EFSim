import * as THREE from "three";
import { Charge, ChargeToChargeType } from "./charge";
import { permittivity } from "./constants";



// 線電荷
export class InfinityLineCharge implements Charge {

    private static plusMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    private static minusMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    private static neutralMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });

    private getMaterialFromChargeType = () => {
        if (this.lineDensity > 0)
            return InfinityLineCharge.plusMaterial;
        else if (this.lineDensity < 0)
            return InfinityLineCharge.minusMaterial;
        else
            return InfinityLineCharge.neutralMaterial;
    }

    private lineChargeGeometry;
    readonly position: THREE.Vector3;
    mesh: THREE.Mesh;
    lineDensity: number;
    length: number;

    /// @brief 線電荷を構築する
    /// @param begin 線電荷の始点
    /// @param end 線電荷の終点
    /// @param lineDensity 線電荷の線密度
    constructor(center: THREE.Vector3, rotate: THREE.Euler, lineDensity: number) {
        this.lineDensity = lineDensity;
        this.lineChargeGeometry = new THREE.CylinderGeometry(1, 1, 400, 10)
        this.mesh = new THREE.Mesh(this.lineChargeGeometry, this.getMaterialFromChargeType());
        this.mesh.position.copy(center);
        this.mesh.rotation.copy(rotate);
        this.position = this.mesh.position;
        this.length = length;
    }

    attachScene = (scene: THREE.Scene) => {
        scene.add(this.mesh);
        return this;
    }

    updateLineDensity = (lineDensity: number) => {
        this.lineDensity = lineDensity;
        this.mesh.material = this.getMaterialFromChargeType();
    }

    /// @brief 指定座標における、この線電荷からの電界ベクトルを返す
    /// @param position 観測点の座標
    electricFieldVector = (position: THREE.Vector3) => {

        const distance = this.distanceFrom(position);

        if (distance.lengthSq() < Number.EPSILON) {
            return new THREE.Vector3();  // 観測点が点電荷と重なっている場合
        }

        return distance.multiplyScalar((this.lineDensity) / (2 * Math.PI * permittivity * distance.lengthSq()));

    }

    /// @brief 電界ベクトルの描画開始座標の配列を返す
    electricFieldVectorBeginPositions = () => {

        // TODO
        return new Array<{ vector: THREE.Vector3, opacity: number }>();

    }

    /// @brief 任意の座標における電荷との距離ベクトルを返す
    /// @param position 観測点の座標
    distanceFrom = (position: THREE.Vector3) => {

        // 計算を行いやすいよう、線電荷がx=z=0に位置するように観測点の座標を変換する
        const positionTransformed = position.clone().sub(this.position);              // 線電荷の中心を原点に移動
        positionTransformed.applyQuaternion(this.mesh.quaternion.clone().invert());   // 線電荷を逆クオータニオン分回転させるとx=z=0となるので、観測点の座標も同じく回転させる
        positionTransformed.y = 0;                                                    // 線電荷はy軸に沿っているのため、y座標を無視

        return positionTransformed.applyQuaternion(this.mesh.quaternion);             // 観測点との差分の角度を元に戻す

    }

    /// @brief 距離ベクトルを基に接触判定を行う
    /// @param distanceFrom 距離ベクトル
    isContact = (distanceFrom: THREE.Vector3) => {
        return distanceFrom.lengthSq() < 1;
    }

    /// @brief 電気力線の方向ベクトルの配列を返す
    electricForceLinesDirection = () => {

        const heightCount = 6;
        const thetaCount = 10;

        const beginHeight = this.lineChargeGeometry.parameters.height / 2;
        const step = (this.lineChargeGeometry.parameters.height) / heightCount;

        const result: { begin: THREE.Vector3, direction: THREE.Vector3 }[] = [];

        for (let nHeight = 1; nHeight < heightCount; ++nHeight) {

            const pos = new THREE.Vector3(0, beginHeight - step * nHeight, 0).applyQuaternion(this.mesh.quaternion).add(this.position);

            // 円周を等分する
            for (let nTheta = 0.5; nTheta < thetaCount; ++nTheta) {
                const theta = 2 * Math.PI / thetaCount * nTheta;

                const direction = new THREE.Vector3(Math.cos(theta), 0, Math.sin(theta)).applyQuaternion(this.mesh.quaternion);

                result.push({ begin: pos, direction: direction });
            }

        }

        return result;

    }

    /// @brief 電荷の正負を取得する
    getChargeType = () => {
        return ChargeToChargeType(this.lineDensity);
    }

}
