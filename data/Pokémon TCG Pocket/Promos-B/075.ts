import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/075",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/075",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/075",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/075",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/075",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/075"
    },
    name: {
        en: "Quagsire",
        fr: "Maraiste",
        es: "Quagsire",
        it: "Quagsire",
        de: "Morlord",
        "pt-br": "Quagsire",
        "zh-tw": "沼王",
        ko: "누오",
        ja: "ヌオー"
    },
    illustrator: "Naoyo Kimura",
    rarity: "None",
    category: "Pokemon",
    hp: 120,
    types: ["Fighting"],
    dexId: [195],
    evolveFrom: {
        en: "Wooper",
        fr: "Axoloto",
        es: "Wooper",
        it: "Wooper",
        de: "Felino",
        "pt-br": "Wooper",
        "zh-tw": "烏波",
        ko: "우파",
        ja: "ウパー"
    },
    stage: "Stage1",
    description: {
        en: "Due to its relaxed and carefree attitude, it often bumps its head on riverbed boulders and boat hulls as it swims.",
        fr: "En raison de son attitude détendue et insouciante, il se cogne souvent la tête contre les rochers du lit des rivières et les coques des bateaux lorsqu'il nage.",
        es: "Debido a su actitud relajada y despreocupada, a menudo se golpea la cabeza contra las rocas del lecho de los ríos y los cascos de los barcos mientras nada.",
        it: "A causa del suo atteggiamento rilassato e spensierato, mentre nuota spesso sbatte la testa contro i massi del letto dei fiumi e gli scafi delle barche.",
        de: "Aufgrund seiner entspannten und unbekümmerten Haltung stößt er beim Schwimmen häufig mit dem Kopf an Felsbrocken im Flussbett und Bootsrümpfen.",
        "pt-br": "Devido à sua atitude relaxada e despreocupada, muitas vezes bate a cabeça nas pedras do leito dos rios e nos cascos dos barcos enquanto nada.",
        "zh-tw": "由於其輕鬆、無憂無慮的態度，它在游泳時經常將頭撞到河床巨石和船體上。"
    },
    attacks: [
        {
            cost: ["Fighting", "Colorless", "Colorless"],
            name: {
                en: "Energy Press",
                fr: "Presse énergétique",
                es: "Prensa energética",
                it: "Stampa energetica",
                de: "Energiepresse",
                "pt-br": "Imprensa de Energia",
                "zh-tw": "能量壓制"
            },
            effect: {
                en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
                fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
                es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
                it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
                de: "Dieser Angriff fügt 30 weitere Schadenspunkte für jede Energie zu, die an das Aktive Pokémon deines Gegners angelegt ist.",
                "pt-br": "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
                "zh-tw": "對手的活躍寶可夢身上每附加一個能量，此攻擊就會造成 30 點額外傷害。"
            },
            damage: "40+"
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 3,
    boosters: ["vol10"]
};

export default card;
