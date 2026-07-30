import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/224"
    },
    name: {
        en: "Blacephalon ex",
        fr: "Pierroteknik-ex",
        es: "Blacephalon ex",
        it: "Blacephalon-ex",
        de: "Kopplosio-ex",
        "pt-br": "Blacephalon ex",
        "zh-tw": "砰頭小丑ex",
        ko: "두파팡 ex",
        ja: "ズガドーンex"
    },
    illustrator: "5ban Graphics",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Fire"],
    dexId: [806],
    stage: "Basic",
    attacks: [
        {
            cost: ["Fire"],
            name: {
                en: "Singe",
                fr: "Roussi",
                es: "Quemadura",
                it: "Scottata",
                de: "Versengung",
                "pt-br": "Chamuscada",
                "zh-tw": "灼熱"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Burned.",
                fr: "Le Pokémon Actif de votre adversaire est désormais Brûlé.",
                es: "El Pokémon Activo de tu rival ahora está Quemado.",
                it: "Il Pokémon attivo del tuo avversario è ora bruciato.",
                de: "Das aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "你對手的活躍寶可夢現在被燒毀了。"
            }
        },
        {
            cost: ["Fire", "Fire", "Fire"],
            name: {
                en: "Pop-Punk",
                fr: "Pop-Punk",
                es: "pop punk",
                it: "Pop-punk",
                de: "Pop-Punk",
                "pt-br": "Pop Punk",
                "zh-tw": "砰破龐克"
            },
            effect: {
                en: "Discard 3 {R} Energy from this Pokémon.",
                fr: "Défaussez 3 {R} Énergie de ce Pokémon.",
                es: "Descarta 3 {R} de Energía de este Pokémon.",
                it: "Scarta 3 Energie {R} da questo Pokémon.",
                de: "Lege 3 {R}-Energien von diesem Pokémon ab.",
                "pt-br": "Descarte 3 {R} Energias deste Pokémon.",
                "zh-tw": "丟棄該寶可夢的 3 個 {R} 能量。"
            },
            damage: 140
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
