import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/087",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/087",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/087",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/087",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/087",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/087",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/087"
    },
    name: {
        en: "Jolteon ex",
        fr: "Voltali-ex",
        es: "Jolteon ex",
        it: "Jolteon-ex",
        de: "Blitza-ex",
        "pt-br": "Jolteon ex",
        "zh-tw": "雷伊布ex",
        ja: "サンダースex",
        ko: "쥬피썬더 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 140,
    types: [
        "Lightning"
    ],
    evolveFrom: {
        en: "Eevee",
        fr: "Évoli",
        es: "Eevee",
        it: "Eevee",
        de: "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ja: "Eevee",
        ko: "Eevee"
    },
    stage: "Stage1",
    suffix: "EX",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Electromagnetic Wall",
                fr: "Mur Électromagnétique",
                es: "Muro Electromagnético",
                it: "Magnetomuro",
                de: "Elektromagnetischer Wall",
                "pt-br": "Parede Eletromagnética",
                "zh-tw": "電磁牆",
                ja: "Electromagnetic Wall",
                ko: "Electromagnetic Wall"
            },
            effect: {
                en: "As long as this Pokémon is in the Active Spot, whenever your opponent attaches an Energy from their Energy Zone to 1 of their Pokémon, do 20 damage to that Pokémon.",
                fr: "Tant que ce Pokémon est sur le Poste Actif, chaque fois que votre adversaire attache une carte Énergie de sa zone Énergie à un de ses Pokémon, infligez 20 dégâts au Pokémon de l'adversaire.",
                es: "Mientras este Pokémon esté en el Puesto Activo, cada vez que tu rival una 1 Energía de su área de Energía a 1 de sus Pokémon, haz 20 puntos de daño a ese Pokémon.",
                it: "Fintanto che questo Pokémon è in posizione attiva, ogni volta che l'avversario assegna un'Energia dalla sua Zona Energia a uno dei suoi Pokémon, quel Pokémon subisce 20 danni.",
                de: "Solange dieses Pokémon in der Aktiven Position ist, füge jedes Mal, wenn dein Gegner Energie aus seinem Energiebereich an 1 seiner Pokémon anlegt, jenem Pokémon 20 Schadenspunkte zu.",
                "pt-br": "Enquanto este Pokémon estiver no Campo Ativo, sempre que seu oponente ligar uma Energia da Zona de Energia dele a 1 dos Pokémon dele, cause 20 pontos de dano àquele Pokémon.",
                "zh-tw": "只要這隻寶可夢在戰鬥場上,對手每次從能量區將能量附於寶可夢身上時,該寶可夢受到20點傷害。",
                ja: "As long as this Pokémon is in the Active Spot, whenever your opponent attaches an Energy from their Energy Zone to 1 of their Pokémon, do 20 damage to that Pokémon.",
                ko: "As long as this Pokémon is in the Active Spot, whenever your opponent attaches an Energy from their Energy Zone to 1 of their Pokémon, do 20 damage to that Pokémon."
            }
        }
    ],
    attacks: [
        {
            name: {
                en: "Mach Bolt",
                fr: "Éclair Fulgurant",
                es: "Rayo Mach",
                it: "Fulmine Mach",
                de: "Flotter Sprung",
                "pt-br": "Raio Supersônico",
                "zh-tw": "音速伏特",
                ja: "Mach Bolt",
                ko: "Mach Bolt"
            },
            damage: 80,
            cost: [
                "Lightning",
                "Lightning"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
