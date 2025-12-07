import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    name: {
        en: "Azelf",
        fr: "Créfadet",
        es: "Azelf",
        it: "Azelf",
        de: "Tobutz",
        'pt-br': "Azelf",
        ko: "아그놈",
        "zh-tw": "阿澤爾夫"
    },
    illustrator: "AKIRA EGAWA",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    description: {
        en: "Known as “The Being of Willpower.” It sleeps at the\nbottom of a lake to keep the world in balance.",
        fr: "On l'appelle \" être de la volonté \". Il dort au fond\nd'un lac pour maintenir l'équilibre du monde.",
        es: "Se le conoce como el Ser de la Voluntad. Duerme\nen el fondo de un lago para equilibrar el mundo.",
        it: "Detto \"Essere della volontà\". Dorme sul fondo di\nun lago per mantenere il mondo in equilibrio.",
        de: "\"Das starke Wesen\". Es schläft auf dem Grund\neines Sees und hält so die Welt in Balance.",
        'pt-br': "Este Pokémon é conhecido como o ser de força\nde vontade e dorme no leito de um lago para garantir\no equilíbrio do mundo.",
        ko: "의지의 신이라 불리고 있다.\n호수의 밑바닥에서 계속 잠을 자며\n세계의 균형을 지키고 있다.",
        "zh-tw": "被稱為“意志力的存在”。它睡在\n湖底維持世界平衡。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Psychic Arrow",
                fr: "Flèche Psy",
                es: "Flecha Psíquica",
                it: "Psicofreccia",
                de: "Psychopfeil",
                'pt-br': "Flecha Psíquica",
                ko: "사이코애로",
                "zh-tw": "心靈箭"
            },
            cost: ["Psychic"],
            effect: {
                en: "This attack does 20 damage to 1 of your opponent's Pokémon.",
                fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire.",
                es: "Este ataque hace 20 puntos de daño a 1 de los Pokémon de tu rival.",
                it: "Questo attacco infligge 20 danni a uno dei Pokémon\ndel tuo avversario.",
                de: "Diese Attacke fügt 1 Pokémon deines Gegners 20 Schadenspunkte zu.",
                'pt-br': "Este ataque causa 20 pontos de dano a 1 dos Pokémon do seu oponente.",
                ko: "상대의 포켓몬 1마리에게 20데미지를 준다.",
                "zh-tw": "這次攻擊對對手的 1 只神奇寶貝造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["dialga", "palkia"]
};
export default card;
