import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/207",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/207",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/207",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/207",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/207",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/207",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/207"
    },
    name: {
        en: "Crobat ex",
        "fr": "Nostenfer-ex",
        "es": "Crobat ex",
        "it": "Crobat-ex",
        "de": "Iksbat-ex",
        "pt-br": "Crobat ex",
        "zh-tw": "叉字蝠ex",
    },
    illustrator: "Shinji Kanda",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 170,
    types: ["Darkness"],
    evolveFrom: {
        en: "Golbat",
        "fr": "Golbat",
        "es": "Golbat",
        "it": "Golbat",
        "de": "Golbat",
        "pt-br": "Golbat",
        "zh-tw": "大嘴蝠"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Venomous Slash",
                "fr": "Tranche venimeuse",
                "es": "Tajo venenoso",
                "it": "Taglio velenoso",
                "de": "Giftiger Hieb",
                "pt-br": "Corte Venenoso",
                "zh-tw": "劇毒斬"
            },
            damage: 70,
            cost: ["Darkness"],
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Empoisonné.",
                "es": "El Pokémon Activo de tu rival ahora está Envenenado.",
                "it": "Il Pokémon attivo del tuo avversario ora è avvelenato.",
                "de": "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "你對手的主動神奇寶貝現在中毒了。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
