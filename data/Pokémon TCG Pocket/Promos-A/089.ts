import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/089/e334af208eef8b02",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/089/e334af208eef8b02",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/089/e334af208eef8b02",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/089/e334af208eef8b02",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/089/e334af208eef8b02",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/089/e334af208eef8b02",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/089/e334af208eef8b02",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/089/e334af208eef8b02",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/089/e334af208eef8b02"
    },
    name: {
        en: "Audino",
        es: "Audino",
        "fr": "Nanméouïe",
        "it": "Audino",
        "de": "Ohrdoch",
        "pt-br": "Audino",
        "zh-tw": "差不多娃娃",
        ja: "タブンネ",
        ko: "다부니",
    },
    illustrator: "MAHOU",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    description: {
        en: "This Pokémon has a kind heart. By touching with its feelers,\nAudino can gauge other creatures' feelings and physical conditions.",
        es: "Un Pokémon gentil que es capaz de comprender\nlos sentimientos y averiguar el estado de salud\nde todo aquel que toque con sus antenas.",
        "fr": "Ce Pokémon gentil est capable de deviner les émotions et l'état de santé des autres rien qu'en les touchant avec ses antennes.",
        "it": "Questo Pokémon dal cuore tenero è in grado di percepire le condizioni fisiche e mentali di chi tocca con le antenne.",
        "de": "Berührt dieses herzensgute Pokémon jemanden mit seinen Fühlern, kann es dessen körperliche Verfassung und Gemütszustand ertasten.",
        "pt-br": "Este Pokémon tem um bom coração. Audino pode avaliar os sentimentos e as condições físicas de outras criaturas ao tocá-las com suas antenas.",
        "zh-tw": "心地善良的寶可夢。透過用觸角觸碰，就能了解對方的情緒和身體狀況。",
        ja: "心優しい ポケモン。 触角を 押し当て 相手の 気持ちや 体調を 理解する。",
        ko: "마음 착한 포켓몬이다.\n더듬이를 갖다 대어 상대의\n마음과 몸 상태를 파악한다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Drain Slap",
                es: "Absorbebofetón",
                "fr": "Baffe Sangsue",
                "it": "Sberlassorbimento",
                "de": "Watschensauger",
                "pt-br": "Bofetada Drenagem",
                "zh-tw": "吸取巴掌",
                ja: "ドレインビンタ",
                ko: "드레인 뺨치기"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Heal 10 damage from this Pokémon.",
                es: "Cura 10 puntos de daño a este Pokémon.",
                "fr": "Soignez 10 dégâts de ce Pokémon.",
                "it": "Cura questo Pokémon da 10 danni.",
                "de": "Heile 10 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 10 pontos de dano deste Pokémon.",
                "zh-tw": "將這隻寶可夢恢復10HP。",
                ja: "このポケモンのHPを10回復。",
                ko: "이 포켓몬의 HP를 10회복."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["vol10"]
};
export default card;
