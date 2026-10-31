import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/159",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/159",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/159",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/159",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/159",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/159",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/159",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/159"
    },
    name: {
        en: "Lycanroc ex",
        fr: "Lougaroc-ex",
        es: "Lycanroc ex",
        "pt-br": "Lycanroc ex",
        "zh-tw": "鬃岩狼人ex",
        ja: "ルガルガンex",
        ko: "루가루암 ex",
        it: "Lycanroc-ex",
        de: "Wolwerock-ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Star",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 150,
    types: [
        "Fighting"
    ],
    stage: "Stage1",
    retreat: 2,
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Rockruff",
        fr: "Rocabot",
        es: "Rockruff",
        it: "Rockruff",
        de: "Wuffels",
        "pt-br": "Rockruff",
        "zh-tw": "岩狗狗",
        ja: "イワンコ",
        ko: "Rockruff"
    },
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Slashing Claw",
                fr: "Griffe Taillante",
                es: "Garra Cuchillazo",
                it: "Artigli Laceranti",
                de: "Schlitzende Klaue",
                "pt-br": "Garra Cortadora",
                "zh-tw": "利爪揮砍",
                ja: "スラッシュクロー",
                ko: "Slashing Claw"
            },
            cost: [
                "Colorless",
                "Fighting"
            ],
            damage: 70
        }
    ],
    abilities: [
        {
            name: {
                en: "Reflexive Retaliation",
                fr: "Contre-Offensive",
                es: "Venganza Meditada",
                it: "Autoritorsione",
                de: "Reflex-Vergeltung",
                "pt-br": "Retaliação Reflexiva",
                "zh-tw": "反擊回去",
                ja: "ストライクバック",
                ko: "Reflexive Retaliation"
            },
            effect: {
                en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, do 30 damage to the Attacking Pokémon.",
                fr: "Si ce Pokémon est sur le Poste Actif et subit les dégâts d'une attaque d'un Pokémon de votre adversaire, le Pokémon Attaquant subit 30 dégâts.",
                es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival, el Pokémon Atacante sufre 30 puntos de daño.",
                it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, il Pokémon attaccante subisce 30 danni.",
                de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält, füge dem Angreifenden Pokémon 30 Schadenspunkte zu.",
                "pt-br": "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente, cause 30 pontos de dano ao Pokémon Atacante.",
                "zh-tw": "這隻寶可夢在戰鬥場受到對手的寶可夢招式的傷害時,使用招式的寶可夢受到30點傷害。",
                ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンに30ダメージ。",
                ko: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, do 30 damage to the Attacking Pokémon."
            },
            type: "Ability"
        }
    ]
};

export default card;
