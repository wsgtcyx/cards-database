import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/003",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/003",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/003",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/003",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/003",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/003",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/003"
    },
    name: {
        en: "Snivy",
        fr: "Vipélierre",
        es: "Snivy",
        it: "Snivy",
        de: "Serpifeu",
        "pt-br": "Snivy",
        "zh-tw": "藤藤蛇",
        ko: "주리비얀",
        ja: "ツタージャ"
    },
    illustrator: "Atsuko Nishida",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    dexId: [495],
    stage: "Basic",
    description: {
        en: "It prefers to avoid groups. In its day-to-day life, it dexterously controls its vines to compensate for its short arms.",
        fr: "Il n'aime pas la vie de groupe. Ses bras étant courts, il se sert plutôt de ses lianes avec dextérité dans sa vie quotidienne.",
        es: "Debido a su carácter, prefiere no formar grupos. En vez de sus cortos brazos, utiliza las lianas con gran habilidad en su día a día.",
        it: "Per sua natura non ama vivere in gruppo. Nelle attività quotidiane, usa con maestria le sue liane al posto delle braccia corte.",
        de: "Es schließt sich nicht gern zu Gruppen zusammen. Statt seiner kurzen Arme nutzt es im Alltag seine Ranken, die es geschickt kontrollieren kann.",
        "pt-br": "Este Pokémon prefere evitar multidões. No dia a dia, controla suas vinhas com habilidade para compensar seus braços curtos.",
        "zh-tw": "生性不愛群體行動。在生活中會靈巧操縱藤蔓來代替短短的手臂。"
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Leaf Boomerang",
                fr: "Feuille-Boomerang",
                es: "Boomerang Hoja",
                it: "Fogliamerang",
                de: "Blätter-Bumerang",
                "pt-br": "Folha Bumerangue",
                "zh-tw": "飛葉回力鏢"
            },
            effect: {
                en: "Flip 2 coins. This attack does 20 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
                es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
                it: "Lancia 2 volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
                de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
                "zh-tw": "擲2次硬幣,造成正面出現的次數×20點傷害。"
            },
            damage: "20x"
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
