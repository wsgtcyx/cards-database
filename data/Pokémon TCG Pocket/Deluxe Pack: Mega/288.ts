import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/288",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/288",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/288",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/288",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/288",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/288",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/288"
    },
    name: {
        en: "Frigibax",
        fr: "Frigodo",
        es: "Frigibax",
        it: "Frigibax",
        de: "Frospino",
        "pt-br": "Frigibax",
        "zh-tw": "涼脊龍",
        ja: "セビエ",
        ko: "드니차"
    },
    illustrator: "AKIRA EGAWA",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Water"
    ],
    dexId: [
        996
    ],
    description: {
        en: "This Pokémon lives in forests and craggy areas. Using the power of its dorsal fin, it cools the inside of its nest like a refrigerator.",
        fr: "Il vit dans les zones rocheuses et les forêts. Sa crête dorsale lui permet de refroidir l'intérieur de son nid à la manière d'un congélateur.",
        es: "Vive en bosques y entornos pedregosos. Se vale del poder de su placa dorsal para refrigerar su madriguera como si fuera un frigorífico.",
        it: "Vive nelle foreste e in aree rocciose. Usa la cresta dorsale per raffreddare l'interno della tana quasi come fosse un frigorifero.",
        de: "Es lebt in Wäldern und Felsgebieten. Mit der Kraft seiner Rückenflosse kühlt es sein Nest wie eine Gefriertruhe herunter.",
        "pt-br": "Este Pokémon vive em florestas e áreas escarpadas. Usando o poder de sua barbatana dorsal, resfria seu ninho da mesma forma que um refrigerador.",
        "zh-tw": "棲息在岩石地帶或森林裡。會用背鰭的力量將巢穴裡的溫度降到如冷凍庫般寒冷。",
        ja: "This Pokémon lives in forests and craggy areas. Using the power of its dorsal fin, it cools the inside of its nest like a refrigerator.",
        ko: "This Pokémon lives in forests and craggy areas. Using the power of its dorsal fin, it cools the inside of its nest like a refrigerator."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Chilly",
                fr: "Glacial",
                es: "Fresquito",
                it: "Addiaccio",
                de: "Frösteln",
                "pt-br": "Frio",
                "zh-tw": "寒意",
                "es-mx": "Frialdad",
                pt: "Frio",
                ja: "Chilly",
                ko: "Chilly"
            },
            damage: 20,
            cost: [
                "Water"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
