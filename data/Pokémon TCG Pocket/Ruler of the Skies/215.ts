import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/215",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/215",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/215",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/215",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/215",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/215",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/215"
    },
    name: {
        en: "Falinks",
        fr: "Hexadron",
        es: "Falinks",
        it: "Falinks",
        de: "Legios",
        "pt-br": "Falinks",
        "zh-tw": "列陣兵",
        ko: "대여르",
        ja: "タイレーツ"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    dexId: [870],
    stage: "Basic",
    description: {
        en: "The leader, known as the brass, uses its extendible horn to issue orders to the others when it's time to change formation."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Coordinated Unit",
                fr: "Unité Coordonnée",
                es: "Unidad Coordinada",
                it: "Unità coordinata",
                de: "Koordinierte Einheit",
                "pt-br": "Unidade Coordenada",
                "zh-tw": "團結一陣"
            },
            effect: {
                en: "If you have another Falinks in play, this Pokémon's attacks do +20 damage to your opponent's Active Pokémon, and this Pokémon takes −20 damage from attacks from your opponent's Pokémon.",
                fr: "Si vous avez un autre Hexadron en jeu, les attaques de ce Pokémon infligent + 20 dégâts au Pokémon Actif de votre adversaire, et ce Pokémon subit − 20 dégâts provenant des attaques des Pokémon de votre adversaire.",
                es: "Si tienes otro Falinks en juego, los ataques de este Pokémon hacen +20 puntos de daño al Pokémon Activo de tu rival, y los ataques de los Pokémon de tu rival hacen ‐20 puntos de daño a este Pokémon.",
                "pt-br": "Se você tiver outro Falinks em jogo, os ataques deste Pokémon causarão +20 pontos de dano ao Pokémon Ativo do seu oponente, e este Pokémon receberá −20 pontos de dano de ataques dos Pokémon do seu oponente.",
                "zh-tw": "若自己的場上有其他的「列陣兵」,則這隻寶可夢對對手的戰鬥寶可夢造成的招式傷害+20點,受到對手的寶可夢招式的傷害-20點。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Fighting"],
            name: {
                en: "Invade",
                fr: "Envahissement",
                es: "Invadir",
                it: "Invadere",
                de: "Einmarschieren",
                "pt-br": "Invadir",
                "zh-tw": "攻入"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
