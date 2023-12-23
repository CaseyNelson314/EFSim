import * as THREE from "three";
import { TransformControls } from "three/addons/controls/TransformControls";
import PointCharge from "./PointCharge.js";

import {
  CreateScene,
  CreateRenderer,
  CreateCamera,
  CreateControls,
} from "./Init.js";

const scene = CreateScene();
const renderer = CreateRenderer(document.getElementById("canvas"));
const camera = CreateCamera();
const controls = CreateControls(camera, renderer);

// 自動回転の有無チェックイベント
document
  .getElementById("checkbox_auto_rotate")
  .addEventListener("change", (e) => {
    controls.autoRotate = e.target.checked;
  });

// 指定座標における電場ベクトルを計算
const PosToElectricFieldVector = (pos, point_charges) => {
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

// オブジェクトコントローラー
const transControls = new TransformControls(camera, renderer.domElement);
// scene.add(transControls);

// 点電荷たち
const point_charges = [
  new PointCharge(-0.00001, new THREE.Vector3(60, 0, 60)),
  new PointCharge(0.0001, new THREE.Vector3(20, 60, 0)),
  new PointCharge(+0.00001, new THREE.Vector3(-50, 0, 20)),
  new PointCharge(0.00005, new THREE.Vector3(20, 0, 0)),
];

// 球
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterialRed = new THREE.MeshBasicMaterial(
  { color: 0xdd5555, wireframe: false },
  new THREE.MeshStandardMaterial()
);
const sphereMaterialBlue = new THREE.MeshBasicMaterial(
  { color: 0x5555dd, wireframe: false },
  new THREE.MeshStandardMaterial()
);
for (const charge of point_charges) {
  const mesh = new THREE.Mesh(
    sphereGeometry,
    charge.charge > 0 ? sphereMaterialRed : sphereMaterialBlue
  );
  mesh.position.copy(charge.pos);
  scene.add(mesh);
  // transControls.attach(mesh);
}

/// @param origin 始点 (PointCharge)
const CreateElectricLineGeometry = (origin_charge, vector, point_charges, length) => {
  const points = [origin_charge.pos.clone()];
  const _origin = origin_charge.pos.clone();
  _origin.add(vector);
  for (var i = 0; i < length; i++) {
    const d_vector = PosToElectricFieldVector(_origin, point_charges);
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

const line_material = new THREE.LineBasicMaterial({ color: 0x0000ff });
for (const point_charge of point_charges) {

  for (var n_theta = 0; n_theta < 10; n_theta++) {
    for (var n_phi = 0; n_phi < 10; n_phi++) {
      const theta = (Math.PI * 2) / 10 * n_theta;
      const phi = (Math.PI * 2) / 10 * n_phi;
      const x = 5 * Math.sin(theta) * Math.cos(phi);
      const y = 5 * Math.sin(theta) * Math.sin(phi);
      const z = 5 * Math.cos(theta);

      const line = new THREE.Line(
        CreateElectricLineGeometry(
          point_charge,
          new THREE.Vector3(x, y, z),
          point_charges,
          500
        ),
        line_material
      );
      scene.add(line);
    }
  }
  // for (var x = -5; x <= 5; x++) {
  //   for (var y = -5; y <= 5; y++) {
  //     for (var z = -5; z <= 5; z++) {
  //       if (x ** 2 + y ** 2 + z ** 2 > 5 ** 2) continue;
  //       if (x === 0 && y === 0 && z === 0) continue;
  //       const line = new THREE.Line(
  //         CreateElectricLineGeometry(
  //           point_charge.pos,
  //           new THREE.Vector3(x * 5, y * 5, z * 5),
  //           point_charges,
  //           1000
  //         ),
  //         line_material
  //       );
  //       scene.add(line);
  //     }
  //   }
  // }
}

const CreateElectricFieldVector = () => {
  var arrows = [];
  for (var point_charge of point_charges) {
    for (var x = -5; x <= 5; x++) {
      for (var y = -5; y <= 5; y++) {
        for (var z = -5; z <= 5; z++) {
          if (x ** 2 + y ** 2 + z ** 2 > 5 ** 2) continue;
          if (x === 0 && y === 0 && z === 0) continue;
          const origin = new THREE.Vector3(x * 5, y * 5, z * 5);
          origin.add(point_charge.pos);
          const electric_field_vector = PosToElectricFieldVector(
            origin,
            point_charges
          );

          const len = electric_field_vector.length();
          arrows.push(
            new THREE.ArrowHelper(
              electric_field_vector.normalize(),
              origin,
              1,
              0xffffff,
              2,
              0.5
            )
          );
        }
      }
    }
  }
  return arrows;
};

var arrows = CreateElectricFieldVector();

document
  .getElementById("checkbox_electric_field_vectors")
  .addEventListener("change", (e) => {
    if (e.target.checked) {
      for (const arrow of arrows) {
        scene.add(arrow);
      }
    } else {
      for (const arrow of arrows) {
        scene.remove(arrow);
      }
    }
  });

transControls.addEventListener("mouseDown", () => {
  // オブジェクト操作時、OrbitControls無効化
  controls.enablePan = false;
  controls.enableRotate = false;
});

transControls.addEventListener("mouseUp", () => {
  // オブジェクト操作解除時、OrbitControls有効化
  controls.enablePan = true;
  controls.enableRotate = true;
});

transControls.addEventListener("change", () => {
  // オブジェクト操作解除時、OrbitControls有効化
  if (document.getElementById("checkbox_electric_field_vectors").checked) {
    // for (const arrow of arrows) {
    //   scene.remove(arrow);
    // }
    // arrows = CreateElectricFieldVector();
    // for (const arrow of arrows) {
    //   scene.add(arrow);
    // }
  }
});

// 座表軸
// scene.add(new THREE.AxesHelper());

// 床
const meshFloor = new THREE.Mesh(
  new THREE.BoxGeometry(100, 0.0001, 100),
  new THREE.MeshBasicMaterial(
    { color: 0x555555 },
    new THREE.MeshStandardMaterial()
  )
);
// scene.add(meshFloor);

// エントリーポイント
const main = () => {
  requestAnimationFrame(main);
  renderer.render(scene, camera);
  controls.update();
};

window.addEventListener("load", main);
