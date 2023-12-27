import * as THREE from "three";
import * as EFSim from "./Init.js";
import { Dragger } from "./Dragger.js";
import PointCharge from "./PointCharge.js";
import { Field3D } from "./Field3D.js";
import { throttle } from 'throttle-debounce';
import { Measure } from "./Measure.js";

const init = () => {
    const dom = document.getElementById("canvas");
    const scene = EFSim.CreateScene();
    const renderer = EFSim.CreateRenderer(dom);
    const camera = EFSim.CreateCamera(dom);
    const controls = EFSim.CreateControls(camera, dom);
    EFSim.ResisterResizeObserver(dom, renderer, camera);

    // 点電荷たち
    const point_charges = [];

    const point_charge_material_plus = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const point_charge_material_minus = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const point_charge_material_neutral = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const point_charge_geometry = new THREE.SphereGeometry(5, 32, 32);

    const n = Math.floor(Math.random() * 5) + 1;
    for (let i = 0; i < n; i++) {
        const charge = (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 10 + 1);
        const material = charge > 0 ? point_charge_material_plus : charge < 0 ? point_charge_material_minus : point_charge_material_neutral;
        const mesh = new THREE.Mesh(point_charge_geometry, material);

        const x = Math.floor(Math.random() * 200 - 100);
        const y = Math.floor(Math.random() * 200 - 100);
        const z = Math.floor(Math.random() * 200 - 100);
        mesh.position.set(x, y, z);

        scene.add(mesh);

        point_charges.push(new PointCharge(mesh, charge));
    }

    // シミュレーション空間
    const field_3d = new Field3D(point_charges);

    {
        const dragger = new Dragger(point_charges, camera, dom, controls, scene);

        dragger.addEventListener('object-change', throttle(100, field_3d.update));

        const FormPositionUpdateEvent = (object) => {
            document.getElementById("point_charge_position_x").value = object.position.x.toFixed(2);
            document.getElementById("point_charge_position_y").value = object.position.y.toFixed(2);
            document.getElementById("point_charge_position_z").value = object.position.z.toFixed(2);
        };
        const FormChargeUpdateEvent = (object) => {
            document.getElementById("point_charge_charge_value").value = object.charge.toFixed(2);
        }

        dragger.addEventListener('object-change', FormPositionUpdateEvent);
        dragger.addEventListener('object-selected', (object) => {
            FormPositionUpdateEvent(object.mesh);
            FormChargeUpdateEvent(object);
        });

        dragger.addEventListener('object-selected', (object) => {
            document.getElementById("settings_point_charge").style.display = "block";
        });
        dragger.addEventListener('object-unselected', () => {
            document.getElementById("settings_point_charge").style.display = "none";
        });

        document.getElementById("point_charge_position_x").addEventListener("input", (e) => {
            if (dragger.getSelected())
                dragger.getSelected().mesh.position.x = Number(e.target.value);
            field_3d.update();
        });
        document.getElementById("point_charge_position_y").addEventListener("input", (e) => {
            if (dragger.getSelected())
                dragger.getSelected().mesh.position.y = Number(e.target.value);
            field_3d.update();
        });
        document.getElementById("point_charge_position_z").addEventListener("input", (e) => {
            if (dragger.getSelected())
                dragger.getSelected().mesh.position.z = Number(e.target.value);
            field_3d.update();
        });
        document.getElementById("point_charge_charge_value").addEventListener("input", (e) => {
            if (dragger.getSelected()) {
                dragger.getSelected().charge = Number(e.target.value);
                if (dragger.getSelected().charge > 0)
                    dragger.getSelected().mesh.material = point_charge_material_plus;
                else if (dragger.getSelected().charge < 0)
                    dragger.getSelected().mesh.material = point_charge_material_minus;
                else
                    dragger.getSelected().mesh.material = point_charge_material_neutral;
            }
            field_3d.update();
        });

        // デモとして最初の点電荷を選択
        {
            dragger.attach(point_charges[0]);
            FormPositionUpdateEvent(point_charges[0].mesh);
            FormChargeUpdateEvent(point_charges[0]);
        }
    }


    // 自動回転切り替え
    {
        const checkbox = document.getElementById("checkbox_auto_rotate");
        controls.autoRotate = checkbox.checked; // 初期値
        checkbox.addEventListener("change", (e) => {
            controls.autoRotate = e.target.checked;
        });
    }

    // 床の表示/非表示
    {
        const helper = new THREE.GridHelper(2000, 100);
        helper.material.opacity = 0;
        scene.add(helper);

        const ChangeHelper = (is_visible) => {
            helper.visible = is_visible;
        }

        const checkbox = document.getElementById("checkbox_show_grid");
        ChangeHelper(checkbox.checked); // 初期値
        checkbox.addEventListener("change", (e) => {
            ChangeHelper(e.target.checked);
        });
    }

    // 2D/3D切り替え
    {
        const sw = document.getElementById("dimension_toggle_switch");
        const ChangeDimension = (is_3d) => {
            if (is_3d) {
                scene.add(field_3d);
            } else {
                scene.remove(field_3d);
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

    main(scene, renderer, camera, controls);
};

window.addEventListener("load", () => {
    Measure("init", init);
});

// エントリーポイント
const main = (scene, renderer, camera, controls) => {
    requestAnimationFrame(() => {
        main(scene, renderer, camera, controls);
    });

    renderer.render(scene, camera);
    controls.update();

    // メモリ使用量を確認
    // console.log(performance.memory.usedJSHeapSize);
};
