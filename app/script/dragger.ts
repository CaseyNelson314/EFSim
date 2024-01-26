import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { Charge } from './charge.js';


// 点電荷をドラッグして移動させるクラス
export class Dragger {
    private transControls: TransformControls;
    private pointCharges: Charge[];
    private camera: THREE.PerspectiveCamera;
    private dom: HTMLElement;
    private scene: THREE.Scene;
    private ray: THREE.Raycaster;
    private pointer: THREE.Vector2;
    private listeners: { type: string, listener: Function }[];
    private selected: Charge | null;
    private onDownPosition: THREE.Vector2;
    private onUpPosition: THREE.Vector2;

    constructor(
        pointCharges: Charge[],
        camera: THREE.PerspectiveCamera,
        dom: HTMLElement,
        controls: OrbitControls,
        scene: THREE.Scene
    ) {

        this.transControls = new TransformControls(camera, dom);

        this.transControls.addEventListener('dragging-changed', (event) => {
            controls.enablePan = !event.value;
            controls.enableRotate = !event.value;
        });

        scene.add(this.transControls);

        // this.transControls.mode = 'rotate';
        this.pointCharges = pointCharges;
        this.camera = camera;
        this.dom = dom;
        this.scene = scene;

        this.ray = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();

        this.listeners = [];

        this.selected = null;

        this.onDownPosition = new THREE.Vector2();
        this.onUpPosition = new THREE.Vector2();


        const onClick = (event: MouseEvent) => {
            this.pointer.x = (event.offsetX / this.dom.offsetWidth) * 2 - 1;
            this.pointer.y = -(event.offsetY / this.dom.offsetHeight) * 2 + 1;

            // 現在のカメラの位置からクリックした位置に向かう光線を作成
            this.ray.setFromCamera(this.pointer, this.camera);

            // 光線との交差判定 (childrenを再帰的に探索する)
            const meshes = this.pointCharges;
            const intersects = this.ray.intersectObjects(meshes, false);

            if (intersects.length > 0) {

                const object = intersects[0]!.object as Charge;

                if (object !== this.transControls.object) {

                    // 既に選択されているオブジェクトがあれば選択を解除
                    if (this.selected !== null) {
                        this.transControls.detach();
                        for (let listener of this.listeners) {
                            if (listener.type === 'object-unselected') {
                                listener.listener();
                            }
                        }
                    }

                    // オブジェクトを選択
                    this.selected = object;

                    this.transControls.attach(this.selected);

                    // オブジェクトが選択されたことを通知
                    for (let listener of this.listeners) {
                        if (listener.type === 'object-selected') {
                            listener.listener(this.selected);
                        }
                    }
                }
            }

        };
        this.dom.addEventListener('click', onClick);

        // コントロール外をクリックすることで選択を解除する
        // (オブジェクトを移動させなかった場合に、選択を解除する)
        // https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_spline_editor.html
        this.dom.addEventListener('pointerdown', (event) => {
            this.onDownPosition.x = event.offsetX;
            this.onDownPosition.y = event.offsetY;
        });
        this.dom.addEventListener('pointerup', (event) => {
            this.onUpPosition.x = event.offsetX;
            this.onUpPosition.y = event.offsetY;
            if (this.onDownPosition.distanceTo(this.onUpPosition) < Number.EPSILON) {

                if (this.selected !== null) {
                    this.transControls.detach();
                    this.selected = null;

                    // オブジェクトが選択解除されたことを通知
                    for (let listener of this.listeners) {
                        if (listener.type === 'object-unselected') {
                            listener.listener();
                        }
                    }
                }

            }
        });

    }

    // 選択されているオブジェクトを取得
    // (選択されていない場合はnullを返す)
    getSelected = () => {
        return this.selected;
    }

    attach = (object: Charge) => {
        this.transControls.attach(object);
        this.selected = object;
    }

    removeSelected = () => {
        if (this.selected !== null) {
            this.transControls.detach();
            this.scene.remove(this.selected);
            this.selected.dispose();
            this.pointCharges.splice(this.pointCharges.indexOf(this.selected), 1);
            this.selected = null;

            // オブジェクトが選択解除されたことを通知
            for (let listener of this.listeners) {
                if (listener.type === 'object-unselected') {
                    listener.listener();
                }
            }
        }
    }

    setMode = (mode: 'translate' | 'rotate' | 'scale') => {
        this.transControls.setMode(mode);
    }

    // オブジェクトがドラッグされたときのイベント
    addEventListener = (type: string, listener: Function) => {
        this.listeners.push({ type: type, listener: listener });

        if (type === 'object-change')
            this.transControls.addEventListener('objectChange', () => {
                listener(this.selected);
            });
    }

}