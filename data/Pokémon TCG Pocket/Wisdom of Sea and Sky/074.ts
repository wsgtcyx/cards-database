import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Slowking",
        "fr": "Ralentissement",
        "es": "lento",
        "it": "Rallentando",
        "de": "Langsam",
        "pt-br": "Lentidão",
        "zh-tw": "河馬王",
    },
    illustrator: "Kagemaru Himeno",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Psychic"],
    evolveFrom: {
        en: "Slowpoke",
        "fr": "Lambin",
        "es": "Perezoso",
        "it": "Slowpoke",
        "de": "Langweiler",
        "pt-br": "Slowpoke",
        "zh-tw": "呆呆獸"
    },
    description: {
        en: "When its head was bitten, toxins entered Slowpoke's\nhead and unlocked an extraordinary power.",
        "fr": "Quand sa tête a été mordue, des toxines ont pénétré dans l'intérieur de Slowpoke.\ntête et a débloqué un pouvoir extraordinaire.",
        "es": "Cuando le mordieron la cabeza, las toxinas entraron en la de Slowpoke.\ncabeza y desbloqueó un poder extraordinario.",
        "it": "Quando gli viene morsa la testa, le tossine entrano in quella di Slowpoke\ntesta e sbloccò un potere straordinario.",
        "de": "Als sein Kopf gebissen wurde, gelangten Giftstoffe in Slowpokes Körper\nKopf und setzte eine außergewöhnliche Kraft frei.",
        "pt-br": "Quando sua cabeça foi mordida, toxinas entraram no corpo de Slowpoke.\ncabeça e desbloqueou um poder extraordinário.",
        "zh-tw": "當它的頭被咬時，毒素就進入了呆呆獸的身體\n頭並釋放出非凡的力量。"
    },
    stage: "Stage1",
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
            damage: 10,
            cost: ["Psychic", "Colorless"],
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
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
