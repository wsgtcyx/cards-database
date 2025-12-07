import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    name: {
        en: "Staravia",
        fr: "Étourvol",
        es: "Staravia",
        it: "Staravia",
        de: "Staravia",
        'pt-br': "Staravia",
        ko: "찌르버드",
        "zh-tw": "姆克鳥",
    },
    illustrator: "REND",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    evolveFrom: {
        en: "Starly",
        "fr": "Étoilé",
        "es": "estrellado",
        "it": "Stellato",
        "de": "Sternenklar",
        "pt-br": "Estrelado",
        "zh-tw": "星光"
    },
    description: {
        en: "Recognizing their own weakness, they always live in a group. When alone, a Staravia cries noisily.",
        fr: "Conscient de sa faiblesse, il vit toujours en groupe.\nQuand il se retrouve seul, il se met à piailler bruyamment.",
        es: "Son conscientes de su debilidad, así que siempre viven\nen grupo. Si se encuentran solos, lloran a gritos.",
        it: "Conscio della propria debolezza, forma grandi\ngruppi con i propri simili. Quando si ritrova\nsolo, canta con voce insistente e fastidiosa.",
        de: "Da sie sich ihrer eigenen Schwäche bewusst sind,\nleben Staravia stets in Schwärmen. Sind sie allein,\nstoßen sie laute Rufe aus.",
        'pt-br': "Reconhecendo suas próprias fraquezas, eles sempre vivem\nem grupo. Quando sozinho, um Staravia chora\nde forma ruidosa.",
        ko: "자신의 약함을 잘 알고 있기에\n항상 무리를 지어 살고 있다.\n혼자가 되면 요란하게 운다.",
        "zh-tw": "認識到自己的弱點，他們總是生活在一個群體中。獨自一人時，Staravia 會大聲哭泣。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Wing Attack",
                fr: "Cru-Ailes",
                es: "Ataque Ala",
                it: "Attacco d'Ala",
                de: "Flügelschlag",
                'pt-br': "Ataque de Asa",
                ko: "날개치기",
                "zh-tw": "翼攻擊"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["palkia"]
};
export default card;
