import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/010",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/010",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/010",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/010",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/010",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/010",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/010"
    },
    name: {
        en: "Floatzel",
        fr: "Mustéflott",
        es: "Floatzel",
        it: "Floatzel",
        de: "Bojelin",
        "pt-br": "Floatzel",
        "zh-tw": "浮潛鼬",
        ko: "플로젤",
        ja: "フローゼル"
    },
    illustrator: "kodama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    dexId: [419],
    evolveFrom: {
        en: "Buizel",
        fr: "Mustébouée",
        es: "Buizel",
        it: "Buizel",
        de: "Bamelin",
        "pt-br": "Buizel",
        "zh-tw": "泳圈鼬",
        ko: "브이젤",
        ja: "ブイゼル"
    },
    stage: "Stage1",
    description: {
        en: "It is a common sight around fishing ports. It is known to rescue people and help fishers carry what they caught.",
        fr: "C'est un spectacle courant autour des ports de pêche. Il est connu pour sauver les gens et aider les pêcheurs à transporter ce qu’ils ont capturé.",
        es: "Es una vista común en los alrededores de los puertos pesqueros. Se sabe que rescata a personas y ayuda a los pescadores a transportar lo que capturan.",
        it: "È uno spettacolo comune nei porti di pesca. È noto per salvare le persone e aiutare i pescatori a trasportare ciò che hanno catturato.",
        de: "Es ist ein häufiger Anblick rund um Fischereihäfen. Es ist bekannt, dass es Menschen rettet und Fischern hilft, ihren Fang zu transportieren.",
        "pt-br": "É uma visão comum nos portos de pesca. É conhecido por resgatar pessoas e ajudar os pescadores a carregar o que pescaram.",
        "zh-tw": "這是漁港周圍常見的景象。眾所周知，它可以拯救人們並幫助漁民攜帶他們捕獲的東西。"
    },
    attacks: [
        {
            cost: ["Water", "Water", "Water"],
            name: {
                en: "Waterfall",
                fr: "Cascade",
                es: "Cascada",
                it: "Cascata",
                de: "Kaskade",
                "pt-br": "Cachoeira",
                "zh-tw": "攀瀑"
            },
            damage: 90
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
