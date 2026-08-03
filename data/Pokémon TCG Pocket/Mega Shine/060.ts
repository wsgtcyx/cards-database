import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/060",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/060",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/060",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/060",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/060",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/060",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/060"
    },
    name: {
        en: "Miltank",
        fr: "Écrémeuh",
        es: "Miltank",
        it: "Miltank",
        de: "Miltank",
        "pt-br": "Miltank",
        "zh-tw": "大奶罐",
        ko: "밀탱크",
        ja: "ミルタンク"
    },
    illustrator: "Miki Tanaka",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Colorless"],
    dexId: [241],
    stage: "Basic",
    description: {
        en: "This Pokémon needs to be milked every day, or else it will fall ill. The flavor of Miltank milk changes with the seasons.",
        fr: "Sa santé décline si on ne le trait pas tous les jours.\nLe goût de son lait varie selon la saison.",
        es: "Si no se ordeña a Miltank a diario, enferma. El\nsabor de la leche que produce cambia según la\népoca del año.",
        it: "Se non viene munto ogni giorno, la sua salute\nne risente. Il sapore del suo latte può variare\nin base alla stagione.",
        de: "Miltanks Gesundheit leidet darunter, wenn es\nnicht jeden Tag gemolken wird. Der Geschmack\nseiner Milch ändert sich je nach Jahreszeit.",
        "pt-br": "Este Pokémon precisa ser ordenhado todos os dias, caso contrário ficará doente. O sabor do leite Miltank muda com as estações.",
        "zh-tw": "如果沒有每天擠鮮奶，\n身體的狀況就會變糟。\n鮮奶的風味會隨季節改變。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Rout",
                fr: "Débâcle",
                es: "Esparcir",
                it: "Stanamento",
                de: "Verheerung",
                "pt-br": "Efeito Cascata",
                "zh-tw": "踢散"
            },
            effect: {
                en: "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
                es: "Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge 20 danni in più per ciascuno dei Pokémon nella panchina del tuo avversario.",
                de: "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners 20 weitere Schadenspunkte zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊對對手的後備寶可夢每造成 20 點額外傷害。"
            },
            damage: "10+"
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
