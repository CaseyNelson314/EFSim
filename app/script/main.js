import * as THREE from "three";
import { TransformControls } from "three/addons/controls/TransformControls";
import PointCharge from "./PointCharge.js";
import { Field3D } from "./Field3D.js";

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

// オブジェクトコントローラー
const transControls = new TransformControls(camera, renderer.domElement);
// scene.add(transControls);

// 点電荷たち
const point_charges = [
  new PointCharge(0.00001, new THREE.Vector3(60, 0, 60)),
  new PointCharge(-0.0001, new THREE.Vector3(20, 60, 0)),
  new PointCharge(+0.00001, new THREE.Vector3(-50, 0, 20)),
  new PointCharge(0.00005, new THREE.Vector3(20, 0, 0)),
];

const field_3d = new Field3D(point_charges);
scene.add(field_3d);

// 2D/3D切り替え
document
  .getElementById("dimension_toggle_switch")
  .addEventListener("change", (e) => {
    if (e.target.checked) {
      // 2D
      document.getElementById("dimension_toggle_slider").textContent = "2D";
      scene.remove(field_3d);
    } else {
      // 3D
      document.getElementById("dimension_toggle_slider").textContent = "3D";
      scene.add(field_3d);
    }
  });

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
          const electric_field_vector = field_3d.posToElectricFieldVector(
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
