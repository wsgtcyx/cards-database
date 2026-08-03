import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/030",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/030",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/030",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/030",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/030",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/030",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/030"
    },
    name: {
        en: "Darmanitan",
        fr: "Darumacho",
        es: "Darmanitan",
        it: "Darmanitan",
        de: "Flampivian",
        "pt-br": "Darmanitan",
        "zh-tw": "達摩狒狒",
        ko: "불비달마",
        ja: "ヒヒダルマ"
    },
    illustrator: "Yuya Oka",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fire"],
    dexId: [555],
    evolveFrom: {
        en: "Darumaka",
        fr: "Darumarond",
        es: "Darumaka",
        it: "Darumaka",
        de: "Flampion",
        "pt-br": "Darumaka",
        "zh-tw": "火紅不倒翁",
        ko: "달막화",
        ja: "ダルマッカ"
    },
    stage: "Stage1",
    description: {
        en: "The thick arms of this hot-blooded Pokémon can deliver punches capable of obliterating a dump truck.",
        fr: "Véritable tête brûlée, il possède assez de force\ndans ses gros bras pour réduire en poussière\nun camion-benne à coups de poing.",
        es: "Un Pokémon sumamente enérgico. Tiene tanta\nfuerza en los brazos que es capaz de destrozar\nun camión a base de puñetazos.",
        it: "Pokémon dal sangue caldo. I pugni che sferra\ncon i suoi massicci arti superiori possono\nridurre in polvere anche un autocarro.",
        de: "Dieses Pokémon ist ausgesprochen energisch. Ein\neinziger Hieb mit seinen gewaltigen Armen macht\nselbst Lastwagen dem Erdboden gleich.",
        "pt-br": "Os braços grossos deste Pokémon de sangue quente podem desferir socos capazes de destruir um caminhão basculante.",
        "zh-tw": "總是熱血沸騰的寶可夢。\n牠厚重的手臂使出的拳擊\n甚至能把砂石車打得粉碎。"
    },
    attacks: [
        {
            cost: ["Fire"],
            name: {
                en: "Double Smash",
                fr: "Double Broiement",
                es: "Golpe Doble",
                it: "Colpo Duplice",
                de: "Doppelstoß",
                "pt-br": "Bordoada Dupla",
                "zh-tw": "雙重粉碎"
            },
            effect: {
                en: "Flip 2 coins. This attack does 40 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
                es: "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara.",
                it: "Lancia 2 volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
                de: "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 40 pontos de dano para cada cara.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 40 點傷害。"
            },
            damage: "40x"
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
