import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// import {TrackballControls} from 'three/examples/jsm/controls/Con.js';

// シーン
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2b2b2b);

// レンダラー
const renderer = new THREE.WebGLRenderer({
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// カメラ
const camera = new THREE.PerspectiveCamera(60, window.devicePixelRatio);
camera.position.set(30, 30, 30);

// マウスコントロール
const controls = new OrbitControls(camera, renderer.domElement);

controls.autoRotate = true; // 自動回転
controls.autoRotateSpeed = 1; // 自動回転の速度

controls.enableDamping = true; // 視点の移動を滑らかにする
controls.dampingFactor = 0.2; // 滑らか度合い

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial(
    { color: 0xaaaaaa },
    new THREE.MeshStandardMaterial()
  )
);
cube.position.set(0, 5, 0);
scene.add(cube);

// 座表軸
const axes = new THREE.AxesHelper();
scene.add(axes);

// 床
const meshFloor = new THREE.Mesh(
  new THREE.BoxGeometry(30, 0.0001, 30),
  new THREE.MeshBasicMaterial(
    { color: 0x555555 },
    new THREE.MeshStandardMaterial()
  )
);
meshFloor.receiveShadow = true; // 影を受け付ける
scene.add(meshFloor);

// エントリーポイント
const main = () => {
  requestAnimationFrame(main);

  cube.rotation.z += 0.1;

  renderer.render(scene, camera);
  controls.update();
};

window.addEventListener("load", main);
