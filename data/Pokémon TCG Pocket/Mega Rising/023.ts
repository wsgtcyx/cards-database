import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Phantump",
        "fr": "Fantôme",
        "es": "Fantasma",
        "it": "Phantump",
        "de": "Phantump",
        "pt-br": "Fantasma",
        "zh-tw": "小木靈",
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "With a voice like a human child's, it cries out to\nlure adults deep into the forest, getting them lost\namong the trees.",
        "fr": "Avec une voix semblable à celle d'un enfant humain, il crie\nattirer les adultes au plus profond de la forêt et les perdre\nparmi les arbres.",
        "es": "Con una voz como la de un niño humano, clama a\natraer a los adultos hacia las profundidades del bosque, haciéndolos perderse\nentre los árboles.",
        "it": "Con una voce simile a quella di un bambino umano, grida\nattira gli adulti nel profondo della foresta, facendoli perdere\ntra gli alberi.",
        "de": "Mit einer Stimme wie die eines Menschenkindes schreit es\nlocken Erwachsene tief in den Wald und verirren sie\nzwischen den Bäumen.",
        "pt-br": "Com uma voz como a de uma criança humana, clama para\natrair adultos para as profundezas da floresta, fazendo com que eles se percam\nentre as árvores.",
        "zh-tw": "它用像人類孩子一樣的聲音呼喊著\n引誘成年人進入森林深處，讓他們迷路\n樹木之間。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Branch Poke",
                "fr": "Poke de branche",
                "es": "Golpe de rama",
                "it": "Colpo sul ramo",
                "de": "Branch Poke",
                "pt-br": "Poke de galho",
                "zh-tw": "分支戳"
            },
            damage: 40,
            cost: ["Grass", "Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
