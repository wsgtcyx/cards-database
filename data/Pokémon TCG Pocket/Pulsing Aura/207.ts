import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/207",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/207",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/207",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/207",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/207",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/207"
    },
    name: {
        en: "Combusken",
        fr: "Galifeu",
        es: "Combusken",
        it: "Combusken",
        de: "Jungglut",
        "pt-br": "Combusken",
        "zh-tw": "力壯雞",
        ko: "영치코",
        ja: "ワカシャモ"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    dexId: [256],
    evolveFrom: {
        en: "Torchic",
        fr: "Poussifeu",
        es: "Torchic",
        it: "Torchic",
        de: "Flemmli",
        "pt-br": "Torchic",
        "zh-tw": "火稚雞",
        ko: "아차모",
        ja: "アチャモ"
    },
    stage: "Stage1",
    description: {
        en: "During a battle, the hot flame in its body increases. Its kicks have outstanding destructive power.",
        fr: "Au combat, les flammes dans son corps redoublent\nd’intensité. Ses coups de pied sont dévastateurs.",
        es: "Al pelear, el fuego de su interior se intensifica. Es\ncapaz de propinar unas patadas demoledoras.",
        it: "Quando lotta, il suo fuoco interiore diventa\nincandescente. Sferra calci di notevole potenza\ndistruttiva.",
        de: "Im Kampf lodert sein inneres Feuer hoch auf. Wo seine\nmächtigen Tritte landen, wächst kein Gras mehr.",
        "pt-br": "Durante uma batalha, a chama quente em seu corpo aumenta. Seus chutes têm um poder destrutivo extraordinário.",
        "zh-tw": "戰鬥時，它體內的熾熱火焰會增加。其踢腿具有超凡的破壞力。"
    },
    attacks: [
        {
            cost: ["Fire", "Fire"],
            name: {
                en: "High Jump Kick",
                fr: "Pied Voltige",
                es: "Patada Salto Alta",
                it: "Calcinvolo",
                de: "Turmkick",
                "pt-br": "Chute de Pulo Alto",
                "zh-tw": "飛膝踢"
            },
            damage: 50
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
