import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/056",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/056",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/056",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/056",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/056",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/056"
    },
    name: {
        en: "Electrode",
        fr: "Électrode",
        es: "Electrode",
        it: "Electrode",
        de: "Lektrobal",
        "pt-br": "Electrode",
        "zh-tw": "頑皮雷彈",
        ko: "붐볼",
        ja: "マルマイン"
    },
    illustrator: "Tomokazu Komiya",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Lightning"],
    dexId: [101],
    evolveFrom: {
        en: "Voltorb",
        fr: "Voltorbe",
        es: "Voltorb",
        it: "Voltorb",
        de: "Voltobal",
        "pt-br": "Voltorb",
        "zh-tw": "霹靂電球",
        ko: "찌리리공",
        ja: "ビリリダマ"
    },
    stage: "Stage1",
    description: {
        en: "The more energy it charges up, the faster it gets. But this also makes it more likely to explode.",
        fr: "Plus il accumule de l'énergie de type Électrik, plus il est rapide.\nMais il a aussi davantage de chances d'exploser.",
        es: "Cuanta más energía almacena, mayor\nvelocidad alcanza, aunque aumenta\ntambién el riesgo de que explote.",
        it: "L'energia Elettro che immagazzina\nlo fa andare sempre più veloce, ma\nlo fa anche esplodere più facilmente.",
        de: "Je mehr elektrische Energie es speichert, desto\nschneller ist es. Allerdings steigt dabei auch das\nRisiko, dass es explodiert.",
        "pt-br": "Quanto mais energia carrega, mais\nvelocidade ganha. Mas também aumenta\na sua probabilidade de explodir.",
        "zh-tw": "它充電的能量越多，速度就越快。但這也使得它更容易爆炸。"
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Electroblast",
                fr: "Électro-Explosion",
                es: "Electroestallido",
                it: "Elettrobomba",
                de: "Elektrokracher",
                "pt-br": "Explosão Elétrica",
                "zh-tw": "電氣轟炸"
            },
            effect: {
                en: "Flip 2 coins. This attack does 30 more damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque tête.",
                es: "Lanza 2 monedas. Este ataque hace 30 daños más por cada cabeza.",
                it: "Lancia 2 monete. Questo attacco infligge 30 danni in più per ogni testa.",
                de: "Wirf 2 Münzen. Dieser Angriff verursacht 30 weitere Schadenspunkte pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa mais 30 danos para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。此攻擊對每個頭造成 30 點額外傷害。"
            },
            damage: "20+"
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
