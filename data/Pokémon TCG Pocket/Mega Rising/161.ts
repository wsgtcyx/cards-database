import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Mareanie",
        "fr": "Maréanie",
        "es": "Mareanie",
        "it": "Mareanie",
        "de": "Mareanie",
        "pt-br": "Mareanie",
        "zh-tw": "好壞星",
    },
    illustrator: "Aya Kusube",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "It has excellent regenerative capabilities. Legs\nthat a Mareanie has lost have a very bitter,\nastringent flavor—they're not suitable as food.",
        "fr": "Il possède d’excellentes capacités de régénération. Jambes\nqu'une Mareanie a perdu a un très amer,\nsaveur astringente – ils ne conviennent pas comme aliment.",
        "es": "Tiene excelentes capacidades regenerativas. Piernas\nque una Mareanie ha perdido tiene una muy amarga,\nsabor astringente: no son adecuados como alimento.",
        "it": "Ha eccellenti capacità rigenerative. Gambe\nche un Mareanie ha perso ha un sapore molto amaro,\nsapore astringente: non sono adatti come cibo.",
        "de": "Es verfügt über hervorragende Regenerationsfähigkeiten. Beine\nDass eine Mareanie verloren hat, hat einen sehr bitteren,\nadstringierender Geschmack – sie sind nicht als Lebensmittel geeignet.",
        "pt-br": "Possui excelentes capacidades regenerativas. Pernas\nque uma Mareanie perdeu é muito amarga,\nsabor adstringente - eles não são adequados como alimento.",
        "zh-tw": "它具有出色的再生能力。腿\nMareanie 失去了一個非常痛苦的人，\n味道澀，不適合作為食品。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Poison Sting",
                "fr": "Piqûre de poison",
                "es": "Picadura de veneno",
                "it": "Puntura di veleno",
                "de": "Giftstich",
                "pt-br": "Picada Venenosa",
                "zh-tw": "毒刺"
            },
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
    retreat: 1
};
export default card;
