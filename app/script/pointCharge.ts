import * as THREE from "three";
import { Charge, ChargeToChargeType } from "./charge";
import { kCoulomb } from "./constants";
import { GSS } from "./gss";

// 点電荷
export class PointCharge extends Charge {

    private static readonly plusMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    private static readonly minusMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    private static readonly neutralMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    private static readonly pointChargeGeometry = new THREE.SphereGeometry(4, 32, 32);

    private getMaterialFromChargeType = () => {
        if (this.charge > 0)
            return PointCharge.plusMaterial;
        else if (this.charge < 0)
            return PointCharge.minusMaterial;
        else
            return PointCharge.neutralMaterial;
    }


    private mesh: THREE.Mesh;
    charge: number;

    /// @brief 点電荷を構築する
    /// @param position 点電荷の座標
    /// @param charge 電荷量
    constructor(position: THREE.Vector3, charge: number) {
        super();
        this.charge = charge;
        this.mesh = new THREE.Mesh(PointCharge.pointChargeGeometry, this.getMaterialFromChargeType());
        this.position.copy(position);
        this.add(this.mesh);
    }

    updateCharge = (charge: number) => {
        this.charge = charge;
        this.mesh.material = this.getMaterialFromChargeType();
    }

    /// @brief 指定座標における、この点電荷からの電界ベクトルを返す
    /// @param position 観測点の座標
    override electricFieldVector = (position: THREE.Vector3) => {

        const diffVector = this.distanceFrom(position);

        if (diffVector.lengthSq() < Number.EPSILON) {
            return new THREE.Vector3();  // 観測点が点電荷と重なっている場合 (ゼロ割り防止)
        }

        // E=kq/r^3
        return diffVector.multiplyScalar((kCoulomb * this.charge) / (diffVector.length() ** 3));

    }

    /// @brief 任意の座標における電荷との距離ベクトルを返す
    /// @param position 観測点の座標
    override distanceFrom = (position: THREE.Vector3) => {
        return position.clone().sub(this.position);
    }

    /// @brief 距離ベクトルを基に接触判定を行う
    /// @param distanceFrom 距離ベクトル
    override isContact = (distanceFrom: THREE.Vector3) => {
        return distanceFrom.lengthSq() < 1;
    }

    /// @brief 電気力線の方向ベクトルの配列を返す
    override electricForceLinesDirection = () => {
        return GSS(25).map((vector) => { return { begin: this.position, direction: vector } });
    }

    /// @brief 電荷の正負を取得する
    override getChargeType = () => {
        return ChargeToChargeType(this.charge);
    }

    /// @brief 解放
    override dispose = () => {}

}
