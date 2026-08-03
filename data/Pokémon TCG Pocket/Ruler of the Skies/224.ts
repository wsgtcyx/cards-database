import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/224",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/224",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/224",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/224",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/224"
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
                fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
                es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
                it: "Il Pokémon attivo del tuo avversario è ora bruciato.",
                de: "Das aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "將對手的戰鬥寶可夢灼傷。"
            }
        },
        {
            cost: ["Fire", "Fire", "Fire"],
            name: {
                en: "Pop-Punk",
                fr: "Pop Punk",
                es: "Pop Punk",
                it: "Pop-punk",
                de: "Pop-Punk",
                "pt-br": "Pop-Punk",
                "zh-tw": "砰破龐克"
            },
            effect: {
                en: "Discard 3 {R} Energy from this Pokémon.",
                fr: "Défaussez 3 Énergies {R} de ce Pokémon.",
                es: "Descarta 3 Energías {R} de este Pokémon.",
                it: "Scarta 3 Energie {R} da questo Pokémon.",
                de: "Lege 3 {R}-Energien von diesem Pokémon ab.",
                "pt-br": "Descarte 3 Energias {R} deste Pokémon.",
                "zh-tw": "將這隻寶可夢身上的3個{R}能量丟棄。"
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
