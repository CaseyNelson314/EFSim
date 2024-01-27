import { Charge } from "./charge";


export namespace Store {

    const chargeGenerator: { [key: string]: (json: any) => Charge } = {};

    export const RegisterChargeGenerator = <T extends Charge>(name: string, gen: (json: any) => T) => {
        chargeGenerator[name] = gen;
    }


    /**
     * JSONを電荷の配列に変換する
     * @param chargesJson JSON
     * @note JSON format:
     *       ```json
     *       [
     *           {
     *               "name": "ChargeName",
     *               // ...ChargeName.toJSON() で得られるJSON
     *           },
     *           {
     *               "name": "ChargeName",
     *               // ...ChargeName.toJSON() で得られるJSON
     *           },
     *       ]
     *       ```
     * @returns 電荷の配列
     */
    export const JsonToCharges = (chargesJson: any) => {

        const charges: Charge[] = [];

        for (const chargeJson of chargesJson) {

            const gen = chargeGenerator[chargeJson.name];
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


    /**
     * 電荷の配列をJSONに変換する
     * @param charges 電荷の配列
     * @returns JSON
     */
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


