import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/098",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/098",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/098",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/098",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/098",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/098"
    },
    name: {
        en: "Kangaskhan",
        fr: "Kangourex",
        es: "Kangaskhan",
        it: "Kangaskhan",
        de: "Kangama",
        "pt-br": "Kangaskhan",
        "zh-tw": "袋獸",
        ko: "캥카",
        ja: "ガルーラ"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 110,
    types: ["Colorless"],
    dexId: [115],
    stage: "Basic",
    description: {
        en: "There are records of a lost human child being raised by a childless Kangaskhan.",
        fr: "Certains documents certifient que les Kangourex\nsans progéniture élevaient des enfants humains\nen détresse.",
        es: "Se han documentado casos de Kangaskhan sin\ncrías que han adoptado bebés humanos cuyos\npadres habían sido víctimas de accidentes.",
        it: "Alcuni documenti parlano di Kangaskhan\nsenza cuccioli che hanno allevato bambini\numani dispersi.",
        de: "Es liegen Berichte vor, laut denen Kangama ohne\neigenen Nachwuchs stattdessen Menschenkinder\nin Not aufgezogen haben.",
        "pt-br": "Existem registros de uma criança humana perdida sendo criada por um Kangaskhan sem filhos.",
        "zh-tw": "紀錄中記載著，\n曾經有沒孩子的袋獸\n養育了遇難的人類孩子。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Steady Punch",
                fr: "Poing Énergétique",
                es: "Puño Firme",
                it: "Pugnosecco",
                de: "Ruhiger Schlag",
                "pt-br": "Soco Firme",
                "zh-tw": "連續擊拳"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                fr: "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
                es: "Lanza una moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                de: "Wirf eine Münze. Bei „Kopf“ verursacht dieser Angriff 30 weitere Schadenspunkte.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 30 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 30 點額外傷害。"
            },
            damage: "60+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
