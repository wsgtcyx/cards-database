import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/084"
    },
    name: {
        en: "Medicham",
        "fr": "Médicham",
        "es": "médico",
        "it": "Medicham",
        "de": "Medicham",
        "pt-br": "Medicham",
        "zh-tw": "麥迪查姆"
    },
    illustrator: "Shigenori Negishi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    evolveFrom: {
        en: "Meditite",
        "fr": "Méditer",
        "es": "meditar",
        "it": "Medita",
        "de": "Meditit",
        "pt-br": "Medite",
        "zh-tw": "麥迪泰"
    },
    description: {
        en: "It elegantly avoids attacks with dance-like\nsteps, then launches a devastating blow in\nthe same motion.",
        "fr": "Il évite élégamment les attaques avec des mouvements de danse\nétapes, puis lance un coup dévastateur dans\nle même mouvement.",
        "es": "Evita elegantemente los ataques con movimientos parecidos a los de un baile.\npasos, luego lanza un golpe devastador en\nel mismo movimiento.",
        "it": "Evita elegantemente gli attacchi con una danza\npassi, poi sferra un colpo devastante\nlo stesso movimento.",
        "de": "Es vermeidet elegant tänzerisch Angriffe\nSchritte, dann führt er einen verheerenden Schlag aus\ndie gleiche Bewegung.",
        "pt-br": "Ele elegantemente evita ataques com movimentos de dança\npassos, então lança um golpe devastador em\no mesmo movimento.",
        "zh-tw": "它以舞蹈般的方式優雅地躲避攻擊\n步，然後發動毀滅性的打擊\n同一個動作。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Psykick",
                "fr": "Coup Psy",
                "es": "Psicopatada",
                "it": "Psichico",
                "de": "Psychokick",
                "pt-br": "Chute Psíquico",
                "zh-tw": "心靈踢球"
            },
            damage: 50,
            cost: ["Fighting", "Colorless"],
            effect: {
                en: "If this Pokémon has any {P} Energy attached, this attack does 50 more damage.",
                "fr": "Si ce Pokémon a une Énergie {P} attachée, cette attaque inflige 50 dégâts supplémentaires.",
                "es": "Si este Pokémon tiene alguna Energía {P} unida, este ataque hace 50 puntos de daño más.",
                "it": "Se questo Pokémon ha delle Energie {P} assegnate, questo attacco infligge 50 danni in più.",
                "de": "Wenn an dieses Pokémon {P}-Energie angelegt ist, fügt dieser Angriff 50 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon tiver alguma Energia {P} anexada, este ataque causará 50 de dano a mais.",
                "zh-tw": "如果這只神奇寶貝附加了任何{P}能量，則該攻擊造成的傷害增加 50 點。"
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1
};
export default card;
