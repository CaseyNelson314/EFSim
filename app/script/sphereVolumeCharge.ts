import * as THREE from "three";
import { Charge, ChargeToChargeType } from "./charge";
import { permittivity } from "./constants";
import { GSS } from "./gss";


// 球内に体積電荷が分布している電荷
export class SphereVolumeCharge implements Charge {
    private sphereSurfaceChargeGeometry;
    readonly position: THREE.Vector3;
    mesh: THREE.Mesh;
    radius: number;
    volumeDensity: number;

    private static readonly plusMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.5 });
    private static readonly minusMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.5 });
    private static readonly neutralMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0.5 });

    private getMaterialFromChargeType = (chargeType: number) => {
        if (chargeType > 0)
            return SphereVolumeCharge.plusMaterial;
        else if (chargeType < 0)
            return SphereVolumeCharge.minusMaterial;
        else
            return SphereVolumeCharge.neutralMaterial;
    }

    /// @brief 球体積電荷を構築する
    /// @param position 球の中心座標
    /// @param radius 球の半径
    /// @param volumeDensity 体積電荷密度
    constructor(position: THREE.Vector3, radius: number, volumeDensity: number) {
        this.sphereSurfaceChargeGeometry = new THREE.SphereGeometry(radius, 32, 32);
        this.mesh = new THREE.Mesh(this.sphereSurfaceChargeGeometry, this.getMaterialFromChargeType(volumeDensity));
        this.mesh.position.copy(position);
        this.mesh.position.copy(position);
        this.position = this.mesh.position;
        this.radius = radius;
        this.volumeDensity = volumeDensity;
    }

    attachScene = (scene: THREE.Scene) => {
        scene.add(this.mesh);
        return this;
    }

    updateVolumeDensity = (volumeDensity: number) => {
        this.volumeDensity = volumeDensity;
        this.mesh.material = this.getMaterialFromChargeType(volumeDensity);
    }

    updateRadius = (radius: number) => {
        this.radius = radius;
        this.sphereSurfaceChargeGeometry.dispose();
        this.sphereSurfaceChargeGeometry = new THREE.SphereGeometry(radius, 32, 32);
        this.mesh.geometry = this.sphereSurfaceChargeGeometry;
    }

    /// @brief 指定座標における、この線電荷からの電界ベクトルを返す
    /// @param position 観測点の座標
    electricFieldVector = (position: THREE.Vector3) => {

        const diffVector = this.distanceFrom(position);
        const diffLengthSq = diffVector.lengthSq();

        if (diffLengthSq < Number.EPSILON) {
            return new THREE.Vector3();  // 観測点が点電荷と重なっている場合
        }

        if (diffLengthSq < this.radius ** 2) {
            // E=ρr / 3ε
            return diffVector.multiplyScalar(this.volumeDensity * Math.sqrt(diffLengthSq) / (3 * permittivity));
        }
        else {
            // E=(ρa^3/3ε) / r^2
            return diffVector.multiplyScalar((this.volumeDensity * this.radius ** 3) / (3 * permittivity * diffLengthSq));
        }

    }

    /// @brief 任意の座標における電荷との距離ベクトルを返す
    /// @param position 観測点の座標
    distanceFrom = (position: THREE.Vector3) => {
        return position.clone().sub(this.position);
    }

    /// @brief 距離ベクトルを基に接触判定を行う
    /// @param distanceFrom 距離ベクトル
    isContact = (distanceFrom: THREE.Vector3) => {
        return distanceFrom.lengthSq() < this.radius ** 2;
    }

    /// @brief 電気力線の方向ベクトルの配列を返す
    electricForceLinesDirection = () => {
        return GSS(25).map((vector) => {
            return {
                begin: this.position.clone().add(vector.clone().multiplyScalar(this.radius)),  // 始点は球の外周上
                direction: vector
            }
        });
    }

    /// @brief 電荷の正負を取得する
    getChargeType = () => {
        return ChargeToChargeType(this.volumeDensity);
    }
    
    /// @brief 解放
    dispose = () => {
        this.sphereSurfaceChargeGeometry.dispose();
    }

}
