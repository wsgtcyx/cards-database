import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/216",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/216",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/216",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/216",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/216",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/216",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/216",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/216",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/216"
    },
    name: {
        en: "Vaporeon",
        "fr": "Aquali",
        "es": "Vaporeon",
        "it": "Vaporeon",
        "de": "Aquana",
        "pt-br": "Vaporeon",
        "zh-tw": "水伊布",
        ja: "シャワーズ",
        ko: "샤미드",
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 130,
    types: ["Water"],
    evolveFrom: {
        en: "Eevee",
        "fr": "Évoli",
        "es": "Eevee",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ja: "イーブイ",
        ko: "이브이"
    },
    description: {
        en: "It lives close to water. Its long tail is ridged with\na fin, which is often mistaken for a mermaid's.",
        "fr": "Il vit près de l'eau. Sa longue queue est striée de\nune nageoire, qui est souvent confondue avec celle d'une sirène.",
        "es": "Vive cerca del agua. Su larga cola está surcada por\nuna aleta, que a menudo se confunde con la de una sirena.",
        "it": "Vive vicino all'acqua. La sua lunga coda è increspata\nuna pinna, che spesso viene scambiata per quella di una sirena.",
        "de": "Es lebt in der Nähe von Wasser. Sein langer Schwanz ist gerippt\neine Flosse, die oft mit der einer Meerjungfrau verwechselt wird.",
        "pt-br": "Vive perto da água. Sua longa cauda é estriada\numa barbatana, que muitas vezes é confundida com a de uma sereia.",
        "zh-tw": "它生活在靠近水的地方。它的長尾巴上佈滿了脊狀的\n鰭，經常被誤認為是美人魚的鰭。",
        ja: "水辺に 棲むが 尻尾には 魚のような ひれが 残っていて 人魚と 間違う 人もいる。",
        ko: "물가에 살지만 꼬리에\n물고기처럼 지느러미가 남아 있어서\n인어로 착각하는 사람도 있다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Bubble Drain",
                "fr": "Vidange à bulles",
                "es": "Drenaje de burbujas",
                "it": "Drenaggio delle bolle",
                "de": "Blasenablauf",
                "pt-br": "Dreno de bolha",
                "zh-tw": "氣泡排水管",
                ja: "バブルドレイン",
                ko: "버블드레인"
            },
            damage: 60,
            cost: ["Water", "Colorless", "Colorless"],
            effect: {
                en: "Heal 30 damage from this Pokémon.",
                "fr": "Soignez 30 dégâts de ce Pokémon.",
                "es": "Cura 30 puntos de daño de este Pokémon.",
                "it": "Cura questo Pokémon da 30 danni.",
                "de": "Heile 30 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 30 de dano deste Pokémon.",
                "zh-tw": "治療該神奇寶貝造成的 30 點傷害。",
                ja: "このポケモンのHPを30回復。",
                ko: "이 포켓몬의 HP를 30회복."
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
