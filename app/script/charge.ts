import * as THREE from "three";
import { kCoulomb, permittivity } from "./constants";
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
    readonly position: THREE.Vector3;

    /// @brief 電荷を構築する
    constructor(mesh: THREE.Mesh) {
        this.mesh = mesh;
        this.position = mesh.position;
    }

    /// @brief シーンにこの電荷を追加する
    attachScene = (scene: THREE.Scene) => {
        scene.add(this.mesh);
        return this;
    }

    /// @brief 指定座標における、この電荷からの電界ベクトルを返す
    abstract electricFieldVector: (position: THREE.Vector3) => THREE.Vector3;

    /// @brief 任意の座標における電荷との距離^2を返す
    abstract distanceSqFrom: (position: THREE.Vector3) => number;

    /// @brief 電気力線の始点、方向ベクトルの配列を返す
    abstract electricForceLinesDirection: () => { begin: THREE.Vector3, direction: THREE.Vector3 }[];

    /// @brief 電荷の正負を取得する
    abstract getChargeType: () => ChargeType;
};

// 点電荷
export class PointCharge extends Charge {

    private static readonly pointChargeGeometry = new THREE.SphereGeometry(2, 32, 32);
    charge: number;

    /// @brief 点電荷を構築する
    /// @param position 点電荷の座標
    /// @param charge 電荷量
    constructor(position: THREE.Vector3, charge: number) {
        const mesh = new THREE.Mesh(PointCharge.pointChargeGeometry, GetMaterialFromChargeType(ChargeToChargeType(charge)));
        super(mesh);
        this.charge = charge;
        this.position.copy(position);
    }

    updateCharge = (charge: number) => {
        this.charge = charge;
        this.mesh.material = GetMaterialFromChargeType(ChargeToChargeType(charge));
    }

    /// @brief 指定座標における、この点電荷からの電界ベクトルを返す
    /// @param position 観測点の座標
    override electricFieldVector = (position: THREE.Vector3) => {

        if (position.distanceToSquared(this.position) < Number.EPSILON) {
            return new THREE.Vector3();  // 観測点が点電荷と重なっている場合
        }

        const diff = new THREE.Vector3();
        diff.subVectors(position, this.position);    // 点電荷と観測点との差分

        const rSq3 = diff.length() ** 3;    // 点電荷と観測点との距離^3

        return diff.multiplyScalar((kCoulomb * this.charge) / rSq3);

    }

    /// @brief 任意の座標における電荷との距離を返す
    /// @param position 観測点の座標
    override distanceSqFrom = (position: THREE.Vector3) => {
        return position.distanceToSquared(this.position);
    }

    /// @brief 電気力線の方向ベクトルの配列を返す
    override electricForceLinesDirection = () => {
        return GSS(25).map((vector) => { return { begin: this.position, direction: vector } });
    }

    /// @brief 電荷の正負を取得する
    override getChargeType = () => {
        return ChargeToChargeType(this.charge);
    }

}

// 線電荷
export class LineCharge extends Charge {

    private lineChargeGeometry = new THREE.CylinderGeometry(1, 1, 400, 50);
    lineDensity: number;
    length: number;

    /// @brief 線電荷を構築する
    /// @param begin 線電荷の始点
    /// @param end 線電荷の終点
    /// @param lineDensity 線電荷の線密度
    constructor(center: THREE.Vector3, rotate: THREE.Euler, length: number, lineDensity: number) {
        const mesh = new THREE.Mesh(undefined, GetMaterialFromChargeType(ChargeToChargeType(lineDensity)));
        super(mesh);
        this.lineDensity = lineDensity;
        this.position.copy(center);
        this.mesh.rotation.copy(rotate);
        this.length = length;
        mesh.geometry = this.lineChargeGeometry;
    }

    updateLineDensity = (lineDensity: number) => {
        this.lineDensity = lineDensity;
        this.mesh.material = GetMaterialFromChargeType(ChargeToChargeType(lineDensity));
    }

    /// @brief 指定座標における、この線電荷からの電界ベクトルを返す
    /// @param position 観測点の座標
    override electricFieldVector = (position: THREE.Vector3) => {

        if (position.distanceToSquared(this.position) < Number.EPSILON) {
            return new THREE.Vector3();  // 観測点が点電荷と重なっている場合
        }

        const diff = new THREE.Vector3();
        diff.subVectors(position, this.position);    // 点電荷と観測点との差分
        diff.y = 0;

        return diff.multiplyScalar((this.lineDensity) / (2 * Math.PI * permittivity * diff.lengthSq()));

    }

    /// @brief 任意の座標における電荷との距離を返す
    /// @param position 観測点の座標
    override distanceSqFrom = (position: THREE.Vector3) => {
        const diff = new THREE.Vector3();
        diff.subVectors(position, this.position);    // 点電荷と観測点との差分
        diff.y = 0;
        return diff.lengthSq();
    }

    /// @brief 電気力線の方向ベクトルの配列を返す
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
            // console.log(pos);

            // 円周を等分する
            const m = 10;
            for (let nTheta = 0.5; nTheta < m; ++nTheta) {
                const theta = 2 * Math.PI / m * nTheta;
                const direction = new THREE.Vector3(Math.cos(theta), 0, Math.sin(theta));
                result.push({ begin: pos, direction: direction });
            }

        }

        return result;

    }

    /// @brief 電荷の正負を取得する
    override getChargeType = () => {
        return ChargeToChargeType(this.lineDensity);
    }

}


// 球面上に電荷が分布している電荷
export class SphereSurfaceCharge extends Charge {

    private sphereSurfaceChargeGeometry;
    radius: number;
    arealDensity: number;

