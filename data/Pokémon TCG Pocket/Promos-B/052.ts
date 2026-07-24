import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/052",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/052"
    },
    name: {
        en: "Zygarde",
        fr: "Zygarde",
        es: "Zygarde",
        it: "Zygarde",
        de: "Zygarde",
        "pt-br": "Zygarde",
        "zh-tw": "基格爾德",
        ko: "지가르데",
        ja: "ジガルデ"
    },
    illustrator: "Shin Nagasawa",
    rarity: "None",
    category: "Pokemon",
    hp: 120,
    types: ["Fighting"],
    dexId: [718],
    stage: "Basic",
    description: {
        en: "Some say it can change to an even more powerful form when battling those who threaten the ecosystem.",
        fr: "Ce Pokémon serait capable de prendre\nune forme encore plus puissante quand il se bat\ncontre un ennemi qui menace l’écosystème.",
        es: "Según los rumores, puede adoptar una forma\naún más poderosa cuando se enfrenta a\nquienquiera que amenace el ecosistema.",
        it: "Si dice che possa assumere una forma ancora\npiù potente quando si trova di fronte un nemico\nche rappresenta una minaccia per l’ecosistema.",
        de: "Im Kampf gegen all jene, die das Ökosystem in\nGefahr bringen, nimmt es angeblich eine noch\nmächtigere Form an.",
        "pt-br": "Alguns dizem que pode mudar para uma forma ainda mais poderosa ao combater aqueles que ameaçam o ecossistema.",
        "zh-tw": "據說當牠與威脅到\n生態系統的對手戰鬥時，\n會變化成更強大的樣子。"
    },
    attacks: [
        {
            cost: ["Fighting", "Fighting", "Colorless"],
            name: {
                en: "Cell Storm",
                fr: "Tempête Cellulaire",
                es: "Tormenta Celular",
                it: "Tempesta Cellulare",
                de: "Zellsturm",
                "pt-br": "Célula de Tempestade",
                "zh-tw": "細胞風暴"
            },
            effect: {
                en: "Heal 20 damage from this Pokémon.",
                fr: "Soignez 20 dégâts de ce Pokémon.",
                es: "Cura 20 puntos de daño de este Pokémon.",
                it: "Cura questo Pokémon da 20 danni.",
                de: "Heile 20 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 20 de dano deste Pokémon.",
                "zh-tw": "治療該寶可夢造成的 20 點傷害。"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 2,
    boosters: ["vol7"]
};

export default card;
