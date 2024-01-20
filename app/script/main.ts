import * as THREE from 'three';
import * as EFSim from './init';
import { Dragger } from './dragger';
import { Field3D } from './field3d';
import { throttle } from 'throttle-debounce';
import { Charge } from './charge';
import { PointCharge } from './pointCharge';
import { InfinityLineCharge } from './infinityLineCharge';
import { InfinitySurfaceCharge } from './infinitySurfaceCharge';
import { SphereSurfaceCharge } from './sphereSurfaceCharge';
import { SphereVolumeCharge } from './sphereVolumeCharge';

const start = () => {

    const dom = document.getElementById('canvas')!;
    const scene = EFSim.CreateScene();
    const renderer = EFSim.CreateRenderer(dom);
    const camera = EFSim.CreateCamera(dom);
    const controls = EFSim.CreateControls(camera, dom);
    EFSim.ResisterResizeObserver(dom, renderer, camera);

    // 点電荷たち
    const charges: Charge[] = [];

    // 電荷を作成
    {

        charges.push(new PointCharge(new THREE.Vector3(0, 0, -100), -1));
        // charges.push(new InfinitySurfaceCharge(new THREE.Vector3(0, 0, -25), new THREE.Euler(0, 0, 0), 1));
        // charges.push(new InfinitySurfaceCharge(new THREE.Vector3(0, 0, 25), new THREE.Euler(0, 0, 0), -1));
        charges.push(new PointCharge(new THREE.Vector3(0, 0, 100), 1));

        for (const charge of charges) {
            scene.add(charge);
        }

    }

    // シミュレーション空間
    const field3d = new Field3D(charges);
    scene.add(field3d);

    const dragger = new Dragger(charges, camera, dom, controls, scene);

    // オブジェクトを移動中であるときのフォームの更新
    const onObjectDragging = (charges: Charge) => {

        // 全電荷は座標を変更できる
        (document.getElementById('charge_position_x') as HTMLInputElement).value = charges.position.x.toFixed(3);
        (document.getElementById('charge_position_y') as HTMLInputElement).value = charges.position.y.toFixed(3);
        (document.getElementById('charge_position_z') as HTMLInputElement).value = charges.position.z.toFixed(3);

        // 全電荷は座標を回転できる
        (document.getElementById('charge_rotate_x') as HTMLInputElement).value = THREE.MathUtils.radToDeg(charges.rotation.x).toFixed(3);
        (document.getElementById('charge_rotate_y') as HTMLInputElement).value = THREE.MathUtils.radToDeg(charges.rotation.y).toFixed(3);
        (document.getElementById('charge_rotate_z') as HTMLInputElement).value = THREE.MathUtils.radToDeg(charges.rotation.z).toFixed(3);

        if (charges instanceof PointCharge) {
            const pointCharge = charges as PointCharge;

            // 点電荷は電荷量を変更できる
            const chargeAmountDom = document.getElementById('charge_amount') as HTMLInputElement
            chargeAmountDom.labels![0]!.style.display = 'block';
            chargeAmountDom.value = pointCharge.getCharge().toFixed(3);
        }
        else if (charges instanceof InfinityLineCharge) {
            const lineCharge = charges as InfinityLineCharge;

            // 線電荷は電荷密度を変更できる
            const lineDensity = document.getElementById('charge_line_density') as HTMLInputElement;
            lineDensity.labels![0]!.style.display = 'block';
            lineDensity.value = lineCharge.getLineDensity().toFixed(3);

            // 線電荷は長さを変更できる
            // const lineLength = document.getElementById('charge_length') as HTMLInputElement;
            // lineLength.labels![0]!.style.display = 'block';
            // lineLength.value = lineCharge.length.toFixed(3);
        }
        else if (charges instanceof InfinitySurfaceCharge) {
            const planeCharge = charges as InfinitySurfaceCharge;

            // 面電荷は電荷密度を変更できる
            const surfaceDensity = document.getElementById('charge_surface_density') as HTMLInputElement;
            surfaceDensity.labels![0]!.style.display = 'block';
            surfaceDensity.value = planeCharge.getSurfaceDensity().toFixed(3);
        }
        else if (charges instanceof SphereSurfaceCharge) {
            const sphereSurfaceCharge = charges as SphereSurfaceCharge;

            // 球面電荷は電荷密度を変更できる
            const chargeDensity = document.getElementById('charge_surface_density') as HTMLInputElement;
            chargeDensity.labels![0]!.style.display = 'block';
            chargeDensity.value = sphereSurfaceCharge.getArealDensity().toFixed(3);

            // 球面電荷は半径を変更できる
            const radius = document.getElementById('charge_radius') as HTMLInputElement;
            radius.labels![0]!.style.display = 'block';
            radius.value = sphereSurfaceCharge.getRadius().toFixed(3);
        }
        else if (charges instanceof SphereVolumeCharge) {
            const sphereVolumeCharge = charges as SphereVolumeCharge;

            // 球体電荷は電荷密度を変更できる
            const chargeDensity = document.getElementById('charge_density') as HTMLInputElement;
            chargeDensity.labels![0]!.style.display = 'block';
            chargeDensity.value = sphereVolumeCharge.getVolumeDensity().toFixed(3);

            // 球体電荷は半径を変更できる
            const radius = document.getElementById('charge_radius') as HTMLInputElement;
            radius.labels![0]!.style.display = 'block';
            radius.value = sphereVolumeCharge.getRadius().toFixed(3);
        }
    };

    {

        // オブジェクトの選択が解除されたときのイベント
        const onObjectUnselected = () => {

            // #detail_editor 内のすべてのlabelを非表示にする
            const labels = document.getElementById('detail_editor')!.querySelectorAll('label');
            for (const label of labels) {
                label.style.display = 'none';
            }

            // .parameter_editorの要素を非表示にする
            const editors = document.querySelectorAll('.parameter_editor');
            for (const editor of editors) {
                (editor as HTMLElement).style.display = 'none';
            }

        };

        onObjectUnselected();

        const onObjectSelected = () => {
            onObjectUnselected();

            const editors = document.querySelectorAll('.parameter_editor');
            for (const editor of editors) {
                (editor as HTMLElement).style.display = 'block';
            }

            onObjectDragging(dragger.getSelected()!);
        }


        // 電荷移動時のイベント
        {
            dragger.addEventListener('object-change', throttle(100, (object: Charge) => {
                onObjectDragging(object);
                field3d.update();
            }));

            dragger.addEventListener('object-selected', onObjectSelected);
            dragger.addEventListener('object-unselected', onObjectUnselected);
        }

        // 座標編集
        {
            document.getElementById('position_editor')!.addEventListener('click', () => {
                dragger.setMode('translate');
            });
            document.getElementById('charge_position_x')!.addEventListener('input', (e) => {
                const selected = dragger.getSelected();
                if (selected) {
                    selected.position.x = Number((e.target as HTMLInputElement).value)
                    field3d.update();
                }
            });
            document.getElementById('charge_position_y')!.addEventListener('input', (e) => {
                const selected = dragger.getSelected();
                if (selected) {
                    selected.position.y = Number((e.target as HTMLInputElement).value)
                    field3d.update();
                }
            });
            document.getElementById('charge_position_z')!.addEventListener('input', (e) => {
                const selected = dragger.getSelected();
                if (selected) {
                    selected.position.z = Number((e.target as HTMLInputElement).value)
                    field3d.update();
                }
            });
        }

        // 回転角編集
        {
            document.getElementById('rotate_editor')!.addEventListener('click', () => {
                dragger.setMode('rotate');
            });
            // 回転
            document.getElementById('charge_rotate_x')!.addEventListener('input', (e) => {
                const selected = dragger.getSelected();
                if (selected) {
                    selected.rotation.x = THREE.MathUtils.degToRad(Number((e.target as HTMLInputElement).value))
                    field3d.update();
                }
            });
            document.getElementById('charge_rotate_y')!.addEventListener('input', (e) => {
                const selected = dragger.getSelected();
                if (selected) {
                    selected.rotation.y = THREE.MathUtils.degToRad(Number((e.target as HTMLInputElement).value))
                    field3d.update();
                }
            });
            document.getElementById('charge_rotate_z')!.addEventListener('input', (e) => {
                const selected = dragger.getSelected();
                if (selected) {
                    selected.rotation.z = THREE.MathUtils.degToRad(Number((e.target as HTMLInputElement).value))
                    field3d.update();
                }
            });
        }


        // 点電荷編集
        {
            document.getElementById('charge_amount')!.addEventListener('input', (e) => {
                const selected = dragger.getSelected();
                if (selected instanceof PointCharge) {
                    selected.updateCharge(Number((e.target as HTMLInputElement).value));
                    field3d.update();
                }
            });
        }

        // 線電荷編集
        {
            document.getElementById('charge_line_density')!.addEventListener('input', (e) => {
                const selected = dragger.getSelected();
                if (selected instanceof InfinityLineCharge) {
                    selected.updateLineDensity(Number((e.target as HTMLInputElement).value));
                    field3d.update();
                }
            });
            // todo: 線電荷の長さを変更できるようにする
            // document.getElementById('charge_length')!.addEventListener('input', (e) => {
            //     const selected = dragger.getSelected();
            //     if (selected instanceof InfinityLineCharge)
            //         selected.updateLength(Number((e.target as HTMLInputElement).value));
            //     field3d.update();
            // });
        }

        // 面電荷編集
        {
            document.getElementById('charge_surface_density')!.addEventListener('input', (e) => {
                const selected = dragger.getSelected();
                if (selected instanceof InfinitySurfaceCharge) {
                    selected.updateSurfaceDensity(Number((e.target as HTMLInputElement).value));
                    field3d.update();
                }
            });
        }

        // 球面電荷編集
        {
            document.getElementById('charge_surface_density')!.addEventListener('input', (e) => {
                const selected = dragger.getSelected();
                if (selected instanceof SphereSurfaceCharge) {
                    selected.updateArealDensity(Number((e.target as HTMLInputElement).value));
                    field3d.update();
                }
            });
            document.getElementById('charge_radius')!.addEventListener('input', (e) => {
                const selected = dragger.getSelected();
                if (selected instanceof SphereSurfaceCharge) {
                    const value = Number((e.target as HTMLInputElement).value);
                    if (value > 0) {
                        selected.updateRadius(value);
                        field3d.update();
                    }
                }
            });
        }

        // 球体電荷編集
        {
            document.getElementById('charge_density')!.addEventListener('input', (e) => {
                const selected = dragger.getSelected();
                if (selected instanceof SphereVolumeCharge) {
                    selected.updateVolumeDensity(Number((e.target as HTMLInputElement).value));
                    field3d.update();
                }
            });
            document.getElementById('charge_radius')!.addEventListener('input', (e) => {
                const selected = dragger.getSelected();
                if (selected instanceof SphereVolumeCharge) {
                    const value = Number((e.target as HTMLInputElement).value);
                    if (value > 0) {
                        selected.updateRadius(value);
                        field3d.update();
                    }
                }
            });
        }


        // 追加削除ボタン
        {
            const addCharge = (newCharge: Charge) => {
                scene.add(newCharge);
                charges.push(newCharge);
                dragger.attach(newCharge);

                onObjectUnselected();
                onObjectDragging(newCharge);
                onObjectSelected();

                field3d.update();
            }
            // 点電荷
            document.getElementById('add_point_charge_button')!.addEventListener('click', () => {
                const newChange = new PointCharge(new THREE.Vector3(), 1);
                addCharge(newChange);
            });
            // 線電荷
            document.getElementById('add_infinity_line_charge_button')!.addEventListener('click', () => {
                const newChange = new InfinityLineCharge(new THREE.Vector3(), new THREE.Euler(0, 0, 0), 1);
                addCharge(newChange);
            });
            // document.getElementById('add_surface_charge_button')!.addEventListener('click', () => {

            //     charges.push(newChange);
            //     dragger.attach(newChange);

            //     field3d.update();
            // });
            // 面電荷
            document.getElementById('add_infinity_surface_charge_button')!.addEventListener('click', () => {
                const newChange = new InfinitySurfaceCharge(new THREE.Vector3(), new THREE.Euler(Math.PI / 2, 0, 0), 1);
                addCharge(newChange);
            });
            // 球面電荷
            document.getElementById('add_sphere_surface_charge_button')!.addEventListener('click', () => {
                const newChange = new SphereSurfaceCharge(new THREE.Vector3(), 5, 0.001);
                addCharge(newChange);
            });
            // 球体電荷
            document.getElementById('add_sphere_volume_charge_button')!.addEventListener('click', () => {
                const newChange = new SphereVolumeCharge(new THREE.Vector3(), 5, 0.001);
                addCharge(newChange);
            });

            const deleteCharge = () => {
                if (dragger.getSelected()) {
                    dragger.removeSelected();
                    field3d.update();

                    // 再アタッチする
                    if (charges.length > 0) {
                        dragger.attach(charges[0]!);
                    }
                    else {
                        onObjectUnselected();
                    }
                }
            };
            document.getElementById('delete_charge_button')!.addEventListener('click', deleteCharge);
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Delete') {
                    deleteCharge();
                }
            });

            // document.getElementById('button_remove_all_charges')!.addEventListener('click', () => {
            //     for (let pointCharge of charges) {
            //         scene.remove(pointCharge.mesh);
            //     }
            //     charges.splice(0, charges.length);
            //     dragger.removeSelected();
            //     field3d.update();
            // });
        }


        {
            // デモとして最初の点電荷を選択
            // dragger.attach(charges[0]!);
            // onObjectDragging(charges[0]!);
            // PositionFormPositionUpdate(charges[0]!.mesh);
            // FormChargeUpdateEvent(charges[0]!);
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

