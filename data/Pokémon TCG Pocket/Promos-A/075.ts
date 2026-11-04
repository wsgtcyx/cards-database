import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/075/41442030043355ed",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/075/41442030043355ed",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/075/41442030043355ed",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/075/41442030043355ed",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/075/41442030043355ed",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/075/41442030043355ed",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/075/41442030043355ed",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/075/41442030043355ed",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/075/41442030043355ed"
    },
    name: {
        en: "Kartana",
        es: "Kartana",
        "fr": "Katagami",
        "it": "Kartana",
        "de": "Katagami",
        "pt-br": "Kartana",
        "zh-tw": "紙御劍",
        ja: "カミツルギ",
        ko: "종이신도",
    },
    illustrator: "Hasuno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "This Ultra Beast's body, which is as thin\nas paper, is like a sharpened sword.",
        es: "El cuerpo de este Ultraente es fino como el papel y tan cortante como una espada recién afilada.",
        "fr": "Le corps de cette Ultra-Chimère semble fin comme du papier, mais il est aussi tranchant qu'un sabre affûté.",
        "it": "Ultracreatura dal corpo sottile come un foglio di carta e affilato come la lama di una spada.",
        "de": "Der Körper dieser Ultrabestie ist dünn wie Papier und so scharfkantig wie eine geschliffene Klinge.",
        "pt-br": "O corpo desta Ultracriatura é fino como papel e afiado como uma espada.",
        "zh-tw": "從這種究極異獸像紙一樣薄的身體上，可以感受到如同研磨過的刀刃般的鋒利度。",
        ja: "紙の ように 薄い 身体から 研がれた 刀に 似た 鋭さを 感じる ウルトラビーストだ。",
        ko: "종이와 같은 얇은 몸에서\n연마한 칼 같은 예리함이\n느껴지는 울트라비스트다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Thrash Metal",
                es: "Thrash Metal",
                "fr": "Thrash Metal",
                "it": "Thrashmetal",
                "de": "Thrash Metal",
                "pt-br": "Thrash Metal",
                "zh-tw": "死亡迅斬",
                ja: "デスラッシュ",
                ko: "데스스래시"
            },
            damage: 40,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["vol9"]
};
export default card;
