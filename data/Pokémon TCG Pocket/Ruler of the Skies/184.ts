import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/184",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/184",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/184",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/184",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/184"
    },
    name: {
        en: "Rotom ex",
        fr: "Motisma-ex",
        es: "Rotom ex",
        it: "Rotom-ex",
        de: "Rotom-ex",
        "pt-br": "Rotom ex",
        "zh-tw": "洛托姆ex",
        ko: "로토무 ex",
        ja: "ロトムex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 120,
    types: ["Lightning"],
    dexId: [479],
    stage: "Basic",
    attacks: [
        {
            cost: ["Lightning", "Lightning"],
            name: {
                en: "Junk Spark",
                fr: "Étincelle Récup",
                es: "Chispazo Chatarrero",
                "pt-br": "Fagulha de Tralha",
                "zh-tw": "廢品電光"
            },
            effect: {
                en: "This attack does 10 more damage for each Item card in your discard pile.",
                fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque carte Objet dans votre pile de défausse.",
                es: "Este ataque hace 10 puntos de daño más por cada carta de Objeto en tu pila de descartes.",
                "pt-br": "Este ataque causa 10 pontos de dano a mais para cada carta de Item na sua pilha de descarte.",
                "zh-tw": "增加自己的棄牌區的物品卡張數×10點傷害。"
            },
            damage: "30+"
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
