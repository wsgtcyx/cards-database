import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/097",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/097",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/097",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/097",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/097",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/097",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/097",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2b/097",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2b/097"
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
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 100,
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
        "zh-tw": "如果臉頰上的電袋充滿電，兩隻耳朵就會直立起來。",
        ja: "頬の 電気袋に 溜まった 電気が 最大量になると 両耳は まっすぐ 伸びる。",
        ko: "양 볼의 전기 주머니에 모인\n전기가 가득 차게 되면\n두 귀가 곧게 선다."
    },
    attacks: [
        {
            cost: ["Lightning", "Lightning"],
            name: {
                en: "Thunder",
                fr: "Fatal-Foudre",
                es: "Trueno",
                it: "Tuono",
                de: "Donner",
                "pt-br": "Trovão",
                "zh-tw": "打雷",
                ja: "かみなり",
                ko: "번개"
            },
            effect: {
                en: "This Pokémon also does 30 damage to itself.",
                fr: "Ce Pokémon s'inflige également 30 dégâts.",
                es: "Este Pokémon también se hace 30 daños a sí mismo.",
                it: "Questo Pokémon infligge anche 30 danni a se stesso.",
                de: "Dieses Pokémon fügt sich selbst außerdem 30 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 30 de dano a si mesmo.",
                "zh-tw": "這隻寶可夢也會對自身造成 30 點傷害。",
                ja: "このポケモンにも30ダメージ。",
                ko: "이 포켓몬에게도 30데미지를 준다."
            },
            damage: 90
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
