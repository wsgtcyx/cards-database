import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/018",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/018"
    },
    name: {
        en: "Durant",
        fr: "Fermite",
        es: "Durant",
        it: "Durant",
        de: "Fermicula",
        "pt-br": "Durant",
        "zh-tw": "鐵蟻",
        ko: "아이앤트",
        ja: "アイアント"
    },
    illustrator: "Miki Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Grass"],
    dexId: [632],
    stage: "Basic",
    description: {
        en: "With their large mandibles, these Pokémon can crunch their way through rock. They work together to protect their eggs from Sandaconda.",
        fr: "Sa grande mâchoire réduit même les rochers\nen miettes. Il se bat avec sa colonie pour protéger\nses Œufs des attaques des Dunaconda.",
        es: "Con sus grandes mandíbulas puede destrozar\nincluso rocas. Lucha en grupo para proteger sus\nlarvas del ataque de los Sandaconda.",
        it: "Le grandi mandibole possono frantumare anche\nla roccia. Lotta con la colonia per proteggere\nle sue Uova da Sandaconda.",
        de: "Ihre mächtigen Kiefer können Felsen zerbeißen.\nSie rotten sich zu Gruppen zusammen, um ihre\nEier vor Sanaconda zu beschützen.",
        "pt-br": "Com suas grandes mandíbulas, esses Pokémon podem abrir caminho através das rochas. Eles trabalham juntos para proteger seus ovos do Sandaconda.",
        "zh-tw": "巨大的顎部能咬碎岩石。\n為了不讓沙螺蟒把蛋搶走，\n會和其他同類一起並肩戰鬥。"
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Bite Together",
                fr: "Morsure Commune",
                es: "Mordedura Conjunta",
                it: "Morso Collettivo",
                de: "Kollektiver Biss",
                "pt-br": "Mordida em Bando",
                "zh-tw": "一起啃食"
            },
            effect: {
                en: "If Durant is on your Bench, this attack does 30 more damage.",
                fr: "Si Fermite est sur votre Banc, cette attaque inflige 30 dégâts supplémentaires.",
                es: "Si Durant está en tu Banca, este ataque hace 30 puntos de daño más.",
                it: "Se Durant è nella tua panchina, questo attacco infligge 30 danni in più.",
                de: "Wenn sich Fermicula auf deiner Bank befindet, fügt dieser Angriff 30 weitere Schadenspunkte zu.",
                "pt-br": "Se Durant estiver no seu banco, este ataque causa 30 de dano a mais.",
                "zh-tw": "如果 鐵蟻 在你的替補席上，則此攻擊會造成 30 點額外傷害。"
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
