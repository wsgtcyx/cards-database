import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/116",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/116",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/116",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/116",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/116",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/116",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/116"
    },
    name: {
        en: "Dratini",
        fr: "Minidraco",
        es: "Dratini",
        it: "Dratini",
        de: "Dratini",
        "pt-br": "Dratini",
        "zh-tw": "迷你龍",
        ko: "미뇽",
        ja: "ミニリュウ"
    },
    illustrator: "Sekio",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Dragon"],
    dexId: [147],
    stage: "Basic",
    description: {
        en: "It is born large to start with. It repeatedly sheds its skin as it steadily grows longer.",
        fr: "Il est né grand pour commencer. Il perd sa peau à plusieurs reprises à mesure qu’il grandit régulièrement.",
        es: "Para empezar, nace grande. Muda repetidamente su piel a medida que crece constantemente.",
        it: "È nato grande per cominciare. Cambia ripetutamente la pelle mentre si allunga costantemente.",
        de: "Von Anfang an wird es groß geboren. Während es immer länger wird, häutet es sich immer wieder.",
        "pt-br": "Para começar, nasce grande. Ele troca de pele repetidamente à medida que cresce continuamente.",
        "zh-tw": "它一開始就很大。隨著它不斷變長，它會不斷地蛻皮。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Slam",
                fr: "Souplesse",
                es: "Atizar",
                it: "Schianto",
                de: "Slam",
                "zh-tw": "摔打",
                "pt-br": "Pancada Brusca"
            },
            effect: {
                en: "Flip 2 coins. This attack does 20 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
                es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
                it: "Lancia 2 monete. Questo attacco infligge 20 danni per ogni testa.",
                de: "Wirf 2 Münzen. Dieser Angriff verursacht 20 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
                "zh-tw": "擲2次硬幣,造成正面出現的次數×20點傷害。"
            },
            damage: "20x"
        }
    ],
    retreat: 1
};

export default card;
