import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/036",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/036",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/036",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/036",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/036",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/036",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/036",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/036",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4b/036"
    },
    name: {
        en: "Serperior",
        "fr": "Majaspic",
        "es": "Serperior",
        "it": "Serperior",
        "de": "Serpiroyal",
        "pt-br": "Serperior",
        "zh-tw": "君主蛇",
        ja: "ジャローダ",
        ko: "샤로다",
    },
    illustrator: "Yoshioka",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Grass"],
    evolveFrom: {
        en: "Servine",
        "fr": "Lianaja",
        "es": "Servine",
        "it": "Servine",
        "de": "Efoserp",
        "pt-br": "Servine",
        "zh-tw": "青藤蛇",
        ja: "ジャノビー",
        ko: "샤비",
    },
    description: {
        en: "It only gives its all against strong opponents who\nare not fazed by the glare from Serperior's\nnoble eyes.",
        "fr": "Il ne donne tout que contre des adversaires forts qui\nne sont pas dérangés par l'éclat de Serperior\ndes yeux nobles.",
        "es": "Sólo lo da todo contra oponentes fuertes que\nno se inmutan ante la mirada de Serperior.\nojos nobles.",
        "it": "Dà il massimo solo contro avversari forti che\nnon sono spaventati dal bagliore di Serperior\nocchi nobili.",
        "de": "Es gibt nur gegen starke Gegner sein Bestes\nlassen sich vom grellen Licht von Serperior nicht beeindrucken\nedle Augen.",
        "pt-br": "Só dá tudo de si contra adversários fortes que\nnão se intimidam com o olhar de Serperior\nolhos nobres.",
        "zh-tw": "它只會全力以赴對抗強大的對手\n不會被 Serperior 的眩光所困擾\n高貴的眼睛。",
        ja: "ジャローダの 気高い 瞳で 射すくめられても 平気な 強い 相手にだけ 本気を 出す。",
        ko: "샤로다의 고상한 눈동자로\n쏘아보아도 태연할 정도로 강한\n상대에게만 진정한 실력을 발휘한다."
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Jungle Totem",
                "fr": "Totem de la jungle",
                "es": "Tótem de la selva",
                "it": "Totem della giungla",
                "de": "Dschungeltotem",
                "pt-br": "Totem da Selva",
                "zh-tw": "叢林圖騰",
                ja: "みつりんのぬし",
                ko: "밀림의 주인"
            },
            effect: {
                en: "Each {G} Energy attached to your {G} Pokémon provides 2 {G} Energy. This effect doesn't stack.",
                "fr": "Chaque {G} Énergie attachée à votre {G} Pokémon fournit 2 {G} Énergie. Cet effet ne se cumule pas.",
                "es": "Cada energía {G} unida a tu Pokémon {G} proporciona 2 energías {G}. Este efecto no se acumula.",
                "it": "Ogni Energia {G} assegnata ai tuoi Pokémon {G} fornisce 2 Energia {G}. Questo effetto non è cumulabile.",
                "de": "Jede {G}-Energie, die an dein {G}-Pokémon angelegt ist, liefert 2 {G}-Energie. Dieser Effekt ist nicht stapelbar.",
                "pt-br": "Cada {G} Energia ligada ao seu Pokémon {G} fornece 2 {G} Energia. Este efeito não acumula.",
                "zh-tw": "您的 {G} 神奇寶貝身上附加的每個 {G} 能量可提供 2 個 {G} 能量。該效果不疊加。",
                ja: "このポケモンがいるかぎり、自分の場の{G}ポケモンについているすべての{G}エネルギーは、それぞれ{G}エネルギー2個ぶんとしてはたらく。この特性は重ならない。",
                ko: "이 포켓몬이 있는 한, 자신의 필드의 {G}포켓몬에게 붙어 있는 모든 {G}에너지는 각각 {G}에너지 2개분으로 작용한다. 이 특성은 중복되지 않는다."
            }
        }],
    attacks: [{
            name: {
                en: "Solar Beam",
                "fr": "Faisceau solaire",
                "es": "Haz solar",
                "it": "Raggio solare",
                "de": "Sonnenstrahl",
                "pt-br": "Raio Solar",
                "zh-tw": "太陽光束",
                ja: "ソーラービーム",
                ko: "솔라빔"
            },
            damage: 70,
            cost: ["Grass", "Colorless", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
