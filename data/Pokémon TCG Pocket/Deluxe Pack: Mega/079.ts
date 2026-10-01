import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/079",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/079",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/079",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/079",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/079",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/079",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/079"
    },
    name: {
        en: "Arctibax",
        fr: "Cryodo",
        es: "Arctibax",
        it: "Arctibax",
        de: "Cryospino",
        "pt-br": "Arctibax",
        "zh-tw": "凍脊龍",
        ja: "セゴール",
        ko: "드니꽁"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: [
        "Water"
    ],
    dexId: [
        997
    ],
    evolveFrom: {
        en: "Frigibax",
        fr: "Frigodo",
        es: "Frigibax",
        it: "Frigibax",
        de: "Frospino",
        "pt-br": "Frigibax",
        "zh-tw": "涼脊龍",
        ja: "Frigibax",
        ko: "Frigibax"
    },
    description: {
        en: "It attacks with the blade of its frozen dorsal fin by doing a front flip in the air. Arctibax’s strong back and legs allow it to pull off this technique.",
        fr: "Ses pattes et son dos musclés lui permettent de faire des sauts périlleux puis d'attaquer ses adversaires avec les lames glacées de sa crête.",
        es: "Gracias a su poderoso tren inferior, da saltos mortales hacia delante y ataca a sus enemigos con las cuchillas de su placa dorsal.",
        it: "Colpisce il nemico con le lame ghiacciate della cresta dorsale facendo una capriola in avanti. Questo attacco richiede gambe molto potenti.",
        de: "Seine starken Beine ermöglichen es ihm, einen Vorwärtssalto zu machen und mit den Klingen seiner gefrorenen Rückenflosse anzugreifen.",
        "pt-br": "Ataca com a lâmina de sua barbatana dorsal congelada dando um mortal no ar. Arctibax consegue usar essa técnica graças às suas costas e pernas fortes.",
        "zh-tw": "會使出前空翻，並利用凍住背鰭形成的劍來攻擊對手。唯有具備強健的下盤才能練就此功夫。",
        ja: "It attacks with the blade of its frozen dorsal fin by doing a front flip in the air. Arctibax’s strong back and legs allow it to pull off this technique.",
        ko: "It attacks with the blade of its frozen dorsal fin by doing a front flip in the air. Arctibax’s strong back and legs allow it to pull off this technique."
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Frost Smash",
                fr: "Impact Glacial",
                es: "Golpe Gélido",
                it: "Gelocolpo",
                de: "Frostschlag",
                "pt-br": "Pancada Congelada",
                "zh-tw": "冰霜粉碎",
                "es-mx": "Golpazo Gélido",
                pt: "Pancada Congelada",
                ja: "Frost Smash",
                ko: "Frost Smash"
            },
            damage: 50,
            cost: [
                "Water",
                "Colorless"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
