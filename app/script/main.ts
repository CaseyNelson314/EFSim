import * as THREE from "three";
import * as EFSim from "./Init";
import { Dragger } from "./Dragger";
import { ChargeType, PointCharge } from "./PointCharge";
import { Field3D } from "./Field3D";
import { throttle } from 'throttle-debounce';
import { Measure } from "./Measure";

const init = () => {

    const dom = document.getElementById("canvas")!;
    const scene = EFSim.CreateScene();
    const renderer = EFSim.CreateRenderer(dom);
    const camera = EFSim.CreateCamera(dom);
    const controls = EFSim.CreateControls(camera, dom);
    EFSim.ResisterResizeObserver(dom, renderer, camera);

    // 点電荷たち
    const point_charges: PointCharge[] = [];

    const point_charge_material_plus = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const point_charge_material_minus = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const point_charge_material_neutral = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const point_charge_geometry = new THREE.SphereGeometry(5, 32, 32);

    // 点電荷を作成
    {
        const n = 4;

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
    }

    // シミュレーション空間
    const field_3d = new Field3D(point_charges);

    const dragger = new Dragger(point_charges, camera, dom, controls, scene);

    {
        dragger.addEventListener('object-change', throttle(50, field_3d.update));

        const FormPositionUpdateEvent = (object: THREE.Mesh) => {
            (document.getElementById("point_charge_position_x") as HTMLInputElement).value = object.position.x.toFixed(2);
            (document.getElementById("point_charge_position_y") as HTMLInputElement).value = object.position.y.toFixed(2);
            (document.getElementById("point_charge_position_z") as HTMLInputElement).value = object.position.z.toFixed(2);
        };
        const FormChargeUpdateEvent = (object: PointCharge) => {
            (document.getElementById("point_charge_charge_value") as HTMLInputElement).value = object.charge.toFixed(2);
        }

        dragger.addEventListener('object-change', FormPositionUpdateEvent);
        dragger.addEventListener('object-selected', (object: PointCharge) => {
            FormPositionUpdateEvent(object.mesh);
            FormChargeUpdateEvent(object);
        });

        dragger.addEventListener('object-selected', (/*object: PointCharge*/) => {
            document.getElementById("settings_point_charge")!.style.display = "block";
        });
        dragger.addEventListener('object-unselected', () => {
            document.getElementById("settings_point_charge")!.style.display = "none";
        });

        document.getElementById("point_charge_position_x")!.addEventListener("input", (e) => {
            const selected = dragger.getSelected();
            if (selected)
                selected.position.x = (e.target as HTMLInputElement).valueAsNumber;

            field_3d.update();
        });
        document.getElementById("point_charge_position_y")!.addEventListener("input", (e) => {
            const selected = dragger.getSelected();
            if (selected)
                selected.position.y = (e.target as HTMLInputElement).valueAsNumber;
            field_3d.update();
        });
        document.getElementById("point_charge_position_z")!.addEventListener("input", (e) => {
            const selected = dragger.getSelected();
            if (selected)
                selected.position.z = (e.target as HTMLInputElement).valueAsNumber;
            field_3d.update();
        });
        document.getElementById("point_charge_charge_value")!.addEventListener("input", (e) => {
            const selected = dragger.getSelected();
            if (selected) {
                selected.charge = (e.target as HTMLInputElement).valueAsNumber;
                switch (selected.chargeType()) {
                    case ChargeType.Plus:
                        selected.mesh.material = point_charge_material_plus;
                        break;
                    case ChargeType.Minus:
                        selected.mesh.material = point_charge_material_minus;
                        break;
                    case ChargeType.Neutral:
                        selected.mesh.material = point_charge_material_neutral;
                        break;
                }
            }
            field_3d.update();
        });

        {
            // デモとして最初の点電荷を選択
            dragger.attach(point_charges[0]!);
            FormPositionUpdateEvent(point_charges[0]!.mesh);
            FormChargeUpdateEvent(point_charges[0]!);
        }
    }

    // 床の表示/非表示
    {
        const helper = new THREE.GridHelper(2000, 100);
        helper.material.opacity = 0;
        scene.add(helper);

        const ChangeHelper = (is_visible: boolean) => {
            helper.visible = is_visible;
        }

        const checkbox = document.getElementById("checkbox_show_grid") as HTMLInputElement;
        ChangeHelper(checkbox.checked); // 初期値
        checkbox.addEventListener("change", (e) => {
            ChangeHelper((e.target as HTMLInputElement).checked);
        });
    }


    // 自動回転切り替え
    {
        const checkbox = document.getElementById("checkbox_auto_rotate") as HTMLInputElement;
        controls.autoRotate = checkbox.checked; // 初期値
        checkbox.addEventListener("change", (e) => {
            controls.autoRotate = (e.target as HTMLInputElement).checked;
        });
    }

    // 2D/3D切り替え
    {
        const sw = document.getElementById("dimension_toggle_switch") as HTMLInputElement;
        const ChangeDimension = (is_3d: boolean) => {
            if (is_3d) {
                scene.add(field_3d);
            } else {
                scene.remove(field_3d);
            }
        };
        ChangeDimension(sw.checked); // 初期値
        sw.addEventListener("change", (e) => {
            ChangeDimension((e.target as HTMLInputElement).checked);
        });
    }

    // 電気力線 表示/非表示
    {
        const checkbox = document.getElementById("checkbox_electric_lines") as HTMLInputElement;
        field_3d.enableElectricLines(checkbox.checked); // 初期値
        checkbox.addEventListener("change", (e) => {
            field_3d.enableElectricLines((e.target as HTMLInputElement).checked);
        });
    }

    // 電界ベクトル 表示/非表示
    {
        const checkbox = document.getElementById("checkbox_electric_field_vectors") as HTMLInputElement;
        field_3d.enableElectricFieldVectors(checkbox.checked); // 初期値
        checkbox.addEventListener("change", (e) => {
            field_3d.enableElectricFieldVectors((e.target as HTMLInputElement).checked);
        });
    }

    // 追加削除ボタン
    {
        document.getElementById("button_add_point_charge")!.addEventListener("click", (e) => {
            const charge = (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 10 + 1);
            const material = charge > 0 ? point_charge_material_plus : charge < 0 ? point_charge_material_minus : point_charge_material_neutral;
            const mesh = new THREE.Mesh(point_charge_geometry, material);

            const x = Math.floor(Math.random() * 200 - 100);
            const y = Math.floor(Math.random() * 200 - 100);
            const z = Math.floor(Math.random() * 200 - 100);
            mesh.position.set(x, y, z);

            scene.add(mesh);

            const point_charge = new PointCharge(mesh, charge);
            point_charges.push(point_charge);
            dragger.attach(point_charge);

            field_3d.update();
        });

        document.getElementById("button_remove_point_charge")!.addEventListener("click", (e) => {
            if (dragger.getSelected()) {
                dragger.removeSelected();
                field_3d.update();
            }
        });

        document.getElementById("button_remove_all_point_charges")!.addEventListener("click", (e) => {
            for (let point_charge of point_charges) {
                scene.remove(point_charge.mesh);
            }
            point_charges.splice(0, point_charges.length);
            dragger.removeSelected();
            field_3d.update();
        });
    }
    
    const main = () => {

        requestAnimationFrame(main);

        renderer.render(scene, camera);
        controls.update();

    };

    main();

};

window.addEventListener("load", () => {
    Measure("init", init);
});

