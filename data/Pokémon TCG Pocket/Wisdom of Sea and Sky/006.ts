import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/006",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/006",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/006",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/006",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/006",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/006",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/006"
    },
    name: {
        en: "Scyther",
        "fr": "Insécateur",
        "es": "Scyther",
        "it": "Scyther",
        "de": "Sichlor",
        "pt-br": "Scyther",
        "zh-tw": "飛天螳螂",
    },
    illustrator: "Narumi Sato",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Grass"],
    description: {
        en: "It slashes through grass with its sharp\nscythes, moving too fast for the human\neye to track.",
        "fr": "Il coupe l'herbe avec son tranchant\ndes faux, se déplaçant trop vite pour l'humain\noeil à suivre.",
        "es": "Corta la hierba con su afilado\nguadañas, moviéndose demasiado rápido para el humano\nojo para seguir.",
        "it": "Taglia l'erba con la sua lama affilata\nfalci, che si muovono troppo velocemente per l'umano\nocchio al tracciamento.",
        "de": "Mit seiner scharfen Klinge schneidet es durch das Gras\nSensen, die sich zu schnell für den Menschen bewegen\nAuge zum Verfolgen.",
        "pt-br": "Ele corta a grama com seu poder afiado\nfoices, movendo-se rápido demais para o humano\nolho para rastrear.",
        "zh-tw": "它用鋒利的刀砍過草地\n鐮刀，對於人類來說移動得太快\n眼睛追踪。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Slash",
                "fr": "Sabrer",
                "es": "Barra oblicua",
                "it": "Barra",
                "de": "Schrägstrich",
                "pt-br": "Barra",
                "zh-tw": "削減"
            },
            damage: 20,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
