import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Scyther",
        "fr": "Faucheur",
        "es": "Guadaña",
        "it": "Scyther",
        "de": "Sense",
        "pt-br": "Foice",
        "zh-tw": "鐮刀"
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
