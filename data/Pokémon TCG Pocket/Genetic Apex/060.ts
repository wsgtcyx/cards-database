import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    name: {
        en: "Poliwhirl",
        fr: "Têtarte",
        es: "Poliwhirl",
        it: "Poliwhirl",
        de: "Quaputzi",
        'pt-br': "Poliwhirl",
        ko: "슈륙챙이",
        "zh-tw": "蚊香君",
    },
    illustrator: "Yuka Morii",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    stage: "Stage1",
    evolveFrom: {
        en: "Poliwag",
        "fr": "Poliwag",
        "es": "Poliwag",
        "it": "Poliwag",
        "de": "Poliwag",
        "pt-br": "Poliwag",
        "zh-tw": "波利瓦格"
    },
    attacks: [{
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Knuckle Punch",
                fr: "Coud'Phalange",
                es: "Puño con Nudillos",
                it: "Noccapugno",
                de: "Knöchelhieb",
                'pt-br': "Soco com Punho",
                ko: "꿀밤",
                "zh-tw": "指節拳"
            },
            damage: "40"
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2,
    rarity: "Two Diamond",
    description: {
        en: "Staring at the swirl on its belly causes drowsiness. This trait of Poliwhirl's has been used in place of lullabies to get children to go to sleep.",
        fr: "Il suffit de fixer la spirale sur son ventre pour\ns'assoupir. On se sert parfois de lui à la place\nd'une berceuse pour endormir les enfants.",
        es: "Mirar fijamente la espiral de su vientre provoca\nsomnolencia, por lo que puede usarse como\nalternativa a las nanas para dormir a los niños.",
        it: "Chi fissa a lungo il disegno spiraliforme sul ventre\nsi assopisce, tant'è che Poliwhirl lo utilizza al\nposto della ninnananna per far dormire i piccoli.",
        de: "Wer länger auf seine Bauchspirale blickt, wird\nschläfrig. Manche Leute nutzen dies anstelle\neines Schlaflieds, damit ihre Kinder einschlafen.",
        'pt-br': "Olhar para a espiral em sua barriga causa sonolência.\nEsta característica de Poliwhirl tem sido usada no lugar\nde canções de ninar para ajudar crianças a dormir.",
        ko: "배의 소용돌이를 계속 보다 보면\n잠이 온다. 자장가 대용으로\n아이를 재울 때도 사용한다.",
        "zh-tw": "盯著腹部的漩渦會讓人昏昏欲睡。波利維爾的這一特徵已被用來代替搖籃曲來讓孩子們入睡。"
    },
    boosters: ["charizard"]
};
export default card;
