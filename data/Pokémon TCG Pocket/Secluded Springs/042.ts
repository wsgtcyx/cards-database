import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4a/042",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4a/042",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4a/042",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4a/042",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4a/042",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4a/042",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4a/042"
    },
    name: {
        en: "Poliwrath ex",
        "fr": "Tartard-ex",
        "es": "Poliwrath ex",
        "it": "Poliwrath-ex",
        "de": "Quappo-ex",
        "pt-br": "Poliwrath ex",
        "zh-tw": "蚊香泳士ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 180,
    types: ["Fighting"],
    evolveFrom: {
        en: "Poliwhirl",
        "fr": "Têtarte",
        "es": "Poliwhirl",
        "it": "Poliwhirl",
        "de": "Quaputzi",
        "pt-br": "Poliwhirl",
        "zh-tw": "蚊香君",
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Hydro Knuckle",
                "fr": "Hydro-articulation",
                "es": "Nudillo hidráulico",
                "it": "Idro Knuckle",
                "de": "Hydroknöchel",
                "pt-br": "Junta Hidrográfica",
                "zh-tw": "液壓轉向節"
            },
            damage: 100,
            cost: ["Fighting", "Colorless", "Colorless"],
            effect: {
                en: "If this Pokémon has any {W} Energy attached, this attack does 40 more damage.",
                "fr": "Si ce Pokémon a une Énergie {W} attachée, cette attaque inflige 40 dégâts supplémentaires.",
                "es": "Si este Pokémon tiene alguna Energía {W} unida, este ataque hace 40 puntos de daño más.",
                "it": "Se questo Pokémon ha delle Energie {W} assegnate, questo attacco infligge 40 danni in più.",
                "de": "Wenn an dieses Pokémon {W}-Energie angelegt ist, fügt dieser Angriff 40 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon tiver alguma Energia {W} anexada, este ataque causará 40 pontos de dano a mais.",
                "zh-tw": "如果該神奇寶貝附加了任何 {W} 能量，則此攻擊造成的傷害增加 40 點。"
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 3
};
export default card;
