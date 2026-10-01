import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/160",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/160",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/160",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/160",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/160",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/160",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/160"
    },
    name: {
        en: "Mega Metagross ex",
        fr: "Méga-Métalosse-ex",
        es: "Mega-Metagross ex",
        it: "Mega Metagross-ex",
        de: "Mega-Metagross-ex",
        "pt-br": "Mega Metagross ex",
        "zh-tw": "超級巨金怪ex",
        ja: "メガメタグロスex",
        ko: "메가메타그로스 ex"
    },
    illustrator: "PLANETA Yamashita",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 230,
    types: [
        "Metal"
    ],
    dexId: [
        376
    ],
    evolveFrom: {
        en: "Metang",
        fr: "Métang",
        es: "Metang",
        it: "Metang",
        de: "Metang",
        "pt-br": "Metang",
        "zh-tw": "金屬怪",
        ja: "Metang",
        ko: "Metang"
    },
    stage: "Stage2",
    attacks: [
        {
            cost: [
                "Colorless",
                "Colorless",
                "Colorless"
            ],
            name: {
                en: "Gatling Slug",
                fr: "Frappe Répétée",
                es: "Ráfaga de Puñetazos",
                "pt-br": "Chumbo Grosso",
                "zh-tw": "機槍猛擊",
                it: "Pugnolashnikov",
                de: "Repetierschlag",
                ja: "Gatling Slug",
                ko: "Gatling Slug"
            },
            effect: {
                en: "This attack does 10 more damage for each {M} Energy attached to this Pokémon.",
                fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie {M} attachée à ce Pokémon.",
                es: "Este ataque hace 10 puntos de daño más por cada Energía {M} unida a este Pokémon.",
                de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {M}-Energie 10 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 10 pontos de dano a mais para cada Energia {M} ligada a este Pokémon.",
                "zh-tw": "增加這隻寶可夢身上的{M}能量的數量×10點傷害。",
                it: "Questo attacco infligge 10 danni in più per ogni Energia {M} assegnata a questo Pokémon.",
                ja: "This attack does 10 more damage for each {M} Energy attached to this Pokémon.",
                ko: "This attack does 10 more damage for each {M} Energy attached to this Pokémon."
            },
            damage: "100+"
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
