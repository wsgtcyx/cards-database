import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/074/5e045994f2bbde0d",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/074/5e045994f2bbde0d",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/074/5e045994f2bbde0d",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/074/5e045994f2bbde0d",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/074/5e045994f2bbde0d",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/074/5e045994f2bbde0d",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/074/5e045994f2bbde0d",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/074/5e045994f2bbde0d",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/074/5e045994f2bbde0d"
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
    illustrator: "Midori Harada",
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
        fr: "Ses oreilles se dressent lorsque les poches d'électricité sur ses joues sont chargées.",
        es: "Si las bolsas de sus mejillas se cargan por completo de electricidad, se le ponen las orejas de punta.",
        it: "Quando le sacche elettriche sulle sue guance si caricano completamente, gli si rizzano le orecchie.",
        de: "Wenn seine Backentaschen voll aufgeladen sind, stehen seine beiden Ohren senkrecht nach oben.",
        "pt-br": "Se as bolsas elétricas de suas bochechas atingem carga completa, suas duas orelhas levantam.",
        "zh-tw": "如果雙頰上的電囊儲存了飽滿的電力，兩邊耳朵就會直直地豎起。",
        ja: "頬の 電気袋に 溜まった 電気が 最大量になると 両耳は まっすぐ 伸びる。",
        ko: "양 볼의 전기 주머니에 모인\n전기가 가득 차게 되면\n두 귀가 곧게 선다."
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
                "zh-tw": "音速伏特",
                ja: "マッハボルト",
                ko: "마하볼트"
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
    retreat: 2,
    boosters: ["vol10"]
};

export default card;
