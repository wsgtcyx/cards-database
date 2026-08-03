import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/035",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/035",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/035",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/035",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/035",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/035",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/035"
    },
    name: {
        en: "Arctibax",
        fr: "Cryodo",
        es: "Arctibax",
        it: "Arctibax",
        de: "Cryospino",
        "pt-br": "Arctibax",
        "zh-tw": "凍脊龍",
        pt: "Arctibax"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    dexId: [997],
    evolveFrom: {
        en: "Frigibax",
        fr: "Frigodo",
        es: "Frigibax",
        it: "Frigibax",
        de: "Frospino",
        "pt-br": "Frigibax",
        "zh-tw": "涼脊龍",
        pt: "Frigibax"
    },
    description: {
        en: "It attacks with the blade of its frozen dorsal fin by doing a front flip in the air. Arctibax’s strong back and legs allow it to pull off this technique.",
        "fr": "Il attaque avec la lame de sa nageoire dorsale gelée en effectuant un salto avant en l'air. Le dos et les jambes solides de Cryodo lui permettent de réaliser cette technique.",
        "es": "Ataca con la hoja de su aleta dorsal congelada haciendo un salto frontal en el aire. La fuerte espalda y piernas de Arctibax le permiten realizar esta técnica.",
        "it": "Attacca con la lama della sua pinna dorsale congelata eseguendo una capriola in aria. La schiena e le gambe forti di Arctibax gli consentono di eseguire questa tecnica.",
        "de": "Es greift mit der Spitze seiner gefrorenen Rückenflosse an, indem es in der Luft einen Frontflip ausführt. Der starke Rücken und die starken Beine von Cryospino ermöglichen es ihm, diese Technik auszuführen.",
        "pt-br": "Ele ataca com a lâmina de sua barbatana dorsal congelada, dando um salto frontal no ar. As costas e pernas fortes do Arctibax permitem que ele execute essa técnica.",
        "zh-tw": "它透過在空中進行前空翻，並用冰凍背鰭的刀片進行攻擊。 凍脊龍 強壯的背部和腿部使其能夠完成這項技術。"
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
                'es-mx': "Golpazo Gélido",
                pt: "Pancada Congelada"
            },
            damage: "50",
            cost: ["Water", "Colorless"],
        },
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20",
        },
    ],
    retreat: 2,
};
export default card;
