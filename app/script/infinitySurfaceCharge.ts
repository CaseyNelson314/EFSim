import * as THREE from "three";
import { Charge, ChargeToChargeType } from "./charge";
import { permittivity } from "./constants";

// 無限平面電荷
export class InfinitySurfaceCharge extends Charge {

    private static plusMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
    private static minusMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
    private static neutralMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });

    private getMaterialFromChargeType = () => {
        if (this.surfaceDensity > 0)
            return InfinitySurfaceCharge.plusMaterial;
        else if (this.surfaceDensity < 0)
            return InfinitySurfaceCharge.minusMaterial;
        else
            return InfinitySurfaceCharge.neutralMaterial;
    }

    private surfaceChargeGeometry = new THREE.PlaneGeometry(200, 200);
    mesh: THREE.Mesh;
    surfaceDensity: number;

    constructor(position: THREE.Vector3, rotate: THREE.Euler, surfaceDensity: number) {
        super();
        this.surfaceDensity = surfaceDensity;
        this.mesh = new THREE.Mesh(this.surfaceChargeGeometry, this.getMaterialFromChargeType());
        this.mesh.position.copy(position);
        this.mesh.rotation.copy(rotate);
    }
    
    updateSurfaceDensity = (surfaceDensity: number) => {
        this.surfaceDensity = surfaceDensity;
        this.mesh.material = this.getMaterialFromChargeType();
    }

    override electricFieldVector = (position: THREE.Vector3) => {
        const distance = this.distanceFrom(position);

        if (distance.lengthSq() < Number.EPSILON) {
            return new THREE.Vector3();  // 観測点が点電荷と重なっている場合
        }

        return distance.multiplyScalar(this.surfaceDensity / (2 * permittivity * distance.length()));
    }

    override distanceFrom = (position: THREE.Vector3) => {

        // 計算を行いやすいよう、面電荷がz=0に位置するように観測点の座標を変換する
        const positionTransformed = position.clone().sub(this.position);              // 面電荷の中心を原点に移動
        positionTransformed.applyQuaternion(this.mesh.quaternion.clone().invert());   // 面電荷を逆クオータニオン分回転させるとz=0となるので、観測点の座標も同じく回転させる
        positionTransformed.x = 0;                                                    // z 軸以外無視
        positionTransformed.y = 0;

        return positionTransformed.applyQuaternion(this.mesh.quaternion);             // 観測点との差分の角度を元に戻す

    }

    override isContact = (distanceFrom: THREE.Vector3) => {
        return distanceFrom.lengthSq() < 1;
    }

    override electricForceLinesDirection = () => {
        
        const widthCount = 6;
        const heightCount = 6;

        const beginWidth = -this.surfaceChargeGeometry.parameters.width / 2;
        const beginHeight = -this.surfaceChargeGeometry.parameters.height / 2;

        const stepWidth = this.surfaceChargeGeometry.parameters.width / widthCount;
        const stepHeight = this.surfaceChargeGeometry.parameters.height / heightCount;

        const result: { begin: THREE.Vector3, direction: THREE.Vector3 }[] = [];
        
        for (let nWidth = 1; nWidth < widthCount; nWidth++) {
            for (let nHeight = 1; nHeight < heightCount; nHeight++) {

                const x = beginWidth + nWidth * stepWidth;
                const y = beginHeight + nHeight * stepHeight;
                
                const pos = new THREE.Vector3(x, y, 0).applyQuaternion(this.mesh.quaternion).add(this.position);
                const directionUp = new THREE.Vector3(0, 0, 1).applyQuaternion(this.mesh.quaternion);
                const directionDown = new THREE.Vector3(0, 0, -1).applyQuaternion(this.mesh.quaternion);

                result.push({ begin: pos, direction: directionUp });
                result.push({ begin: pos, direction: directionDown });

            }
        }

        return result;
    }

    override getChargeType = () => {
        return ChargeToChargeType(this.surfaceDensity);
    }

    /// @brief 解放
    override dispose = () => {
        this.surfaceChargeGeometry.dispose();
    }
}
