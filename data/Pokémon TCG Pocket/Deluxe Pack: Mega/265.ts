import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/265",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/265",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/265",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/265",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/265",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/265",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/265"
    },
    name: {
        en: "Combusken",
        fr: "Galifeu",
        es: "Combusken",
        it: "Combusken",
        de: "Jungglut",
        "pt-br": "Combusken",
        "zh-tw": "力壯雞",
        ja: "ワカシャモ",
        ko: "영치코"
    },
    illustrator: "GOSSAN",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: [
        "Fire"
    ],
    evolveFrom: {
        en: "Torchic",
        fr: "Poussifeu",
        es: "Torchic",
        it: "Torchic",
        de: "Flemmli",
        "pt-br": "Torchic",
        "zh-tw": "火稚雞",
        ja: "Torchic",
        ko: "Torchic"
    },
    description: {
        en: "During a battle, the hot flame in its body increases.\nIts kicks have outstanding destructive power.",
        fr: "Quand il se bat, les flammes dans son corps se mettent à brûler ardemment. Ses coups de pied sont dévastateurs.",
        es: "Al pelear, el fuego de su interior se intensifica. Es capaz de propinar unas patadas demoledoras.",
        it: "Quando deve lottare, il suo fuoco interiore brucia intensamente. Sferra calci dalla notevole potenza distruttiva.",
        de: "Im Kampf lodert das Feuer in seinem Körper auf. Seine Tritte besitzen eine außergewöhnliche Zerstörungskraft.",
        "pt-br": "Durante uma batalha, a chama quente em seu corpo aumenta. Seus chutes têm um poder destruidor excepcional.",
        "zh-tw": "戰鬥時體內的火焰會熊熊燃燒，踢腿極具破壞力。",
        ja: "During a battle, the hot flame in its body increases.\nIts kicks have outstanding destructive power.",
        ko: "During a battle, the hot flame in its body increases.\nIts kicks have outstanding destructive power."
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "High Jump Kick",
                fr: "Pied Voltige",
                es: "Patada Salto Alta",
                it: "Calcinvolo",
                de: "Turmkick",
                "pt-br": "Chute de Pulo Alto",
                "zh-tw": "飛膝踢",
                ja: "High Jump Kick",
                ko: "High Jump Kick"
            },
            damage: 50,
            cost: [
                "Fire",
                "Fire"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
