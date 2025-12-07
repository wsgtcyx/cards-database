import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Golbat",
        "fr": "Golbat",
        "es": "Golbat",
        "it": "Golbat",
        "de": "Golbat",
        "pt-br": "Golbat",
        "zh-tw": "大嘴蝠"
    },
    illustrator: "Kyoko Umemoto",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Darkness"],
    evolveFrom: {
        en: "Zubat",
        "fr": "Zoubat",
        "es": "zubat",
        "it": "Zubat",
        "de": "Zubat",
        "pt-br": "Zubat",
        "zh-tw": "超音蝠",
    },
    description: {
        en: "It loves to drink other creatures' blood. It's said\nthat if it finds others of its kind going hungry,\nit sometimes shares the blood it's gathered.",
        "fr": "Il adore boire le sang des autres créatures. On dit\nque s'il en trouve d'autres de son espèce affamés,\nil partage parfois le sang qu'il a recueilli.",
        "es": "Le encanta beber la sangre de otras criaturas. se dice\nque si encuentra a otros de su especie pasando hambre,\na veces comparte la sangre que recoge.",
        "it": "Ama bere il sangue di altre creature. E' detto\nche se trova altri suoi simili affamati,\na volte condivide il sangue raccolto.",
        "de": "Es liebt es, das Blut anderer Lebewesen zu trinken. Es heißt\ndass, wenn es andere seiner Art hungrig vorfindet,\nManchmal teilt es das Blut, das es gesammelt hat.",
        "pt-br": "Ele adora beber o sangue de outras criaturas. Está dito\nque se encontrar outros da sua espécie passando fome,\nàs vezes compartilha o sangue que reuniu.",
        "zh-tw": "牠喜歡喝其他生物的血。據說\n如果它發現其他同類正在挨餓，\n它有時會分享它所收集的血液。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Bite",
                "fr": "Mordre",
                "es": "Morder",
                "it": "Morso",
                "de": "Beißen",
                "pt-br": "Morder",
                "zh-tw": "咬"
            },
            damage: 30,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
