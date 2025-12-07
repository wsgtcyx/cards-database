import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    name: {
        en: "Venomoth",
        fr: "Aéromite",
        es: "Venomoth",
        it: "Venomoth",
        de: "Omot",
        'pt-br': "Venomoth",
        ko: "도나리",
        "zh-tw": "摩魯蛾",
    },
    illustrator: "Mina Nakai",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    stage: "Stage1",
    evolveFrom: {
        en: "Venonat",
        "fr": "Venonat",
        "es": "Venonat",
        "it": "Venonat",
        "de": "Venonat",
        "pt-br": "Venonat",
        "zh-tw": "維諾納特"
    },
    attacks: [{
            cost: ["Grass"],
            name: {
                en: "Poison Powder",
                fr: "Poudre Toxik",
                es: "Polvo Veneno",
                it: "Velenpolvere",
                de: "Giftpuder",
                'pt-br': "Pó Venenoso",
                ko: "독가루",
                "zh-tw": "毒粉"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
                es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
                it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                ko: "상대의 배틀 포켓몬을 독으로 만든다.",
                'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "你對手的主動神奇寶貝現在中毒了。"
            },
            damage: "30"
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    rarity: "Two Diamond",
    description: {
        en: "The wings are covered with dustlike scales. Every time it flaps its wings, it looses highly toxic dust.",
        fr: "Ses ailes sont couvertes d'écailles poudreuses.\nÀ chaque battement d'ailes, il laisse tomber\nde la poudre hautement toxique.",
        es: "Tiene las alas cubiertas de escamas.\nCada vez que las bate, esparce un\npolvillo sumamente venenoso.",
        it: "Le ali sono ricoperte di scaglie. Ogni volta che le\nbatte, viene liberata nell'aria una polvere velenosa.",
        de: "Seine Flügel sind mit staubähnlichen Schuppen\nüberzogen. Mit jedem Flügelschlag verstreut es\nhochgiftigen Puder.",
        'pt-br': "As suas asas são cobertas por escamas\nsemelhantes a poeira. Toda vez que bate\nas asas, libera uma poeira altamente tóxica.",
        ko: "날개에 가루가 묻어 있어\n팔락팔락 날갯짓을 할 때마다\n맹독 가루를 흩뿌린다.",
        "zh-tw": "翅膀上覆蓋著塵埃般的鱗片。它每次拍打翅膀時都會釋放出劇毒粉塵。"
    },
    boosters: ["mewtwo"]
};
export default card;
