import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/110",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/110",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/110",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/110",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/110"
    },
    name: {
        en: "Galarian Meowth",
        "fr": "Miaouss de Galar",
        "es": "Meowth de Galar",
        "it": "Meowth di Galar",
        "de": "Galarisches Miauen",
        "pt-br": "Meowth de Galar",
        "zh-tw": "加拉瑞喵喵"
    },
    illustrator: "0313",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    description: {
        en: "These daring Pokémon have coins on their\nforeheads. Darker coins are harder, and harder\ncoins garner more respect among Meowth.",
        "fr": "Ces Pokémon audacieux ont des pièces sur leur\nfronts. Les pièces plus sombres sont de plus en plus dures\nles pièces suscitent plus de respect parmi Meowth.",
        "es": "Estos atrevidos Pokémon tienen monedas en sus\nfrentes. Las monedas más oscuras son cada vez más duras\nLas monedas ganan más respeto entre Meowth.",
        "it": "Questi Pokémon audaci hanno delle monete sulle loro mani\nfronti. Le monete più scure sono sempre più difficili\nle monete guadagnano più rispetto tra Meowth.",
        "de": "Diese mutigen Pokémon haben Münzen bei sich\nStirnen. Dunklere Münzen sind immer härter\nMünzen verschaffen Mauzi mehr Respekt.",
        "pt-br": "Esses Pokémon ousados têm moedas em seus\ntestas. Moedas mais escuras são cada vez mais difíceis\nas moedas conquistam mais respeito entre Meowth.",
        "zh-tw": "這些勇敢的神奇寶貝身上都有硬幣\n額頭。顏色越深的硬幣越難，越難\n硬幣在 Meowth 中贏得了更多尊重。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Slash",
                "fr": "Sabrer",
                "es": "Barra oblicua",
                "it": "Barra",
                "de": "Schrägstrich",
                "pt-br": "Barra",
                "zh-tw": "削減"
            },
            damage: 20,
            cost: ["Metal"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
