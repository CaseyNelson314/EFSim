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
export interface Charge {

    /// @brief 座標の参照
    readonly position: THREE.Vector3;
    mesh : THREE.Mesh;

    /// @brief シーンにこの電荷を追加する
    attachScene: (scene: THREE.Scene) => Charge;

    /// @brief 指定座標における、この電荷からの電界ベクトルを返す
    electricFieldVector: (position: THREE.Vector3) => THREE.Vector3;

    /// @brief 電界ベクトルの描画開始座標の配列を返す
    electricFieldVectorBeginPositions: () => { vector: THREE.Vector3, opacity: number }[];

    /// @brief 任意の座標における電荷との距離^2を返す
    distanceSqFrom: (position: THREE.Vector3) => number;

    /// @brief 電気力線の始点、方向ベクトルの配列を返す
    electricForceLinesDirection: () => { begin: THREE.Vector3, direction: THREE.Vector3 }[];

    /// @brief 電荷の正負を取得する
    getChargeType: () => ChargeType;
};

// 点電荷
export class PointCharge implements Charge {

    private static readonly pointChargeGeometry = new THREE.SphereGeometry(4, 32, 32);
    readonly position: THREE.Vector3;
    mesh: THREE.Mesh;
    charge: number;

    /// @brief 点電荷を構築する
    /// @param position 点電荷の座標
    /// @param charge 電荷量
    constructor(position: THREE.Vector3, charge: number) {
        this.mesh = new THREE.Mesh(PointCharge.pointChargeGeometry, GetMaterialFromChargeType(ChargeToChargeType(charge)));
        this.mesh.position.copy(position);
        this.charge = charge;
        this.position = this.mesh.position;
    }

    attachScene: (scene: THREE.Scene) => Charge = (scene: THREE.Scene) => {
        scene.add(this.mesh);
        return this;
    }

    updateCharge = (charge: number) => {
        this.charge = charge;
        this.mesh.material = GetMaterialFromChargeType(ChargeToChargeType(charge));
    }

    /// @brief 指定座標における、この点電荷からの電界ベクトルを返す
    /// @param position 観測点の座標
    electricFieldVector = (position: THREE.Vector3) => {

        if (position.distanceToSquared(this.position) < Number.EPSILON) {
            return new THREE.Vector3();  // 観測点が点電荷と重なっている場合
        }

        const diff = new THREE.Vector3();
        diff.subVectors(position, this.position);    // 点電荷と観測点との差分

        const rSq3 = diff.length() ** 3;    // 点電荷と観測点との距離^3

        return diff.multiplyScalar((kCoulomb * this.charge) / rSq3);

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

    /// @brief 任意の座標における電荷との距離を返す
    /// @param position 観測点の座標
    distanceSqFrom = (position: THREE.Vector3) => {
        return position.distanceToSquared(this.position);
    }

    /// @brief 電気力線の方向ベクトルの配列を返す
    electricForceLinesDirection = () => {
        return GSS(25).map((vector) => { return { begin: this.position, direction: vector } });
    }

    /// @brief 電荷の正負を取得する
    getChargeType = () => {
        return ChargeToChargeType(this.charge);
    }

}

// 線電荷
export class LineCharge implements  Charge {

    private lineChargeGeometry;
    readonly position: THREE.Vector3;
    mesh: THREE.Mesh;
    lineDensity: number;
    length: number;

    /// @brief 線電荷を構築する
    /// @param begin 線電荷の始点
    /// @param end 線電荷の終点
    /// @param lineDensity 線電荷の線密度
    constructor(center: THREE.Vector3, rotate: THREE.Euler, length: number, lineDensity: number) {
        this.lineChargeGeometry = new THREE.CylinderGeometry(1, 1, 400, 50)
        this.mesh = new THREE.Mesh(this.lineChargeGeometry, GetMaterialFromChargeType(ChargeToChargeType(lineDensity)));
        this.mesh.position.copy(center);
        this.mesh.rotation.copy(rotate);
        this.position = this.mesh.position;
        this.lineDensity = lineDensity;
        this.length = length;
    }

