import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/041",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/041",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/041",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/041",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/041",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/041"
    },
    name: {
        en: "Trubbish",
        fr: "Miamiasme",
        es: "Trubbish",
        it: "Trubbish",
        de: "Unratütox",
        "pt-br": "Trubbish",
        "zh-tw": "破破袋",
        ko: "깨봉이",
        ja: "ヤブクロン"
    },
    illustrator: "kawayoo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Darkness"],
    dexId: [568],
    stage: "Basic",
    description: {
        en: "This Pokémon was born from a bag stuffed with trash. Galarian Weezing relish the fumes belched by Trubbish.",
        fr: "Il est né d’un sac poubelle rempli d’ordures.\nLe gaz empoisonné qu’il exhale est très apprécié\ndes Smogogo de Galar.",
        es: "Nació a partir de una rebosante bolsa de basura.\nLos gases nocivos que eructa son un manjar para\nlos Weezing de Galar.",
        it: "È nato da un sacchetto pieno di spazzatura.\nI Weezing di Galar sono ghiotti del gas tossico\nche esala.",
        de: "Es ist aus einer überfüllten Mülltüte entstanden.\nDie Smogmog der Galar-Region sind verrückt\nnach den giftigen Gasen, die es ausstößt.",
        "pt-br": "Este Pokémon nasceu de um saco cheio de lixo. Galarian Weezing aprecia a fumaça expelida por Trubbish.",
        "zh-tw": "誕生自塞滿垃圾的垃圾袋裡。\n牠嘴裡噴出的毒氣\n是伽勒爾雙彈瓦斯的最愛。"
    },
    attacks: [
        {
            cost: ["Darkness", "Darkness"],
            name: {
                en: "Sludge Toss",
                fr: "Giclée Vaseuse",
                es: "Lanzamiento de Residuos",
                it: "Lanciamelma",
                de: "Schleimwurf",
                "pt-br": "Arremesso de Lodo",
                "zh-tw": "污泥上投"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
