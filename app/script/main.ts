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
    const pointChargeGeometry = new THREE.SphereGeometry(2, 32, 32);

    // 点電荷を作成
    {
        const createCharge = (charge: number, x: number, y: number, z: number) => {
            const material = charge > 0 ? pointChargeMaterialPlus : charge < 0 ? pointChargeMaterialMinus : pointChargeMaterialNeutral;
            const mesh = new THREE.Mesh(pointChargeGeometry, material);
            mesh.position.set(x, y, z);
            scene.add(mesh);
            pointCharges.push(new PointCharge(mesh, charge));
        }

        createCharge(-1, 70, 0, 0);
        createCharge(-1, -70, 0, 0);
        createCharge(1, 0, 0, -70);
        createCharge(1, 0, 0, 70);
    }

    // シミュレーション空間
    const field3D = new Field3D(pointCharges);

    const dragger = new Dragger(pointCharges, camera, dom, controls, scene);

    {
        // 座標
        document.getElementById("point_charge_position_x")!.addEventListener("input", (e) => {
            const selected = dragger.getSelected();
            if (selected)
                selected.position.x = Number((e.target as HTMLInputElement).value)
            field3D.update();
        });
        document.getElementById("point_charge_position_y")!.addEventListener("input", (e) => {
            const selected = dragger.getSelected();
            if (selected)
                selected.position.y = Number((e.target as HTMLInputElement).value)
            field3D.update();
        });
        document.getElementById("point_charge_position_z")!.addEventListener("input", (e) => {
            const selected = dragger.getSelected();
            if (selected)
                selected.position.z = Number((e.target as HTMLInputElement).value)
            field3D.update();
        });


        // 電荷量
        const updateCharge = (pointCharge: PointCharge, newCharge: number) => {
            pointCharge.charge = newCharge;
            switch (pointCharge.chargeType()) {
                case ChargeType.Plus:
                    pointCharge.mesh.material = pointChargeMaterialPlus;
                    break;
                case ChargeType.Minus:
                    pointCharge.mesh.material = pointChargeMaterialMinus;
                    break;
                case ChargeType.Neutral:
                    pointCharge.mesh.material = pointChargeMaterialNeutral;
                    break;
            }
        };
        const valueWithUnitToValue = (value: number, unit: string) => {
            switch (unit) {
                case 'c': return value;
                case 'uc': return value * 1e-6;
                case 'nc': return value * 1e-9;
                case 'pc': return value * 1e-12;
                default: throw new Error("invalid unit");
            }
        };
        const valueToValueWithUnit = (value: number) => {
            const appliedAbsValue = Math.abs(value);
            if (appliedAbsValue >= 1e-3) {
                return { value: value, unit: 'c' };
            } else if (appliedAbsValue >= 1e-6) {
                return { value: value * 1e6, unit: 'uc' };
            } else if (appliedAbsValue >= 1e-9) {
                return { value: value * 1e9, unit: 'nc' };
            } else {
                return { value: value * 1e12, unit: 'pc' };
            }
        };

        const domValue = document.getElementById("point_charge_charge_value")! as HTMLInputElement;
        const domUnit = document.getElementById("point_charge_unit")! as HTMLSelectElement;

        const onChargeValueChange = () => {
            const selected = dragger.getSelected();
            if (selected) {
                updateCharge(selected, valueWithUnitToValue(Number(domValue.value), domUnit.value));
            }
            field3D.update();
        };

        domValue.addEventListener("input", onChargeValueChange);
        domUnit.addEventListener("change", onChargeValueChange);


        dragger.addEventListener('object-change', throttle(50, field3D.update));

        const FormPositionUpdateEvent = (object: THREE.Mesh) => {
            (document.getElementById("point_charge_position_x") as HTMLInputElement).value = object.position.x.toFixed(2);
            (document.getElementById("point_charge_position_y") as HTMLInputElement).value = object.position.y.toFixed(2);
            (document.getElementById("point_charge_position_z") as HTMLInputElement).value = object.position.z.toFixed(2);
        };
        const FormChargeUpdateEvent = (object: PointCharge) => {
            const { value, unit } = valueToValueWithUnit(object.charge);
            domValue.value = value.toFixed(2);
            domUnit.value = unit;
        }

        dragger.addEventListener('object-change', FormPositionUpdateEvent);
        dragger.addEventListener('object-selected', (object: PointCharge) => {
            FormPositionUpdateEvent(object.mesh);
            FormChargeUpdateEvent(object);
        });

        dragger.addEventListener('object-selected', () => {
            document.getElementById("settings_point_charge")!.style.display = "block";
        });
        dragger.addEventListener('object-unselected', () => {
            document.getElementById("settings_point_charge")!.style.display = "none";
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
        const helper = new THREE.GridHelper(600, 100, 0x888888, 0x888888);
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
        document.getElementById("button_add_point_charge")!.addEventListener("click", () => {
            const charge = (Math.random() > 0.5 ? 1 : -1);
            const material = charge > 0 ? pointChargeMaterialPlus : charge < 0 ? pointChargeMaterialMinus : pointChargeMaterialNeutral;
            const mesh = new THREE.Mesh(pointChargeGeometry, material);

            const x = Math.floor(Math.random() * 100 - 50);
            const y = Math.floor(Math.random() * 100 - 50);
            const z = Math.floor(Math.random() * 100 - 50);
            mesh.position.set(x, y, z);

            scene.add(mesh);

            const pointCharge = new PointCharge(mesh, charge);
            pointCharges.push(pointCharge);
            dragger.attach(pointCharge);

            field3D.update();
        });

        document.getElementById("button_remove_point_charge")!.addEventListener("click", () => {
            if (dragger.getSelected()) {
                dragger.removeSelected();
                field3D.update();
            }
        });

        document.getElementById("button_remove_all_point_charges")!.addEventListener("click", () => {
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

