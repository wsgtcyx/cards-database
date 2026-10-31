import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/134",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/134",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/134",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/134",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/134",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/134",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/134",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/134",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/134"
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
    illustrator: "sowsow",
    rarity: "One Diamond",
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
                en: "Find a Friend",
                "fr": "Trouver un ami",
                "es": "encontrar un amigo",
                "it": "Trova un amico",
                "de": "Finde einen Freund",
                "pt-br": "Encontre um amigo",
                "zh-tw": "找朋友",
                ja: "ともだちをさがす",
                ko: "친구찾기"
            },
            cost: ["Colorless"],
            effect: {
                en: "Put a random Pokémon from your deck into your hand.",
                "fr": "Mettez un Pokémon aléatoire de votre deck dans votre main.",
                "es": "Pon un Pokémon aleatorio de tu mazo en tu mano.",
                "it": "Metti nella tua mano un Pokémon casuale dal tuo mazzo.",
                "de": "Nimm ein zufälliges Pokémon aus deinem Deck auf deine Hand.",
                "pt-br": "Coloque um Pokémon aleatório do seu baralho na sua mão.",
                "zh-tw": "從你的牌組中隨機將一隻神奇寶貝放入你的手牌。",
                ja: "自分の山札からポケモンをランダムに1枚、手札に加える。",
                ko: "자신의 덱에서 포켓몬을 랜덤으로 1장 패로 가져온다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh", "lugia"]
};
export default card;
