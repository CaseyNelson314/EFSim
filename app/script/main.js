import * as THREE from "three";
import * as EFSim from "./Init.js";
import PointCharge from "./PointCharge.js";
import { Field3D } from "./Field3D.js";

const scene = EFSim.CreateScene();
const renderer = EFSim.CreateRenderer(document.getElementById("canvas"));
const camera = EFSim.CreateCamera();

// マウスコントロール
const controls = EFSim.CreateControls(camera, renderer.domElement);

// ドラッグでオブジェクトを移動するためのコントロール
const transControls = EFSim.CreateTransformControls(
  camera,
  renderer.domElement,
  controls,
  scene
);

// 点電荷たち
const point_charges = [
  new PointCharge(0.00001, new THREE.Vector3(60, 0, 60)),
  new PointCharge(-0.0001, new THREE.Vector3(20, 60, 0)),
  new PointCharge(+0.00001, new THREE.Vector3(-50, 0, 20)),
  new PointCharge(0.00005, new THREE.Vector3(20, 0, 0)),
];

const field_3d = new Field3D(point_charges);

// 自動回転切り替え
{
  const dom_switch = document.getElementById("checkbox_auto_rotate");
  controls.autoRotate = dom_switch.checked; // 初期値
  dom_switch.addEventListener("change", (e) => {
    controls.autoRotate = e.target.checked;
  });
}

// 2D/3D切り替え
{
  const dom_switch = document.getElementById("dimension_toggle_switch");
  const dom_slider = document.getElementById("dimension_toggle_slider");
  const ChangeDimension = (is_3d) => {
    if (is_3d) {
      dom_slider.textContent = "3D";
      scene.add(field_3d);
      transControls.attach(field_3d);
    } else {
      dom_slider.textContent = "2D";
      scene.remove(field_3d);
      transControls.detach(field_3d);
    }
  };
  ChangeDimension(dom_switch.checked); // 初期値
  dom_switch.addEventListener("change", (e) => {
    ChangeDimension(e.target.checked);
  });
}

// 電気力線 表示/非表示
{
  const checkbox = document.getElementById("checkbox_electric_lines");
  field_3d.enableElectricLines(checkbox.checked); // 初期値
  checkbox.addEventListener("change", (e) => {
    field_3d.enableElectricLines(e.target.checked);
  });
}

// 電界ベクトル 表示/非表示
{
  const checkbox = document.getElementById("checkbox_electric_field_vectors");
  field_3d.enableElectricFieldVectors(checkbox.checked); // 初期値
  checkbox.addEventListener("change", (e) => {
    field_3d.enableElectricFieldVectors(e.target.checked);
  });
}

// エントリーポイント
const main = () => {
  requestAnimationFrame(main);
  renderer.render(scene, camera);
  controls.update();
};

window.addEventListener("load", main);
