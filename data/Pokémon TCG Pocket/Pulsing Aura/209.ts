import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/209",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/209"
    },
    name: {
        en: "Frillish",
        fr: "Viskuse",
        es: "Frillish",
        it: "Frillish",
        de: "Quabbel",
        "pt-br": "Frillish",
        "zh-tw": "輕飄飄",
        ko: "탱그릴",
        ja: "プルリル"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [592],
    stage: "Basic",
    description: {
        en: "Legend has it that the residents of a sunken ancient city changed into these Pokémon.",
        fr: "Certaines légendes racontent que les Viskuse\nsont les habitants d’une ancienne cité engloutie\nqui ont été changés en Pokémon.",
        es: "Cuenta la leyenda que los Frillish son en realidad\nlos habitantes de una antigua ciudad sumergida\nconvertidos en Pokémon.",
        it: "La leggenda narra che i Frillish siano in realtà gli\nabitanti di un’antica città sommersa che si sono\ntrasformati in Pokémon.",
        de: "Einer Sage nach sind Quabbel in Wirklichkeit\nBewohner einer uralten, im Meer versunkenen\nStadt, die zu Pokémon wurden.",
        "pt-br": "Diz a lenda que os residentes de uma cidade antiga submersa se transformaram nestes Pokémon.",
        "zh-tw": "據流傳至今的傳說所述，\n牠是由沉沒到海底的古代都市\n的居民變成的寶可夢。"
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
