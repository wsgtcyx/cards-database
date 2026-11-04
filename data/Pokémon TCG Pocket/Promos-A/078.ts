import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/078/94fbeb763ecd6d4a",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/078/94fbeb763ecd6d4a",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/078/94fbeb763ecd6d4a",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/078/94fbeb763ecd6d4a",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/078/94fbeb763ecd6d4a",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/078/94fbeb763ecd6d4a",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/078/94fbeb763ecd6d4a",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/078/94fbeb763ecd6d4a",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/078/94fbeb763ecd6d4a"
    },
    name: {
        en: "Dawn Wings Necrozma",
        es: "Necrozma Alas del Alba",
        "fr": "Necrozma Ailes de l'Aurore",
        "it": "Necrozma Ali dell’Aurora",
        "de": "Morgenschwingen-Necrozma",
        "pt-br": "Necrozma Asas Alvorada",
        "zh-tw": "奈克洛茲瑪拂曉之翼",
        ja: "ネクロズマあかつきのつばさ",
        ko: "네크로즈마 새벽의 날개",
    },
    illustrator: "nagimiso",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Psychic"],
    description: {
        en: "Lunala no longer has a will of its own. Now under the\ncontrol of Necrozma, it continuously expels all of its energy.",
        es: "En esta forma, Lunala no goza de voluntad propia. Necrozma\ntiene control absoluto y absorbe su energía poco a poco.",
        "fr": "Lunala a perdu toute volonté propre. Désormais sous le contrôle de Necrozma, il se vide de son énergie en continu.",
        "it": "In questa forma, Lunala è rimasto privo di volontà. Necrozma controlla ogni suo movimento e lo svuota poco a poco di tutte le sue energie.",
        "de": "In dieser Form unterliegt Lunala gänzlich Necrozmas Kontrolle, es hat keinen eigenen Willen mehr. Seine Energie fließt ungehindert aus.",
        "pt-br": "Nesta forma, Lunala não tem mais vontade própria. Necrozma tem o controle absoluto e expele toda a sua energia continuamente.",
        "zh-tw": "露奈雅拉已經沒有自我意識。在奈克洛茲瑪的支配之下，不斷釋放出全部的能量。",
        ja: "ルナアーラに 最早 意思は ない。 ネクロズマに 支配され すべての エネルギーを 放出 し続ける。",
        ko: "루나아라의 의식은 어느새 사라졌다.\n네크로즈마에게 지배되어\n모든 에너지를 방출하고 있다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Psychobilly",
                es: "Psychobilly",
                "fr": "Psychobilly",
                "it": "Psychobilly",
                "de": "Psychobilly",
                "pt-br": "Psychobilly",
                "zh-tw": "瘋狂比翼",
                ja: "サイコビリー",
                ko: "사이코빌리"
            },
            damage: 100,
            cost: ["Psychic", "Colorless", "Colorless"],
            effect: {
                en: "This Pokémon also does 30 damage to itself.",
                es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
                "fr": "Ce Pokémon s'inflige aussi 30 dégâts.",
                "it": "Questo Pokémon infligge anche 30 danni a se stesso.",
                "de": "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 30 pontos de dano a si mesmo.",
                "zh-tw": "這隻寶可夢也受到30點傷害。",
                ja: "このポケモンにも30ダメージ。",
                ko: "이 포켓몬에게도 30데미지를 준다."
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["vol9"]
};
export default card;
