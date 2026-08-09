import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/079",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/079",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/079",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/079",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/079",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/079",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/079"
    },
    name: {
        en: "Togetic",
        "fr": "Togetic",
        "es": "Togetic",
        "it": "Togetic",
        "de": "Togetic",
        "pt-br": "Togetic",
        "zh-tw": "波克基古",
    },
    illustrator: "Atsuko Nishida",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Psychic"],
    evolveFrom: {
        en: "Togepi",
        "fr": "Togepi",
        "es": "Togepi",
        "it": "Togepi",
        "de": "Togepi",
        "pt-br": "Togepi",
        "zh-tw": "波克比",
    },
    description: {
        en: "They say that it will appear before kindhearted,\ncaring people and shower them with happiness.",
        "fr": "Ils disent qu'il apparaîtra devant un bon cœur,\ndes gens attentionnés et les comble de bonheur.",
        "es": "Dicen que aparecerá ante los bondadosos,\ncuidar a las personas y colmarlas de felicidad.",
        "it": "Dicono che apparirà prima di buon cuore,\nprendersi cura delle persone e inondarle di felicità.",
        "de": "Sie sagen, dass es vor gutherzigen Menschen erscheinen wird,\nFürsorgliche Menschen und überschütte sie mit Glück.",
        "pt-br": "Dizem que aparecerá diante de pessoas de bom coração,\ncuidar das pessoas e regá-las de felicidade.",
        "zh-tw": "都說它會出現在善良的人面前，\n關愛人們並為他們帶來幸福。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Speed Dive",
                "fr": "Plongée rapide",
                "es": "Buceo rápido",
                "it": "Immersione veloce",
                "de": "Speed-Tauchgang",
                "pt-br": "Mergulho rápido",
                "zh-tw": "快速潛水"
            },
            damage: 30,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
