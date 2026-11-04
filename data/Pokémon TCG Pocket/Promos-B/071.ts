import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/071/9062dd3177f1583e",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/071/9062dd3177f1583e",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/071/9062dd3177f1583e",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/071/9062dd3177f1583e",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/071/9062dd3177f1583e",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/071/9062dd3177f1583e",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/071/9062dd3177f1583e",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/071/9062dd3177f1583e",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/071/9062dd3177f1583e"
    },
    name: {
        en: "Psyduck",
        fr: "Psykokwak",
        es: "Psyduck",
        it: "Psyduck",
        de: "Enton",
        "pt-br": "Psyduck",
        "zh-tw": "可達鴨",
        ko: "고라파덕",
        ja: "コダック"
    },
    illustrator: "Natsumi Yoshida",
    rarity: "One Star",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    dexId: [54],
    stage: "Basic",
    description: {
        en: "If its chronic headache peaks, it may exhibit odd powers. It seems unable to recall such an episode.",
        fr: "Quand son éternelle migraine devient trop forte, il manifeste d'étranges pouvoirs, mais il ne semble jamais s'en souvenir par la suite.",
        es: "Cuando su jaqueca crónica empeora, desata unos poderes misteriosos, pero después no parece recordar nada de lo ocurrido.",
        it: "Se il suo mal di testa cronico si acuisce, può manifestare strani poteri di cui in seguito non ha memoria.",
        de: "Wenn seine chronischen Kopfschmerzen stärker werden, kann es mysteriöse Kräfte entfalten. Danach erinnert es sich anscheinend nicht daran.",
        "pt-br": "Exibe poderes estranhos quando sua dor de cabeça crônica piora, mas não consegue lembrar esses episódios.",
        "zh-tw": "總是會在頭痛欲裂時發揮出神奇的力量，但似乎沒有當下的記憶。",
        ja: "いつもの 頭痛が 激しくなると 不思議な 力を 発揮するが そのときの 記憶は ないらしい。",
        ko: "평상시보다 두통이 심해지면\n이상한 힘을 발산하지만\n그때의 기억은 없는 듯하다."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Confusion Wave",
                fr: "Vague de Confusion",
                es: "Ola de Confusión",
                it: "Confusionda",
                de: "Verwirrende Welle",
                "pt-br": "Onda de Confusão",
                "zh-tw": "混亂波動",
                ja: "へんなねんぱ",
                ko: "괴상한염력파"
            },
            effect: {
                en: "Both Active Pokémon are now Confused.",
                fr: "Les deux Pokémon Actifs sont maintenant Confus.",
                es: "Ambos Pokémon Activos pasan a estar Confundido.",
                it: "Entrambi i Pokémon attivi vengono confusi.",
                de: "Beide Aktiven Pokémon sind jetzt verwirrt.",
                "pt-br": "Ambos os Pokémon Ativos agora estão Confuso.",
                "zh-tw": "將雙方的戰鬥寶可夢混亂。",
                ja: "おたがいのバトルポケモンをこんらんにする。",
                ko: "서로의 배틀 포켓몬을 혼란으로 만든다."
            }
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
