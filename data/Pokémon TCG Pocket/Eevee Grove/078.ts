import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3b/078",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3b/078",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3b/078",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3b/078",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3b/078",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3b/078",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3b/078",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3b/078",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3b/078"
    },
    name: {
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
    illustrator: "Narumi Sato",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "Its ability to evolve into many forms allows it to\nadapt smoothly and perfectly to any environment.",
        "fr": "Sa capacité à évoluer vers de nombreuses formes lui permet de\ns'adapter en douceur et parfaitement à n'importe quel environnement.",
        "es": "Su capacidad para evolucionar en muchas formas le permite\nadaptarse suave y perfectamente a cualquier entorno.",
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
                en: "Collect",
                "fr": "Collecter",
                "es": "Recolectar",
                "it": "Raccogliere",
                "de": "Sammeln",
                "pt-br": "Coletar",
                "zh-tw": "收集",
                ja: "もってくる",
                ko: "가져오기"
            },
            cost: ["Colorless"],
            effect: {
                en: "Draw a card.",
                "fr": "Piochez une carte.",
                "es": "Saca una carta.",
                "it": "Pesca una carta.",
                "de": "Ziehe eine Karte.",
                "pt-br": "Compre uma carta.",
                "zh-tw": "畫一張卡片。",
                ja: "自分の山札を1枚引く。",
                ko: "자신의 덱을 1장 뽑는다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
