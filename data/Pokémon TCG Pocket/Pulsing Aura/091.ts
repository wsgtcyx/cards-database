import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/091",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/091"
    },
    name: {
        en: "Bewear",
        fr: "Chelours",
        es: "Bewear",
        it: "Bewear",
        de: "Kosturso",
        "pt-br": "Bewear",
        "zh-tw": "穿著熊",
        ko: "이븐곰",
        ja: "キテルグマ"
    },
    illustrator: "Nisota Niso",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Fighting"],
    dexId: [760],
    evolveFrom: {
        en: "Stufful",
        fr: "Nounourson",
        es: "Stufful",
        it: "Stufful",
        de: "Velursi",
        "pt-br": "Stufful",
        "zh-tw": "童偶熊",
        ko: "포곰곰",
        ja: "ヌイコグマ"
    },
    stage: "Stage1",
    description: {
        en: "This immensely dangerous Pokémon possesses overwhelming physical strength. Its habitat is generally off-limits.",
        fr: "Sa force physique hors norme le rend assez\ndangereux. D’ailleurs, les zones qu’il habite sont\nsystématiquement interdites d’accès.",
        es: "Es un Pokémon muy peligroso por su fuerza\ndescomunal. Normalmente, se desaconseja\npenetrar en su hábitat.",
        it: "La sua devastante forza fisica lo rende\nestremamente pericoloso, tanto che di solito\nè vietato l’accesso alle zone in cui vive.",
        de: "Dieses Pokémon verfügt über immense\nMuskelkraft und ist äußerst gefährlich.\nSein Habitat ist generell Sperrgebiet.",
        "pt-br": "Este Pokémon imensamente perigoso possui uma força física avassaladora. Seu habitat geralmente está fora dos limites.",
        "zh-tw": "擁有壓倒性的肌肉力量，\n是非常危險的寶可夢。\n棲息地基本上是禁止進入。"
    },
    attacks: [
        {
            cost: ["Fighting", "Colorless", "Colorless"],
            name: {
                en: "Triple Smash",
                fr: "Triple Éclate",
                es: "Golpe Triple",
                it: "Tripla Schiacciata",
                de: "Dreifachschmetterer",
                "pt-br": "Pancada Tripla",
                "zh-tw": "三重粉碎"
            },
            effect: {
                en: "Flip 3 coins. This attack does 50 damage for each heads.",
                fr: "Lancez 3 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
                es: "Lanza 3 monedas. Este ataque hace 50 puntos de daño por cada cara.",
                it: "Lancia 3 volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
                de: "Wirf 3 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 3 moedas. Este ataque causa 50 pontos de dano para cada cara.",
                "zh-tw": "翻轉 3 個硬幣。這次攻擊對每個頭造成 50 點傷害。"
            },
            damage: "50x"
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
