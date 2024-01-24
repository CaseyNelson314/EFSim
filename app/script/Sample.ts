import * as THREE from 'three';
import { Charge, ChargeType } from './charge';
import { Editor } from './editor';

export class SampleCharge extends Charge {

    override getChargeType = () => {
        return ChargeType.Plus;
    }

    override distanceFrom = (position: THREE.Vector3) => {
        return new THREE.Vector3();
    }

    override isContact = (distance: THREE.Vector3) => {
        return false;
    }

    override electricFieldVector = (position: THREE.Vector3) => {
        return new THREE.Vector3();
    }

    override electricForceLinesDirection = () => {
        return [];
    }

    override dispose = () => {
        return;
    }

    override toJSON() {
        return {};
    }

    override createEditor = () => {
        return new Editor();
    }

}