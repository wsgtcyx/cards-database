import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/056",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/056",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/056",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/056",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/056",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/056",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/056",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4/056",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4/056"
    },
    name: {
        en: "Tynamo",
        fr: "Anchwatt",
        es: "Tynamo",
        it: "Tynamo",
        de: "Zapplardin",
        "pt-br": "Tynamo",
        "zh-tw": "麻麻小魚",
        ko: "저리어",
        ja: "シビシラス"
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 40,
    types: ["Lightning"],
    dexId: [602],
    stage: "Basic",
    description: {
        en: "These Pokémon move in schools. They have an electricity-generating organ, so they discharge electricity if in danger.",
        fr: "Ils agissent en groupes. Ils possèdent\nun organe produisant de l’électricité et\nlancent des décharges en cas de danger.",
        es: "Actúa siempre en su cardumen. Cuenta con un órgano que genera electricidad y la libera cuando está en peligro.",
        it: "Pokémon che agisce in gruppo. Dotato di un apparato che genera elettricità, nei momenti critici emette scariche elettriche.",
        "de": "Es besitzt ein Organ, mit dem es im Notfall Elektrizität erzeugen kann. Es tritt stets in Schwärmen auf.",
        "pt-br": "Estes Pokémon movem-se em cardumes. Possuem um órgão gerador de eletricidade, que é descarregada em caso de perigo.",
        "zh-tw": "集體行動的寶可夢。\n擁有製造電力的器官，\n遇到危機時就會發電。",
        ja: "群れで 行動する ポケモン。電気を 作る 器官を 持ち ピンチになると 発電する。",
        ko: "무리 지어 행동하는 포켓몬이다.\n전기를 만드는 기관이 있으며\n위급해지면 전기를 방출한다."
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Tackle",
                fr: "Charge",
                es: "Placaje",
                it: "Azione",
                de: "Tackle",
                "pt-br": "Investida",
                "zh-tw": "撞擊",
                ja: "たいあたり",
                ko: "몸통박치기"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};
export default card;
