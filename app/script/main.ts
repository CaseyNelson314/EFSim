import * as THREE from "three";
import * as EFSim from "./init";
import { Dragger } from "./dragger";
import { Charge, LineCharge, PointCharge, SphereSurfaceCharge, SphereVolumeCharge } from "./charge";
import { Field3D } from "./field3D";
import { throttle } from 'throttle-debounce';

const start = () => {

    const dom = document.getElementById("canvas")!;
    const scene = EFSim.CreateScene();
    const renderer = EFSim.CreateRenderer(dom);
    const camera = EFSim.CreateCamera(dom);
    const controls = EFSim.CreateControls(camera, dom);
    EFSim.ResisterResizeObserver(dom, renderer, camera);

    // 点電荷たち
    const charge: Charge[] = [];
    
    // 点電荷を作成
    {
        charge.push(new PointCharge(new THREE.Vector3(0, 0, 0), 1).attachScene(scene));
        charge.push(new PointCharge(new THREE.Vector3(0, 0, 100), -1).attachScene(scene));
        charge.push(new PointCharge(new THREE.Vector3(0, 100, 0), 1).attachScene(scene));
        charge.push(new PointCharge(new THREE.Vector3(50, 50, 0), -10).attachScene(scene));

        charge.push(new LineCharge(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 100), false, 1).attachScene(scene));

        charge.push(new LineCharge(new THREE.Vector3(100, 0, 0), new THREE.Vector3(0, 0, 100), false, 1).attachScene(scene));

        charge.push(new SphereSurfaceCharge(new THREE.Vector3(0, 0, 0), 10, 0.000000011).attachScene(scene));
        charge.push(new SphereVolumeCharge(new THREE.Vector3(0, 0, 0), 1, -0.00000001).attachScene(scene));

    }

    // シミュレーション空間
    const field3D = new Field3D(charge);

    const dragger = new Dragger(charge, camera, dom, controls, scene);

    {
        // 座標
        document.getElementById("charge_position_x")!.addEventListener("input", (e) => {
            const selected = dragger.getSelected();
            if (selected)
                selected.position.x = Number((e.target as HTMLInputElement).value)
            field3D.update();
        });
        document.getElementById("charge_position_y")!.addEventListener("input", (e) => {
            const selected = dragger.getSelected();
            if (selected)
                selected.position.y = Number((e.target as HTMLInputElement).value)
            field3D.update();
        });
        document.getElementById("charge_position_z")!.addEventListener("input", (e) => {
            const selected = dragger.getSelected();
            if (selected)
                selected.position.z = Number((e.target as HTMLInputElement).value)
            field3D.update();
        });


        // 電荷量
        // const updateCharge = (pointCharge: Charge, newCharge: number) => {
        //     pointCharge.updateCharge(newCharge);
        // };
        // const valueWithUnitToValue = (value: number, unit: string) => {
        //     switch (unit) {
        //         case 'c': return value;
        //         case 'uc': return value * 1e-6;
        //         case 'nc': return value * 1e-9;
        //         case 'pc': return value * 1e-12;
        //         default: throw new Error("invalid unit");
        //     }
        // };
        // const valueToValueWithUnit = (value: number) => {
        //     const appliedAbsValue = Math.abs(value);
        //     if (appliedAbsValue >= 1e-3) {
        //         return { value: value, unit: 'c' };
        //     } else if (appliedAbsValue >= 1e-6) {
        //         return { value: value * 1e6, unit: 'uc' };
        //     } else if (appliedAbsValue >= 1e-9) {
        //         return { value: value * 1e9, unit: 'nc' };
        //     } else {
        //         return { value: value * 1e12, unit: 'pc' };
        //     }
        // };

        // const domValue = document.getElementById("charge_charge_value")! as HTMLInputElement;
        // const domUnit = document.getElementById("charge_unit")! as HTMLSelectElement;

        // const onChargeValueChange = () => {
        //     const selected = dragger.getSelected();
        //     if (selected) {
        //         updateCharge(selected, valueWithUnitToValue(Number(domValue.value), domUnit.value));
        //     }
        //     field3D.update();
        // };

        // domValue.addEventListener("input", onChargeValueChange);
        // domUnit.addEventListener("change", onChargeValueChange);


        dragger.addEventListener('object-change', throttle(50, field3D.update));

        // const FormPositionUpdateEvent = (object: THREE.Mesh) => {
        //     (document.getElementById("charge_position_x") as HTMLInputElement).value = object.position.x.toFixed(2);
        //     (document.getElementById("charge_position_y") as HTMLInputElement).value = object.position.y.toFixed(2);
        //     (document.getElementById("charge_position_z") as HTMLInputElement).value = object.position.z.toFixed(2);
        // };
        // const FormChargeUpdateEvent = (object: PointCharge) => {
        //     const { value, unit } = valueToValueWithUnit(object.charge);
        //     domValue.value = value.toFixed(2);
        //     domUnit.value = unit;
        // }

        // dragger.addEventListener('object-change', FormPositionUpdateEvent);
        // dragger.addEventListener('object-selected', (object: PointCharge) => {
        //     // FormPositionUpdateEvent(object.mesh);
        //     // FormChargeUpdateEvent(object);
        // });

        dragger.addEventListener('object-selected', () => {
            (document.getElementById("position_editor") as HTMLDetailsElement).open = true;
            console.log("object-selected");
        });
        dragger.addEventListener('object-unselected', () => {
            console.log("object-unselected");
            (document.getElementById("position_editor") as HTMLDetailsElement).open = false;
        });


        {
            // デモとして最初の点電荷を選択
            dragger.attach(charge[0]!);
            // FormPositionUpdateEvent(charge[0]!.mesh);
            // FormChargeUpdateEvent(charge[0]!);
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
        document.getElementById("add_point_charge_button")!.addEventListener("click", () => {
            const newChange = new PointCharge(new THREE.Vector3(), 1).attachScene(scene);

            charge.push(newChange);
            dragger.attach(newChange);

            field3D.update();
        });

        // document.getElementById("button_remove_charge")!.addEventListener("click", () => {
        //     if (dragger.getSelected()) {
        //         dragger.removeSelected();
        //         field3D.update();
        //     }
        // });

        // document.getElementById("button_remove_all_charges")!.addEventListener("click", () => {
        //     for (let pointCharge of charge) {
        //         scene.remove(pointCharge.mesh);
        //     }
        //     charge.splice(0, charge.length);
        //     dragger.removeSelected();
        //     field3D.update();
        // });
    }

    const main = () => {

        requestAnimationFrame(main);

        renderer.render(scene, camera);
        controls.update();

    };

    main();

};

window.addEventListener("load", start);

