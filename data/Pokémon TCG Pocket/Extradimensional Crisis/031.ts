import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Claydol",
        "fr": "Claydol",
        "es": "Claydol",
        "it": "Claydol",
        "de": "Claydol",
        "pt-br": "Claydol",
        "zh-tw": "念力土偶",
    },
    illustrator: "Satoshi Shirai",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    evolveFrom: {
        en: "Baltoy",
        "fr": "Baltoy",
        "es": "baltoy",
        "it": "Baltoy",
        "de": "Baltoy",
        "pt-br": "Baltoy",
        "zh-tw": "巴爾托伊"
    },
    description: {
        en: "This mysterious Pokémon started life as an ancient\nclay figurine made over 20,000 years ago.",
        "fr": "Ce mystérieux Pokémon a commencé sa vie comme un ancien\nfigurine en argile fabriquée il y a plus de 20 000 ans.",
        "es": "Este misterioso Pokémon comenzó su vida como un antiguo\nFigurilla de arcilla realizada hace más de 20.000 años.",
        "it": "Questo Pokémon misterioso ha iniziato la sua vita da antico\nstatuina in argilla realizzata oltre 20.000 anni fa.",
        "de": "Dieses mysteriöse Pokémon begann sein Leben als Urmensch\nTonfigur, hergestellt vor über 20.000 Jahren.",
        "pt-br": "Este misterioso Pokémon começou a vida como um antigo\nestatueta de barro feita há mais de 20.000 anos.",
        "zh-tw": "這個神秘的神奇寶貝最初是一個古老的生物\n兩萬多年前製作的泥人。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Heal Block",
                "fr": "Blocage de guérison",
                "es": "Bloqueo de curación",
                "it": "Blocco della guarigione",
                "de": "Heilblockade",
                "pt-br": "Bloco de cura",
                "zh-tw": "治療方塊"
            },
            effect: {
                en: "Pokémon (both yours and your opponent's) can't be healed.",
                "fr": "Les Pokémon (le vôtre et celui de votre adversaire) ne peuvent pas être soignés.",
                "es": "Los Pokémon (tanto tuyos como de tu oponente) no se pueden curar.",
                "it": "I Pokémon (sia i tuoi che quelli del tuo avversario) non possono essere curati.",
                "de": "Pokémon (sowohl deine als auch die deines Gegners) können nicht geheilt werden.",
                "pt-br": "Pokémon (seus e do seu oponente) não podem ser curados.",
                "zh-tw": "神奇寶貝（你的和你對手的）無法被治愈。"
            }
        }],
    attacks: [{
            name: {
                en: "Power Beam",
                "fr": "Faisceau de puissance",
                "es": "Haz de energía",
                "it": "Fascio di potenza",
                "de": "Kraftstrahl",
                "pt-br": "Feixe de energia",
                "zh-tw": "動力光束"
            },
            damage: 50,
            cost: ["Colorless", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
