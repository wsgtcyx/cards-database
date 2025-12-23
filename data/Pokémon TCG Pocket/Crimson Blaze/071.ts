import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Sunflora",
        "fr": "Héliatronc",
        "es": "Sunflora",
        "it": "Sunflora",
        "de": "Sonnflora",
        "pt-br": "Sunflora",
        "zh-tw": "向日花怪"
    },
    illustrator: "OKACHEKE",
    rarity: "One Star",
    category: "Pokemon",
    hp: 100,
    types: ["Grass"],
    evolveFrom: {
        en: "Sunkern",
        "fr": "Tournegrin",
        "es": "Sunkern",
        "it": "Sunkern",
        "de": "Sonnkern",
        "pt-br": "Sunkern",
        "zh-tw": "向日種子"
    },
    description: {
        en: "Since it converts sunlight into energy, it is always\nlooking in the direction of the sun.",
        "fr": "Puisqu'il convertit la lumière du soleil en énergie, il est toujours\nen regardant dans la direction du soleil.",
        "es": "Dado que convierte la luz solar en energía, siempre es\nmirando en dirección al sol.",
        "it": "Poiché converte la luce solare in energia, lo è sempre\nguardando in direzione del sole.",
        "de": "Da es Sonnenlicht in Energie umwandelt, ist es immer so\nin Richtung der Sonne schauen.",
        "pt-br": "Como converte a luz solar em energia, é sempre\nolhando na direção do sol.",
        "zh-tw": "由於它將陽光轉化為能量，因此它總是\n朝太陽的方向看。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Quick-Grow Beam",
                "fr": "Poutre à croissance rapide",
                "es": "Haz de crecimiento rápido",
                "it": "Fascio a crescita rapida",
                "de": "Schnell wachsender Strahl",
                "pt-br": "Feixe de crescimento rápido",
                "zh-tw": "快速生長梁"
            },
            damage: 30,
            cost: ["Grass"],
            effect: {
                en: "If Quick-Grow Extract is in your discard pile, this attack does 30 more damage.",
                "fr": "Si Quick-Grow Extract est dans votre pile de défausse, cette attaque inflige 30 dégâts supplémentaires.",
                "es": "Si Quick-Grow Extract está en tu pila de descarte, este ataque hace 30 daños más.",
                "it": "Se l'Estratto a crescita rapida è nella tua pila degli scarti, questo attacco infligge 30 danni in più.",
                "de": "Wenn sich Quick-Grow Extract in deinem Ablagestapel befindet, fügt dieser Angriff 30 weitere Schadenspunkte zu.",
                "pt-br": "Se Quick-Grow Extract estiver em sua pilha de descarte, este ataque causará 30 de dano a mais.",
                "zh-tw": "如果快速生長提取物在你的棄牌堆中，則此攻擊會造成 30 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
