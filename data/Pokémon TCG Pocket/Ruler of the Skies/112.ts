import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/112",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/112",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/112",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/112",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/112",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/112",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/112"
    },
    name: {
        en: "Duraludon",
        fr: "Duralugon",
        es: "Duraludon",
        it: "Duraludon",
        de: "Duraludon",
        "pt-br": "Duraludon",
        "zh-tw": "鋁鋼龍",
        ko: "두랄루돈",
        ja: "ジュラルドン"
    },
    illustrator: "kawayoo",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Metal"],
    dexId: [884],
    stage: "Basic",
    description: {
        en: "Its metal body is durable but prone to retaining heat. It vents this heat from the slits in its tail.",
        fr: "Ce Pokémon a un corps en métal robuste, mais comme la chaleur reste piégée à l'intérieur, il doit la libérer par les fentes de sa queue.",
        es: "Su cuerpo metálico es robusto, pero acumula calor con tanta facilidad que se ve obligado a liberarlo a través de las rendijas de la cola.",
        it: "Il suo corpo metallico è robusto ma ha lo svantaggio di accumulare calore, che viene perciò rilasciato dalle fessure sulla coda.",
        de: "Sein metallener Körper ist robust, aber heizt sich schnell auf. Um einen Hitzestau zu verhindern, leitet es Wärme durch Schlitze im Schwanz ab.",
        "pt-br": "O seu corpo de metal é resistente, mas propenso a reter calor. Libera o calor pelas fendas de sua cauda.",
        "zh-tw": "金屬構成的身體雖然堅固\n但無法散熱，因此牠會從\n尾巴上的縫隙排出熱氣。"
    },
    attacks: [
        {
            cost: ["Metal", "Metal", "Colorless"],
            name: {
                en: "Metal Claw",
                fr: "Griffe Acier",
                es: "Garra Metal",
                it: "Ferrartigli",
                de: "Metallklaue",
                "pt-br": "Garra de Metal",
                "zh-tw": "金屬爪"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3
};
export default card;
