import * as THREE from "three";

export enum ChargeType
{
    Plus,
    Minus,
    Neutral,
}

// 点電荷
export class PointCharge {

    mesh: THREE.Mesh;
    charge: number;
    readonly position: THREE.Vector3;

    constructor(mesh: THREE.Mesh, charge: number) {

        this.mesh = mesh;
        this.charge = charge;
        this.position = mesh.position;

    }

    chargeType = () => {
        if (this.charge > 0)
            return ChargeType.Plus;
        else if (this.charge < 0)
            return ChargeType.Minus;
        else
            return ChargeType.Neutral;
    }

}
