import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/199",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/199",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/199",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/199",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/199",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/199",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/199"
    },
    name: {
        en: "Rhyhorn",
        fr: "Rhinocorne",
        es: "Rhyhorn",
        "pt-br": "Rhyhorn",
        "zh-tw": "獨角犀牛",
        ja: "サイホーン",
        ko: "뿔카노",
        it: "Rhyhorn",
        de: "Rihorn"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 80,
    types: [
        "Fighting"
    ],
    stage: "Basic",
    retreat: 3,
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Lunge Out",
                fr: "Allonger",
                es: "Arremeter",
                it: "Affondo Lungo",
                de: "Sprungangriff",
                "pt-br": "Bote",
                "zh-tw": "撞倒",
                ja: "Lunge Out",
                ko: "Lunge Out"
            },
            cost: [
                "Fighting"
            ],
            damage: 20
        }
    ],
    abilities: [],
    description: {
        en: "Rhyhorn claims an area with over a six mile radius as its territory. It apparently forgets where this territory is when running, however.",
        fr: "Son territoire s’étend sur un rayon de 10 km, mais on raconte que lorsqu’il se met à courir, il oublie totalement où ce dernier se trouve.",
        es: "Puede controlar un territorio de hasta 10 km de radio, pero, cuando se pone a correr, parece olvidársele dónde empieza y dónde acaba.",
        it: "Sceglie un’area di 10 km di raggio come suo territorio, ma pare che quando corre finisca per dimenticare quale sia.",
        de: "Das Revier dieses Pokémon hat einen Radius von 10 km. Sobald es jedoch losrennt, scheint es zu vergessen, wo dieses anfängt und aufhört.",
        "pt-br": "Rhyhorn reivindica uma área com mais de dez quilômetros de raio como seu território, mas dizem que, ao correr, esquece onde ele fica.",
        "zh-tw": "獨角犀牛把半徑10公里的範圍當作地盤，但那奔跑起來就會忘記自己的地盤在哪裡。",
        ja: "Rhyhorn claims an area with over a six mile radius as its territory. It apparently forgets where this territory is when running, however.",
        ko: "Rhyhorn claims an area with over a six mile radius as its territory. It apparently forgets where this territory is when running, however."
    }
};

export default card;
