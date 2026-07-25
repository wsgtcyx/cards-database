import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/067",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/067",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/067",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/067",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/067",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/067"
    },
    name: {
        en: "Maschiff",
        fr: "Grondogue",
        es: "Maschiff",
        it: "Maschiff",
        de: "Mobtiff",
        "pt-br": "Maschiff",
        "zh-tw": "偶叫獒",
        pt: "Maschiff"
    },
    illustrator: "KEIICHIRO ITO",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Darkness"],
    dexId: [942],
    description: {
        en: "Its well-developed jaw and fangs are strong enough to crunch through boulders, and its thick fat makes for an excellent defense.",
        "fr": "Sa mâchoire et ses crocs bien développés sont suffisamment forts pour briser des rochers, et sa graisse épaisse constitue une excellente défense.",
        "es": "Su mandíbula y colmillos bien desarrollados son lo suficientemente fuertes como para atravesar rocas, y su grasa espesa lo convierte en una excelente defensa.",
        "it": "La sua mascella e le sue zanne ben sviluppate sono abbastanza forti da sfondare i massi, e il suo grasso spesso costituisce un'eccellente difesa.",
        "de": "Sein gut entwickelter Kiefer und seine Reißzähne sind stark genug, um durch Felsbrocken zu brechen, und sein dickes Fett sorgt für eine hervorragende Verteidigung.",
        "pt-br": "Sua mandíbula e presas bem desenvolvidas são fortes o suficiente para quebrar pedras, e sua gordura espessa é uma excelente defesa.",
        "zh-tw": "它發達的下巴和尖牙足以咬碎巨石，而厚厚的脂肪則具有極佳的防禦能力。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Bite",
                fr: "Morsure",
                es: "Mordisco",
                it: "Morso",
                de: "Biss",
                "pt-br": "Morder",
                "zh-tw": "咬",
                pt: "Mordida",
                'es-mx': "Mordida"
            },
            damage: "30",
            cost: ["Darkness", "Colorless"],
        },
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20",
        },
    ],
    retreat: 2,
};
export default card;
