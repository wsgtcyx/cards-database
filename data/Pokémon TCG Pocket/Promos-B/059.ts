import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/059",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/059",
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/059",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/059",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/059",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/059",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/059",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/P-B/059",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/P-B/059"
    },
    name: {
        en: "Dwebble",
        fr: "Crabicoque",
        es: "Dwebble",
        it: "Dwebble",
        de: "Lithomith",
        "pt-br": "Dwebble",
        "zh-tw": "石居蟹",
        ko: "돌살이",
        ja: "イシズマイ"
    },
    illustrator: "Akira Komayama",
    rarity: "None",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    dexId: [557],
    stage: "Basic",
    description: {
        en: "It first tries to find a rock to live in, but if there are no suitable rocks to be found, Dwebble may move in to the ports of a Hippowdon.",
        fr: "S’il ne trouve pas de bon caillou à creuser\npour s’y loger, il élit domicile dans un des trous\ndu corps d’Hippodocus.",
        es: "Si no encuentra una piedra que sea idónea como\nmorada, se instala en los orificios de algún\nHippowdon.",
        it: "A volte, quando non riesce a trovare una pietra\nadatta, usa come sua dimora i pori\ndi Hippowdon.",
        de: "Wenn es keinen Stein findet, der sich als Haus\neignet, lässt es sich manchmal in den Öffnungen\nim Körper eines Hippoterus’ nieder.",
        "pt-br": "Ele primeiro tenta encontrar uma rocha para viver, mas se não houver rochas adequadas para serem encontradas, Dwebble pode se mudar para os portos de um Hippowdon.",
        "zh-tw": "如果找不到大小合適\n的石頭來當成自己的家，\n牠也會住到河馬獸的洞裡。",
        ja: "家に ちょうどいい 小石が 見つからないと カバルドンの 穴に 棲んでしまうことも。",
        ko: "집으로 삼기 딱 좋은 돌멩이를\n발견하지 못하면 하마돈의\n구멍에 살기도 한다."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Shell Armor",
                fr: "Coque Armure",
                es: "Caparazón",
                it: "Guscioscudo",
                de: "Panzerhaut",
                "pt-br": "Armadura de Concha",
                "zh-tw": "硬殼盔甲",
                ja: "シェルアーマー",
                ko: "조가비갑옷"
            },
            effect: {
                en: "This Pokémon takes -10 damage from attacks.",
                fr: "Ce Pokémon subit - 10 dégâts provenant des attaques.",
                es: "Los ataques hacen -10 puntos de daño a este Pokémon.",
                it: "Questo Pokémon subisce -10 danni dagli attacchi.",
                de: "Diesem Pokémon werden durch Attacken - 10 Schadenspunkte zugefügt.",
                "pt-br": "Este Pokémon recebe -10 pontos de dano de ataques.",
                "zh-tw": "該寶可夢受到的攻擊傷害為 -10。",
                ja: "このポケモンが受けるワザのダメージを-10する。",
                ko: "이 포켓몬이 받는 기술의 데미지를 -10한다."
            }
        }
    ],
    attacks: [
        {
            cost: ["Fighting"],
            name: {
                en: "Stampede",
                fr: "Ruée",
                es: "Estampida",
                it: "Fuggi Fuggi",
                de: "Zertrampeln",
                "pt-br": "Estouro",
                "zh-tw": "踩",
                ja: "ふむ",
                ko: "밟기"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 2,
    boosters: ["vol8"]
};

export default card;
