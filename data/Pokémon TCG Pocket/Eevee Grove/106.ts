import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Gallade ex",
        "fr": "ex Gallade",
        "es": "Gallade ex",
        "it": "Gallade es",
        "de": "Gallade ex",
        "pt-br": "Ex-galade",
        "zh-tw": "加拉德超級"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 170,
    types: ["Fighting"],
    evolveFrom: {
        en: "Kirlia",
        "fr": "Kirlia",
        "es": "kirlia",
        "it": "Kirlia",
        "de": "Kirlia",
        "pt-br": "Kirlia",
        "zh-tw": "基利亞"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Energized Blade",
                "fr": "Lame énergisée",
                "es": "Hoja energizada",
                "it": "Lama energizzata",
                "de": "Energiegeladene Klinge",
                "pt-br": "Lâmina Energizada",
                "zh-tw": "充能之刃"
            },
            damage: 70,
            cost: ["Fighting", "Fighting"],
            effect: {
                en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
                "fr": "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
                "es": "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
                "it": "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
                "de": "Dieser Angriff fügt 20 weitere Schadenspunkte für jede Energie zu, die an das Aktive Pokémon deines Gegners angelegt ist.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
                "zh-tw": "對手的活躍寶可夢身上每附加一個能量，此攻擊就會造成 20 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1
};
export default card;
