import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Larvitar",
        "fr": "Larvitar",
        "es": "Larvitar",
        "it": "Larvitar",
        "de": "Larvitar",
        "pt-br": "larvitar",
        "zh-tw": "由基拉",
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    description: {
        en: "Born deep underground, this Pokémon\nbecomes a pupa after eating enough\ndirt to make a mountain.",
        "fr": "Né profondément sous terre, ce Pokémon\ndevient une pupe après avoir mangé suffisamment\nterre pour faire une montagne.",
        "es": "Nacido en las profundidades de la tierra, este Pokémon\nse convierte en pupa después de comer lo suficiente\ntierra para hacer una montaña.",
        "it": "Nato nelle profondità del sottosuolo, questo Pokémon\ndiventa una pupa dopo aver mangiato abbastanza\nterra per fare una montagna.",
        "de": "Dieses Pokémon wurde tief unter der Erde geboren\nWird nach ausreichender Nahrungsaufnahme zur Puppe\nDreck, um einen Berg zu machen.",
        "pt-br": "Nascido nas profundezas do subsolo, este Pokémon\nvira uma pupa depois de comer o suficiente\nsujeira para fazer uma montanha.",
        "zh-tw": "這只神奇寶貝出生在地下深處\n吃飽後變成蛹\n泥土可以造山。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tackle",
                "fr": "Tacle",
                "es": "Abordar",
                "it": "Attrezzatura",
                "de": "Tackle",
                "pt-br": "Enfrentar",
                "zh-tw": "處理"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
