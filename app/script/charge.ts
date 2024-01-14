import * as THREE from "three";
import { kCoulomb } from "./constants";
import { GSS } from "./gss";

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
        this.mesh.material = GetMaterialFromChargeType(ChargeToChargeType(this.charge));
    }

    abstract electricFieldVector: (position: THREE.Vector3) => THREE.Vector3;

    // 任意の座標における電荷との距離^2を返す
    abstract distanceSqFrom: (position: THREE.Vector3) => number;

    // 電気力線の始点、方向ベクトルの配列を返す
    abstract electricForceLinesDirection: () => { begin: THREE.Vector3, direction: THREE.Vector3 }[];
};

// 点電荷
export class PointCharge extends Charge {

    private static readonly pointChargeGeometry = new THREE.SphereGeometry(2, 32, 32);

    constructor(position: THREE.Vector3, charge: number) {
        const mesh = new THREE.Mesh(PointCharge.pointChargeGeometry, GetMaterialFromChargeType(ChargeToChargeType(charge)));
        super(mesh, charge);
        this.position.copy(position);
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

    // 任意の座標における電荷との距離を返す
    override distanceSqFrom = (position: THREE.Vector3) => {
        return position.distanceToSquared(this.position);
    }

    // 電気力線の方向ベクトルの配列を返す
    override electricForceLinesDirection = () => {
        return GSS(25).map((vector) => { return { begin: this.position, direction: vector } });
    }

}

// 線電荷
export class LineCharge extends Charge {

    private lineChargeGeometry = new THREE.CylinderGeometry(1, 1, 400, 50);

    constructor(begin: THREE.Vector3, end: THREE.Vector3, charge: number) {
        const mesh = new THREE.Mesh(undefined, GetMaterialFromChargeType(ChargeToChargeType(charge)));
        super(mesh, charge);
        this.position.copy(begin);
        mesh.geometry = this.lineChargeGeometry;
    }

    // 指定座標における、この線電荷からの電界ベクトルを返す
    override electricFieldVector = (position: THREE.Vector3) => {

        if (position.distanceToSquared(this.position) < Number.EPSILON) {
            return new THREE.Vector3();  // 観測点が点電荷と重なっている場合
        }

        const diff = new THREE.Vector3();
        diff.subVectors(position, this.position);    // 点電荷と観測点との差分
        diff.y = 0;

        const rSq3 = diff.lengthSq() ** 1.5;    // 点電荷と観測点との距離^3

        diff.multiplyScalar((kCoulomb * this.charge) / rSq3);

        return diff;

    }

    // 任意の座標における電荷との距離を返す
    override distanceSqFrom = (position: THREE.Vector3) => {
        const diff = new THREE.Vector3();
        diff.subVectors(position, this.position);    // 点電荷と観測点との差分
        diff.y = 0;
        return diff.lengthSq();
    }

    // 電気力線の方向ベクトルの配列を返す
    override electricForceLinesDirection = () => {
        
        const result: { begin: THREE.Vector3, direction: THREE.Vector3 }[] = [];

        // 円柱を縦に等分する
        const n = 5;
        const begin = this.position.clone().add(new THREE.Vector3(0, -this.lineChargeGeometry.parameters.height / 2, 0));
        const end = this.position.clone().add(new THREE.Vector3(0, this.lineChargeGeometry.parameters.height / 2, 0));
        const diff = new THREE.Vector3();
        diff.subVectors(end, begin);
        const step = diff.clone().divideScalar(n);

        for (let i = 1; i < n; ++i) {
            const pos = begin.clone().add(step.clone().multiplyScalar(i));
            console.log(pos);
            
            // 円周を等分する
            const m = 10;
            for (let nTheta = 0; nTheta < m; ++nTheta) {
                const theta = 2 * Math.PI / m * nTheta;
                const direction = new THREE.Vector3(Math.cos(theta), 0, Math.sin(theta));
                result.push({ begin: pos, direction: direction });
            }

            // const m = 50;
            // const r = 1;
            // const theta = 2 * Math.PI / m;
            // const direction = new THREE.Vector3();
            // for (let j = 0; j < m; ++j) {
            //     direction.set(
            //         r * Math.cos(theta * j),
            //         0,
            //         r * Math.sin(theta * j)
            //     );
            //     result.push({ begin: pos, direction: direction });
            // }

        }

        return result;

    }

}
