import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/107",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/107",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/107",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/107",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/107",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/107",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/107"
    },
    name: {
        en: "Mega Altaria ex",
        fr: "Méga-Altaria-ex",
        es: "Mega-Altaria ex",
        it: "Mega Altaria-ex",
        de: "Mega-Altaria-ex",
        "pt-br": "Mega Altaria ex",
        "zh-tw": "超級七夕青鳥ex",
        ko: "메가파비코리 ex",
        ja: "メガチルタリスex"
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 190,
    types: ["Psychic"],
    dexId: [334],
    evolveFrom: {
        en: "Swablu",
        fr: "Tylton",
        es: "Swablu",
        it: "Swablu",
        de: "Wablu",
        "pt-br": "Swablu",
        "zh-tw": "青綿鳥",
        ko: "파비코",
        ja: "チルット"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Psychic", "Psychic"],
            name: {
                en: "Mega Harmony",
                fr: "Méga Harmonie",
                es: "Megacanto Armonioso",
                it: "Megarmonia",
                de: "Mega-Harmonie",
                "pt-br": "Mega-harmonia",
                "zh-tw": "超級和聲"
            },
            effect: {
                en: "This attack does 30 more damage for each of your Benched Pokémon.",
                fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
                es: "Este ataque hace 30 daños más por cada uno de tus Pokémon en Banca.",
                it: "Questo attacco infligge 30 danni in più per ciascuno dei tuoi Pokémon in panchina.",
                de: "Dieser Angriff fügt jedem Pokémon auf deiner Bank 30 weitere Schadenspunkte zu.",
                "pt-br": "Este ataque causa 30 danos a mais para cada um dos seus Pokémon no Banco.",
                "zh-tw": "此攻擊對你的每隻後備寶可夢造成 30 點額外傷害。"
            },
            damage: "40+"
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
