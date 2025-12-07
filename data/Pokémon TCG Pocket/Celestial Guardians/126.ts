import { Card } from "../../../interfaces";
import Set from "../Celestial Guardians";
const card: Card = {
    set: Set,
    name: {
        en: "Hakamo-o",
        fr: "Écaïd",
        es: "Hakamo-o",
        it: "Hakamo-o",
        de: "Mediras",
        'pt-br': "Hakamo-o",
        ko: "짜랑고우",
        "zh-tw": "鱗甲龍",
    },
    illustrator: "Ryuta Fuse",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Dragon"],
    evolveFrom: {
        en: "Jangmo-o",
        "fr": "Jangmo-o",
        "es": "Jangmo-o",
        "it": "Jangmo-o",
        "de": "Jangmo-o",
        "pt-br": "Jangmo-o",
        "zh-tw": "長毛五"
    },
    description: {
        en: "The scaleless, scarred parts of its body are signs of its strength. It shows them off to defeated opponents.",
        fr: "Ses écailles arrachées et son corps couvert de\ncicatrices sont la preuve de sa puissance. Il les\nmontre à son adversaire vaincu en se pavanant.",
        es: "Como prueba de su fuerza, muestra orgulloso a quienes\nvence las cicatrices de su cuerpo donde ya no tiene escamas.",
        it: "Come prova della sua forza, mostra orgoglioso all'avversario\nsconfitto le ferite sul suo corpo e le squame mancanti.",
        de: "Für sie sind zerschmetterte Schuppen und Narben\nTrophäen, die sie besiegten Gegnern nach dem\nKampf voller Stolz zeigen.",
        'pt-br': "As partes cicatrizadas e sem escamas de seu corpo\nsão sinais de sua força. Exibe-as aos seus\noponentes derrotados.",
        ko: "비늘이 떨어진 상처투성이인\n몸은 강자라는 증표다.\n상대를 쓰러뜨린 후 상처를 보여준다.",
        "zh-tw": "它身體上無鱗且傷痕累累的部分是其力量的標誌。它向被擊敗的對手展示他們。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Dragon Claw",
                fr: "Draco-Griffe",
                es: "Garra Dragón",
                it: "Dragartigli",
                de: "Drachenklaue",
                'pt-br': "Garra de Dragão",
                ko: "드래곤클로",
                "zh-tw": "龍爪"
            },
            damage: 60,
            cost: ["Lightning", "Fighting"]
        }],
    retreat: 2,
    boosters: ["lunala"]
};
export default card;
