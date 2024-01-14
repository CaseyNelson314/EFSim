import * as THREE from "three";
import { kCoulomb } from "./constants";

export enum ChargeType {
    Plus,
    Minus,
    Neutral,
}

const ChargeToChargeType = (charge: number) => {
    if (charge > 0)
        return ChargeType.Plus;
    else if (charge < 0)
        return ChargeType.Minus;
    else
        return ChargeType.Neutral;
};

// 電荷
export abstract class Charge {

    mesh: THREE.Mesh;
    charge: number;
    readonly position: THREE.Vector3;

    constructor(mesh: THREE.Mesh, charge: number) {
        this.mesh = mesh;
        this.charge = charge;
        this.position = mesh.position;
    }

    private static readonly chargeMaterialPlus = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    private static readonly chargeMaterialMinus = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    private static readonly chargeMaterialNeutral = new THREE.MeshBasicMaterial({ color: 0xffff00 });

    protected getMaterialFromChargeType = () => {
        switch (this.chargeType()) {
            case ChargeType.Plus:
                return Charge.chargeMaterialPlus;
            case ChargeType.Minus:
                return Charge.chargeMaterialMinus;
            case ChargeType.Neutral:
                return Charge.chargeMaterialNeutral;
        }
    }

    abstract chargeType: () => ChargeType;

    abstract electricFieldVector: (position: THREE.Vector3) => THREE.Vector3;

};

// 点電荷
export class PointCharge extends Charge {

    private static readonly pointChargeGeometry = new THREE.SphereGeometry(2, 32, 32);

    constructor(position: THREE.Vector3, charge: number) {
        super(new THREE.Mesh(PointCharge.pointChargeGeometry, this.getMaterialFromChargeType()), charge);
        this.charge = charge;
        this.mesh = new THREE.Mesh(PointCharge.pointChargeGeometry, this.getMaterialFromChargeType());
        this.mesh.position.copy(position);
        this.position = this.mesh.position;
    }

    override chargeType = () => {
        return ChargeToChargeType(this.charge);
    }

    // 指定座標における、この点電荷からの電界ベクトルを返す
    override electricFieldVector = (position: THREE.Vector3) => {

        if (position.distanceToSquared(this.position) < Number.EPSILON) {
            return new THREE.Vector3();  // 観測点が点電荷と重なっている場合
        }

        const diff = new THREE.Vector3();
        diff.subVectors(position, this.position);    // 点電荷と観測点との差分

        const r_sq4 = diff.lengthSq() ** 2;    // 点電荷と観測点との距離^4

        diff.multiplyScalar((kCoulomb * this.charge) / r_sq4);

        return diff;

    }

}

// 線電荷
export class LineCharge extends Charge {

    mesh: THREE.Mesh
    charge: number

    readonly begin: THREE.Vector3
    readonly end: THREE.Vector3

    constructor(mesh: THREE.Mesh, charge: number) {
        super()
        this.mesh = mesh
        this.charge = charge
        this.begin = mesh.position.clone()
        this.end = mesh.position.clone().add(mesh.scale)
    }

    override chargeType = () => {
        return ChargeToChargeType(this.charge)
    }

    // 指定座標における、この線電荷からの電界ベクトルを返す
    override electricFieldVector = (position: THREE.Vector3) => {

        if (position.distanceToSquared(this.begin) < Number.EPSILON) {
            return new THREE.Vector3()  // 観測点が始点と重なっている場合
        }

        if (position.distanceToSquared(this.end) < Number.EPSILON) {
            return new THREE.Vector3()  // 観測点が終点と重なっている場合
        }

        const diff = new THREE.Vector3();
        diff.subVectors(position, this.begin)    // 始点と観測点との差分

        const r_sq4 = diff.lengthSq() ** 2    // 始点と観測点との距離^4

        diff.multiplyScalar((kCoulomb * this.charge) / r_sq4)

        return diff

    }

}
