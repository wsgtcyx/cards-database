import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/059",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/059",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/059",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/059",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/059",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/059",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/059"
    },
    name: {
        en: "Crawdaunt",
        "fr": "Colhomard",
        "es": "Crawdaunt",
        "it": "Crawdaunt",
        "de": "Krebutack",
        "pt-br": "Crawdaunt",
        "zh-tw": "鐵螯龍蝦",
    },
    illustrator: "Shibuzoh.",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    evolveFrom: {
        en: "Corphish",
        "fr": "Corphish",
        "es": "corphish",
        "it": "Corphish",
        "de": "Corphish",
        "pt-br": "Corpus",
        "zh-tw": "龍蝦小兵",
    },
    description: {
        en: "A brutish Pokémon that loves to battle. It will\ncrash itself into any foe that approaches its nest.",
        "fr": "Un Pokémon brutal qui adore se battre. Ce sera\ns'écrase sur tout ennemi qui s'approche de son nid.",
        "es": "Un Pokémon brutal al que le encanta luchar. lo hará\nchoca contra cualquier enemigo que se acerque a su nido.",
        "it": "Un Pokémon brutale che ama combattere. Lo farà\nsi schianta contro qualsiasi nemico che si avvicini al suo nido.",
        "de": "Ein brutales Pokémon, das gerne kämpft. Das wird es\nprallt gegen jeden Feind, der sich seinem Nest nähert.",
        "pt-br": "Um Pokémon brutal que adora lutar. Isso vai\ncolidir com qualquer inimigo que se aproxime de seu ninho.",
        "zh-tw": "喜歡戰鬥的兇猛寶可夢。它將\n撞向任何接近其巢穴的敵人。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Guillotine",
                "fr": "Guillotine",
                "es": "Guillotina",
                "it": "Ghigliottina",
                "de": "Guillotine",
                "pt-br": "Guilhotina",
                "zh-tw": "斷頭台"
            },
            damage: 90,
            cost: ["Water", "Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
