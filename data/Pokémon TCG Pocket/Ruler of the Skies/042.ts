import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/042"
    },
    name: {
        en: "Oshawott",
        fr: "Moustillon",
        es: "Oshawott",
        it: "Oshawott",
        de: "Ottaro",
        "pt-br": "Oshawott",
        "zh-tw": "水水獺",
        ko: "수댕이",
        ja: "ミジュマル"
    },
    illustrator: "kurumitsu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [501],
    stage: "Basic",
    description: {
        en: "It's said that Oshawott learned to maintain its scalchop with riverbed stones by mimicking humans it saw using whetstones."
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Water Gun",
                fr: "Pistolet à O",
                es: "Pistola Agua",
                it: "Pistolacqua",
                de: "Aquaknarre",
                "pt-br": "Revólver d'Água",
                "zh-tw": "水槍"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
