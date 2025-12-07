import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Buzzwole ex",
        "fr": "Ex-Buzzwole",
        "es": "Buzzwole ex",
        "it": "Buzzwole ex",
        "de": "Buzzwole ex",
        "pt-br": "Ex-Buzzwole",
        "zh-tw": "巴斯沃勒EX"
    },
    illustrator: "PLANETA Mochizuki",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Grass"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Punch",
                "fr": "Punch",
                "es": "Puñetazo",
                "it": "Punch",
                "de": "Stempel",
                "pt-br": "Soco",
                "zh-tw": "沖床"
            },
            damage: 30,
            cost: ["Colorless", "Colorless"]
        }, {
            name: {
                en: "Big Beat",
                "fr": "Gros rythme",
                "es": "gran ritmo",
                "it": "Grande colpo",
                "de": "Großer Schlag",
                "pt-br": "Grande batida",
                "zh-tw": "大節奏"
            },
            damage: 120,
            cost: ["Grass", "Grass", "Colorless"],
            effect: {
                en: "During your next turn, this Pokémon can't use Big Beat.",
                "fr": "Lors de votre prochain tour, ce Pokémon ne pourra pas utiliser Big Beat.",
                "es": "Durante tu próximo turno, este Pokémon no puede usar Big Beat.",
                "it": "Durante il tuo prossimo turno, questo Pokémon non può usare Big Beat.",
                "de": "Während deines nächsten Zuges kann dieses Pokémon Big Beat nicht verwenden.",
                "pt-br": "Durante o seu próximo turno, este Pokémon não poderá usar Big Beat.",
                "zh-tw": "在你的下一個回合中，這只神奇寶貝不能使用Big Beat。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
