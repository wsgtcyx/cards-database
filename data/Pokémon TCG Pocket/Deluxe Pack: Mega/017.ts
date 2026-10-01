import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/017",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/017",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/017",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/017",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/017",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/017",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/017"
    },
    name: {
        en: "Whimsicott ex",
        fr: "Farfaduvet-ex",
        es: "Whimsicott ex",
        it: "Whimsicott-ex",
        de: "Elfun-ex",
        "pt-br": "Whimsicott ex",
        "zh-tw": "風妖精ex",
        ja: "エルフーンex",
        ko: "엘풍 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 140,
    types: [
        "Grass"
    ],
    dexId: [
        547
    ],
    evolveFrom: {
        en: "Cottonee",
        fr: "Doudouvet",
        es: "Cottonee",
        it: "Cottonee",
        de: "Waumboll",
        "pt-br": "Cottonee",
        "zh-tw": "木棉球",
        ja: "Cottonee",
        ko: "Cottonee"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: [
                "Grass",
                "Colorless"
            ],
            name: {
                en: "Grass Knot",
                fr: "Nœud Herbe",
                es: "Hierba Lazo",
                it: "Laccioerboso",
                de: "Strauchler",
                "pt-br": "Nó de Grama",
                "zh-tw": "打草結",
                ja: "Grass Knot",
                ko: "Grass Knot"
            },
            effect: {
                en: "This attack does 30 more damage for each Energy in your opponent's Active Pokémon's Retreat Cost.",
                fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
                es: "Este ataque hace 30 puntos de daño más por cada Energía en el Coste de Retirada del Pokémon Activo de tu rival.",
                it: "Questo attacco infligge 30 danni in più per ogni Energia nel costo di ritirata del Pokémon attivo del tuo avversario.",
                de: "Diese Attacke fügt für jede Energie in den Rückzugskosten des Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 30 pontos de dano a mais para cada Energia no Custo de Recuo do Pokémon Ativo do seu oponente.",
                "zh-tw": "增加對手的戰鬥寶可夢撤退所需的能量的數量×30點傷害。",
                ja: "This attack does 30 more damage for each Energy in your opponent's Active Pokémon's Retreat Cost.",
                ko: "This attack does 30 more damage for each Energy in your opponent's Active Pokémon's Retreat Cost."
            },
            damage: "40+"
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
