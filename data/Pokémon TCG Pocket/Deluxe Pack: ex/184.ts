import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Lunala ex",
        "fr": "Lunala ex",
        "es": "Lunala ex",
        "it": "Lunala ex",
        "de": "Lunala ex",
        "pt-br": "Luna ex",
        "zh-tw": "露娜拉前任"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 180,
    types: ["Psychic"],
    evolveFrom: {
        en: "Cosmoem",
        "fr": "Cosmoème",
        "es": "Cosmoem",
        "it": "Cosmoem",
        "de": "Cosmoem",
        "pt-br": "Cosmoema",
        "zh-tw": "科斯莫姆"
    },
    stage: "Stage2",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Psychic Connect",
                "fr": "Connexion psychique",
                "es": "Conexión psíquica",
                "it": "Connessione psichica",
                "de": "Psychische Verbindung",
                "pt-br": "Conexão Psíquica",
                "zh-tw": "心靈連接"
            },
            effect: {
                en: "Once during your turn, you may move all {P} Energy from 1 of your Benched {P} Pokémon to your Active Pokémon.",
                "fr": "Une fois pendant votre tour, vous pouvez déplacer toutes les {P} Énergies d'un de vos {P} Pokémon de Banc vers votre Pokémon Actif.",
                "es": "Una vez durante tu turno, puedes mover toda la Energía {P} de 1 de tus Pokémon {P} en Banca a tu Pokémon Activo.",
                "it": "Una sola volta durante il tuo turno, puoi spostare tutte le Energie {P} da 1 dei tuoi Pokémon {P} in panchina al tuo Pokémon attivo.",
                "de": "Einmal während deines Zuges kannst du die gesamte {P}-Energie von einem deiner {P}-Pokémon auf deiner Bank auf dein aktives Pokémon übertragen.",
                "pt-br": "Uma vez durante o seu turno, você pode mover toda a Energia {P} de 1 dos seus Pokémon {P} no Banco para o seu Pokémon Ativo.",
                "zh-tw": "在你的回合中，你可以將所有 {P} 能量從你的 1 個後備 {P} 神奇寶貝轉移到你的活躍神奇寶貝上。"
            }
        }],
    attacks: [{
            name: {
                en: "Lunar Blast",
                "fr": "Explosion lunaire",
                "es": "Explosión lunar",
                "it": "Esplosione lunare",
                "de": "Mondexplosion",
                "pt-br": "Explosão Lunar",
                "zh-tw": "月球爆炸"
            },
            damage: 100,
            cost: ["Psychic", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
