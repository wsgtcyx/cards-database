import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Corphish",
        "fr": "Corphish",
        "es": "corphish",
        "it": "Corphish",
        "de": "Corphish",
        "pt-br": "Corpus",
        "zh-tw": "科菲什"
    },
    illustrator: "Sekio",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    description: {
        en: "It was originally a Pokémon from afar that escaped\nto the wild. It can adapt to the dirtiest river.",
        "fr": "C'était à l'origine un Pokémon venu de loin qui s'est échappé\nà la nature. Il peut s'adapter à la rivière la plus sale.",
        "es": "Originalmente era un Pokémon de lejos que escapó.\na lo salvaje. Puede adaptarse al río más sucio.",
        "it": "In origine era un Pokémon venuto da lontano che fuggì\nallo stato selvatico. Può adattarsi al fiume più sporco.",
        "de": "Ursprünglich war es ein Pokémon aus der Ferne, das entkam\nin die Wildnis. Es kann sich an den schmutzigsten Fluss anpassen.",
        "pt-br": "Era originalmente um Pokémon de longe que escapou\npara a natureza. Pode se adaptar ao rio mais sujo.",
        "zh-tw": "原本是一隻從遠處逃走的神奇寶貝\n到野外。它能適應最髒的河流。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Water Gun",
                "fr": "Pistolet à eau",
                "es": "Pistola de agua",
                "it": "Pistola ad acqua",
                "de": "Wasserpistole",
                "pt-br": "Pistola de água",
                "zh-tw": "水槍"
            },
            damage: 20,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
