import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/049",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/049",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/049",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/049",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/049",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/049",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/049"
    },
    name: {
        en: "Pikachu",
        "fr": "Pikachu",
        "es": "Pikachu",
        "it": "Pikachu",
        "de": "Pikachu",
        "pt-br": "Pikachu",
        "zh-tw": "皮卡丘"
    },
    illustrator: "chibi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    description: {
        en: "When several of these Pokémon gather, their\nelectricity can build and cause lightning storms.",
        "fr": "Lorsque plusieurs de ces Pokémon se rassemblent, leur\nl'électricité peut s'accumuler et provoquer des orages.",
        "es": "Cuando varios de estos Pokémon se reúnen, sus\nLa electricidad puede acumularse y provocar tormentas eléctricas.",
        "it": "Quando molti di questi Pokémon si riuniscono, il loro\nl'elettricità può accumularsi e causare temporali.",
        "de": "Wenn sich mehrere dieser Pokémon versammeln, werden ihre\nElektrizität kann sich aufbauen und Gewitter auslösen.",
        "pt-br": "Quando vários desses Pokémon se reúnem, seus\na eletricidade pode aumentar e causar tempestades com raios.",
        "zh-tw": "當這些神奇寶貝聚集在一起時，他們的\n電力會積聚並引發雷暴。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Thunder Jolt",
                "fr": "Coup de tonnerre",
                "es": "Sacudida del trueno",
                "it": "Scossa di tuono",
                "de": "Donnerstoß",
                "pt-br": "Trovão",
                "zh-tw": "雷霆震擊"
            },
            damage: 30,
            cost: ["Lightning"],
            effect: {
                en: "This Pokémon also does 10 damage to itself.",
                "fr": "Ce Pokémon s'inflige également 10 dégâts.",
                "es": "Este Pokémon también se hace 10 daños a sí mismo.",
                "it": "Questo Pokémon infligge anche 10 danni a se stesso.",
                "de": "Dieses Pokémon fügt sich selbst außerdem 10 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 10 de dano a si mesmo.",
                "zh-tw": "該神奇寶貝也會對其自身造成 10 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
