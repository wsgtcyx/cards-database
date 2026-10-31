import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/160",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/160",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/160",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/160",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/160",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/160",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/160",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/160",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/160"
    },
    name: {
        en: "Reshiram",
        "fr": "Reshiram",
        "es": "Reshiram",
        "it": "Reshiram",
        "de": "Reshiram",
        "pt-br": "Reshiram",
        "zh-tw": "萊希拉姆",
        ja: "レシラム",
        ko: "레시라무"
    },
    illustrator: "toriyufu",
    rarity: "One Star",
    category: "Pokemon",
    hp: 120,
    types: ["Fire"],
    description: {
        en: "When Reshiram's tail flares, the heat energy moves\nthe atmosphere and changes the world's weather.",
        "fr": "Lorsque la queue de Reshiram s'évase, l'énergie thermique se déplace\nl'atmosphère et change la météo du monde.",
        "es": "Cuando la cola de Reshiram se enciende, la energía térmica se mueve\nla atmósfera y cambia el clima del mundo.",
        "it": "Quando la coda di Reshiram si allarga, l'energia termica si muove\nl'atmosfera e cambia il clima del mondo.",
        "de": "Wenn Reshirams Schwanz aufflammt, bewegt sich die Wärmeenergie\ndie Atmosphäre und verändert das Wetter auf der Welt.",
        "pt-br": "Quando a cauda de Reshiram se alarga, a energia térmica se move\na atmosfera e muda o clima do mundo.",
        "zh-tw": "當雷希拉姆的尾巴張開時，熱能就會移動\n大氣層並改變世界的天氣。",
        ja: "レシラムの 尻尾が 燃えると 熱エネルギーで 大気が 動いて 世界の 天気が 変化する。",
        ko: "레시라무의 꼬리가 불타면\n열에너지로 대기가 움직여서\n세계의 날씨가 변화된다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Blue Flare",
                "fr": "Flamme bleue",
                "es": "Llamarada azul",
                "it": "Bagliore blu",
                "de": "Blaues Leuchtfeuer",
                "pt-br": "Sinal Azul",
                "zh-tw": "藍色耀斑",
                ja: "あおいほのお",
                ko: "푸른불꽃"
            },
            damage: 110,
            cost: ["Fire", "Fire", "Fire"],
            effect: {
                en: "Discard 2 {R} Energy from this Pokémon.",
                "fr": "Défaussez 2 {R} Énergie de ce Pokémon.",
                "es": "Descarta 2 {R} de Energía de este Pokémon.",
                "it": "Scarta 2 Energie {R} da questo Pokémon.",
                "de": "Lege 2 {R}-Energien von diesem Pokémon ab.",
                "pt-br": "Descarte 2 {R} Energias deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的 2 個 {R} 能量。",
                ja: "このポケモンから{R}エネルギーを2個トラッシュ。",
                ko: "이 포켓몬에서 {R}에너지를 2개 트래쉬한다."
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2
};
export default card;
