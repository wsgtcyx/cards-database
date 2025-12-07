import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Skitty",
        "fr": "Minou",
        "es": "Skitty",
        "it": "Skitty",
        "de": "Skitty",
        "pt-br": "Skitty",
        "zh-tw": "斯基蒂"
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "It can't stop itself from chasing moving things,\nand it runs in a circle, chasing its own tail.",
        "fr": "Il ne peut s'empêcher de poursuivre les objets en mouvement,\net il court en cercle, poursuivant sa propre queue.",
        "es": "No puede dejar de perseguir cosas en movimiento,\ny corre en círculos, persiguiéndose su propia cola.",
        "it": "Non può impedirsi di inseguire cose in movimento,\ne corre in tondo, rincorrendosi la coda.",
        "de": "Es kann sich nicht davon abhalten, sich bewegenden Dingen nachzujagen,\nund es läuft im Kreis und jagt seinem eigenen Schwanz nach.",
        "pt-br": "Ele não consegue parar de perseguir coisas em movimento,\ne corre em círculos, perseguindo o próprio rabo.",
        "zh-tw": "它無法阻止自己追逐移動的事物，\n它繞著圈跑，追著自己的尾巴。"
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
            damage: 20,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
