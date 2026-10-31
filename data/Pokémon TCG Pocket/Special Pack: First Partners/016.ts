import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/016",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/016",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/016",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/016",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/016",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/016",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/016",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/SP1/016"
    },
    name: {
        en: "Chespin",
        fr: "Marisson",
        es: "Chespin",
        "pt-br": "Chespin",
        "zh-tw": "哈力栗",
        ja: "ハリマロン",
        ko: "도치마론",
        it: "Chespin",
        de: "Igamaro"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: [
        "Grass"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Pin Missile",
                fr: "Dard-Nuée",
                es: "Pin Misil",
                it: "Missilspillo",
                de: "Nadelrakete",
                "pt-br": "Míssil de Espinhos",
                "zh-tw": "飛彈針",
                ja: "ミサイルばり",
                ko: "Pin Missile"
            },
            cost: [
                "Colorless",
                "Grass"
            ],
            damage: "20x",
            effect: {
                en: "Flip 4 coins. This attack does 20 damage for each heads.",
                fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
                es: "Lanza 4 monedas. Este ataque hace 20 puntos de daño por cada cara.",
                it: "Lancia 4 volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
                de: "Wirf 4 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 4 moedas. Este ataque causa 20 pontos de dano para cada cara.",
                "zh-tw": "擲4次硬幣,造成正面出現的次數×20點傷害。",
                ja: "コインを4回投げ、オモテの数×20ダメージ。",
                ko: "Flip 4 coins. This attack does 20 damage for each heads."
            }
        }
    ],
    abilities: [],
    description: {
        en: "The quills on its head are usually soft. When it flexes them, the points become so hard and sharp that they can pierce rock.",
        fr: "Lorsqu'il rassemble ses forces, les piquants souples qui recouvrent sa tête deviennent si durs et acérés qu'ils pourraient transpercer un rocher.",
        es: "Cuando contrae los músculos, las púas de su cabeza se vuelven tan duras y afiladas que hasta podrían atravesar rocas.",
        it: "Può indurire le punte sulla sua testa, di solito morbide, per farle diventare talmente affilate e appuntite da penetrare nella roccia.",
        de: "Wenn es seine Kraft auf die sonst eher weichen Stacheln auf seinem Kopf konzentriert, werden diese robust genug, um damit selbst Felsen zu durchdringen.",
        "pt-br": "Os espinhos em sua cabeça geralmente são macios. Quando ele os flexiona, as pontas tornam-se tão duras e afiadas que podem perfurar pedras.",
        "zh-tw": "頭上的刺平時很柔軟，一旦使力就會變得尖銳，甚至能刺穿岩石。",
        ja: "普段 やわらかい 頭の トゲは 力を こめると 鋭く とがり 岩をも つらぬくほど 硬くなる。",
        ko: "The quills on its head are usually soft. When it flexes them, the points become so hard and sharp that they can pierce rock."
    }
};

export default card;
