import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Venusaur",
        "fr": "Florizarre",
        "es": "Venusaur",
        "it": "Venusaur",
        "de": "Bisaflor",
        "pt-br": "Venusaur",
        "zh-tw": "妙蛙花"
    },
    illustrator: "Eske Yoshinob",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Grass"],
    evolveFrom: {
        en: "Ivysaur",
        "fr": "Herbizarre",
        "es": "Ivysaur",
        "it": "Ivysaur",
        "de": "Bisaknosp",
        "pt-br": "Ivysaur",
        "zh-tw": "妙蛙草"
    },
    description: {
        en: "A bewitching aroma wafts from its flower.\nThe fragrance becalms those engaged\nin a battle.",
        "fr": "Un arôme envoûtant se dégage de sa fleur.\nLe parfum calme les fiancés\ndans une bataille.",
        "es": "Un aroma fascinante emana de su flor.\nLa fragancia calma a los comprometidos.\nen una batalla.",
        "it": "Dal suo fiore si diffonde un profumo ammaliante.\nLa fragranza calma i fidanzati\nin una battaglia.",
        "de": "Ein betörender Duft entströmt seiner Blüte.\nDer Duft beruhigt die Verlobten\nin einer Schlacht.",
        "pt-br": "Um aroma encantador exala de sua flor.\nA fragrância acalma os noivos\nem uma batalha.",
        "zh-tw": "從它的花中散發出迷人的香氣。\n這款香水使那些訂婚的人平靜下來\n在一場戰鬥中。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Poisonous Whip",
                "fr": "Fouet venimeux",
                "es": "Látigo venenoso",
                "it": "Frusta Velenosa",
                "de": "Giftige Peitsche",
                "pt-br": "Chicote Venenoso",
                "zh-tw": "毒鞭"
            },
            damage: 90,
            cost: ["Grass", "Grass", "Colorless", "Colorless"],
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
            type: "Fire",
            value: "+20"
        }],
    retreat: 3
};
export default card;
