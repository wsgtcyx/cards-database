import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/203",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/203",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/203",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/203",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/203",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/203",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/203",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/203",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/203"
    },
    name: {
        en: "Spearow",
        fr: "Piafabec",
        es: "Spearow",
        "pt-br": "Spearow",
        "zh-tw": "烈雀",
        ja: "オニスズメ",
        ko: "깨비참",
        it: "Spearow",
        de: "Habitak"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 60,
    types: [
        "Colorless"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Flap",
                fr: "Battement",
                es: "Aleteo",
                it: "Alabattito",
                de: "Flattern",
                "pt-br": "Asa",
                "zh-tw": "羽擊",
                ja: "はばたく",
                ko: "홰치기"
            },
            cost: [
                "Colorless"
            ],
            damage: 20
        }
    ],
    abilities: [],
    description: {
        en: "Its reckless nature leads it to stand up to others—even large Pokémon—if it has to protect its territory.",
        fr: "Un Pokémon téméraire qui n’hésite pas à affronter des Pokémon plus gros que lui pour protéger son territoire.",
        es: "Su temperamento temerario hace que no dude en enfrentarse a rivales mucho más grandes a la hora de defender su territorio.",
        it: "Temerario di natura, per difendere il proprio territorio non esita a lanciarsi anche contro avversari più grandi di lui.",
        de: "Wenn es um die Verteidigung seines Reviers geht, schreckt das draufgängerische Habitak selbst vor großen Pokémon nicht zurück.",
        "pt-br": "Sua natureza descuidada leva Spearow a encarar até Pokémon maiores quando precisa proteger o seu território.",
        "zh-tw": "生性魯莽衝動，凡要是為了守護自己的地盤，即使對手是大型寶可夢也會正面迎戰。",
        ja: "自分のテリトリーを 守るためなら 大きな ポケモンが 相手でも 向かっていく 向こう見ずな 性質。",
        ko: "자신의 영역을 지키기 위해서라면\n상대가 큰 포켓몬이라도\n덤벼드는 무모한 성질을 가졌다."
    }
};

export default card;
