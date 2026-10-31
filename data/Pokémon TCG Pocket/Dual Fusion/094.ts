import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/094",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/094",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/094",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/094",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/094",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/094",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/094",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/094"
    },
    name: {
        en: "Ferrothorn",
        fr: "Noacier",
        es: "Ferrothorn",
        "pt-br": "Ferrothorn",
        "zh-tw": "堅果啞鈴",
        ja: "ナットレイ",
        ko: "너트령",
        it: "Ferrothorn",
        de: "Tentantel"
    },
    illustrator: "Miki Tanaka",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 120,
    types: [
        "Metal"
    ],
    stage: "Stage1",
    retreat: 3,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Ferroseed",
        fr: "Grindur",
        es: "Ferroseed",
        it: "Ferroseed",
        de: "Kastadur",
        "pt-br": "Ferroseed",
        "zh-tw": "種子鐵球",
        ja: "テッシード",
        ko: "Ferroseed"
    },
    attacks: [
        {
            name: {
                en: "Hammer In",
                fr: "Enfoncement",
                es: "Martillear",
                it: "Martello",
                de: "Einhämmern",
                "pt-br": "Martelada",
                "zh-tw": "頭突",
                ja: "ぶちかます",
                ko: "Hammer In"
            },
            cost: [
                "Metal",
                "Metal",
                "Metal"
            ],
            damage: 90
        }
    ],
    abilities: [],
    description: {
        en: "This Pokémon scrapes its spikes across rocks, and then uses the tips of its feelers to absorb the nutrients it finds within the stone.",
        fr: "Il fissure la roche avec ses épines pour ensuite absorber les nutriments qui s’y trouvent grâce à l’extrémité de ses tentacules.",
        es: "Raya el lecho rocoso con las púas para luego absorber nutrientes con el extremo de los tentáculos.",
        it: "Scalfisce gli strati rocciosi con i suoi aculei e utilizza le estremità delle sue antenne per estrarne gli elementi di cui si nutre.",
        de: "Es kratzt mit seinen Dornen Kerben in Felswände und extrahiert dann mit den Dornenspitzen an seinen Schlingen Nährstoffe aus dem Gestein.",
        "pt-br": "Este Pokémon roça os seus espinhos nas rochas, depois usa as pontas das suas antenas para absorver os nutrientes que encontra dentro das pedras.",
        "zh-tw": "用尖刺刺裂岩壁之後，牠會用觸手的尖端接觸裂縫吸收營養。",
        ja: "トゲで 岩盤に キズを つけると 触手の 先端を あてて 栄養を 吸収する。",
        ko: "This Pokémon scrapes its spikes across rocks, and then uses the tips of its feelers to absorb the nutrients it finds within the stone."
    }
};

export default card;
