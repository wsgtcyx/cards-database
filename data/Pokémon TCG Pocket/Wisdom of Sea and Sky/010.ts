import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/010",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/010",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/010",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/010",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/010",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/010",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/010",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/010",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/010"
    },
    name: {
        en: "Meganium",
        "fr": "Méganium",
        "es": "Meganium",
        "it": "Meganium",
        "de": "Meganie",
        "pt-br": "Meganium",
        "zh-tw": "大竺葵",
        ja: "メガニウム",
        ko: "메가니움",
    },
    illustrator: "Hajime Kusajima",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Grass"],
    evolveFrom: {
        en: "Bayleef",
        "fr": "Macronium",
        "es": "Bayleef",
        "it": "Bayleef",
        "de": "Lorblatt",
        "pt-br": "Bayleef",
        "zh-tw": "月桂葉",
        ja: "ベイリーフ",
        ko: "베이리프"
    },
    description: {
        en: "The aroma that rises from its petals contains a\nsubstance that calms aggressive feelings.",
        "fr": "L'arôme qui s'échappe de ses pétales contient un\nsubstance qui calme les sentiments agressifs.",
        "es": "El aroma que surge de sus pétalos contiene una\nSustancia que calma los sentimientos agresivos.",
        "it": "L'aroma che sale dai suoi petali contiene a\nsostanza che calma i sentimenti aggressivi.",
        "de": "Das Aroma, das aus seinen Blütenblättern aufsteigt, enthält u. a\nSubstanz, die aggressive Gefühle beruhigt.",
        "pt-br": "O aroma que sobe de suas pétalas contém uma\nsubstância que acalma sentimentos agressivos.",
        "zh-tw": "從花瓣中升起的香氣含有\n平息攻擊性情緒的物質。",
        ja: "花びらから 発散される においには 争う 気持ちを 静める 成分が 含まれる。",
        ko: "꽃잎에서 발산되는\n향기에는 다투는 마음을\n가라앉게 하는 성분이 담겨 있다."
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Bloomshine",
                "fr": "Bloomshine",
                "es": "brillo de flores",
                "it": "Splendida fioritura",
                "de": "Bloomshine",
                "pt-br": "Brilho",
                "zh-tw": "布盧姆希恩",
                ja: "ブルームシャイン",
                ko: "블룸샤인"
            },
            damage: 80,
            cost: ["Grass", "Grass", "Colorless"],
            effect: {
                en: "Heal 20 damage from each of your Pokémon.",
                "fr": "Soignez 20 dégâts de chacun de vos Pokémon.",
                "es": "Cura 20 daños de cada uno de tus Pokémon.",
                "it": "Cura 20 danni da ciascuno dei tuoi Pokémon.",
                "de": "Heile 20 Schadenspunkte bei jedem deiner Pokémon.",
                "pt-br": "Cure 20 pontos de dano de cada um dos seus Pokémon.",
                "zh-tw": "治療每隻神奇寶貝造成的 20 點傷害。",
                ja: "自分のポケモン全員のHPを20回復。",
                ko: "자신의 포켓몬 전원의 HP를 20회복."
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["lugia"]
};
export default card;