    /// @brief 球面電荷を構築する
    /// @param position 球の中心座標
    /// @param radius 球の半径
    /// @param arealDensity 面電荷密度
    constructor(position: THREE.Vector3, radius: number, arealDensity: number) {
        const mesh = new THREE.Mesh(undefined, GetMaterialFromChargeType(ChargeToChargeType(arealDensity)));
        super(mesh);
        this.sphereSurfaceChargeGeometry = new THREE.SphereGeometry(radius, 32, 32);
        this.position.copy(position);
        this.radius = radius;
        this.arealDensity = arealDensity;
        mesh.geometry = this.sphereSurfaceChargeGeometry;
    }

    updateArealDensity = (arealDensity: number) => {
        this.arealDensity = arealDensity;
        this.mesh.material = GetMaterialFromChargeType(ChargeToChargeType(arealDensity));
    }

    updateRadius = (radius: number) => {
        this.radius = radius;
        this.sphereSurfaceChargeGeometry.dispose();
        this.sphereSurfaceChargeGeometry = new THREE.SphereGeometry(radius, 32, 32);
        this.mesh.geometry = this.sphereSurfaceChargeGeometry;
    }

    /// @brief 指定座標における、この線電荷からの電界ベクトルを返す
    /// @param position 観測点の座標
    override electricFieldVector = (position: THREE.Vector3) => {

        if (position.distanceToSquared(this.position) < Number.EPSILON) {
            return new THREE.Vector3();  // 観測点が点電荷と重なっている場合
        }

        const diff = new THREE.Vector3();
        diff.subVectors(position, this.position);    // 点電荷と観測点との差分

        const diffLengthSq = diff.lengthSq();
        if (diffLengthSq < this.radius ** 2) {
            return new THREE.Vector3();  // 観測点が球の内部にある場合
        }
        else {
            // E=(σa^2)/(εr^2)
            return diff.multiplyScalar((this.arealDensity * this.radius ** 2) / (permittivity * diffLengthSq));
        }

    }

    /// @brief 任意の座標における電荷との距離を返す(外周との距離)
    /// @param position 観測点の座標
    override distanceSqFrom = (position: THREE.Vector3) => {
        return position.distanceToSquared(this.position) - this.radius ** 2;
    }

    /// @brief 電気力線の方向ベクトルの配列を返す
    override electricForceLinesDirection = () => {
        return GSS(25).map((vector) => {
            return {
                begin: this.position.clone().add(vector.clone().multiplyScalar(this.radius)),  // 始点は球の外周上
                direction: vector
            }
        });
    }

    /// @brief 電荷の正負を取得する
    override getChargeType = () => {
        return ChargeToChargeType(this.arealDensity);
    }

}

// 球内に体積電荷が分布している電荷
export class SphereVolumeCharge extends Charge
{
    private sphereSurfaceChargeGeometry;
    radius: number;
    volumeDensity: number;    

    /// @brief 球体積電荷を構築する
    /// @param position 球の中心座標
    /// @param radius 球の半径
    /// @param volumeDensity 体積電荷密度
    constructor(position: THREE.Vector3, radius: number, volumeDensity: number) {
        const mesh = new THREE.Mesh(undefined, GetMaterialFromChargeType(ChargeToChargeType(volumeDensity)));
        super(mesh);
        this.sphereSurfaceChargeGeometry = new THREE.SphereGeometry(radius, 32, 32);
        this.position.copy(position);
        this.radius = radius;
        this.volumeDensity = volumeDensity;
        mesh.geometry = this.sphereSurfaceChargeGeometry;
    }

    updateVolumeDensity = (volumeDensity: number) => {
        this.volumeDensity = volumeDensity;
        this.mesh.material = GetMaterialFromChargeType(ChargeToChargeType(volumeDensity));
    }

    updateRadius = (radius: number) => {
        this.radius = radius;
        this.sphereSurfaceChargeGeometry.dispose();
        this.sphereSurfaceChargeGeometry = new THREE.SphereGeometry(radius, 32, 32);
        this.mesh.geometry = this.sphereSurfaceChargeGeometry;
    }

    /// @brief 指定座標における、この線電荷からの電界ベクトルを返す
    /// @param position 観測点の座標
    override electricFieldVector = (position: THREE.Vector3) => {

        if (position.distanceToSquared(this.position) < Number.EPSILON) {
            return new THREE.Vector3();  // 観測点が点電荷と重なっている場合
        }

        const diff = new THREE.Vector3();
        diff.subVectors(position, this.position);    // 点電荷と観測点との差分

        const diffLengthSq = diff.lengthSq();
        if (diffLengthSq < this.radius ** 2) {
            // E=ρr / 3ε
            return diff.multiplyScalar(this.volumeDensity * Math.sqrt(diffLengthSq) / (3 * permittivity));
        }
        else {
            // E=(ρa^3/3ε) / r^2
            return diff.multiplyScalar((this.volumeDensity * this.radius ** 3) / (3 * permittivity * diffLengthSq));
        }


    }

    /// @brief 任意の座標における電荷との距離を返す(外周との距離)
    /// @param position 観測点の座標
    override distanceSqFrom = (position: THREE.Vector3) => {
        return position.distanceToSquared(this.position) - this.radius ** 2;
    }

    /// @brief 電気力線の方向ベクトルの配列を返す
    override electricForceLinesDirection = () => {
        return GSS(25).map((vector) => {
            return {
                begin: this.position.clone().add(vector.clone().multiplyScalar(this.radius)),  // 始点は球の外周上
                direction: vector
            }
        });
    }

    /// @brief 電荷の正負を取得する
    override getChargeType = () => {
        return ChargeToChargeType(this.volumeDensity);
    }
    
}
