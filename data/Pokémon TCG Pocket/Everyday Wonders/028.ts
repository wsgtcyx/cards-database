import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/028",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/028",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/028",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/028",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/028",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/028",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/028"
    },
    name: {
        en: "Munna",
        fr: "Munna",
        es: "Munna",
        it: "Munna",
        de: "Somniam",
        "pt-br": "Munna",
        "zh-tw": "食夢夢",
        ko: "몽나",
        ja: "ムンナ"
    },
    illustrator: "Yoko Hishida",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    dexId: [517],
    stage: "Basic",
    description: {
        en: "It eats dreams and releases mist. The mist is pink when it’s eating a good dream, and black when it’s eating a nightmare.",
        fr: "Il se nourrit de songes et expire de la fumée\nqui prend la couleur rose si le rêve est joyeux,\nou noire s’il s’agit d’un cauchemar.",
        es: "El humo que despide cambia de color en función\ndel sueño que haya consumido. Si es alegre, será\nrosa, o negruzco en el caso de una pesadilla.",
        it: "Si nutre di sogni. Esala un fumo rosa se sono\nsogni piacevoli e nero se sono incubi.",
        de: "Während es Träume frisst, stößt es Dunst aus.\nBei fröhlichen Träumen ist dieser rosafarben,\nbei Alpträumen schwärzlich.",
        "pt-br": "Come sonhos e libera névoa. A névoa é rosa quando está comendo um sonho bom e preta quando está comendo um pesadelo.",
        "zh-tw": "在吃掉夢之後會吐出煙霧。\n吃了快樂的夢時，煙霧是粉紅色的；\n如果是惡夢，煙霧則是黑灰色的。"
    },
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Ram",
                fr: "Collision",
                es: "Apisonar",
                it: "Carica",
                de: "Ramme",
                "pt-br": "Aríete",
                "zh-tw": "衝撞"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
