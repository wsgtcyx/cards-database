import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Pidgeotto",
        "fr": "Piègeotto",
        "es": "Pidgeotto",
        "it": "Pidgeotto",
        "de": "Pidgeotto",
        "pt-br": "Pidgeotto",
        "zh-tw": "比比鳥"
    },
    illustrator: "Taiga Kayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    evolveFrom: {
        en: "Pidgey",
        "fr": "Piggy",
        "es": "pidgey",
        "it": "Pidgey",
        "de": "Pidgey",
        "pt-br": "Pidgey",
        "zh-tw": "波波",
    },
    description: {
        en: "The claws on its feet are well developed.\nIt can carry prey such as an Exeggcute\nto its nest over 60 miles away.",
        "fr": "Les griffes de ses pattes sont bien développées.\nIl peut transporter des proies comme un Exeggcute\nà son nid à plus de 60 miles de distance.",
        "es": "Las garras de sus patas están bien desarrolladas.\nPuede transportar presas como un Exeggcute.\na su nido a más de 60 millas de distancia.",
        "it": "Gli artigli sui piedi sono ben sviluppati.\nPuò trasportare prede come un Exeggcute\nal suo nido a oltre 60 miglia di distanza.",
        "de": "Die Krallen an den Füßen sind gut entwickelt.\nEs kann Beute wie einen Exeggcute tragen\nzu seinem über 60 Meilen entfernten Nest.",
        "pt-br": "As garras dos pés são bem desenvolvidas.\nPode carregar presas como um Exeggcute\nao seu ninho a mais de 60 milhas de distância.",
        "zh-tw": "它腳上的爪子很發達。\n它可以攜帶獵物，例如Exeggcute\n到60多英里外的巢穴。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Wing Attack",
                "fr": "Attaque d'aile",
                "es": "Ataque de ala",
                "it": "Attacco d'ala",
                "de": "Flügelangriff",
                "pt-br": "Ataque de asa",
                "zh-tw": "翼攻擊"
            },
            damage: 50,
            cost: ["Colorless", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
