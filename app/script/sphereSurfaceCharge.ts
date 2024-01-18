import * as THREE from "three";
import { Charge, ChargeToChargeType } from "./charge";
import { permittivity } from "./constants";
import { GSS } from "./gss";

// 球面上に電荷が分布している電荷
export class SphereSurfaceCharge implements Charge {

    private sphereSurfaceChargeGeometry;
    readonly position: THREE.Vector3;
    mesh: THREE.Mesh;
    radius: number;
    arealDensity: number;

    private static readonly plusMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.5 });
    private static readonly minusMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.5 });
    private static readonly neutralMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0.5 });

    private getMaterialFromChargeType = (chargeType: number) => {
        if (chargeType > 0)
            return SphereSurfaceCharge.plusMaterial;
        else if (chargeType < 0)
            return SphereSurfaceCharge.minusMaterial;
        else
            return SphereSurfaceCharge.neutralMaterial;
    }


    /// @brief 球面電荷を構築する
    /// @param position 球の中心座標
    /// @param radius 球の半径
    /// @param arealDensity 面電荷密度
    constructor(position: THREE.Vector3, radius: number, arealDensity: number) {
        this.arealDensity = arealDensity;
        this.sphereSurfaceChargeGeometry = new THREE.SphereGeometry(radius, 32, 32);
        this.mesh = new THREE.Mesh(this.sphereSurfaceChargeGeometry, this.getMaterialFromChargeType(arealDensity));
        this.mesh.position.copy(position);
        this.position = this.mesh.position;
        this.radius = radius;
    }

    attachScene = (scene: THREE.Scene) => {
        scene.add(this.mesh);
        return this;
    }

    updateArealDensity = (arealDensity: number) => {
        this.arealDensity = arealDensity;
        this.mesh.material = this.getMaterialFromChargeType(arealDensity);
    }

    updateRadius = (radius: number) => {
        this.radius = radius;
        this.sphereSurfaceChargeGeometry.dispose();
        this.sphereSurfaceChargeGeometry = new THREE.SphereGeometry(radius, 32, 32);
        this.mesh.geometry = this.sphereSurfaceChargeGeometry;
    }

    /// @brief 指定座標における、この電荷からの電界ベクトルを返す
    /// @param position 観測点の座標
    electricFieldVector = (position: THREE.Vector3) => {

        const diffVector = this.distanceFrom(position);
        const diffLengthSq = diffVector.lengthSq();

        if (diffLengthSq < Number.EPSILON) {
            return new THREE.Vector3();  // 観測点が点電荷と重なっている場合
        }

        if (diffLengthSq < this.radius ** 2) {
            // E=0
            return new THREE.Vector3();  // 観測点が球の内部にある場合
        }
        else {
            // E=(σa^2)/(εr^2)
            return diffVector.multiplyScalar(
                (this.arealDensity * this.radius ** 2) / (permittivity * diffLengthSq)
            );
        }

    }

    /// @brief 電界ベクトルの描画開始座標の配列を返す
    electricFieldVectorBeginPositions = () => {
        const result: { vector: THREE.Vector3, opacity: number }[] = [];

        const count = 4;

        for (let x = -count; x <= count; x++) {
            for (let y = -count; y <= count; y++) {
                for (let z = -count; z <= count; z++) {

                    const length_sq = x ** 2 + y ** 2 + z ** 2;
                    if (length_sq > count ** 2) {
                        continue;
                    }

                    if (x === 0 && y === 0 && z === 0) {
                        continue;
                    }

                    const opacity = Math.abs(1 - length_sq / (count ** 2));

                    result.push({
                        vector: new THREE.Vector3(20 * x, 20 * y, 20 * z),
                        opacity: opacity
                    });

                }
            }
        }

        return result;
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
        return ChargeToChargeType(this.arealDensity);
    }

}
