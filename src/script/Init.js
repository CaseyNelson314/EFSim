import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// シーンを作成
export const CreateScene = () => {
  const scene = new THREE.Scene();

  scene.background = new THREE.Color(0x2b2b2b);

  return scene;
};

// レンダラーを作成
export const CreateRenderer = (dom) => {
  const renderer = new THREE.WebGLRenderer(dom, {
    antialias: true,
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  dom.appendChild(renderer.domElement);

  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  return renderer;
};

// カメラを作成
export const CreateCamera = () => {
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight
  );
  camera.position.set(150, 150, 150);

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  return camera;
};

// マウスコントロールを作成
export const CreateControls = (camera, renderer) => {
  const controls = new OrbitControls(camera, renderer.domElement);

  controls.autoRotate = true; // 自動回転
  controls.autoRotateSpeed = 1; // 自動回転の速度
  controls.enableDamping = true; // 視点の移動を滑らかにする
  controls.dampingFactor = 0.5; // 滑らか度合い

  return controls;
};
