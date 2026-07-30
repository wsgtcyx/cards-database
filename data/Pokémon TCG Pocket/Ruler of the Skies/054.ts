import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/054"
    },
    name: {
        en: "Pachirisu",
        fr: "Pachirisu",
        es: "Pachirisu",
        it: "Pachirisu",
        de: "Pachirisu",
        "pt-br": "Pachirisu",
        "zh-tw": "帕奇利茲",
        ko: "파치리스",
        ja: "パチリス"
    },
    illustrator: "Keisin",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    dexId: [417],
    stage: "Basic",
    description: {
        en: "A pair may be seen rubbing their cheek pouches together in an effort to share stored electricity.",
        fr: "Il arrive que deux Pachirisu se frottent les joues pour partager\nl’électricité qu’ils ont accumulée.",
        es: "A veces se ve a dos frotándose las bolsas de las mejillas\npara compartir electricidad almacenada.",
        it: "Talvolta due esemplari si sfregano le guance per condividere\nl’elettricità immagazzinata.",
        de: "Um gespeicherte Elektrizität zu teilen, reiben zwei von ihnen\nihre Backentaschen aneinander."
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Crackling Snap"
            },
            effect: {
                en: "Discard the top card of your deck, and if that card is an Item, this attack does 20 more damage."
            },
            damage: "30+"
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
