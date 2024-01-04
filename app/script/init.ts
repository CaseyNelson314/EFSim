import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';

// シーンを作成
export const CreateScene = () => {

    const scene = new THREE.Scene();

    scene.background = new THREE.Color(0x2b2b2b);

    return scene;

};

// レンダラーを作成
export const CreateRenderer = (
    dom: HTMLElement
) => {

    const renderer = new THREE.WebGLRenderer({
        antialias: false,
    });

    renderer.setSize(dom.offsetWidth, dom.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    dom.appendChild(renderer.domElement);

    return renderer;

};

// カメラを作成
export const CreateCamera = (
    dom: HTMLElement
) => {

    const aspect = dom.offsetWidth / dom.offsetHeight;
    const camera = new THREE.PerspectiveCamera(50, aspect);

    camera.position.set(100, 100, 100);

    return camera;

};

// マウスコントロールを作成
export const CreateControls = (
    camera: THREE.PerspectiveCamera,
    dom: HTMLElement
) => {

    const controls = new OrbitControls(camera, dom);

    controls.autoRotate = true; // 自動回転
    controls.autoRotateSpeed = 1; // 自動回転の速度
    controls.enableDamping = true; // 視点の移動を滑らかにする
    controls.dampingFactor = 0.2; // 滑らか度合い

    return controls;

};

// ドラッグでオブジェクトを移動するためのコントロールを作成
export const CreateTransformControls = (
    camera: THREE.PerspectiveCamera,
    dom: HTMLElement,
    controls: OrbitControls,
    scene: THREE.Scene
) => {

    const transControls = new TransformControls(camera, dom);

    transControls.addEventListener("dragging-changed", (event) => {
        controls.enablePan = !event.value;
        controls.enableRotate = !event.value;
    });

    scene.add(transControls);

    return transControls;

};

// リサイズ時のイベントを登録
export const ResisterResizeObserver = (
    dom: HTMLElement,
    renderer: THREE.WebGLRenderer,
    camera: THREE.PerspectiveCamera
) => {

    const resizeObserver = new ResizeObserver((entries) => {
        if (entries.length === 0) {
            return;
        }
        const { width, height } = entries[0]!.contentRect;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });

    resizeObserver.observe(dom);

}