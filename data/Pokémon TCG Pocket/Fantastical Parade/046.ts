import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/046",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/046",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/046",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/046",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/046"
    },
    name: {
        en: "Arrokuda",
        "fr": "Arrokuda",
        "es": "Arrokuda",
        "it": "Arrokuda",
        "de": "Arrokuda",
        "pt-br": "Arrokuda",
        "zh-tw": "阿羅庫達"
    },
    illustrator: "Hitoshi Ariga",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "After it's eaten its fill, its movements become\nextremely sluggish. That's when Cramorant\nswallows it up.",
        "fr": "Après avoir mangé à satiété, ses mouvements deviennent\nextrêmement lent. C'est alors que Cramorant\nl'avale.",
        "es": "Después de haber comido hasta saciarse, sus movimientos se vuelven\nextremadamente lento. Fue entonces cuando Cramorant\nse lo traga.",
        "it": "Dopo che si è saziato, i suoi movimenti diventano\nestremamente lento. Fu allora che Cramorant\nlo ingoia.",
        "de": "Nachdem es sich satt gegessen hat, werden seine Bewegungen\nextrem träge. Das ist, wenn Cramorant\nschluckt es.",
        "pt-br": "Depois de ter comido até se fartar, seus movimentos tornam-se\nextremamente lento. Foi quando Cramorant\nengole tudo.",
        "zh-tw": "吃飽後，它的動作就變成了\n極其遲緩。就在那時，克拉莫蘭特\n吞掉它。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Ram",
                "fr": "Bélier",
                "es": "RAM",
                "it": "Ram",
                "de": "RAM",
                "pt-br": "Bater",
                "zh-tw": "內存"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
