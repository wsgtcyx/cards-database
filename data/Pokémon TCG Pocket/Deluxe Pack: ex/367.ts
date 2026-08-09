import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
	image: {
		de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/367",
		es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/367",
		fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/367",
		it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/367",
		"zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/367",
		"pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/367",
		en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/367"
	},
	name: {
        en: "Lunala ex",
        "fr": "Lunala-ex",
        "es": "Lunala ex",
        "it": "Lunala-ex",
        "de": "Lunala-ex",
        "pt-br": "Lunala ex",
        "zh-tw": "露奈雅拉ex",
    },
    illustrator: "5ban Graphics",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 180,
    types: ["Psychic"],
    evolveFrom: {
        en: "Cosmoem",
        "fr": "Cosmovum",
        "es": "Cosmoem",
        "it": "Cosmoem",
        "de": "Cosmovum",
        "pt-br": "Cosmoem",
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
