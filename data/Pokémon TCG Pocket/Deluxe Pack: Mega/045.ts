import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/045",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/045",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/045",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/045",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/045",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/045",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/045"
    },
    name: {
        en: "Blacephalon ex",
        fr: "Pierroteknik-ex",
        es: "Blacephalon ex",
        it: "Blacephalon-ex",
        de: "Kopplosio-ex",
        "pt-br": "Blacephalon ex",
        "zh-tw": "砰頭小丑ex",
        ja: "ズガドーンex",
        ko: "두파팡 ex"
    },
    illustrator: "5ban Graphics",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 140,
    types: [
        "Fire"
    ],
    stage: "Basic",
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Singe",
                fr: "Roussi",
                es: "Quemadura",
                it: "Scottata",
                de: "Versengung",
                "pt-br": "Chamuscada",
                "zh-tw": "灼熱",
                ja: "Singe",
                ko: "Singe"
            },
            cost: [
                "Fire"
            ],
            effect: {
                en: "Your opponent's Active Pokémon is now Burned.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
                es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
                it: "Il Pokémon attivo del tuo avversario viene bruciato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "將對手的戰鬥寶可夢灼傷。",
                ja: "Your opponent's Active Pokémon is now Burned.",
                ko: "Your opponent's Active Pokémon is now Burned."
            }
        },
        {
            name: {
                en: "Pop-Punk",
                fr: "Pop Punk",
                es: "Pop Punk",
                it: "Pop Punk",
                de: "Pop-Punk",
                "pt-br": "Pop-Punk",
                "zh-tw": "砰破龐克",
                ja: "Pop-Punk",
                ko: "Pop-Punk"
            },
            damage: 140,
            cost: [
                "Fire",
                "Fire",
                "Fire"
            ],
            effect: {
                en: "Discard 3 {R} Energy from this Pokémon.",
                fr: "Défaussez 3 Énergies {R} de ce Pokémon.",
                es: "Descarta 3 Energías {R} de este Pokémon.",
                it: "Rimuovi 3 Energie {R} da questo Pokémon.",
                de: "Lege 3 {R}-Energien von diesem Pokémon ab.",
                "pt-br": "Descarte 3 Energias {R} deste Pokémon.",
                "zh-tw": "將這隻寶可夢身上的3個{R}能量丟棄。",
                ja: "Discard 3 {R} Energy from this Pokémon.",
                ko: "Discard 3 {R} Energy from this Pokémon."
            }
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
