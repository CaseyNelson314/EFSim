import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Editor } from './editor';
import { Dragger } from './dragger';
import { Field3D } from './field3d';
import { throttle } from 'throttle-debounce';
import { Charge } from './charge';
import { PointCharge } from './pointCharge';
import { InfinityLineCharge } from './infinityLineCharge';
import { InfinitySurfaceCharge } from './infinitySurfaceCharge';
import { SphereSurfaceCharge } from './sphereSurfaceCharge';
import { SphereVolumeCharge } from './sphereVolumeCharge';
import { InfinityCylinderVolumeCharge } from './infinityCylinderVolumeCharge';
import { InfinityCylinderSurfaceCharge } from './infinityCylinderSurfaceCharge';
import { Store } from './store';

const start = () => {


    // 描画領域
    const dom = document.getElementById('canvas')!;


    // シーン作成
    const scene = new THREE.Scene();


    // レンダラー作成
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(dom.offsetWidth, dom.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    dom.appendChild(renderer.domElement);


    // カメラ作成
    const aspect = dom.offsetWidth / dom.offsetHeight;
    const camera = new THREE.PerspectiveCamera(60, aspect);
    camera.position.set(150, 150, 150);


    // マウスコントロール作成
    const controls = new OrbitControls(camera, dom);
    controls.autoRotate = true;    // 自動回転
    controls.autoRotateSpeed = 1;  // 自動回転の速度
    controls.enableDamping = true; // 視点の移動を滑らかにする
    controls.dampingFactor = 0.2;  // 滑らか度合い


    // リサイズ処理
    {
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


    // 文字列(JSON)から電荷を構築できるように登録
    {
        Store.RegisterChargeGenerator("PointCharge", PointCharge.fromJSON);
        Store.RegisterChargeGenerator("InfinityLineCharge", InfinityLineCharge.fromJSON);
        Store.RegisterChargeGenerator("InfinitySurfaceCharge", InfinitySurfaceCharge.fromJSON);
        Store.RegisterChargeGenerator("SphereSurfaceCharge", SphereSurfaceCharge.fromJSON);
        Store.RegisterChargeGenerator("SphereVolumeCharge", SphereVolumeCharge.fromJSON);
        Store.RegisterChargeGenerator("InfinityCylinderVolumeCharge", InfinityCylinderVolumeCharge.fromJSON);
        Store.RegisterChargeGenerator("InfinityCylinderSurfaceCharge", InfinityCylinderSurfaceCharge.fromJSON);
    }

    
    // 点電荷たち
    const charges: Charge[] = [];

    // 電荷を作成
    {
        charges.push(new PointCharge(new THREE.Vector3(0, 0, -100), 10));
        charges.push(new InfinitySurfaceCharge(new THREE.Vector3(0, 0, -25), new THREE.Euler(), -0.001));
        charges.push(new InfinitySurfaceCharge(new THREE.Vector3(0, 0, 25), new THREE.Euler(), 0.001));
        charges.push(new PointCharge(new THREE.Vector3(0, 0, 100), -10));
        scene.add(...charges);
    }

    // シミュレーション空間
    const field3d = new Field3D(charges);
    scene.add(field3d);

    // 電荷をドラッグして移動させるやつ
    const dragger = new Dragger(charges, camera, dom, controls, scene);

    // パラメーター設定用エディタ
    let parameterEditor = new Editor();


    const onSelected = (charge: Charge) => {
        parameterEditor = charge.createEditor();

        parameterEditor.addEventListener('input', throttle(100, () => {
            field3d.update();
        }));
        dragger.setMode('translate');
        parameterEditor.addEventListener('position-editor', () => {
            dragger.setMode('translate');
        });
        parameterEditor.addEventListener('rotation-editor', () => {
            dragger.setMode('rotate');
        });


        parameterEditor.enable();

        field3d.update();
    }

    // 電荷が移動中
    dragger.addEventListener('object-change', throttle(100, () => {
        field3d.update();
    }));
    dragger.addEventListener('object-change', () => {
        parameterEditor.update();
    });

    // 電荷が選択された
    dragger.addEventListener('object-selected', (charge: Charge) => {
        onSelected(charge);
    });

    // 電荷が選択解除された
    dragger.addEventListener('object-unselected', () => {
        parameterEditor.disable();
    });


    const addCharge = (newCharge: Charge) => {
        scene.add(newCharge);
        charges.push(newCharge);
        dragger.attach(newCharge);
        parameterEditor.disable();
        onSelected(newCharge);
        field3d.update();
    }

    const deleteCharge = () => {
        if (dragger.getSelected()) {
            dragger.removeSelected();
            field3d.update();

            if (charges.length > 0) {
                // 電荷が残っている場合別の電化に再アタッチする
                dragger.attach(charges[0]!);
                onSelected(charges[0]!);
            }
            else {
                // 何も無くなった
                parameterEditor.disable();
            }
        }
    };

    // 点電荷追加
    document.getElementById('add_point_charge_button')!.addEventListener('click', () => {
        addCharge(new PointCharge(new THREE.Vector3(), 10));
    });

    // 線電荷追加
    document.getElementById('add_infinity_line_charge_button')!.addEventListener('click', () => {
        addCharge(new InfinityLineCharge(new THREE.Vector3(), new THREE.Euler(), 0.1));
    });

    // 無限円柱体表面電荷追加
    document.getElementById('add_infinity_cylinder_surface_charge_button')!.addEventListener('click', () => {
        addCharge(new InfinityCylinderSurfaceCharge(new THREE.Vector3(), new THREE.Euler(), 5, 0.001));
    });

    // 無限円柱体積電荷追加
    document.getElementById('add_infinity_cylinder_volume_charge_button')!.addEventListener('click', () => {
        addCharge(new InfinityCylinderVolumeCharge(new THREE.Vector3(), new THREE.Euler(), 5, 0.001));
    });

    // 面電荷追加
    document.getElementById('add_infinity_surface_charge_button')!.addEventListener('click', () => {
        addCharge(new InfinitySurfaceCharge(new THREE.Vector3(), new THREE.Euler(Math.PI / 2, 0, 0), 0.001));
    });

    // 球面電荷追加
    document.getElementById('add_sphere_surface_charge_button')!.addEventListener('click', () => {
        addCharge(new SphereSurfaceCharge(new THREE.Vector3(), 5, 0.001));
    });

    // 球体電荷追加
    document.getElementById('add_sphere_volume_charge_button')!.addEventListener('click', () => {
        addCharge(new SphereVolumeCharge(new THREE.Vector3(), 5, 0.001));
    });

    // 電荷削除
    document.getElementById('delete_charge_button')!.addEventListener('click', deleteCharge);



    // 床の表示/非表示
    {
        const helper = new THREE.GridHelper(600, 100, 0x888888, 0x888888);
        helper.material.opacity = 0;
        scene.add(helper);

        const ChangeHelper = (is_visible: boolean) => {
            helper.visible = is_visible;
        }

        const checkbox = document.getElementById('checkbox_show_grid') as HTMLInputElement;
        ChangeHelper(checkbox.checked); // 初期値
        checkbox.addEventListener('change', (e) => {
            ChangeHelper((e.target as HTMLInputElement).checked);
        });
    }


    // 自動回転切り替え
    {
        const checkbox = document.getElementById('checkbox_auto_rotate') as HTMLInputElement;
        controls.autoRotate = checkbox.checked; // 初期値
        checkbox.addEventListener('change', (e) => {
            controls.autoRotate = (e.target as HTMLInputElement).checked;
        });
    }


    // 電気力線 表示/非表示
    {
        const checkbox = document.getElementById('checkbox_electric_lines') as HTMLInputElement;
        field3d.enableElectricLines(checkbox.checked); // 初期値
        checkbox.addEventListener('change', (e) => {
            field3d.enableElectricLines((e.target as HTMLInputElement).checked);
        });
    }


    const main = () => {

        requestAnimationFrame(main);

        renderer.render(scene, camera);
        controls.update();

        // console.log(renderer.info.memory)

    };

    main();

};

window.addEventListener('DOMContentLoaded', start);

