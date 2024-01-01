import * as THREE from 'three';
import * as EFSim from "./Init";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { PointCharge } from "./PointCharge.js";


// 点電荷をドラッグして移動させるクラス
export class Dragger {
    trans_controls: TransformControls;
    point_charges: PointCharge[];
    camera: THREE.PerspectiveCamera;
    dom: HTMLElement;
    controls: OrbitControls;
    scene: THREE.Scene;
    ray: THREE.Raycaster;
    pointer: THREE.Vector2;
    listeners: any[];
    selected: any;
    on_down_position: THREE.Vector2;
    on_up_position: THREE.Vector2;

    constructor(
        point_charges: PointCharge[],
        camera: THREE.PerspectiveCamera,
        dom: HTMLElement,
        controls: OrbitControls,
        scene: THREE.Scene
    ) {

        // ドラッグでオブジェクトを移動するためのコントロール
        this.trans_controls = EFSim.CreateTransformControls(camera, dom, controls, scene);

        this.point_charges = point_charges;
        this.camera = camera;
        this.dom = dom;
        this.controls = controls;
        this.scene = scene;

        this.ray = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();

        this.listeners = [];

        this.selected = null;

        this.on_down_position = new THREE.Vector2();
        this.on_up_position = new THREE.Vector2();

        this.setEvent();
    }

    setEvent = () => {
        const onClick = (event: MouseEvent) => {
            this.pointer.x = (event.clientX / this.dom.offsetWidth) * 2 - 1;
            this.pointer.y = -(event.clientY / this.dom.offsetHeight) * 2 + 1;

            // 現在のカメラの位置からクリックした位置に向かう光線を作成
            this.ray.setFromCamera(this.pointer, this.camera);

            // 光線との交差判定
            const meshes = this.point_charges.map((point_charge) => { return point_charge.mesh });
            const intersects = this.ray.intersectObjects(meshes, false);
            if (intersects.length > 0) {
                const object = intersects[0].object;

                if (object !== this.trans_controls.object) {
                    this.trans_controls.attach(object);
                }

                const selected = this.point_charges.find((point_charge) => { return point_charge.mesh === object });

                // オブジェクトが選択されたことを通知
                for (let listener of this.listeners) {
                    if (listener.type === 'object-selected') {
                        listener.listener(selected);
                    }
                }

                this.selected = selected;
            }
        };
        this.dom.addEventListener('click', onClick);

        // コントロール外をクリックすることで選択を解除する
        // (オブジェクトを移動させなかった場合に、選択を解除する)
        // https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_spline_editor.html
        this.dom.addEventListener('pointerdown', (event) => {
            this.on_down_position.x = event.clientX;
            this.on_down_position.y = event.clientY;
        });
        this.dom.addEventListener('pointerup', (event) => {
            this.on_up_position.x = event.clientX;
            this.on_up_position.y = event.clientY;
            if (this.on_down_position.distanceTo(this.on_up_position) === 0) {
                this.trans_controls.detach();
                this.selected = null;

                // オブジェクトが選択解除されたことを通知
                for (let listener of this.listeners) {
                    if (listener.type === 'object-unselected') {
                        listener.listener();
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

    attach = (object: PointCharge) => {
        this.trans_controls.attach(object.mesh);
        this.selected = object;
    }

    removeSelected = () => {
        if (this.selected !== null) {
            this.trans_controls.detach();
            this.scene.remove(this.selected.mesh);
            this.point_charges.splice(this.point_charges.indexOf(this.selected), 1);
            this.selected = null;
        }
    }

    // オブジェクトがドラッグされたときのイベント
    addEventListener = (type: string, listener: Function) => {
        this.listeners.push({ type: type, listener: listener });

        if (type === "object-change")
            this.trans_controls.addEventListener("objectChange", (e) => {
                listener(e.target.object);
            });
    }

}