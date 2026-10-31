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
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/006",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/006",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/006"
    },
    name: {
        en: "Scyther",
        "fr": "Insécateur",
        "es": "Scyther",
        "it": "Scyther",
        "de": "Sichlor",
        "pt-br": "Scyther",
        "zh-tw": "飛天螳螂",
        ja: "ストライク",
        ko: "스라크",
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
        "zh-tw": "它用鋒利的刀砍過草地\n鐮刀，對於人類來說移動得太快\n眼睛追踪。",
        ja: "切れ味 鋭い カマを 使って 草むらを 切り進む。あまりに 速い 動きで 目が 追いつかない。",
        ko: "아주 예리한 낫을 이용해\n풀숲을 베며 나아간다.\n매우 빠른 움직임에 눈이 따라가지 못한다."
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
                "zh-tw": "削減",
                ja: "きりさく",
                ko: "베어가르기"
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
