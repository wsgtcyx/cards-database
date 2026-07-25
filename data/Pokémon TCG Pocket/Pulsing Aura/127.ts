import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/127",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/127",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/127",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/127",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/127",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/127"
    },
    name: {
        en: "Chansey",
        fr: "Leveinard",
        es: "Chansey",
        it: "Chansey",
        de: "Chaneira",
        "pt-br": "Chansey",
        "zh-tw": "吉利蛋",
        ko: "럭키",
        ja: "ラッキー"
    },
    illustrator: "Mizue",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    dexId: [113],
    stage: "Basic",
    description: {
        en: "This kindly Pokémon lays highly nutritious eggs and shares them with injured Pokémon or people.",
        fr: "Ce Pokémon très serviable distribue ses œufs hautement\nnutritifs aux êtres humains et aux Pokémon blessés.",
        es: "Un generoso Pokémon que pone huevos muy\nnutritivos y se los da a personas o Pokémon heridos.",
        it: "Un Pokémon altruista che depone\nuova molto nutrienti e le condivide\ncon persone o Pokémon feriti.",
        de: "Ein freundliches Pokémon, das nahrhafte Eier\nlegt, um diese mit verletzten Pokémon und\nMenschen zu teilen.",
        "pt-br": "Este Pokémon gentil bota ovos bastante nutritivos\ne os compartilha com pessoas ou Pokémon feridos.",
        "zh-tw": "這種善良的寶可夢會產下營養豐富的蛋，並與受傷的寶可夢或人類分享。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Bind Wound",
                fr: "Blessure Pansée",
                es: "Vendar Herida",
                it: "Cura Ferite",
                de: "Wunden verbinden",
                "pt-br": "Ligar Ferida",
                "zh-tw": "療傷"
            },
            effect: {
                en: "Heal 30 damage from 1 of your Pokémon.",
                fr: "Soignez 30 dégâts d'un de vos Pokémon.",
                es: "Cura 30 daños de 1 de tus Pokémon.",
                it: "Cura 30 danni da 1 dei tuoi Pokémon.",
                de: "Heile 30 Schadenspunkte bei 1 deiner Pokémon.",
                "pt-br": "Cure 30 de dano de 1 dos seus Pokémon.",
                "zh-tw": "治療你的 1 隻寶可夢造成的 30 點傷害。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
