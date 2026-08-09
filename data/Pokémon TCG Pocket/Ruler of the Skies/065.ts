import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/065",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/065",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/065",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/065",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/065",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/065",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/065"
    },
    name: {
        en: "Clefable",
        fr: "Mélodelfe",
        es: "Clefable",
        it: "Clefable",
        de: "Pixi",
        "pt-br": "Clefable",
        "zh-tw": "皮可西",
        ko: "픽시",
        ja: "ピクシー"
    },
    illustrator: "ryoma uratsuka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Psychic"],
    dexId: [36],
    evolveFrom: {
        en: "Clefairy",
        fr: "Mélofée",
        es: "Clefairy",
        it: "Clefairy",
        de: "Piepi",
        "pt-br": "Clefairy",
        "zh-tw": "皮皮",
        ko: "삐삐",
        ja: "ピッピ"
    },
    stage: "Stage1",
    description: {
        en: "It has an acute sense of hearing. It can easily hear a pin being dropped nearly 1,100 yards away.",
        fr: "Ce Pokémon possède une ouïe très développée. Il peut facilement entendre une épingle tomber à 1 km de distance.",
        es: "Tiene un agudísimo sentido del oído. Es capaz de oír la caída de una aguja a 1 km de distancia.",
        it: "Dotato di un udito particolarmente sviluppato, è in grado di sentir cadere uno spillo a un chilometro di distanza.",
        "de": "Es besitzt ein exzellentes Hörvermögen. Darum kann es eine Nadel fallen hören, selbst wenn sie 1 km entfernt ist.",
        "pt-br": "Sua audição é extremamente aguçada. Pode facilmente escutar um alfinete caindo a quase 1.000 metros de distância.",
        "zh-tw": "聽覺靈敏，連1公里以外\n針落地的聲音都能夠\n分辨得一清二楚。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Hyper Voice",
                fr: "Mégaphone",
                es: "Vozarrón",
                it: "Ipervoce",
                de: "Hyperstimme",
                "pt-br": "Hipervoz",
                "zh-tw": "巨聲"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1
};
export default card;
