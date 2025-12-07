import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Meganium",
        "fr": "Méganium",
        "es": "meganio",
        "it": "Meganio",
        "de": "Meganium",
        "pt-br": "Megánio",
        "zh-tw": "大加蘭"
    },
    illustrator: "Hajime Kusajima",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Grass"],
    evolveFrom: {
        en: "Bayleef",
        "fr": "Bayleef",
        "es": "Bayleef",
        "it": "Bayleef",
        "de": "Lorbeerblatt",
        "pt-br": "Bayleef",
        "zh-tw": "月桂葉"
    },
    description: {
        en: "The aroma that rises from its petals contains a\nsubstance that calms aggressive feelings.",
        "fr": "L'arôme qui s'échappe de ses pétales contient un\nsubstance qui calme les sentiments agressifs.",
        "es": "El aroma que surge de sus pétalos contiene una\nSustancia que calma los sentimientos agresivos.",
        "it": "L'aroma che sale dai suoi petali contiene a\nsostanza che calma i sentimenti aggressivi.",
        "de": "Das Aroma, das aus seinen Blütenblättern aufsteigt, enthält u. a\nSubstanz, die aggressive Gefühle beruhigt.",
        "pt-br": "O aroma que sobe de suas pétalas contém uma\nsubstância que acalma sentimentos agressivos.",
        "zh-tw": "從花瓣中升起的香氣含有\n平息攻擊性情緒的物質。"
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
                "zh-tw": "布盧姆希恩"
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
                "zh-tw": "治療每隻神奇寶貝造成的 20 點傷害。"
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
