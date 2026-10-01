import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/020",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/020",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/020",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/020",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/020",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/020",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/020"
    },
    name: {
        en: "Durant",
        fr: "Fermite",
        es: "Durant",
        it: "Durant",
        de: "Fermicula",
        "pt-br": "Durant",
        "zh-tw": "鐵蟻",
        ja: "アイアント",
        ko: "아이앤트"
    },
    illustrator: "Miki Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: [
        "Grass"
    ],
    dexId: [
        632
    ],
    stage: "Basic",
    description: {
        en: "With their large mandibles, these Pokémon can crunch their way through rock. They work together to protect their eggs from Sandaconda.",
        fr: "Sa grande mâchoire réduit même les rochers en miettes. Il se bat avec sa colonie pour protéger ses Œufs des attaques des Dunaconda.",
        es: "Con sus grandes mandíbulas puede destrozar incluso rocas. Lucha en grupo para proteger sus larvas del ataque de los Sandaconda.",
        it: "Le grandi mandibole possono frantumare anche la roccia. Lotta con la colonia per proteggere le sue Uova da Sandaconda.",
        de: "Ihre mächtigen Kiefer können Felsen zerbeißen. Sie rotten sich zu Gruppen zusammen, um ihre Eier vor Sanaconda zu beschützen.",
        "pt-br": "Estes Pokémon conseguem mastigar túneis nas rochas com suas mandíbulas enormes. Trabalham em equipe para proteger seus ovos de Sandaconda.",
        "zh-tw": "巨大的顎部能咬碎岩石。為了不讓沙螺蟒把蛋搶走，會和其他同類一起並肩戰鬥。",
        ja: "With their large mandibles, these Pokémon can crunch their way through rock. They work together to protect their eggs from Sandaconda.",
        ko: "With their large mandibles, these Pokémon can crunch their way through rock. They work together to protect their eggs from Sandaconda."
    },
    attacks: [
        {
            cost: [
                "Grass"
            ],
            name: {
                en: "Bite Together",
                fr: "Morsure Commune",
                es: "Mordedura Conjunta",
                it: "Morso Collettivo",
                de: "Kollektiver Biss",
                "pt-br": "Mordida em Bando",
                "zh-tw": "一起啃食",
                ja: "Bite Together",
                ko: "Bite Together"
            },
            effect: {
                en: "If Durant is on your Bench, this attack does 30 more damage.",
                fr: "Si Fermite est sur votre Banc, cette attaque inflige 30 dégâts supplémentaires.",
                es: "Si Durant está en tu Banca, este ataque hace 30 puntos de daño más.",
                it: "Se Durant è nella tua panchina, questo attacco infligge 30 danni in più.",
                de: "Wenn sich Fermicula auf deiner Bank befindet, fügt diese Attacke 30 Schadenspunkte mehr zu.",
                "pt-br": "Se Durant estiver no seu Banco, este ataque causará 30 pontos de dano a mais.",
                "zh-tw": "若自己的備戰區有「鐵蟻」,則增加30點傷害。",
                ja: "If Durant is on your Bench, this attack does 30 more damage.",
                ko: "If Durant is on your Bench, this attack does 30 more damage."
            },
            damage: "20+"
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
