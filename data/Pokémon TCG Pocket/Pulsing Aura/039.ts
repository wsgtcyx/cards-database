import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/039",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/039",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/039",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/039",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/039",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/039"
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
    illustrator: "Atsuko Nishida",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Water"],
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
            cost: ["Water", "Colorless", "Colorless"],
            name: {
                en: "Muddy Headbutt",
                fr: "Coup d'Boule Boueux",
                es: "Cabezazo Lodo",
                it: "Bottintesta Fangosa",
                de: "Schlammige Kopfnuss",
                "pt-br": "Cabeçada Lamacenta",
                "zh-tw": "泥巴頭擊"
            },
            effect: {
                en: "If this Pokémon has any {F} Energy attached, this attack does 60 more damage.",
                fr: "Si ce Pokémon a une Énergie {F} attachée, cette attaque inflige 60 dégâts supplémentaires.",
                es: "Si este Pokémon tiene alguna Energía {F} unida, este ataque hace 60 puntos de daño más.",
                it: "Se questo Pokémon ha delle Energie {F} assegnate, questo attacco infligge 60 danni in più.",
                de: "Wenn an dieses Pokémon {F}-Energie angelegt ist, fügt dieser Angriff 60 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon tiver alguma Energia {F} anexada, este ataque causará 60 de dano a mais.",
                "zh-tw": "如果這隻寶可夢附加了任何{F}能量，則此攻擊造成的傷害增加 60 點。"
            },
            damage: "60+"
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
