import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3b/041",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3b/041",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3b/041",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3b/041",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3b/041",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3b/041",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3b/041",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3b/041",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3b/041"
    },
    name: {
        en: "Mienshao",
        "fr": "Shaofouine",
        "es": "Mienshao",
        "it": "Mienshao",
        "de": "Wie-Shu",
        "pt-br": "Mienshao",
        "zh-tw": "師父鼬",
        ja: "コジョンド",
        ko: "비조도",
    },
    illustrator: "Shibuzoh.",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    evolveFrom: {
        en: "Mienfoo",
        "fr": "Kungfouine",
        "es": "Mienfoo",
        "it": "Mienfoo",
        "de": "Lin-Fu",
        "pt-br": "Mienfoo",
        "zh-tw": "功夫鼬",
        ja: "コジョフー",
        ko: "비조푸",
    },
    description: {
        en: "When Mienshao comes across a truly challenging\nopponent, it will lighten itself by biting off the\nfur on its arms.",
        "fr": "Quand Mienshao se trouve confronté à un véritable défi\nadversaire, il s'allègera en mordant le\nfourrure sur ses bras.",
        "es": "Cuando Mienshao se encuentra con un desafío verdaderamente\noponente, se aligerará mordiendo el\npelo en sus brazos.",
        "it": "Quando Mienshao si imbatte in una situazione davvero impegnativa\navversario, si alleggerirà mordendo via il\npelliccia sulle braccia.",
        "de": "Wenn Mienshao auf eine wirkliche Herausforderung stößt\nGegner, es wird sich leichter machen, indem es abbeißt\nFell auf den Armen.",
        "pt-br": "Quando Mienshao se depara com um desafio verdadeiramente desafiador\noponente, ele se aliviará mordendo o\npelos nos braços.",
        "zh-tw": "當面哨遇到真正具有挑戰性的事情時\n對手，它會通過咬掉對手來減輕自己的重量\n手臂上有毛。",
        ja: "真の 強敵と 会うと 身軽に なるため 両手の 毛を 噛み千切り 捨ててしまう。",
        ko: "진정한 강적과 만나면\n몸을 가볍게 하기 위해\n양손의 털을 물어뜯어 버린다."
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
                "zh-tw": "低踢",
                ja: "けたぐり",
                ko: "안다리걸기"
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
