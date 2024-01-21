import * as THREE from 'three';

// パラメーターの編集を支援する

abstract class ParameterEditor {


    /**
     * エディターを表示する
     */
    abstract enable: () => void;


    /**
     * エディターを非表示にする
     */
    abstract disable: () => void;


    /**
     * 電荷が変更(移動など)されたときに呼び出す
     */
    abstract update: () => void;


    /**
     * 値変更時のイベントハンドラー
     */
    abstract addEventListener: (type: 'input' | 'position-editor' | 'rotation-editor', listener: () => void) => void;

}

interface PositionEditorOption {
    position: THREE.Vector3;
    onChange: (position: THREE.Vector3) => void;
}

export class PositionEditor implements ParameterEditor {


    constructor(options: PositionEditorOption) {

        this.position = options.position;
        this.onChange = [options.onChange];

    }


    enable = () => {

        this.editorArea.style.display = 'flex';
        this.editorArea.addEventListener('input', this.onChangePosition);
        this.update();

    }


    disable = () => {

        this.editorArea.removeEventListener('input', this.onChangePosition);
        this.editorArea.style.display = 'none';

    }


    update = () => {

        this.xInput.value = this.position.x.toFixed(3);
        this.yInput.value = this.position.y.toFixed(3);
        this.zInput.value = this.position.z.toFixed(3);

    }


    addEventListener = (type: 'input' | 'position-editor' | 'rotation-editor', listener: (position: THREE.Vector3 | void) => void) => {

        if (type === 'input') {
            this.onChange.push(listener);
        }

        if (type === 'position-editor') {
            this.editorArea.addEventListener('click',  () => {
                listener();
            });
        }

    }


    private position: THREE.Vector3
    private onChange: ((position: THREE.Vector3) => void)[];

    private onChangePosition = () => {

        const x = Number(this.xInput.value);
        const y = Number(this.yInput.value);
        const z = Number(this.zInput.value);
        const newPosition = new THREE.Vector3(x, y, z);

        for (const onChange of this.onChange) {
            onChange(newPosition);
        }

    };


    private readonly editorArea = document.getElementById('position_editor_area')!;
    private readonly xInput = document.getElementById('charge_position_x') as HTMLInputElement;
    private readonly yInput = document.getElementById('charge_position_y') as HTMLInputElement;
    private readonly zInput = document.getElementById('charge_position_z') as HTMLInputElement;


}


interface RotationEditorOption {
    rotation: THREE.Euler;
    onChange: (rotation: THREE.Euler) => void;
}

export class RotationEditor implements ParameterEditor {


    constructor(options: RotationEditorOption) {

        this.rotation = options.rotation;
        this.onChange = [options.onChange];

    }


    enable = () => {

        this.editorArea.style.display = 'flex';
        this.editorArea.addEventListener('input', this.onChangeRotation);
        this.update();

    }


    disable = () => {

        this.editorArea.removeEventListener('input', this.onChangeRotation);
        this.editorArea.style.display = 'none';

    }


    update = () => {

        this.xInput.value = THREE.MathUtils.radToDeg(this.rotation.x).toFixed(3);
        this.yInput.value = THREE.MathUtils.radToDeg(this.rotation.y).toFixed(3);
        this.zInput.value = THREE.MathUtils.radToDeg(this.rotation.z).toFixed(3);

    }


    addEventListener = (type: 'input' | 'position-editor' | 'rotation-editor', listener: (position: THREE.Euler | void) => void) => {

        if (type === 'input') {
            this.onChange.push(listener);
        }

        if (type === 'rotation-editor') {
            this.editorArea.addEventListener('click', () => {
                listener();
            });
        }

    }



    private rotation: THREE.Euler;
    private onChange: ((rotation: THREE.Euler) => void)[];


