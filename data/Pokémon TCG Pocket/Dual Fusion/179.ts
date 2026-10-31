import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/179",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/179",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/179",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/179",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/179",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/179",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/179",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/179"
    },
    name: {
        en: "Mega Skarmory ex",
        fr: "Méga-Airmure-ex",
        es: "Mega-Skarmory ex",
        "pt-br": "Mega Skarmory ex",
        "zh-tw": "超級盔甲鳥ex",
        ja: "メガエアームドex",
        ko: "메가무장조 ex",
        it: "Mega-Skarmory-ex",
        de: "Mega-Panzaeron-ex"
    },
    illustrator: "AKIRA EGAWA",
    rarity: "Two Star",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 170,
    types: [
        "Metal"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Shredding Claw",
                fr: "Griffe Déchiquetante",
                es: "Garra Trituradora",
                it: "Artiglio Dilaniante",
                de: "Schredderkrallen",
                "pt-br": "Grifa Triturante",
                "zh-tw": "碎裂爪",
                ja: "シュレッダークロー",
                ko: "Shredding Claw"
            },
            cost: [
                "Colorless",
                "Metal",
                "Metal"
            ],
            damage: "90+",
            effect: {
                en: "Flip a coin until you get tails. This attack does 50 more damage for each heads.",
                fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 50 dégâts supplémentaires pour chaque côté face.",
                es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 50 puntos de daño más por cada cara.",
                it: "Lancia una moneta finché non esce croce. Questo attacco infligge 50 danni in più ogni volta che esce testa.",
                de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 50 Schadenspunkte mehr pro Kopf zu.",
                "pt-br": "Jogue uma moeda até sair coroa. Este ataque causa 50 pontos de dano a mais para cada cara.",
                "zh-tw": "擲硬幣直到出現反面,增加正面出現的次數×50點傷害。",
                ja: "ウラが出るまでコインを投げ、オモテの数×50ダメージ追加。",
                ko: "Flip a coin until you get tails. This attack does 50 more damage for each heads."
            }
        }
    ],
    abilities: []
};

export default card;
