import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/095",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/095",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/095",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/095",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/095",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/095",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/095"
    },
    name: {
        en: "Heliolisk",
        fr: "Iguolta",
        es: "Heliolisk",
        it: "Heliolisk",
        de: "Elezard",
        "pt-br": "Heliolisk",
        "zh-tw": "光電傘蜥",
        ja: "エレザード",
        ko: "일레도리자드"
    },
    illustrator: "5ban Graphics",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: [
        "Lightning"
    ],
    dexId: [
        695
    ],
    evolveFrom: {
        en: "Helioptile",
        fr: "Galvaran",
        es: "Helioptile",
        it: "Helioptile",
        de: "Eguana",
        "pt-br": "Helioptile",
        "zh-tw": "傘電蜥",
        ja: "Helioptile",
        ko: "Helioptile"
    },
    stage: "Stage1",
    description: {
        en: "One Heliolisk basking in the sun with its frill outspread is all it would take to produce enough electricity to power a city.",
        fr: "Lorsqu'il déploie sa collerette pour emmagasiner la lumière du soleil, il génère à lui seul assez d'électricité pour alimenter une grande ville.",
        es: "Al extender su gorguera y exponerse a la luz solar, genera la energía eléctrica suficiente para cubrir el consumo de una metrópoli entera.",
        it: "L'energia prodotta da un Heliolisk quando apre il suo collare in un luogo soleggiato è sufficiente a soddisfare il fabbisogno di una metropoli.",
        de: "Stellt es seine kragenartigen Hautlappen auf und absorbiert damit Sonnenlicht, kann ein Elezard genug Strom für eine Großstadt produzieren.",
        "pt-br": "Um único Heliolisk tomando banho de sol com suas cristas abertas consegue produzir energia o suficiente para abastecer uma cidade inteira.",
        "zh-tw": "如果展開頸傘沐浴陽光，單憑１隻光電傘蜥就能製造出大城市所需的電力。",
        ja: "One Heliolisk basking in the sun with its frill outspread is all it would take to produce enough electricity to power a city.",
        ko: "One Heliolisk basking in the sun with its frill outspread is all it would take to produce enough electricity to power a city."
    },
    attacks: [
        {
            cost: [
                "Lightning"
            ],
            name: {
                en: "Electrispark",
                fr: "Arc Électrique",
                es: "Chispa Eléctrica",
                de: "Stromfunke",
                "pt-br": "Centelha Elétrica",
                "zh-tw": "電電光",
                it: "Elettroscintilla",
                ja: "Electrispark",
                ko: "Electrispark"
            },
            effect: {
                en: "This attack also does 10 damage to each of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige aussi 10 dégâts à chaque Pokémon de Banc de votre adversaire.",
                es: "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario.",
                de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 10 pontos de dano a cada Pokémon no Banco do seu oponente.",
                "zh-tw": "對手的所有備戰寶可夢也受到10點傷害。",
                ja: "This attack also does 10 damage to each of your opponent's Benched Pokémon.",
                ko: "This attack also does 10 damage to each of your opponent's Benched Pokémon."
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
