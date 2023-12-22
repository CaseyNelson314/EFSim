import * as THREE from "three";

// 点電荷
export default class PointCharge {
  constructor(charge, pos) {
    this.charge = charge;
    this.pos = pos;
  }
}

// 座標から電場ベクトルを計算
export const CreateEFVector = (pos, point_charges) => {
  var electric_field_vector = new THREE.Vector3(0, 0, 0); // 合成ベクトル
  for (const point_charge of point_charges) {
    const diff = new THREE.Vector3(0, 0, 0);
    diff.subVectors(pos, point_charge.pos); // 点電荷と観測点との差分ベクトル

    const r_sq = diff.lengthSq(); // 点電荷と観測点との距離^2 (平方根処理をなくすため)
    const k = 8.987552 * 10 ** 9; // クーロン定数

    const factor = r_sq ? (k * point_charge.charge) / r_sq ** 2 : 0; // ベクトルにかける係数

    diff.multiplyScalar(factor);

    electric_field_vector.add(diff);
  }
  return electric_field_vector;
};
