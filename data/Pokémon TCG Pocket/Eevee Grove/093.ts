import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Pinsir",
        "fr": "Pinsir",
        "es": "Pinsir",
        "it": "Pinsir",
        "de": "Pinsir",
        "pt-br": "Pinsir",
        "zh-tw": "凱羅斯",
    },
    illustrator: "Masakazu Fukuda",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    description: {
        en: "These Pokémon judge one another based on\npincers. Thicker, more impressive pincers make\nfor more popularity with the opposite gender.",
        "fr": "Ces Pokémon se jugent mutuellement en fonction de\npinces. Des pinces plus épaisses et plus impressionnantes font\npour plus de popularité auprès du sexe opposé.",
        "es": "Estos Pokémon se juzgan entre sí basándose en\npinzas. Unas pinzas más gruesas e impresionantes hacen\npara obtener más popularidad entre el sexo opuesto.",
        "it": "Questi Pokémon si giudicano a vicenda in base a\ntenaglie. Le tenaglie sono più spesse e più impressionanti\nper una maggiore popolarità con il sesso opposto.",
        "de": "Diese Pokémon beurteilen sich gegenseitig anhand\nZangen. Dickere, eindrucksvollere Zangen ergeben\nfür mehr Beliebtheit beim anderen Geschlecht.",
        "pt-br": "Esses Pokémon julgam uns aos outros com base em\npinças. Pinças mais grossas e impressionantes fazem\npara mais popularidade com o sexo oposto.",
        "zh-tw": "這些神奇寶貝根據以下標準相互評判\n鉗子。更厚、更令人印象深刻的鉗子\n為了更受異性歡迎。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Guillotine Rush",
                "fr": "Ruée vers la guillotine",
                "es": "Acometida de guillotina",
                "it": "Corsa alla ghigliottina",
                "de": "Guillotinen-Ansturm",
                "pt-br": "Corrida de guilhotina",
                "zh-tw": "斷頭台衝刺"
            },
            damage: 50,
            cost: ["Grass", "Colorless", "Colorless"],
            effect: {
                en: "Flip a coin until you get tails. This attack does 40 more damage for each heads.",
                "fr": "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 40 dégâts supplémentaires pour chaque tête.",
                "es": "Lanza una moneda hasta que obtengas cruz. Este ataque hace 40 daños más por cada cabeza.",
                "it": "Lancia una moneta finché non esce croce. Questo attacco infligge 40 danni in più per ogni testa.",
                "de": "Wirf eine Münze, bis du „Zahl“ erhältst. Dieser Angriff verursacht 40 weitere Schadenspunkte pro Kopf.",
                "pt-br": "Jogue uma moeda até obter coroa. Este ataque causa mais 40 danos para cada cabeça.",
                "zh-tw": "拋一枚硬幣，直到出現反面。這次攻擊對每個頭造成 40 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
