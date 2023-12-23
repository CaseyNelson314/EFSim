import * as THREE from "three";
import PointCharge from "./PointCharge.js";

export class Field3D extends THREE.Group {
  constructor(point_charges) {
    super();
    this.field = this.createField(point_charges);
    this.point_charges = point_charges;
  }

  // 指定座標における電場ベクトルを計算
  posToElectricFieldVector = (pos, point_charges) => {
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

  /// @param origin 始点 (PointCharge)
  createElectricLineGeometry = (
    origin_charge,
    vector,
    point_charges,
    length
  ) => {
    const points = [origin_charge.pos.clone()];
    const _origin = origin_charge.pos.clone();
    _origin.add(vector);
    for (var i = 0; i < length; i++) {
      const d_vector = this.posToElectricFieldVector(_origin, point_charges);
      d_vector.normalize();
      if (origin_charge.charge < 0) d_vector.multiplyScalar(-1);
      // 点電荷との衝突判定
      for (const point_charge of point_charges) {
        const diff = new THREE.Vector3(0, 0, 0);
        diff.subVectors(_origin, point_charge.pos);
        if (diff.length() < 1) {
          console.log("hit");
          return new THREE.BufferGeometry().setFromPoints(points);
        }
      }
      _origin.add(d_vector);
      points.push(_origin.clone());
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  };

  createField(point_charges) {
    const line_material = new THREE.LineBasicMaterial({ color: 0xaaaaff });
    for (const point_charge of point_charges) {
      for (var n_theta = 0; n_theta < 5; n_theta++) {
        for (var n_phi = 0; n_phi < 5; n_phi++) {
          const theta = ((Math.PI * 2) / 5) * n_theta;
          const phi = ((Math.PI * 2) / 5) * n_phi;
          const x = 5 * Math.sin(theta) * Math.cos(phi);
          const y = 5 * Math.sin(theta) * Math.sin(phi);
          const z = 5 * Math.cos(theta);

          const line = new THREE.Line(
            this.createElectricLineGeometry(
              point_charge,
              new THREE.Vector3(x, y, z),
              point_charges,
              1000
            ),
            line_material
          );
          this.add(line);
        }
      }
    }
    return;
  }
  update() {}
}
