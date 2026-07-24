import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/225",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/225"
    },
    name: {
        en: "Whimsicott ex",
        fr: "Farfaduvet-ex",
        es: "Whimsicott ex",
        it: "Whimsicott-ex",
        de: "Elfun-ex",
        "pt-br": "Whimsicott ex",
        "zh-tw": "風妖精ex",
        ko: "엘풍 ex",
        ja: "エルフーンex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Grass"],
    dexId: [547],
    evolveFrom: {
        en: "Cottonee",
        fr: "Doudouvet",
        es: "Cottonee",
        it: "Cottonee",
        de: "Waumboll",
        "pt-br": "Cottonee",
        "zh-tw": "木棉球",
        ko: "소미안",
        ja: "モンメン"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Grass", "Colorless"],
            name: {
                en: "Grass Knot",
                fr: "Nœud Herbe",
                es: "Hierba Lazo",
                it: "Laccioerboso",
                de: "Strauchler",
                "pt-br": "Nó de Grama",
                "zh-tw": "打草結"
            },
            effect: {
                en: "This attack does 30 more damage for each Energy in your opponent's Active Pokémon's Retreat Cost.",
                fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie du Coût de Retraite du Pokémon Actif de votre adversaire.",
                es: "Este ataque hace 30 puntos de daño más por cada Energía en el Coste de Retirada del Pokémon Activo de tu rival.",
                it: "Questo attacco infligge 30 danni in più per ogni Energia nel costo di ritirata del Pokémon attivo del tuo avversario.",
                de: "Dieser Angriff fügt 30 weitere Schadenspunkte für jede Energie in den Rückzugskosten des Aktiven Pokémon deines Gegners zu.",
                "pt-br": "Este ataque causa 30 pontos de dano a mais para cada Energia no Custo de Recuo do Pokémon Ativo do seu oponente.",
                "zh-tw": "對手的現役寶可夢的撤退費用中每有一個能量，該攻擊就會造成 30 點額外傷害。"
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
