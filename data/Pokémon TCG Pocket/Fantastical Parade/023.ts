import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/023",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/023",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/023",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/023",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/023",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/023"
    },
    name: {
        en: "Blacephalon ex",
        "fr": "Blacéphale ex",
        "es": "Blacéfalo ex",
        "it": "Blacephalon es",
        "de": "Blacephalon ex",
        "pt-br": "Ex de Blacéfalo",
        "zh-tw": "布拉塞法倫前身"
    },
    illustrator: "5ban Graphics",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Fire"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Singe",
                "fr": "Roussir",
                "es": "Chamuscar",
                "it": "Cantare",
                "de": "Versengen",
                "pt-br": "Singe",
                "zh-tw": "辛格"
            },
            cost: ["Fire"],
            effect: {
                en: "Your opponent's Active Pokémon is now Burned.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Brûlé.",
                "es": "El Pokémon Activo de tu rival ahora está Quemado.",
                "it": "Il Pokémon attivo del tuo avversario è ora bruciato.",
                "de": "Das aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "你對手的活躍神奇寶貝現在被燒毀了。"
            }
        }, {
            name: {
                en: "Pop-Punk",
                "fr": "Pop-Punk",
                "es": "pop punk",
                "it": "Pop-punk",
                "de": "Pop-Punk",
                "pt-br": "Pop Punk",
                "zh-tw": "流行朋克"
            },
            damage: 140,
            cost: ["Fire", "Fire", "Fire"],
            effect: {
                en: "Discard 3 {R} Energy from this Pokémon.",
                "fr": "Défaussez 3 {R} Énergie de ce Pokémon.",
                "es": "Descarta 3 {R} de Energía de este Pokémon.",
                "it": "Scarta 3 Energie {R} da questo Pokémon.",
                "de": "Lege 3 {R}-Energien von diesem Pokémon ab.",
                "pt-br": "Descarte 3 {R} Energias deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的 3 個 {R} 能量。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2
};
export default card;
