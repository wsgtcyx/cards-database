import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Venusaur ex",
        "fr": "Ex-Vénusaure",
        "es": "Venusaur ex-",
        "it": "Venusaur es",
        "de": "Venusaurier ex",
        "pt-br": "Ex-Venusauro",
        "zh-tw": "妙蛙花 ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 190,
    types: ["Grass"],
    evolveFrom: {
        en: "Ivysaur",
        "fr": "Lierre",
        "es": "Ivysaur",
        "it": "Ivysaur",
        "de": "Efeusaurier",
        "pt-br": "Ivysauro",
        "zh-tw": "常春藤屬"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Razor Leaf",
                "fr": "Feuille de rasoir",
                "es": "Hoja de afeitar",
                "it": "Foglia di rasoio",
                "de": "Rasiermesserblatt",
                "pt-br": "Folha Navalha",
                "zh-tw": "剃刀葉"
            },
            damage: 60,
            cost: ["Grass", "Colorless", "Colorless"]
        }, {
            name: {
                en: "Giant Bloom",
                "fr": "Floraison géante",
                "es": "Floración gigante",
                "it": "Fioritura gigante",
                "de": "Riesenblüte",
                "pt-br": "Flor Gigante",
                "zh-tw": "巨型綻放"
            },
            damage: 100,
            cost: ["Grass", "Grass", "Colorless", "Colorless"],
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
            type: "Fire",
            value: "+20"
        }],
    retreat: 3
};
export default card;