    attachScene: (scene: THREE.Scene) => Charge = (scene: THREE.Scene) => {
        scene.add(this.mesh);
        return this;
    }

    updateLineDensity = (lineDensity: number) => {
        this.lineDensity = lineDensity;
        this.mesh.material = GetMaterialFromChargeType(ChargeToChargeType(lineDensity));
    }

    /// @brief 指定座標における、この線電荷からの電界ベクトルを返す
    /// @param position 観測点の座標
    electricFieldVector = (position: THREE.Vector3) => {

        if (position.distanceToSquared(this.position) < Number.EPSILON) {
            return new THREE.Vector3();  // 観測点が点電荷と重なっている場合
        }

        const diff = new THREE.Vector3();
        diff.subVectors(position, this.position);    // 点電荷と観測点との差分
        diff.y = 0;

        return diff.multiplyScalar((this.lineDensity) / (2 * Math.PI * permittivity * diff.lengthSq()));

    }


    /// @brief 電界ベクトルの描画開始座標の配列を返す
    electricFieldVectorBeginPositions = () => {
        
        // TODO
        return new Array<{ vector: THREE.Vector3, opacity: number }>();

    }

    /// @brief 任意の座標における電荷との距離を返す
    /// @param position 観測点の座標
    distanceSqFrom = (position: THREE.Vector3) => {

        // 計算を行いやすいように、線電荷がx=y=0に分布するよう観測点を変換する
        
        const diff = new THREE.Vector3();
        diff.subVectors(position, this.position);    // 点電荷と観測点との差分
        diff.y = 0;
        return diff.lengthSq();
    }

    /// @brief 電気力線の方向ベクトルの配列を返す
    electricForceLinesDirection = () => {

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
    getChargeType = () => {
        return ChargeToChargeType(this.lineDensity);
    }

}


// 球面上に電荷が分布している電荷
export class SphereSurfaceCharge implements Charge {

    private sphereSurfaceChargeGeometry;
    readonly position: THREE.Vector3;
    mesh: THREE.Mesh;
    radius: number;
    arealDensity: number;

    private static readonly plusMaterial    = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.5 });
    private static readonly minusMaterial   = new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.5 });
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
        this.sphereSurfaceChargeGeometry = new THREE.SphereGeometry(radius, 32, 32);
        this.mesh = new THREE.Mesh(this.sphereSurfaceChargeGeometry, this.getMaterialFromChargeType(arealDensity));
        this.mesh.position.copy(position);
        this.position = this.mesh.position;
        this.radius = radius;
        this.arealDensity = arealDensity;
    }

    attachScene: (scene: THREE.Scene) => Charge = (scene: THREE.Scene) => {
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

    /// @brief 指定座標における、この線電荷からの電界ベクトルを返す
    /// @param position 観測点の座標
    electricFieldVector = (position: THREE.Vector3) => {

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

    /// @brief 任意の座標における電荷との距離を返す(外周との距離)
    /// @param position 観測点の座標
    distanceSqFrom = (position: THREE.Vector3) => {
        return position.distanceToSquared(this.position) - this.radius ** 2;
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

// 球内に体積電荷が分布している電荷
export class SphereVolumeCharge implements Charge
{
    private sphereSurfaceChargeGeometry;
    readonly position: THREE.Vector3;
    mesh: THREE.Mesh;
    radius: number;
    volumeDensity: number;    

    private static readonly plusMaterial    = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.5 });
    private static readonly minusMaterial   = new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.5 });
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

    attachScene: (scene: THREE.Scene) => Charge = (scene: THREE.Scene) => {
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
    

    /// @brief 任意の座標における電荷との距離を返す(外周との距離)
    /// @param position 観測点の座標
    distanceSqFrom = (position: THREE.Vector3) => {
        return position.distanceToSquared(this.position) - this.radius ** 2;
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
    
}
