import { Charge } from "./charge";


export namespace Store {

    const generator: { [key: string]: (json: any) => Charge } = {};

    export const RegisterChargeGenerator = <T extends Charge>(name: string, gen: (json: any) => T) => {
        generator[name] = gen;
    }


    export const JsonToCharges = (chargesJson: any) => {

        const charges: Charge[] = [];

        for (const chargeJson of chargesJson) {

            const gen = generator[chargeJson.name];
            if (gen === undefined) {
                console.error(`generator for ${chargeJson.name} is not registered.`);
                continue;
            }
            else {
                const charge = gen(chargeJson);
                charges.push(charge);
            }

        }

        return charges;
    }

    export const ChargesToJson = (charges: Charge[]) => {

        const json: any = [];

        for (const charge of charges) {
            json.push({
                name: charge.constructor.name,
                ...charge.toJSON()
            });
        }

        return json;
    }

}


