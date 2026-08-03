import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/044",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/044",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/044",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/044",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/044",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/044",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/044"
    },
    name: {
        en: "Glimmet",
        fr: "Germéclat",
        es: "Glimmet",
        it: "Glimmet",
        de: "Lumispross",
        "pt-br": "Glimmet",
        "zh-tw": "晶光芽",
        ko: "초롱순",
        ja: "キラーメ"
    },
    illustrator: "sowsow",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    dexId: [969],
    stage: "Basic",
    description: {
        en: "Glimmet’s toxic mineral crystals look just like flower petals. This Pokémon scatters poisonous powder like pollen to protect itself.",
        fr: "Les cristaux minéraux toxiques de Germéclat ressemblent à des pétales de fleurs. Ce Pokémon disperse de la poudre venimeuse comme du pollen pour se protéger.",
        es: "Los cristales minerales tóxicos de Glimmet parecen pétalos de flores. Este Pokémon esparce polvos venenosos como polen para protegerse.",
        it: "I cristalli minerali tossici di Glimmet sembrano proprio petali di fiori. Questo Pokémon sparge polvere velenosa come il polline per proteggersi.",
        de: "Die giftigen Mineralkristalle von Lumispross sehen aus wie Blütenblätter. Dieses Pokémon verstreut giftiges Pulver wie Pollen, um sich zu schützen.",
        "pt-br": "Os cristais minerais tóxicos de Glimmet parecem pétalas de flores. Este Pokémon espalha pó venenoso como pólen para se proteger.",
        "zh-tw": "晶光芽的有毒礦物晶體看起來就像花瓣。這種寶可夢會散佈花粉等有毒粉末來保護自己。"
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Hang Down",
                fr: "Suspension",
                es: "Prender",
                it: "Tirar Giù",
                de: "Herunterhängen",
                "pt-br": "Dependurar",
                "zh-tw": "垂吊"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
