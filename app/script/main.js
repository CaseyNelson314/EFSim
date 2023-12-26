import * as THREE from "three";
import * as EFSim from "./Init.js";
import PointCharge from "./PointCharge.js";
import { Field3D } from "./Field3D.js";

const init = () => {
  const dom = document.getElementById("canvas");
  const scene = EFSim.CreateScene();
  const renderer = EFSim.CreateRenderer(dom);
  const camera = EFSim.CreateCamera(dom);
  EFSim.ResisterResizeObserver(dom, renderer, camera);

  // マウスコントロール
  const controls = EFSim.CreateControls(camera, dom);

  // ドラッグでオブジェクトを移動するためのコントロール
  const transControls = EFSim.CreateTransformControls(
    camera,
    dom,
    controls,
    scene
  );

  // 点電荷たち
  const point_charges = [
    new PointCharge(0.00001, new THREE.Vector3(60, 0, 60)),
    new PointCharge(-0.00001, new THREE.Vector3(20, 200, 0)),
    new PointCharge(+0.00001, new THREE.Vector3(-50, 0, 20)),
    new PointCharge(0.00005, new THREE.Vector3(20, 0, 0)),
  ];

  const field_3d = new Field3D(dom, camera, transControls, point_charges);
  // transControls.attach(field_3d);

  // 自動回転切り替え
  {
    const checkbox = document.getElementById("checkbox_auto_rotate");
    controls.autoRotate = checkbox.checked; // 初期値
    checkbox.addEventListener("change", (e) => {
      controls.autoRotate = e.target.checked;
    });
  }

  // 2D/3D切り替え
  {
    const sw = document.getElementById("dimension_toggle_switch");
    const ChangeDimension = (is_3d) => {
      if (is_3d) {
        scene.add(field_3d);
        // transControls.attach(field_3d);
      } else {
        scene.remove(field_3d);
        // transControls.detach(field_3d);
      }
    };
    ChangeDimension(sw.checked); // 初期値
    sw.addEventListener("change", (e) => {
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

  const helper = new THREE.GridHelper(2000, 100);
  helper.material.opacity = 0.5;
  // helper.material.transparent = true;
  scene.add(helper);

  main(scene, renderer, camera, controls);
};
// 関数の実行時間を計測する関数
// 実行にかかった時間をミリ秒で出力
function measure(name, func) {
  const start = performance.now();
  func();
  const end = performance.now();

  console.log(`${name}: ${Math.floor(end - start)}ms`);
}
window.addEventListener("load", () => {
  measure("init", init);
});

// エントリーポイント
const main = (scene, renderer, camera, controls) => {
  requestAnimationFrame(() => {
    main(scene, renderer, camera, controls);
  });

  renderer.render(scene, camera);
  controls.update();
};
