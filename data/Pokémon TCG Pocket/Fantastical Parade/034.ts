import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/034",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/034",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/034",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/034",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/034",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/034"
    },
    name: {
        en: "Marshtomp",
        "fr": "Marais",
        "es": "Marshtomp",
        "it": "Marshtomp",
        "de": "Marshtomp",
        "pt-br": "Marshtomp",
        "zh-tw": "馬什托姆普"
    },
    illustrator: "sui",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    evolveFrom: {
        en: "Mudkip",
        "fr": "Boue",
        "es": "Mudkip",
        "it": "Mudkip",
        "de": "Schlammkippe",
        "pt-br": "Mudkip",
        "zh-tw": "水雀"
    },
    description: {
        en: "It is at its best when on muddy ground that offers\npoor footing. It quickly overwhelms opponents\nthat are bogged down and unable to move.",
        "fr": "Il est à son meilleur sur un terrain boueux qui offre\nmauvais pied. Il submerge rapidement les adversaires\nqui sont enlisés et incapables de bouger.",
        "es": "Es mejor en terrenos fangosos que ofrecen\nmal equilibrio. Rápidamente abruma a los oponentes.\nque están estancados y no pueden moverse.",
        "it": "Dà il meglio di sé quando si trova sul terreno fangoso che offre\npessimo appoggio. Travolge rapidamente gli avversari\nche sono impantanati e incapaci di muoversi.",
        "de": "Es ist am besten, wenn es sich auf schlammigem Untergrund befindet\nschlechter Stand. Es überwältigt Gegner schnell\ndie festsitzen und sich nicht bewegen können.",
        "pt-br": "Está no seu melhor quando em terreno lamacento que oferece\npéssimos pés. Ele rapidamente domina os oponentes\nque estão atolados e incapazes de se mover.",
        "zh-tw": "當在泥濘的地面上時它是最好的\n立足點差。很快就壓倒了對手\n陷入困境無法移動。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Surf",
                "fr": "Surf",
                "es": "Navegar",
                "it": "Navigare",
                "de": "Surfen",
                "pt-br": "Surfar",
                "zh-tw": "衝浪"
            },
            damage: 40,
            cost: ["Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
