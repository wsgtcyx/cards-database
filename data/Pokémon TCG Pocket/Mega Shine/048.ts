import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/048",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/048",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/048",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/048",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/048",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/048",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/048"
    },
    name: {
        en: "Kartana",
        fr: "Katagami",
        es: "Kartana",
        it: "Kartana",
        de: "Katagami",
        "pt-br": "Kartana",
        "zh-tw": "紙御劍",
        ko: "종이신도",
        ja: "カミツルギ"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    dexId: [798],
    stage: "Basic",
    description: {
        en: "Although it’s alien to this world and a danger here, it’s apparently a common organism in the world where it normally lives.",
        fr: "Cette créature venue d’ailleurs est dangereuse\ndans notre monde, mais il semblerait qu’elle soit\ntrès commune dans le sien.",
        es: "Para los seres de este mundo resulta extraño\ny peligroso, pero en el mundo del que procede\nes una criatura muy común.",
        it: "Nel nostro mondo il suo aspetto appare strano\ne minaccioso, ma sembra che in quello da cui\nproviene sia una creatura molto comune.",
        de: "In dieser Welt wirkt sein Aussehen gefährlich\nund fremdartig, doch in seiner ursprünglichen\nWelt ist es ein ganz gewöhnliches Lebewesen.",
        "pt-br": "Embora seja estranho a este mundo e seja um perigo aqui, aparentemente é um organismo comum no mundo onde normalmente vive.",
        "zh-tw": "在這個世界是危險的異類，\n但在原本棲息的世界裡，\n牠似乎是常見的普通生物。"
    },
    attacks: [
        {
            cost: ["Metal"],
            name: {
                en: "Thrash Metal",
                fr: "Thrash Metal",
                es: "Thrash Metal",
                it: "Thrash Metal",
                de: "Thrash Metal",
                "pt-br": "Thrash Metal",
                "zh-tw": "死亡迅斬"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