    private onChangeRotation = () => {

        const x = THREE.MathUtils.degToRad(Number(this.xInput.value));
        const y = THREE.MathUtils.degToRad(Number(this.yInput.value));
        const z = THREE.MathUtils.degToRad(Number(this.zInput.value));
        const newRotation = new THREE.Euler(x, y, z);

        for (const onChange of this.onChange) {
            onChange(newRotation);
        }

    }

    private readonly editorArea = document.getElementById('rotation_editor_area')!;
    private readonly xInput = document.getElementById('charge_rotate_x') as HTMLInputElement;
    private readonly yInput = document.getElementById('charge_rotate_y') as HTMLInputElement;
    private readonly zInput = document.getElementById('charge_rotate_z') as HTMLInputElement;


}

interface NumberEditorOption {
    name: string;
    value: number;
    onChange: (value: number) => void;
    step?: number;
    min?: number;
    max?: number;
    digits?: number;
}

export class NumberEditor implements ParameterEditor {

    constructor(options: NumberEditorOption) {

        this.options = options;

        this.value = options.value;
        this.onChange = [options.onChange];

        // this.editorAreaに同じIDがいたらラベルを削除する
        const oldElement = document.getElementById(options.name);
        if (oldElement !== null) {
            console.log('remove old element');
            const oldLabel = oldElement.parentElement!;
            oldLabel.removeChild(oldElement);
            this.editorArea.removeChild(oldLabel);
        }

        this.inputLabel = document.createElement('label');
        this.inputLabel.innerHTML = `
            ${options.name}
            <input type="number" id="${options.name}" value="${options.value}" inputmode="decimal">
        `;

        this.input = this.inputLabel.querySelector('input')!;

        if (options.step !== undefined) {
            this.input.step = options.step.toString();
        }
        if (options.min !== undefined) {
            this.input.min = options.min.toString();
        }
        if (options.max !== undefined) {
            this.input.max = options.max.toString();
        }

        if (options.digits === undefined) {
            options.digits = 3;
        }
    }


    enable = () => {

        this.parent.style.display = 'flex';
        this.editorArea.appendChild(this.inputLabel);
        this.input.addEventListener('input', this.onChangeNumber);
        this.update();

    }


    disable = () => {

        this.input.removeEventListener('input', this.onChangeNumber);

        if (this.editorArea.contains(this.inputLabel)) {
            this.editorArea.removeChild(this.inputLabel);
        }

        this.parent.style.display = 'none';

    }


    update = () => {

        this.input.value = this.value.toFixed(this.options.digits);

    }


    addEventListener = (type: 'input' | 'position-editor' | 'rotation-editor', listener: (value: number) => void) => {

        if (type === 'input') {
            this.onChange.push(listener);
        }

    }


    private value: number;
    private onChange: ((value: number) => void)[];


    private onChangeNumber = () => {

        let value = Number(this.input.value);

        if (this.options.min !== undefined) {
            value = Math.max(this.options.min, value);
        }
        if (this.options.max !== undefined) {
            value = Math.min(this.options.max, value);
        }

        for (const onChange of this.onChange) {
            onChange(value);
        }

    }

    private readonly parent = document.getElementById('parameter_editor_area')!;
    private readonly editorArea = document.getElementById('detail_editor')!;
    private readonly inputLabel: HTMLLabelElement;
    private readonly input: HTMLInputElement;

    private readonly options: NumberEditorOption;

}



export class Editor {

    private parameters: ParameterEditor[] = [];


    add = (editor: ParameterEditor) => {
        this.parameters.push(editor);
        return this;
    }


    enable = () => {
        for (const parameter of this.parameters) {
            parameter.enable();
        }
    }

    disable = () => {
        for (const parameter of this.parameters) {
            parameter.disable();
        }
    }


    /**
     * HTMLへの表示値を更新する
     */
    update = () => {
        for (const parameter of this.parameters) {
            parameter.update();
        }
    }


    addEventListener = (type: 'input' | 'position-editor' | 'rotation-editor', listener: () => void) => {
        for (const parameter of this.parameters) {
            parameter.addEventListener(type, listener);
        }
    }

}