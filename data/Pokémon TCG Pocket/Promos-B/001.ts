import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/001/be53b140365bb663",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/001/be53b140365bb663",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/001/be53b140365bb663",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/001/be53b140365bb663",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/001/be53b140365bb663",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/001/be53b140365bb663",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/001/be53b140365bb663",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/001/be53b140365bb663",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/001/be53b140365bb663"
    },
    name: {
        en: "Pikachu",
        fr: "Pikachu",
        es: "Pikachu",
        it: "Pikachu",
        de: "Pikachu",
        "pt-br": "Pikachu",
        "zh-tw": "皮卡丘",
        ko: "피카츄",
        ja: "ピカチュウ"
    },
    illustrator: "You Iribi",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    dexId: [25],
    stage: "Basic",
    description: {
        en: "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
        fr: "Quand il s'énerve, il libère instantanément\nl'énergie emmagasinée dans les poches de\nses joues.",
        es: "Cuando se enfada, este Pokémon\ndescarga la energía que almacena en\nel interior de las bolsas de las mejillas.",
        it: "Quando s'arrabbia, libera subito l'energia\naccumulata nelle sacche sulle guance.",
        de: "Ist es wütend, entlädt sich augenblicklich die\nElektrizität, die es in seinen Backentaschen\ngespeichert hat.",
        "pt-br": "Quando está com raiva, descarrega\nimediatamente a energia armazenada\nnas bolsas em suas bochechas.",
        "zh-tw": "雙頰上有儲存電力的囊袋。一旦生氣就會把儲存的電力一口氣釋放出來。",
        ja: "両頬には 電気を 溜めこむ 袋がある。 怒ると 溜めこんだ 電気を 一気に 放ってくる。",
        ko: "양 볼에는 전기를 저장하는 주머니가 있다.\n화가 나면 저장한 전기를 단숨에 방출한다."
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Spark",
                fr: "Étincelle",
                es: "Chispa",
                it: "Scintilla",
                de: "Funkensprung",
                "pt-br": "Faísca",
                "zh-tw": "電光",
                ja: "スパーク",
                ko: "스파크"
            },
            effect: {
                en: "This attack also does 10 damage to 1 of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige aussi 10 dégâts à un des Pokémon de Banc de votre adversaire.",
                es: "Este ataque también hace 10 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge anche 10 danni a uno dei Pokémon nella panchina del tuo avversario.",
                de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 10 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "對手的1隻備戰寶可夢也受到10點傷害。",
                ja: "相手のベンチポケモン1匹にも10ダメージ。",
                ko: "상대의 벤치 포켓몬 1마리에게도 10데미지를 준다."
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
