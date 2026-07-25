import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/033",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/033",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/033",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/033",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/033",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/033"
    },
    name: {
        en: "Garganacl",
        fr: "Gigansel",
        es: "Garganacl",
        it: "Garganacl",
        de: "Saltigant",
        "pt-br": "Garganacl",
        "zh-tw": "鹽石巨靈",
        ko: "콜로솔트",
        ja: "キョジオーン"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Fighting"],
    dexId: [934],
    evolveFrom: {
        en: "Naclstack",
        fr: "Amassel",
        es: "Naclstack",
        it: "Naclstack",
        de: "Sedisal",
        "pt-br": "Naclstack",
        "zh-tw": "鹽石壘",
        ko: "스태솔트",
        ja: "ジオヅム"
    },
    stage: "Stage2",
    description: {
        en: "Many Pokémon gather around Garganacl, hoping to lick at its mineral-rich salt.",
        fr: "De nombreux Pokémon se rassemblent autour de Gigansel, dans l’espoir de lécher son sel riche en minéraux.",
        es: "Muchos Pokémon se reúnen alrededor de Garganacl con la esperanza de lamer su sal rica en minerales.",
        it: "Molti Pokémon si radunano attorno a Garganacl, sperando di leccare il suo sale ricco di minerali.",
        de: "Viele Pokémon versammeln sich um Saltigant und hoffen, das mineralreiche Salz zu lecken.",
        "pt-br": "Muitos Pokémon se reúnem em torno de Garganacl, na esperança de lamber seu sal rico em minerais.",
        "zh-tw": "許多寶可夢聚集在 鹽石巨靈 周圍，希望舔食其富含礦物質的鹽。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Blessed Salt",
                fr: "Sel béni",
                es: "Sal bendita",
                it: "Sale benedetto",
                de: "Gesegnetes Salz",
                "pt-br": "Sal Abençoado",
                "zh-tw": "恩澤之鹽"
            },
            effect: {
                en: "During Pokémon Checkup, heal 10 damage from each of your Pokémon.",
                fr: "Pendant Pokémon Checkup, soignez 10 dégâts de chacun de vos Pokémon.",
                es: "Durante el Chequeo Pokémon, cura 10 daños de cada uno de tus Pokémon.",
                it: "Durante il Controllo Pokémon, cura 10 danni a ciascuno dei tuoi Pokémon.",
                de: "Heile während des Pokémon-Checks 10 Schadenspunkte bei jedem deiner Pokémon.",
                "pt-br": "Durante o Pokémon Checkup, cure 10 pontos de dano de cada um dos seus Pokémon.",
                "zh-tw": "在寶可夢檢查期間，每隻寶可夢治療 10 點傷害。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Fighting", "Fighting", "Fighting"],
            name: {
                en: "Land Crush",
                fr: "Écras'Terre",
                es: "Aterrizaje",
                it: "Schiacciaterra",
                de: "Schollenbrecher",
                "pt-br": "Aperto de Terra",
                "zh-tw": "大地粉碎"
            },
            damage: 90
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
