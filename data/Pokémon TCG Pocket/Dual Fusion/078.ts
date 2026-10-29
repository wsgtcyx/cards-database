import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/078",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/078",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/078",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/078",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/078",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/078",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/078"
    },
    name: {
        en: "Whiscash",
        fr: "Barbicha",
        es: "Whiscash",
        "pt-br": "Whiscash",
        "zh-tw": "鯰魚王",
        ja: "ナマズン",
        ko: "메깅",
        it: "Whiscash",
        de: "Welsar"
    },
    illustrator: "Masakazu Fukuda",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 120,
    types: [
        "Fighting"
    ],
    stage: "Stage1",
    retreat: 3,
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Barboach",
        fr: "Barloche",
        es: "Barboach",
        it: "Barboach",
        de: "Schmerbe",
        "pt-br": "Barboach",
        "zh-tw": "泥泥鰍",
        ja: "Barboach",
        ko: "Barboach"
    },
    attacks: [
        {
            name: {
                en: "Power Press",
                fr: "Étau Puissant",
                es: "Constricción Poderosa",
                it: "Vigorstretta",
                de: "Powerdruck",
                "pt-br": "Compressão Poderosa",
                "zh-tw": "力量壓制",
                ja: "Power Press",
                ko: "Power Press"
            },
            cost: [
                "Fighting"
            ],
            damage: "40+",
            effect: {
                en: "If this Pokémon has at least 3 extra {F} Energy attached, this attack does 60 more damage.",
                fr: "Si ce Pokémon a au moins 3 Énergies {F} de plus, cette attaque inflige 60 dégâts supplémentaires.",
                es: "Si este Pokémon tiene por lo menos 3 Energías {F} adicionales unidas a él, este ataque hace 60 puntos de daño más.",
                it: "Se questo Pokémon ha almeno 3 Energie {F} extra assegnate, questo attacco infligge 60 danni in più.",
                de: "Wenn an dieses Pokémon mindestens 3 extra {F}-Energien angelegt sind, fügt diese Attacke 60 Schadenspunkte mehr zu.",
                "pt-br": "Se este Pokémon tiver pelo menos 3 Energias {F} extras ligadas a ele, este ataque causará 60 pontos de dano a mais.",
                "zh-tw": "若額外附有3個{F}能量,則增加60點傷害。",
                ja: "If this Pokémon has at least 3 extra {F} Energy attached, this attack does 60 more damage.",
                ko: "If this Pokémon has at least 3 extra {F} Energy attached, this attack does 60 more damage."
            }
        }
    ],
    abilities: [],
    description: {
        en: "It is extremely protective of its territory. If any foe approaches, it attacks using vicious tremors.",
        fr: "Il est très protecteur vis-à-vis de son territoire. Si des ennemis approchent, il le défend en déclenchant des secousses terribles.",
        es: "Protege su territorio por encima de todo. Si se acerca un enemigo, lo ataca con violentos temblores de tierra.",
        it: "È molto protettivo del suo territorio e, se un nemico si avvicina, reagisce facendo tremare violentemente la terra.",
        de: "Es hat ein ausgeprägtes Revierverhalten. Nähert sich ein Feind, greift es diesen an, indem es die Erde heftig beben lässt.",
        "pt-br": "Protege seu território com muito afinco. Se algum inimigo se aproxima, ataca-o usando tremores poderosos.",
        "zh-tw": "地盤意識非常強烈， 如果有外敵靠近，就會 劇烈搖晃地面發動襲擊。",
        ja: "It is extremely protective of its territory. If any foe approaches, it attacks using vicious tremors.",
        ko: "It is extremely protective of its territory. If any foe approaches, it attacks using vicious tremors."
    }
};

export default card;
