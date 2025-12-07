import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
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
    illustrator: "kawayoo",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 70,
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
                en: "Venomous Fang",
                "fr": "Croc venimeux",
                "es": "Colmillo venenoso",
                "it": "Zanna Velenosa",
                "de": "Giftiger Fangzahn",
                "pt-br": "Presa Venenosa",
                "zh-tw": "毒牙"
            },
            damage: 20,
            cost: ["Darkness"],
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Empoisonné.",
                "es": "El Pokémon Activo de tu rival ahora está Envenenado.",
                "it": "Il Pokémon attivo del tuo avversario ora è avvelenato.",
                "de": "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "你對手的主動神奇寶貝現在中毒了。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
