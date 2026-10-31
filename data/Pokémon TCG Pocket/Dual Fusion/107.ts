import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/107",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/107",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/107",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/107",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/107",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/107",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/107",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/107"
    },
    name: {
        en: "Eevee",
        fr: "Évoli",
        es: "Eevee",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ja: "イーブイ",
        ko: "이브이",
        it: "Eevee",
        de: "Evoli"
    },
    illustrator: "0313",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x",
        "pikachu"
    ],
    hp: 60,
    types: [
        "Colorless"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Signs of Evolution",
                fr: "Signes d'Évolution",
                es: "Indicios de Evolución",
                it: "Evolvisegni",
                de: "Spuren der Evolution",
                "pt-br": "Sinais de Evolução",
                "zh-tw": "進化預兆",
                ja: "しんかのきざし",
                ko: "Signs of Evolution"
            },
            cost: [
                "Colorless"
            ],
            effect: {
                en: "Put a random card that evolves from Eevee from your deck into your hand.",
                fr: "Ajoutez au hasard une carte Évolution de Évoli de votre deck à votre main.",
                es: "Pon 1 carta aleatoria que evolucione de Eevee de tu baraja en tu mano.",
                it: "Prendi una carta a caso dal tuo mazzo che si evolve da Eevee e aggiungila alle carte che hai in mano.",
                de: "Nimm 1 zufällige Karte, die sich aus Evoli entwickelt, aus deinem Deck auf deine Hand.",
                "pt-br": "Coloque 1 carta aleatória que evolua de Eevee do seu baralho na sua mão.",
                "zh-tw": "從自己的牌庫隨機將1張從「伊布」進化而來的卡加入手牌。",
                ja: "「イーブイ」から進化するカードを、自分の山札からランダムに1枚、手札に加える。",
                ko: "Put a random card that evolves from Eevee from your deck into your hand."
            }
        }
    ],
    abilities: [],
    description: {
        en: "Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.",
        fr: "Ses multiples évolutions lui permettent de s’adapter à tout type de milieu naturel.",
        es: "Es capaz de evolucionar de muchas maneras para adaptarse sin problemas a cualquier medio.",
        it: "La capacità di evolversi in diverse specie gli permette di adattarsi perfettamente a qualsiasi tipo di ambiente.",
        de: "Um sich jeder Umgebung perfekt anpassen zu können, ist es in der Lage, sich zu verschiedenen Pokémon zu entwickeln.",
        "pt-br": "Sua capacidade de evoluir para muitas formas permite que se adapte fácil e perfeitamente a qualquer ambiente.",
        "zh-tw": "為了能瞬即適應環境的變化，身體裏蘊藏著許多種進化的可能性。",
        ja: "環境の 変化に すぐさま 合わせられるよう いくつもの 進化の 可能性を 秘めている。",
        ko: "Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment."
    }
};

export default card;
