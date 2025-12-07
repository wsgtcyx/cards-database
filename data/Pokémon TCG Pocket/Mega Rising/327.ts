import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Bibarel ex",
        "fr": "Bibarel ex",
        "es": "bibarel ex",
        "it": "Bibarel es",
        "de": "Bibarel ex",
        "pt-br": "Ex Bibarel",
        "zh-tw": "大尾狸 ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 160,
    types: ["Colorless"],
    evolveFrom: {
        en: "Bidoof",
        "fr": "Bidoof",
        "es": "Bidoof",
        "it": "Bidoof",
        "de": "Bidoof",
        "pt-br": "Bidoof",
        "zh-tw": "比杜夫"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Carefree Press",
                "fr": "Presse sans soucis",
                "es": "Prensa despreocupada",
                "it": "Stampa spensierata",
                "de": "Sorglose Presse",
                "pt-br": "Imprensa despreocupada",
                "zh-tw": "無憂出版社"
            },
            damage: 100,
            cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Heal 30 damage from this Pokémon.",
                "fr": "Soignez 30 dégâts de ce Pokémon.",
                "es": "Cura 30 puntos de daño de este Pokémon.",
                "it": "Cura questo Pokémon da 30 danni.",
                "de": "Heile 30 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 30 de dano deste Pokémon.",
                "zh-tw": "治療該神奇寶貝造成的 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
