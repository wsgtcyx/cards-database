import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/127",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/127",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/127",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/127",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/127",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/127",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/127"
    },
    name: {
        en: "Mega Lucario ex",
        fr: "Méga-Lucario-ex",
        es: "Mega-Lucario ex",
        it: "Mega Lucario-ex",
        de: "Mega-Lucario-ex",
        "pt-br": "Mega Lucario ex",
        "zh-tw": "超級路卡利歐ex",
        ja: "メガルカリオex",
        ko: "메가루카리오 ex"
    },
    illustrator: "5ban Graphics",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 190,
    types: [
        "Fighting"
    ],
    dexId: [
        448
    ],
    evolveFrom: {
        en: "Riolu",
        fr: "Riolu",
        es: "Riolu",
        it: "Riolu",
        de: "Riolu",
        "pt-br": "Riolu",
        "zh-tw": "利歐路",
        ja: "Riolu",
        ko: "Riolu"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: [
                "Fighting",
                "Fighting"
            ],
            name: {
                en: "Fighting Pulse",
                fr: "Pulsation Combative",
                es: "Pulso Combativo",
                it: "Pulsazione Combattiva",
                de: "Kämpferischer Puls",
                "pt-br": "Luta Pulsante",
                "zh-tw": "奮戰奏動",
                ja: "Fighting Pulse",
                ko: "Fighting Pulse"
            },
            effect: {
                en: "If this Pokémon has at least 1 extra {F} Energy attached, this attack does 50 more damage.",
                fr: "Si ce Pokémon a au moins une Énergie {F} de plus, cette attaque inflige 50 dégâts supplémentaires.",
                es: "Si este Pokémon tiene por lo menos 1 Energía {F} adicional unida a él, este ataque hace 50 puntos de daño más.",
                it: "Se questo Pokémon ha almeno un'Energia {F} extra assegnata, questo attacco infligge 50 danni in più.",
                de: "Wenn an dieses Pokémon mindestens 1 extra {F}-Energie angelegt ist, fügt diese Attacke 50 Schadenspunkte mehr zu.",
                "pt-br": "Se este Pokémon tiver pelo menos 1 Energia {F} extra ligada a ele, este ataque causará 50 pontos de dano a mais.",
                "zh-tw": "若額外附有1個{F}能量,則增加50點傷害。",
                ja: "If this Pokémon has at least 1 extra {F} Energy attached, this attack does 50 more damage.",
                ko: "If this Pokémon has at least 1 extra {F} Energy attached, this attack does 50 more damage."
            },
            damage: "90+"
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
