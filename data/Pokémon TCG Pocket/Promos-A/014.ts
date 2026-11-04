import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/014/c2583202ec19973b",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/014/c2583202ec19973b",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/014/c2583202ec19973b",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/014/c2583202ec19973b",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/014/c2583202ec19973b",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/014/c2583202ec19973b",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/014/c2583202ec19973b",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/014/c2583202ec19973b",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/014/c2583202ec19973b"
    },
    name: {
        en: "Lapras ex",
        fr: "Lokhlass-ex",
        es: "Lapras ex",
        it: "Lapras-ex",
        de: "Lapras-ex",
        'pt-br': "Lapras ex",
        ja: "ラプラスex",
        ko: "라프라스 ex",
        "zh-tw": "拉普拉斯ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    types: ["Water"],
    stage: "Basic",
    attacks: [{
            name: {
                en: "Bubble Drain",
                fr: "Vide Bulle",
                es: "Drenaje Burbujas",
                it: "Assorbibolla",
                de: "Blasengully",
                'pt-br': "Dreno de Bolha",
                ja: "バブルドレイン",
                ko: "버블드레인",
                "zh-tw": "泡沫吸取"
            },
            cost: ["Water", "Water", "Colorless"],
            damage: 80,
            effect: {
                en: "Heal 20 damage from this Pokémon.",
                fr: "Soignez 20 dégâts de ce Pokémon.",
                es: "Cura 20 puntos de daño a este Pokémon.",
                it: "Cura questo Pokémon da 20 danni.",
                de: "Heile 20 Schadenspunkte bei diesem Pokémon.",
                'pt-br': "Cure 20 pontos de dano deste Pokémon.",
                ja: "このポケモンのHPを20回復。",
                ko: "이 포켓몬의 HP를 20회복.",
                "zh-tw": "將這隻寶可夢恢復20HP。"
            }
        }],
    hp: 140,
    suffix: "EX",
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["vol1"]
};
export default card;
