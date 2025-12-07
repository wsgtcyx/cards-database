import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Crobat ex",
        "fr": "Ex-crobat",
        "es": "ex crobat",
        "it": "Crobat es",
        "de": "Crobat ex",
        "pt-br": "Ex-crobat",
        "zh-tw": "克羅巴特EX"
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
