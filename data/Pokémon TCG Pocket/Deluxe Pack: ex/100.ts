import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
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
    illustrator: "LINNE",
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
    abilities: [{
            type: "Ability",
            name: {
                en: "Wash Out",
                "fr": "Laver",
                "es": "Lavar",
                "it": "Lavare",
                "de": "Ausspülen",
                "pt-br": "Lavar",
                "zh-tw": "洗掉"
            },
            effect: {
                en: "As often as you like during your turn, you may move a {W} Energy from 1 of your Benched {W} Pokémon to your Active {W} Pokémon.",
                "fr": "Aussi souvent que vous le souhaitez pendant votre tour, vous pouvez déplacer une Énergie {W} de l'un de vos Pokémon {W} de Banc vers votre Pokémon Actif {W}.",
                "es": "Tan seguido como quieras durante tu turno, puedes mover una Energía {W} de 1 de tus Pokémon {W} en Banca a tu Pokémon {W} Activo.",
                "it": "Tutte le volte che vuoi durante il tuo turno, puoi spostare un'Energia {W} da 1 dei tuoi Pokémon {W} in panchina al tuo Pokémon {W} attivo.",
                "de": "So oft du möchtest, kannst du während deines Zuges eine {W}-Energie von einem deiner {W}-Pokémon auf deiner Bank auf dein aktives {W}-Pokémon verschieben.",
                "pt-br": "Quantas vezes quiser durante o seu turno, você pode mover uma Energia {W} de 1 dos seus Pokémon {W} no Banco para os seus Pokémon {W} Ativos.",
                "zh-tw": "在你的回合中，你可以多次將 {W} 能量從你的 1 個後備 {W} 神奇寶貝轉移到你的活躍 {W} 神奇寶貝上。"
            }
        }],
    attacks: [{
            name: {
                en: "Wave Splash",
                "fr": "Éclaboussure de vague",
                "es": "Salpicadura de onda",
                "it": "Spruzzo dell'onda",
                "de": "Wellenspritzer",
                "pt-br": "Respingo de onda",
                "zh-tw": "波浪飛濺"
            },
            damage: 60,
            cost: ["Water", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
