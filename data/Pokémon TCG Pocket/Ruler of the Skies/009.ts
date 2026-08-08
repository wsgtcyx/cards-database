import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/009",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/009",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/009",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/009",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/009",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/009",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/009"
    },
    name: {
        en: "Kricketune",
        fr: "Mélokrik",
        es: "Kricketune",
        it: "Kricketune",
        de: "Zirpeise",
        "pt-br": "Kricketune",
        "zh-tw": "音箱蟀",
        ko: "귀뚤톡크",
        ja: "コロトック"
    },
    illustrator: "Anesaki Dynamic",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    dexId: [402],
    evolveFrom: {
        en: "Kricketot",
        fr: "Crikzik",
        es: "Kricketot",
        it: "Kricketot",
        de: "Zirpurze",
        "pt-br": "Kricketot",
        "zh-tw": "圓法師",
        ko: "귀뚤뚜기",
        ja: "コロボーシ"
    },
    stage: "Stage1",
    description: {
        en: "There is a village that hosts a contest based on the amazingly variable cries of this Pokémon."
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Bug Buzz",
                fr: "Bourdon",
                es: "Zumbido",
                it: "Bug Buzz",
                de: "Bug Buzz",
                "pt-br": "Zumbido de Inseto",
                "zh-tw": "蟲鳴"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
