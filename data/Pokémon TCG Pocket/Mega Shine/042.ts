import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/042",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/042",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/042",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/042",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/042",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/042",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/042"
    },
    name: {
        en: "Garbodor",
        fr: "Miasmax",
        es: "Garbodor",
        it: "Garbodor",
        de: "Deponitox",
        "pt-br": "Garbodor",
        "zh-tw": "灰塵山",
        ko: "더스트나",
        ja: "ダストダス"
    },
    illustrator: "sui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Darkness"],
    dexId: [569],
    evolveFrom: {
        en: "Trubbish",
        fr: "Miamiasme",
        es: "Trubbish",
        it: "Trubbish",
        de: "Unratütox",
        "pt-br": "Trubbish",
        "zh-tw": "破破袋",
        ko: "깨봉이",
        ja: "ヤブクロン"
    },
    stage: "Stage1",
    description: {
        en: "The toxic liquid it launches from its right arm is so virulent that it can kill a weakened creature instantly.",
        fr: "Le liquide qu’il projette de son bras droit\nest si toxique que si une créature fragile\nen est aspergée, elle succombe sur-le-champ.",
        es: "El veneno líquido que brota de su brazo derecho\nes tan nocivo que puede acabar con una criatura\nya débil al menor contacto.",
        it: "Il veleno che spruzza dall’arto destro è talmente\ntossico da risultare istantaneamente letale\nper le creature già debilitate.",
        de: "Die toxische Flüssigkeit aus seinem rechten Arm\nist sehr gefährlich. Angeschlagene Lebewesen\nkommen bei Kontakt sofort ums Leben.",
        "pt-br": "O líquido tóxico que lança do braço direito é tão virulento que pode matar instantaneamente uma criatura enfraquecida.",
        "zh-tw": "從右臂噴出的毒液十分危險，\n虛弱的生物只要一沾到，\n立刻就會丟掉性命。"
    },
    attacks: [
        {
            cost: ["Darkness", "Darkness"],
            name: {
                en: "Sludge Whirlpool",
                fr: "Tourbillon de Boue",
                es: "Torbellino de Residuos",
                it: "Fangovortice",
                de: "Schlammstrudel",
                "pt-br": "Redemoinho de Lodo",
                "zh-tw": "污泥旋渦"
            },
            damage: 70
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
