import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/022",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/022",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/022",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/022",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/022",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/022",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/022"
    },
    name: {
        en: "Raichu",
        fr: "Raichu",
        es: "Raichu",
        it: "Raichu",
        de: "Raichu",
        "pt-br": "Raichu",
        "zh-tw": "雷丘",
        ko: "라이츄",
        ja: "ライチュウ"
    },
    illustrator: "Aya Kusube",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Lightning"],
    dexId: [26],
    evolveFrom: {
        en: "Pikachu",
        fr: "Pikachu",
        es: "Pikachu",
        it: "Pikachu",
        de: "Pikachu",
        "pt-br": "Pikachu",
        "zh-tw": "皮卡丘",
        ko: "피카츄",
        ja: "ピカチュウ"
    },
    stage: "Stage1",
    description: {
        en: "If the electric pouches in its cheeks become fully charged, both ears will stand straight up.",
        fr: "Si les poches électriques dans ses joues sont complètement chargées, les deux oreilles se redresseront.",
        es: "Si las bolsas eléctricas de sus mejillas se cargan por completo, ambas orejas se levantarán.",
        it: "Se le tasche elettriche sulle sue guance si caricano completamente, entrambe le orecchie rimarranno dritte.",
        de: "Wenn die elektrischen Beutel in seinen Wangen vollständig aufgeladen sind, stellen sich beide Ohren gerade auf.",
        "pt-br": "Se as bolsas elétricas em suas bochechas ficarem totalmente carregadas, ambas as orelhas ficarão retas.",
        "zh-tw": "如果臉頰上的電袋充滿電，兩隻耳朵就會直立起來。"
    },
    attacks: [
        {
            cost: ["Lightning", "Lightning"],
            name: {
                en: "Mach Bolt",
                fr: "Éclair Fulgurant",
                es: "Rayo Mach",
                it: "Fulmine Mach",
                de: "Flotter Sprung",
                "pt-br": "Raio Supersônico",
                "zh-tw": "音速伏特"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
