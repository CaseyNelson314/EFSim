import * as THREE from "three";
import { TransformControls } from "three/addons/controls/TransformControls";
// import PointCharge from "./script/PointCharge.js";

import {
  CreateScene,
  CreateRenderer,
  CreateCamera,
  CreateControls,
} from "./script/Init.js";

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

class PointCharge {
  constructor(charge, mesh) {
    this.charge = charge;
    this.mesh = mesh;
    this.pos = mesh.position;
  }
}

// 座標から電場ベクトルを計算
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
scene.add(transControls);

const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial(
  { color: 0xdd5555, wireframe: false },
  new THREE.MeshStandardMaterial()
);

const meshes = [
  new THREE.Mesh(sphereGeometry, sphereMaterial),
  new THREE.Mesh(sphereGeometry, sphereMaterial),
  new THREE.Mesh(sphereGeometry, sphereMaterial),
];

meshes[0].position.set(10, -10, 10);
meshes[1].position.set(-10, 10, -10);
meshes[2].position.set(0, 10, 0);

const point_charges = [
  new PointCharge(0.00001, meshes[0]),
  new PointCharge(0.00001, meshes[1]),
  new PointCharge(0.00001, meshes[2]),
];

// 球
for (const charge of point_charges) {
  scene.add(charge.mesh);
  transControls.attach(charge.mesh);
}

/// @param origin 始点 (PointCharge)
const CreateElectricLineGeometry = (origin, vector, point_charges, length) => {

  const points = [];
  
  const dir = new THREE.Vector3(0, 0, 0);
  dir.subVectors(origin, vector.normalize());

  for (var i = 0; i < length; i++) {
    points.push()
    dir.add(vector);
  }

  return new THREE.BufferGeometry().setFromPoints( points );
}

const CreateElectricFieldVector = () => {
  var arrows = [];
  for (var x = -5; x <= 5; x++) {
    for (var y = -5; y <= 5; y++) {
      for (var z = -5; z <= 5; z++) {
        const origin = new THREE.Vector3(x * 4, y * 4, z * 4);
        const electric_field_vector = PosToElectricFieldVector(
          origin,
          point_charges
        ).normalize();
        arrows.push(
          new THREE.ArrowHelper(
            electric_field_vector.normalize(),
            origin,
            1,
            0xffffff,
            1,
            0.3
          )
        );
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
  if (document.getElementById("checkbox_electric_field_vectors").checked) {
    for (const arrow of arrows) {
      scene.remove(arrow);
    }
    arrows = CreateElectricFieldVector();
    for (const arrow of arrows) {
      scene.add(arrow);
    }
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
