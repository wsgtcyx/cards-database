import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Keldeo",
        "fr": "Keldéo",
        "es": "Keldeo",
        "it": "Keldeo",
        "de": "Keldeo",
        "pt-br": "Keldeo",
        "zh-tw": "凱爾迪歐"
    },
    illustrator: "Takeshi Nakamura",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    description: {
        en: "It crosses the world, running over the surfaces of\noceans and rivers. It appears at scenic waterfronts.",
        "fr": "Il traverse le monde, parcourant les surfaces de\nocéans et rivières. Il apparaît sur les fronts de mer pittoresques.",
        "es": "Atraviesa el mundo, corriendo sobre las superficies de\nocéanos y ríos. Aparece en muelles pintorescos.",
        "it": "Attraversa il mondo, correndo sulle superfici\noceani e fiumi. Appare sui lungomare panoramici.",
        "de": "Es durchquert die Welt und läuft über die Oberflächen von\nOzeane und Flüsse. Es erscheint an malerischen Uferpromenaden.",
        "pt-br": "Atravessa o mundo, percorrendo as superfícies de\noceanos e rios. Aparece em orlas pitorescas.",
        "zh-tw": "它穿越世界，跑遍世界的表面\n海洋和河流。它出現在風景秀麗的海濱。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sacred Sword",
                "fr": "Épée sacrée",
                "es": "Espada Sagrada",
                "it": "Spada Sacra",
                "de": "Heiliges Schwert",
                "pt-br": "Espada Sagrada",
                "zh-tw": "聖劍"
            },
            damage: 110,
            cost: ["Water", "Water", "Colorless"],
            effect: {
                en: "During your next turn, this Pokémon can't use Sacred Sword.",
                "fr": "Lors de votre prochain tour, ce Pokémon ne pourra pas utiliser l'Épée Sacrée.",
                "es": "Durante tu próximo turno, este Pokémon no puede usar Espada Sagrada.",
                "it": "Durante il tuo prossimo turno, questo Pokémon non può usare la Spada Sacra.",
                "de": "Während deines nächsten Zuges kann dieses Pokémon Sacred Sword nicht verwenden.",
                "pt-br": "Durante o seu próximo turno, este Pokémon não poderá usar Sacred Sword.",
                "zh-tw": "在你的下一個回合中，這只神奇寶貝不能使用聖劍。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
