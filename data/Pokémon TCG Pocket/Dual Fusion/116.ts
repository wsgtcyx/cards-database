import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/116",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/116",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/116",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/116",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/116",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/116",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/116"
    },
    name: {
        en: "Lopunny",
        fr: "Lockpin",
        es: "Lopunny",
        "pt-br": "Lopunny",
        "zh-tw": "長耳兔",
        ja: "ミミロップ",
        ko: "이어롭",
        it: "Lopunny",
        de: "Schlapor"
    },
    illustrator: "buchi",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 100,
    types: [
        "Colorless"
    ],
    stage: "Stage1",
    retreat: 1,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Buneary",
        fr: "Laporeille",
        es: "Buneary",
        it: "Buneary",
        de: "Haspiror",
        "pt-br": "Buneary",
        "zh-tw": "捲捲耳",
        ja: "Buneary",
        ko: "Buneary"
    },
    attacks: [
        {
            name: {
                en: "Rabbit Jumping",
                fr: "Bond de Lapin",
                es: "Brinconejo",
                it: "Saltelli da Coniglio",
                de: "Hasensprung",
                "pt-br": "Salto do Coelho",
                "zh-tw": "兔兒跳",
                ja: "Rabbit Jumping",
                ko: "Rabbit Jumping"
            },
            cost: [
                "Colorless"
            ],
            damage: "40x",
            effect: {
                en: "Flip 2 coins. This attack does 40 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
                es: "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara.",
                it: "Lancia 2 volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
                de: "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 40 pontos de dano para cada cara.",
                "zh-tw": "擲2次硬幣,造成正面出現的次數×40點傷害。",
                ja: "Flip 2 coins. This attack does 40 damage for each heads.",
                ko: "Flip 2 coins. This attack does 40 damage for each heads."
            }
        }
    ],
    abilities: [],
    description: {
        en: "Lopunny is constantly monitoring its surroundings. If danger approaches, this Pokémon responds with superdestructive kicks.",
        fr: "Constamment sur le qui-vive, il donne des coups de pied particulièrement dévastateurs si une menace approche.",
        es: "Está siempre atento a lo que ocurre a su alrededor. Si advierte peligro, se defenderá con patadas de potencia devastadora.",
        it: "Presta sempre attenzione all’ambiente circostante e in caso di pericolo sfodera calci di straordinaria potenza distruttiva.",
        de: "Schlapor behält seine Umgebung stets im Auge. Wenn Gefahr im Verzug ist, setzt es sich mit vernichtenden Tritten zur Wehr.",
        "pt-br": "Lopunny está constantemente monitorando seus arredores. Se o perigo se aproxima, este Pokémon responde com chutes superdestrutivos.",
        "zh-tw": "總是注意著周圍的狀況。危險逼近時，便會給予對手破壞力十足的踢腿。",
        ja: "Lopunny is constantly monitoring its surroundings. If danger approaches, this Pokémon responds with superdestructive kicks.",
        ko: "Lopunny is constantly monitoring its surroundings. If danger approaches, this Pokémon responds with superdestructive kicks."
    }
};

export default card;
