import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/093",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/093",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/093",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/093",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/093",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/093",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/093"
    },
    name: {
        en: "Rotom ex",
        fr: "Motisma-ex",
        es: "Rotom ex",
        it: "Rotom-ex",
        de: "Rotom-ex",
        "pt-br": "Rotom ex",
        "zh-tw": "洛托姆ex",
        ja: "ロトムex",
        ko: "로토무 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 120,
    types: [
        "Lightning"
    ],
    dexId: [
        479
    ],
    stage: "Basic",
    attacks: [
        {
            cost: [
                "Lightning",
                "Lightning"
            ],
            name: {
                en: "Junk Spark",
                fr: "Étincelle Récup",
                es: "Chispazo Chatarrero",
                "pt-br": "Fagulha de Tralha",
                "zh-tw": "廢品電光",
                it: "Rottami Scintillanti",
                de: "Schrottfunken",
                ja: "Junk Spark",
                ko: "Junk Spark"
            },
            effect: {
                en: "This attack does 10 more damage for each Item card in your discard pile.",
                fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque carte Objet dans votre pile de défausse.",
                es: "Este ataque hace 10 puntos de daño más por cada carta de Objeto en tu pila de descartes.",
                "pt-br": "Este ataque causa 10 pontos de dano a mais para cada carta de Item na sua pilha de descarte.",
                "zh-tw": "增加自己的棄牌區的物品卡張數×10點傷害。",
                it: "Questo attacco infligge 10 danni in più per ogni carta Strumento nella tua pila degli scarti.",
                de: "Diese Attacke fügt für jede Itemkarte in deinem Ablagestapel 10 Schadenspunkte mehr zu.",
                ja: "This attack does 10 more damage for each Item card in your discard pile.",
                ko: "This attack does 10 more damage for each Item card in your discard pile."
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
