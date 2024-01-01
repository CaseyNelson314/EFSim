import * as THREE from "three";

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
}
