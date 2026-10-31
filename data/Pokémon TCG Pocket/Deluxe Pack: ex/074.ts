import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/074",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/074",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/074",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/074",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/074",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/074",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/074",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/074",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4b/074"
    },
    name: {
        en: "Monferno",
        "fr": "Chimpenfeu",
        "es": "Monferno",
        "it": "Monferno",
        "de": "Panpyro",
        "pt-br": "Monferno",
        "zh-tw": "猛火猴",
        ja: "モウカザル",
        ko: "파이숭이",
    },
    illustrator: "Masakazu Fukuda",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    evolveFrom: {
        en: "Chimchar",
        "fr": "Ouisticram",
        "es": "Chimchar",
        "it": "Chimchar",
        "de": "Panflam",
        "pt-br": "Chimchar",
        "zh-tw": "小火焰猴",
        ja: "ヒコザル",
        ko: "불꽃숭이",
    },
    description: {
        en: "It skillfully controls the intensity of the fire on its\ntail to keep its foes at an ideal distance.",
        "fr": "Il contrôle habilement l'intensité du feu sur son\nqueue pour maintenir ses ennemis à une distance idéale.",
        "es": "Controla hábilmente la intensidad del fuego en su\ncola para mantener a sus enemigos a una distancia ideal.",
        "it": "Controlla abilmente l'intensità del fuoco sul suo\ncoda per mantenere i suoi nemici a una distanza ideale.",
        "de": "Es steuert gekonnt die Intensität des Feuers auf seinem Gerät\nSchwanz, um seine Feinde auf ideale Distanz zu halten.",
        "pt-br": "Ele controla habilmente a intensidade do fogo em seu\ncauda para manter seus inimigos a uma distância ideal.",
        "zh-tw": "它巧妙地控制著火勢的強度\n尾巴使敵人保持理想的距離。",
        ja: "尻尾の 炎の 勢いを うまく コントロールして 自分の 得意な 間合いで 戦うのだ。",
        ko: "꼬리의 불꽃 세기를\n잘 컨트롤하여 자신에게\n맞는 거리를 두고 싸운다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Fiery Punch",
                "fr": "Coup de poing enflammé",
                "es": "Puñetazo ardiente",
                "it": "Pugno ardente",
                "de": "Feuriger Schlag",
                "pt-br": "Soco de Fogo",
                "zh-tw": "烈火拳",
                ja: "ほのおパンチ",
                ko: "불꽃튀는펀치"
            },
            damage: 30,
            cost: ["Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
