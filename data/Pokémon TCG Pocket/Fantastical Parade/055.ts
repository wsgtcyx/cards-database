import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/055",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/055",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/055",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/055",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/055"
    },
    name: {
        en: "Toxtricity ex",
        "fr": "Toxicité ex",
        "es": "Toxtricidad ex",
        "it": "Tossicità es",
        "de": "Toxizität ex",
        "pt-br": "Toxtricidade ex",
        "zh-tw": "毒性前"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Lightning"],
    evolveFrom: {
        en: "Toxel",
        "fr": "Toxel",
        "es": "Tóxel",
        "it": "Toxel",
        "de": "Toxel",
        "pt-br": "Toxel",
        "zh-tw": "托克塞爾"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Damaging Spark",
                "fr": "Étincelle dommageable",
                "es": "Chispa dañina",
                "it": "Scintilla dannosa",
                "de": "Schädlicher Funke",
                "pt-br": "Faísca Danificante",
                "zh-tw": "損壞火花"
            },
            damage: 90,
            cost: ["Lightning", "Lightning", "Colorless"],
            effect: {
                en: "This attack also does 30 damage to each of your opponent's Benched Pokémon that has damage on it.",
                "fr": "Cette attaque inflige également 30 dégâts à chacun des Pokémon de Banc de votre adversaire qui subissent des dégâts.",
                "es": "Este ataque también hace 30 puntos de daño a cada uno de los Pokémon en Banca de tu rival que tenga daño.",
                "it": "Questo attacco infligge anche 30 danni a ciascuno dei Pokémon nella panchina del tuo avversario che ha danni su di sé.",
                "de": "Dieser Angriff fügt außerdem jedem Pokémon auf der Bank deines Gegners, auf dem Schaden liegt, 30 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 30 de dano a cada Pokémon no Banco do seu oponente que tenha dano.",
                "zh-tw": "此攻擊還會對對手後備戰中每隻受到傷害的神奇寶貝造成 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
