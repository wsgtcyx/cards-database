import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/039",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/039",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/039",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/039",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/039",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/039",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/039"
    },
    name: {
        en: "Weavile",
        fr: "Dimoret",
        es: "Weavile",
        it: "Weavile",
        de: "Snibunna",
        "pt-br": "Weavile",
        "zh-tw": "瑪狃拉",
        ko: "포푸니라",
        ja: "マニューラ"
    },
    illustrator: "Misa Tsutsui",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Darkness"],
    dexId: [461],
    evolveFrom: {
        en: "Sneasel",
        fr: "Farfuret",
        es: "Sneasel",
        it: "Sneasel",
        de: "Sniebel",
        "pt-br": "Sneasel",
        "zh-tw": "狃拉",
        ko: "포푸니",
        ja: "ニューラ"
    },
    stage: "Stage1",
    description: {
        en: "They travel in groups of four or five, leaving signs for one another on trees and rocks. They bring down their prey with coordinated attacks.",
        fr: "Il se déplace en groupe de quatre ou cinq. Lors\nde la chasse, il laisse des signes sur les arbres\nou les rochers pour communiquer efficacement.",
        es: "Siempre van en grupos de cuatro o cinco. Dejan\nmarcas en rocas y árboles al cazar para\ncoordinarse con sus compañeros.",
        it: "Si muove in gruppi di quattro o cinque individui.\nDurante la caccia, si coordina con i compagni\nlasciando dei segni sulle rocce e sugli alberi.",
        de: "Sie sind immer zu viert oder fünft unterwegs.\nBei der Jagd arbeiten sie zusammen, indem\nsie Zeichen in Felsen und Bäume ritzen.",
        "pt-br": "Eles viajam em grupos de quatro ou cinco, deixando sinais uns para os outros em árvores e pedras. Eles derrubam suas presas com ataques coordenados.",
        "zh-tw": "４～５隻一組行動。\n在岩石和樹木上留下記號，\n以團隊合作捕殺獵物。"
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Raid",
                fr: "Razzia Obscure",
                es: "Raid Oscuro",
                it: "Raid",
                de: "Überfall",
                "pt-br": "Reide",
                "zh-tw": "襲擊"
            },
            effect: {
                en: "If this Pokémon evolved from Sneasel during this turn, this attack does 20 more damage.",
                fr: "Si ce Pokémon a évolué à partir de Farfuret pendant ce tour, cette attaque inflige 20 dégâts supplémentaires.",
                es: "Si este Pokémon evolucionó de Sneasel durante este turno, este ataque hace 20 puntos de daño más.",
                it: "Se questo Pokémon si è evoluto da Sneasel durante questo turno, questo attacco infligge 20 danni in più.",
                de: "Wenn sich dieses Pokémon in diesem Zug aus Sniebel entwickelt hat, fügt dieser Angriff 20 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon evoluiu de Sneasel durante este turno, este ataque causará 20 danos a mais.",
                "zh-tw": "如果這隻寶可夢在本回合中從 狃拉 進化，則此攻擊造成的傷害增加 20 點。"
            },
            damage: "40+"
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
