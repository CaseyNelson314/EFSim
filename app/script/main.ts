import * as THREE from "three";
import * as EFSim from "./init";
import { Dragger } from "./dragger";
import { ChargeType, PointCharge } from "./pointCharge";
import { Field3D } from "./field3D";
import { throttle } from 'throttle-debounce';
import { Measure } from "./measure";

const start = () => {

    const dom = document.getElementById("canvas")!;
    const scene = EFSim.CreateScene();
    const renderer = EFSim.CreateRenderer(dom);
    const camera = EFSim.CreateCamera(dom);
    const controls = EFSim.CreateControls(camera, dom);
    EFSim.ResisterResizeObserver(dom, renderer, camera);

    // 点電荷たち
    const pointCharges: PointCharge[] = [];

    const pointChargeMaterialPlus = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const pointChargeMaterialMinus = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const pointChargeMaterialNeutral = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const pointChargeGeometry = new THREE.SphereGeometry(5, 32, 32);

    // 点電荷を作成
    {
        const n = 4;

        for (let i = 0; i < n; i++) {
            const charge = (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 10 + 1);
            const material = charge > 0 ? pointChargeMaterialPlus : charge < 0 ? pointChargeMaterialMinus : pointChargeMaterialNeutral;
            const mesh = new THREE.Mesh(pointChargeGeometry, material);

            const x = Math.floor(Math.random() * 200 - 100);
            const y = Math.floor(Math.random() * 200 - 100);
            const z = Math.floor(Math.random() * 200 - 100);
            mesh.position.set(x, y, z);

            scene.add(mesh);

            pointCharges.push(new PointCharge(mesh, charge));
        }
    }

    // シミュレーション空間
    const field3D = new Field3D(pointCharges);

    const dragger = new Dragger(pointCharges, camera, dom, controls, scene);

    {
        dragger.addEventListener('object-change', throttle(50, field3D.update));

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

            field3D.update();
        });
        document.getElementById("point_charge_position_y")!.addEventListener("input", (e) => {
            const selected = dragger.getSelected();
            if (selected)
                selected.position.y = (e.target as HTMLInputElement).valueAsNumber;
            field3D.update();
        });
        document.getElementById("point_charge_position_z")!.addEventListener("input", (e) => {
            const selected = dragger.getSelected();
            if (selected)
                selected.position.z = (e.target as HTMLInputElement).valueAsNumber;
            field3D.update();
        });
        document.getElementById("point_charge_charge_value")!.addEventListener("input", (e) => {
            const selected = dragger.getSelected();
            if (selected) {
                selected.charge = (e.target as HTMLInputElement).valueAsNumber;
                switch (selected.chargeType()) {
                    case ChargeType.Plus:
                        selected.mesh.material = pointChargeMaterialPlus;
                        break;
                    case ChargeType.Minus:
                        selected.mesh.material = pointChargeMaterialMinus;
                        break;
                    case ChargeType.Neutral:
                        selected.mesh.material = pointChargeMaterialNeutral;
                        break;
                }
            }
            field3D.update();
        });

        {
            // デモとして最初の点電荷を選択
            dragger.attach(pointCharges[0]!);
            FormPositionUpdateEvent(pointCharges[0]!.mesh);
            FormChargeUpdateEvent(pointCharges[0]!);
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
                scene.add(field3D);
            } else {
                scene.remove(field3D);
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
        field3D.enableElectricLines(checkbox.checked); // 初期値
        checkbox.addEventListener("change", (e) => {
            field3D.enableElectricLines((e.target as HTMLInputElement).checked);
        });
    }

    // 電界ベクトル 表示/非表示
    {
        const checkbox = document.getElementById("checkbox_electric_field_vectors") as HTMLInputElement;
        field3D.enableElectricFieldVectors(checkbox.checked); // 初期値
        checkbox.addEventListener("change", (e) => {
            field3D.enableElectricFieldVectors((e.target as HTMLInputElement).checked);
        });
    }

    // 追加削除ボタン
    {
        document.getElementById("button_add_point_charge")!.addEventListener("click", (e) => {
            const charge = (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 10 + 1);
            const material = charge > 0 ? pointChargeMaterialPlus : charge < 0 ? pointChargeMaterialMinus : pointChargeMaterialNeutral;
            const mesh = new THREE.Mesh(pointChargeGeometry, material);

            const x = Math.floor(Math.random() * 200 - 100);
            const y = Math.floor(Math.random() * 200 - 100);
            const z = Math.floor(Math.random() * 200 - 100);
            mesh.position.set(x, y, z);

            scene.add(mesh);

            const pointCharge = new PointCharge(mesh, charge);
            pointCharges.push(pointCharge);
            dragger.attach(pointCharge);

            field3D.update();
        });

        document.getElementById("button_remove_point_charge")!.addEventListener("click", (e) => {
            if (dragger.getSelected()) {
                dragger.removeSelected();
                field3D.update();
            }
        });

        document.getElementById("button_remove_all_point_charges")!.addEventListener("click", (e) => {
            for (let pointCharge of pointCharges) {
                scene.remove(pointCharge.mesh);
            }
            pointCharges.splice(0, pointCharges.length);
            dragger.removeSelected();
            field3D.update();
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
    // Measure("start", start);
    start();
});

