import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/061"
    },
    name: {
        en: "Heliolisk",
        fr: "Iguolta",
        es: "Heliolisk",
        it: "Heliolisk",
        de: "Elezard",
        "pt-br": "Heliolisk",
        "zh-tw": "光電傘蜥",
        ko: "일레도리자드",
        ja: "エレザード"
    },
    illustrator: "5ban Graphics",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Lightning"],
    dexId: [695],
    evolveFrom: {
        en: "Helioptile",
        fr: "Galvaran",
        es: "Helioptile",
        it: "Helioptile",
        de: "Eguana",
        "pt-br": "Helioptile",
        "zh-tw": "傘電蜥",
        ko: "목도리키텔",
        ja: "エリキテル"
    },
    stage: "Stage1",
    description: {
        en: "One Heliolisk basking in the sun with its frill outspread is all it would take to produce enough electricity to power a city.",
        fr: "Lorsqu'il déploie sa collerette pour emmagasiner\nla lumière du soleil, il génère à lui seul assez\nd'électricité pour alimenter une grande ville.",
        es: "Al extender su gorguera y exponerse a la luz\nsolar, genera la energía eléctrica suficiente para\ncubrir el consumo de una metrópoli entera.",
        it: "L'energia prodotta da un Heliolisk quando apre\nil suo collare in un luogo soleggiato è sufficiente\na soddisfare il fabbisogno di una metropoli.",
        de: "Stellt es seine kragenartigen Hautlappen auf und\nabsorbiert damit Sonnenlicht, kann ein Elezard\ngenug Strom für eine Großstadt produzieren.",
        "pt-br": "Um único Heliolisk tomando banho de sol com\nsuas cristas abertas consegue produzir energia\no suficiente para abastecer uma cidade inteira.",
        "zh-tw": "只要一隻日光蟲在陽光下伸展開來，就可以產生足夠的電力來為一座城市供電。"
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Electrispark"
            },
            effect: {
                en: "This attack also does 10 damage to each of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige également 10 dégâts à chacun des Pokémon de Banc de votre adversaire.",
                es: "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario.",
                de: "Dieser Angriff fügt außerdem jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊還會對對手的後備寶可夢各造成 10 點傷害。"
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
