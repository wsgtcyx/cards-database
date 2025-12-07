import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Wugtrio ex",
        "fr": "Wugtrio ex",
        "es": "ex wugtrio",
        "it": "Wugtrio ex",
        "de": "Wugtrio ex",
        "pt-br": "Ex-Wugtrio",
        "zh-tw": "三海地鼠 ex",
    },
    illustrator: "PLANETA Tsuji",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Water"],
    evolveFrom: {
        en: "Wiglett",
        "fr": "Wiglett",
        "es": "wilett",
        "it": "Wiglett",
        "de": "Wiglett",
        "pt-br": "Wiglett",
        "zh-tw": "威格利特"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Pop Out Throughout",
                "fr": "Sortez partout",
                "es": "Aparece en todas partes",
                "it": "Fai un salto ovunque",
                "de": "Pop-out überall",
                "pt-br": "Destaque-se o tempo todo",
                "zh-tw": "整個過程中彈出"
            },
            cost: ["Water", "Water", "Water"],
            effect: {
                en: "1 of your opponent's Pokémon is chosen at random 3 times. For each time a Pokémon was chosen, do 50 damage to it.",
                "fr": "1 des Pokémon de votre adversaire est choisi au hasard 3 fois. À chaque fois qu'un Pokémon est choisi, infligez-lui 50 dégâts.",
                "es": "1 de los Pokémon de tu oponente se elige al azar 3 veces. Por cada vez que se elija un Pokémon, hazle 50 daños.",
                "it": "1 dei Pokémon del tuo avversario viene scelto a caso 3 volte. Per ogni volta che viene scelto un Pokémon, infliggigli 50 danni.",
                "de": "1 Pokémon deines Gegners wird dreimal zufällig ausgewählt. Füge ihm jedes Mal, wenn ein Pokémon ausgewählt wurde, 50 Schadenspunkte zu.",
                "pt-br": "1 dos Pokémon do seu oponente é escolhido aleatoriamente 3 vezes. Para cada vez que um Pokémon for escolhido, cause 50 de dano a ele.",
                "zh-tw": "隨機選擇 1 只對手的神奇寶貝 3 次。每次選擇一隻神奇寶貝，對其造成 50 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
