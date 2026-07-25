import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/137",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/137",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/137",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/137",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/137"
    },
    name: {
        en: "Spinda",
        "fr": "Spinda",
        "es": "Spinda",
        "it": "Spinda",
        "de": "Spinda",
        "pt-br": "Spinda",
        "zh-tw": "斯賓達"
    },
    illustrator: "Shibuzoh.",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    description: {
        en: "Each Spinda's spot pattern is different. With its\nstumbling movements, it evades opponents'\nattacks brilliantly!",
        "fr": "Le motif de taches de chaque Spinda est différent. Avec son\nmouvements trébuchants, il échappe aux adversaires\nattaque avec brio !",
        "es": "El patrón de manchas de cada Spinda es diferente. con su\nmovimientos de tropiezo, evade los ataques de los oponentes.\nataca brillantemente!",
        "it": "Il modello di spot di ogni Spinda è diverso. Con il suo\nmovimenti incerti, elude gli avversari\nattacca brillantemente!",
        "de": "Das Fleckenmuster jedes Spindas ist anders. Mit seinem\nstolpernde Bewegungen, es weicht den Gegnern aus\ngreift brillant an!",
        "pt-br": "O padrão de pontos de cada Spinda é diferente. Com seu\nmovimentos cambaleantes, ele evita os adversários\nataca brilhantemente!",
        "zh-tw": "每個 Spinda 的斑點圖案都不同。以其\n動作跌跌撞撞，躲避對手\n攻擊華麗！"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Teetering Steps",
                "fr": "Étapes chancelantes",
                "es": "Pasos tambaleantes",
                "it": "Passi in bilico",
                "de": "Schwankende Schritte",
                "pt-br": "Passos oscilantes",
                "zh-tw": "搖搖欲墜的腳步"
            },
            damage: 40,
            cost: ["Colorless"],
            effect: {
                en: "This Pokémon is now Confused.",
                "fr": "Ce Pokémon est maintenant Confus.",
                "es": "Este Pokémon pasa a estar Confundido.",
                "it": "Questo Pokémon viene confuso.",
                "de": "Dieses Pokémon ist jetzt verwirrt.",
                "pt-br": "Este Pokémon agora está Confuso.",
                "zh-tw": "這只神奇寶貝現在處於混亂狀態。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
