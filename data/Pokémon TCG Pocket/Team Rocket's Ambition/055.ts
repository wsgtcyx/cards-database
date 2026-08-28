import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/055",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/055",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/055",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/055",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/055",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/055",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/055"
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
    illustrator: "Ryuta Fuse",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Dragon"],
    dexId: [884],
    stage: "Basic",
    description: {
        en: "Its metal body is durable but prone to retaining heat. It vents this heat from the slits in its tail.",
        fr: "Ce Pokémon a un corps en métal robuste, mais comme la chaleur reste piégée à l'intérieur, il doit la libérer par les fentes de sa queue.",
        es: "Su cuerpo metálico es robusto, pero acumula calor con tanta facilidad que se ve obligado a liberarlo a través de las rendijas de la cola.",
        it: "Il suo corpo metallico è robusto ma ha lo svantaggio di accumulare calore, che viene perciò rilasciato dalle fessure sulla coda.",
        de: "Sein metallener Körper ist robust, aber heizt sich schnell auf. Um einen Hitzestau zu verhindern, leitet es Wärme durch Schlitze im Schwanz ab.",
        "pt-br": "O seu corpo de metal é resistente, mas propenso a reter calor. Libera o calor pelas fendas de sua cauda.",
        "zh-tw": "金屬構成的身體雖然堅固但無法散熱，因此牠會從尾巴上的縫隙排出熱氣。"
    },
    attacks: [
        {
            cost: ["Fighting", "Metal"],
            name: {
                en: "Power Beam",
                fr: "Puissant Rayon",
                es: "Rayo de Luz Poderoso",
                it: "Raggiopotenza",
                de: "Power-Strahl",
                "pt-br": "Raio de Poder",
                "zh-tw": "強力光束"
            },
            damage: 50
        }
    ],
    retreat: 2
};

export default card;
