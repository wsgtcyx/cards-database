import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/106",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/106",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/106",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/106",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/106",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/106",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/106"
    },
    name: {
        en: "Toxtricity ex",
        fr: "Salarsen-ex",
        es: "Toxtricity ex",
        it: "Toxtricity-ex",
        de: "Riffex-ex",
        "pt-br": "Toxtricity ex",
        "zh-tw": "顫弦蠑螈ex",
        ko: "스트린더 ex",
        ja: "ストリンダーex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 150,
    types: ["Lightning"],
    dexId: [849],
    evolveFrom: {
        en: "Toxel",
        fr: "Toxizap",
        es: "Toxel",
        it: "Toxel",
        de: "Toxel",
        "pt-br": "Toxel",
        "zh-tw": "毒電嬰",
        ko: "일레즌",
        ja: "エレズン"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Lightning", "Lightning", "Colorless"],
            name: {
                en: "Damaging Spark",
                fr: "Étincelle Ravageuse",
                es: "Chispa Dañina",
                it: "Scintilla Dannosa",
                de: "Funkenschaden",
                "pt-br": "Faísca Nociva",
                "zh-tw": "傷害電光"
            },
            effect: {
                en: "This attack also does 30 damage to each of your opponent's Benched Pokémon that has damage on it.",
                fr: "Cette attaque inflige aussi 30 dégâts à chacun des Pokémon de Banc de votre adversaire ayant subi des dégâts.",
                es: "Este ataque también hace 30 puntos de daño a cada uno de los Pokémon en Banca de tu rival que ya tenga daño.",
                it: "Questo attacco infligge anche 30 danni a ciascuno dei Pokémon danneggiati nella panchina del tuo avversario.",
                de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners, dem bereits Schaden zugefügt wurde, 30 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 30 pontos de dano a cada um dos Pokémon no Banco do seu oponente que estiver danificado.",
                "zh-tw": "對手有受到傷害的所有備戰寶可夢也受到30點傷害。"
            },
            damage: 90
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
