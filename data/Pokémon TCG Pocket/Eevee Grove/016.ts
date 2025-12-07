import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Vaporeon",
        "fr": "Vaporéon",
        "es": "vaporeon",
        "it": "Vaporeon",
        "de": "Vaporeon",
        "pt-br": "Vaporeon",
        "zh-tw": "蒸氣"
    },
    illustrator: "sui",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Water"],
    evolveFrom: {
        en: "Eevee",
        "fr": "Évoli",
        "es": "Eevee",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布"
    },
    description: {
        en: "It lives close to water. Its long tail is ridged with\na fin, which is often mistaken for a mermaid's.",
        "fr": "Il vit près de l'eau. Sa longue queue est striée de\nune nageoire, qui est souvent confondue avec celle d'une sirène.",
        "es": "Vive cerca del agua. Su larga cola está surcada por\nuna aleta, que a menudo se confunde con la de una sirena.",
        "it": "Vive vicino all'acqua. La sua lunga coda è increspata\nuna pinna, che spesso viene scambiata per quella di una sirena.",
        "de": "Es lebt in der Nähe von Wasser. Sein langer Schwanz ist gerippt\neine Flosse, die oft mit der einer Meerjungfrau verwechselt wird.",
        "pt-br": "Vive perto da água. Sua longa cauda é estriada\numa barbatana, que muitas vezes é confundida com a de uma sereia.",
        "zh-tw": "它生活在靠近水的地方。它的長尾巴上佈滿了脊狀的\n鰭，經常被誤認為是美人魚的鰭。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Hyper Whirlpool",
                "fr": "Hyper tourbillon",
                "es": "Hiper hidromasaje",
                "it": "Iperidromassaggio",
                "de": "Hyper-Whirlpool",
                "pt-br": "Hiper Hidromassagem",
                "zh-tw": "超級漩渦"
            },
            damage: 70,
            cost: ["Water", "Colorless", "Colorless"],
            effect: {
                en: "Flip a coin until you get tails. For each heads, discard a random Energy from your opponent's Active Pokémon.",
                "fr": "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, défaussez une Énergie aléatoire du Pokémon Actif de votre adversaire.",
                "es": "Lanza una moneda hasta que obtengas cruz. Por cada cara, descarta una Energía aleatoria del Pokémon Activo de tu rival.",
                "it": "Lancia una moneta finché non esce croce. Per ogni testa, scarta un'Energia casuale dal Pokémon attivo del tuo avversario.",
                "de": "Wirf eine Münze, bis du „Zahl“ erhältst. Lege für jeden Kopf eine zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Jogue uma moeda até obter coroa. Para cada cara, descarte uma Energia aleatória do Pokémon Ativo do seu oponente.",
                "zh-tw": "拋一枚硬幣，直到出現反面。對於每個頭，丟棄對手的活躍神奇寶貝中的隨機能量。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
