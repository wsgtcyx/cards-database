import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Indeedee ex",
        "fr": "Effectivement ex",
        "es": "De hecho ex",
        "it": "Effettivamente ex",
        "de": "Indeedee ex",
        "pt-br": "De fato ex",
        "zh-tw": "確實前"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Psychic"],
    stage: "Basic",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Watch Over",
                "fr": "Surveillez",
                "es": "Vigilar",
                "it": "Veglia",
                "de": "Pass auf",
                "pt-br": "Vigiar",
                "zh-tw": "看守"
            },
            effect: {
                en: "Once during your turn, you may heal 20 damage from your Active Pokémon.",
                "fr": "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de votre Pokémon Actif.",
                "es": "Una vez durante tu turno, puedes curar 20 daños de tu Pokémon Activo.",
                "it": "Una sola volta durante il tuo turno, puoi curare 20 danni dal tuo Pokémon attivo.",
                "de": "Einmal während deines Zuges kannst du 20 Schadenspunkte bei deinem Aktiven Pokémon heilen.",
                "pt-br": "Uma vez durante o seu turno, você pode curar 20 pontos de dano do seu Pokémon Ativo.",
                "zh-tw": "在你的回合中，你可以治療 20 點來自你的活躍神奇寶貝的傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Psychic",
                "fr": "Psychique",
                "es": "Psíquico",
                "it": "Psichico",
                "de": "Hellseher",
                "pt-br": "Psíquico",
                "zh-tw": "精神"
            },
            damage: 30,
            cost: ["Psychic", "Psychic"],
            effect: {
                en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
                "fr": "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
                "es": "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
                "it": "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
                "de": "Dieser Angriff fügt 30 weitere Schadenspunkte für jede Energie zu, die an das Aktive Pokémon deines Gegners angelegt ist.",
                "pt-br": "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
                "zh-tw": "對手的活躍寶可夢身上每附加一個能量，此攻擊就會造成 30 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
