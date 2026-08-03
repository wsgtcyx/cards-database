import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/228",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/228",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/228",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/228",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/228",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/228",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/228"
    },
    name: {
        en: "Jolteon ex",
        fr: "Voltali-ex",
        es: "Jolteon ex",
        it: "Jolteon-ex",
        de: "Blitza-ex",
        "pt-br": "Jolteon ex",
        "zh-tw": "雷伊布ex",
        ko: "쥬피썬더 ex",
        ja: "サンダースex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Lightning"],
    dexId: [135],
    evolveFrom: {
        en: "Eevee",
        fr: "Évoli",
        es: "Eevee",
        it: "Eevee",
        de: "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ko: "이브이",
        ja: "イーブイ"
    },
    stage: "Stage1",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Electromagnetic Wall",
                fr: "Mur électromagnétique",
                es: "Pared electromagnética",
                it: "Muro elettromagnetico",
                de: "Elektromagnetische Wand",
                "pt-br": "Parede Eletromagnética",
                "zh-tw": "電磁牆"
            },
            effect: {
                en: "As long as this Pokémon is in the Active Spot, whenever your opponent attaches an Energy from their Energy Zone to 1 of their Pokémon, do 20 damage to that Pokémon.",
                fr: "Tant que ce Pokémon est dans le Point Actif, chaque fois que votre adversaire attache une Énergie de sa Zone d'Énergie à 1 de ses Pokémon, infligez 20 dégâts à ce Pokémon.",
                es: "Mientras este Pokémon esté en el Punto Activo, cada vez que tu oponente vincule una Energía de su Zona de Energía a 1 de sus Pokémon, hazle 20 daños a ese Pokémon.",
                it: "Fintanto che questo Pokémon è in posizione attiva, ogni volta che il tuo avversario assegna un'Energia dalla sua Zona di Energia a uno dei suoi Pokémon, infliggi 20 danni a quel Pokémon.",
                de: "Solange sich dieses Pokémon an der aktiven Stelle befindet, füge deinem Gegner jedes Mal, wenn er eine Energie aus seiner Energiezone an eines seiner Pokémon anlegt, diesem Pokémon 20 Schadenspunkte zu.",
                "pt-br": "Enquanto este Pokémon estiver no Ponto Ativo, sempre que seu oponente ligar uma Energia da Zona de Energia dele a 1 de seus Pokémon, cause 20 de dano a esse Pokémon.",
                "zh-tw": "只要這只寶可夢在活躍點，每當你的對手將能量區中的能量附加到他們的一隻寶可夢上時，就會對該寶可夢造成 20 點傷害。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Lightning", "Lightning"],
            name: {
                en: "Mach Bolt",
                fr: "Éclair Fulgurant",
                es: "Rayo Mach",
                it: "Fulmine Mach",
                de: "Flotter Sprung",
                "pt-br": "Raio Supersônico",
                "zh-tw": "音速伏特"
            },
            damage: 80
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
