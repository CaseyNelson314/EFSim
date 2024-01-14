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


const chargeMaterialPlus = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const chargeMaterialMinus = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const chargeMaterialNeutral = new THREE.MeshBasicMaterial({ color: 0xffff00 });

const GetMaterialFromChargeType = (chargeType: ChargeType) => {
    switch (chargeType) {
        case ChargeType.Plus:
            return chargeMaterialPlus;
        case ChargeType.Minus:
            return chargeMaterialMinus;
        case ChargeType.Neutral:
            return chargeMaterialNeutral;
    }
}

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

    attachScene = (scene: THREE.Scene) => {
        scene.add(this.mesh);
        return this;
    }

    updateCharge = (newCharge: number) => {
        this.charge = newCharge;
        this.mesh.material = GetMaterialFromChargeType(this.chargeType());
    }

    abstract chargeType: () => ChargeType;

    abstract electricFieldVector: (position: THREE.Vector3) => THREE.Vector3;

};

// 点電荷
export class PointCharge extends Charge {

    private static readonly pointChargeGeometry = new THREE.SphereGeometry(2, 32, 32);

    constructor(position: THREE.Vector3, charge: number) {
        const mesh = new THREE.Mesh(PointCharge.pointChargeGeometry, GetMaterialFromChargeType(ChargeToChargeType(charge)));
        super(mesh, charge);
        this.position.copy(position);
    }

    override chargeType = () => {
        return ChargeToChargeType(this.charge);
    }

    // 指定座標における、この点電荷からの電界ベクトルを返す
    override electricFieldVector = (position: THREE.Vector3) => {
        // return new THREE.Vector3();

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

    private lineChargeGeometry = new THREE.CylinderGeometry(1, 1, 40, 50);

    constructor(begin: THREE.Vector3, end: THREE.Vector3, charge: number) {
        const mesh = new THREE.Mesh(undefined, GetMaterialFromChargeType(ChargeToChargeType(charge)));
        super(mesh, charge);
        mesh.geometry = this.lineChargeGeometry;
    }

    override chargeType = () => {
        return ChargeToChargeType(this.charge)
    }

    // 指定座標における、この線電荷からの電界ベクトルを返す
    override electricFieldVector = (position: THREE.Vector3) => {

        // if (position.distanceToSquared(this.begin) < Number.EPSILON) {
        //     return new THREE.Vector3()  // 観測点が始点と重なっている場合
        // }

        // if (position.distanceToSquared(this.end) < Number.EPSILON) {
        //     return new THREE.Vector3()  // 観測点が終点と重なっている場合
        // }

        // const diff = new THREE.Vector3();
        // diff.subVectors(position, this.begin)    // 始点と観測点との差分

        // const r_sq4 = diff.lengthSq() ** 2    // 始点と観測点との距離^4

        // diff.multiplyScalar((kCoulomb * this.charge) / r_sq4)

        // return diff

        return new THREE.Vector3();

    }

}
