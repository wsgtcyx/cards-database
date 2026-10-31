import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-A/092",
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-A/092",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-A/092",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-A/092",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-A/092",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-A/092",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/092",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/P-A/092",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/P-A/092"
    },
    name: {
        en: "Eevee",
        es: "Eevee",
        "fr": "Évoli",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ja: "イーブイ",
        ko: "이브이"
    },
    illustrator: "nisimono",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "Its ability to evolve into many forms allows it to\nadapt smoothly and perfectly to any environment.",
        es: "Es capaz de evolucionar de muchas maneras\npara adaptarse sin problemas a cualquier medio.",
        "fr": "Sa capacité à évoluer vers de nombreuses formes lui permet de\ns'adapter en douceur et parfaitement à n'importe quel environnement.",
        "it": "La sua capacità di evolversi in molte forme glielo consente\nadattarsi agevolmente e perfettamente a qualsiasi ambiente.",
        "de": "Seine Fähigkeit, sich in viele Formen zu entwickeln, ermöglicht es ihm\npassen sich jeder Umgebung reibungslos und perfekt an.",
        "pt-br": "Sua capacidade de evoluir em muitas formas permite que ele\nadapta-se suavemente e perfeitamente a qualquer ambiente.",
        "zh-tw": "它能夠進化成多種形式，使其能夠\n順利、完美地適應任何環境。",
        ja: "環境の 変化に すぐさま 合わせられるよう いくつもの 進化の 可能性を 秘めている。",
        ko: "환경 변화에 곧바로 적응할 수 있도록\n여러 형태로 진화할 수 있는\n가능성을 가지고 있다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tackle",
                es: "Placaje",
                "fr": "Tacle",
                "it": "Attrezzatura",
                "de": "Tackle",
                "pt-br": "Enfrentar",
                "zh-tw": "處理",
                ja: "たいあたり",
                ko: "몸통박치기"
            },
            damage: 20,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
