import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Sandygast",
        "fr": "Sandygast",
        "es": "sandygast",
        "it": "Sandygast",
        "de": "Sandygast",
        "pt-br": "Sandygast",
        "zh-tw": "沙丘娃",
    },
    illustrator: "Yuka Morii",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    description: {
        en: "If it loses its shovel, it will stick something\nelse—like a branch—in its head to make\ndo until it finds another shovel.",
        "fr": "S'il perd sa pelle, il y collera quelque chose\nd'autre - comme une branche - dans sa tête pour faire\nfaire jusqu'à ce qu'il trouve une autre pelle.",
        "es": "Si pierde la pala se le pegará algo\notra cosa, como una rama, en su cabeza para hacer\nHazlo hasta que encuentre otra pala.",
        "it": "Se perde la pala, vi attaccherà qualcosa\naltrimenti, come un ramo, da fare nella sua testa\nfarlo finché non trova un'altra pala.",
        "de": "Wenn es seine Schaufel verliert, bleibt etwas hängen\nsonst – wie ein Zweig – in seinem Kopf zu machen\ntun, bis es eine andere Schaufel findet.",
        "pt-br": "Se perder a pá, vai enfiar alguma coisa\noutra coisa - como um galho - em sua cabeça para fazer\nfaça até encontrar outra pá.",
        "zh-tw": "如果它失去了鏟子，它會粘上一些東西\n否則——就像一根樹枝——在它的頭腦中製造\n這樣做，直到找到另一把鏟子。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sandy Shot",
                "fr": "Tir de sable",
                "es": "Tiro de arena",
                "it": "Colpo di sabbia",
                "de": "Sandiger Schuss",
                "pt-br": "Tiro arenoso",
                "zh-tw": "桑迪射擊"
            },
            damage: 30,
            cost: ["Fighting", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
