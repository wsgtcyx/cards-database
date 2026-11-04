import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    boosters: ["vol11"],
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/098/031124b940706e93",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/098/031124b940706e93",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/098/031124b940706e93",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/098/031124b940706e93",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/098/031124b940706e93",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/098/031124b940706e93",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/098/031124b940706e93",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/098/031124b940706e93",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/098/031124b940706e93"
    },
    name: {
        en: "Blissey ex",
        "fr": "Leuphorie-ex",
        "es": "Blissey ex",
        "it": "Blissey-ex",
        "de": "Heiteira-ex",
        "pt-br": "Blissey ex",
        "zh-tw": "幸福蛋ex",
        ja: "ハピナスex",
        ko: "해피너스 ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 180,
    types: ["Colorless"],
    evolveFrom: {
        en: "Chansey",
        "fr": "Leveinard",
        "es": "Chansey",
        "it": "Chansey",
        "de": "Chaneira",
        "pt-br": "Chansey",
        "zh-tw": "吉利蛋",
        ja: "ラッキー",
        ko: "럭키"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Happy Punch",
                "fr": "Coup d'Joie",
                "es": "Puño Feliz",
                "it": "Pugnolieto",
                "de": "Freudenschlag",
                "pt-br": "Soco Feliz",
                "zh-tw": "幸福拳",
                ja: "しあわせパンチ",
                ko: "행복펀치"
            },
            damage: 100,
            cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, heal 60 damage from this Pokémon.",
                "fr": "Lancez une pièce. Si c'est face, soignez 60 dégâts de ce Pokémon.",
                "es": "Lanza 1 moneda. Si sale cara, cura 60 puntos de daño a este Pokémon.",
                "it": "Lancia una moneta. Se esce testa, cura questo Pokémon da 60 danni.",
                "de": "Wirf 1 Münze. Heile bei Kopf 60 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Jogue uma moeda. Se sair cara, cure 60 pontos de dano deste Pokémon.",
                "zh-tw": "擲1次硬幣若為正面,則將這隻寶可夢恢復60HP。",
                ja: "コインを1回投げオモテなら、このポケモンのHPを60回復。",
                ko: "동전을 1번 던져서 앞면이 나오면 이 포켓몬의 HP를 60회복."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
