import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Mienshao",
        "fr": "Mienshao",
        "es": "Mienshao",
        "it": "Mienshao",
        "de": "Mienshao",
        "pt-br": "Mienshao",
        "zh-tw": "師父鼬",
    },
    illustrator: "Shibuzoh.",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    evolveFrom: {
        en: "Mienfoo",
        "fr": "Mienfoo",
        "es": "Mienfoo",
        "it": "Mienfoo",
        "de": "Mienfoo",
        "pt-br": "Mienfoo",
        "zh-tw": "功夫鼬",
    },
    description: {
        en: "When Mienshao comes across a truly challenging\nopponent, it will lighten itself by biting off the\nfur on its arms.",
        "fr": "Quand Mienshao se trouve confronté à un véritable défi\nadversaire, il s'allègera en mordant le\nfourrure sur ses bras.",
        "es": "Cuando Mienshao se encuentra con un desafío verdaderamente\noponente, se aligerará mordiendo el\npelo en sus brazos.",
        "it": "Quando Mienshao si imbatte in una situazione davvero impegnativa\navversario, si alleggerirà mordendo via il\npelliccia sulle braccia.",
        "de": "Wenn Mienshao auf eine wirkliche Herausforderung stößt\nGegner, es wird sich leichter machen, indem es abbeißt\nFell auf den Armen.",
        "pt-br": "Quando Mienshao se depara com um desafio verdadeiramente desafiador\noponente, ele se aliviará mordendo o\npelos nos braços.",
        "zh-tw": "當面哨遇到真正具有挑戰性的事情時\n對手，它會通過咬掉對手來減輕自己的重量\n手臂上有毛。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Low Kick",
                "fr": "Coup de pied bas",
                "es": "Patada baja",
                "it": "Calcio basso",
                "de": "Niedriger Tritt",
                "pt-br": "Chute baixo",
                "zh-tw": "低踢"
            },
            damage: 70,
            cost: ["Fighting", "Fighting"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1
};
export default card;
