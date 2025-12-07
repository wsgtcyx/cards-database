import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Eelektrik",
        "fr": "Électricité",
        "es": "eléctrico",
        "it": "Elektrik",
        "de": "Elektrik",
        "pt-br": "Elétrico",
        "zh-tw": "電氣技術"
    },
    illustrator: "Suwama Chiaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Lightning"],
    evolveFrom: {
        en: "Tynamo",
        "fr": "Tynamo",
        "es": "tinamo",
        "it": "Dinamo",
        "de": "Tynamo",
        "pt-br": "Tínamo",
        "zh-tw": "蒂納莫"
    },
    description: {
        en: "They coil around foes and shock them with\nelectricity-generating organs that seem simply\nto be circular patterns.",
        "fr": "Ils s'enroulent autour de leurs ennemis et les choquent avec\norganes générateurs d'électricité qui semblent simplement\nêtre des motifs circulaires.",
        "es": "Se enrollan alrededor de los enemigos y los electrocutan con\nÓrganos generadores de electricidad que parecen simplemente\nser patrones circulares.",
        "it": "Si avvolgono attorno ai nemici e li colpiscono\norgani generatori di elettricità che sembrano semplici\nessere modelli circolari.",
        "de": "Sie schlingen sich um Feinde und schocken sie mit ihnen\nStrom erzeugende Organe, die einfach erscheinen\nkreisförmige Muster sein.",
        "pt-br": "Eles se enrolam em torno dos inimigos e os chocam com\nórgãos geradores de eletricidade que parecem simplesmente\nser padrões circulares.",
        "zh-tw": "他們盤繞敵人並用\n看似簡單的發電器官\n為圓形圖案。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Electro Ball",
                "fr": "Boule Électro",
                "es": "Electrobola",
                "it": "Palla elettrica",
                "de": "Elektroball",
                "pt-br": "Bola Eletro",
                "zh-tw": "電球"
            },
            damage: 50,
            cost: ["Lightning", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
