import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/045",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/045",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/045",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/045",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/045"
    },
    name: {
        en: "Alomomola",
        fr: "Mamanbo",
        es: "Alomomola",
        it: "Alomomola",
        de: "Mamolida",
        "pt-br": "Alomomola",
        "zh-tw": "保母曼波",
        ko: "맘복치",
        ja: "ママンボウ"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    dexId: [594],
    stage: "Basic",
    description: {
        en: "They float upon the open sea. Many water Pokémon gather in the area around Alomomola.",
        fr: "Il se laisse dériver au gré des courants\nocéaniques profonds. De nombreux Pokémon\nEau se rassemblent toujours autour de lui.",
        es: "Vive flotando a la deriva en mar abierto. Muchos\nPokémon de tipo Agua se arremolinan a su\nalrededor.",
        it: "Vive in mare aperto, lasciandosi trasportare\ndalle onde. Attorno gli si radunano molti\nPokémon di tipo Acqua.",
        de: "Es treibt durch den Ozean. Um Mamolida\nversammeln sich stets viele Wasser-Pokémon.",
        "zh-tw": "漂浮在汪洋大海上生活。\n保母曼波的周圍\n會聚集起許多水屬性寶可夢。"
    },
    attacks: [
        {
            cost: ["Water", "Water"],
            name: {
                en: "Mineral Pump",
                fr: "Pompe Minérale",
                es: "Bombeo Mineral",
                "pt-br": "Bomba Mineral",
                "zh-tw": "礦質水炮"
            },
            effect: {
                en: "Heal 10 damage from each of your Benched Pokémon.",
                fr: "Soignez 10 dégâts de chacun de vos Pokémon de Banc.",
                es: "Cura 10 puntos de daño a cada uno de tus Pokémon en Banca.",
                "pt-br": "Cure 10 pontos de dano de cada um dos seus Pokémon no Banco.",
                "zh-tw": "將自己的所有備戰寶可夢恢復10HP。"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
