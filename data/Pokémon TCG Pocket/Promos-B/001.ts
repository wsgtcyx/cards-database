import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/001",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/001",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/001",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/001",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/001",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/001"
    },
    name: {
        en: "Pikachu",
        fr: "Pikachu",
        es: "Pikachu",
        it: "Pikachu",
        de: "Pikachu",
        "pt-br": "Pikachu",
        "zh-tw": "皮卡丘",
        ko: "피카츄",
        ja: "ピカチュウ"
    },
    illustrator: "You Iribi",
    rarity: "None",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    dexId: [25],
    stage: "Basic",
    description: {
        en: "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
        fr: "Quand il s'énerve, il libère instantanément\nl'énergie emmagasinée dans les poches de\nses joues.",
        es: "Cuando se enfada, este Pokémon\ndescarga la energía que almacena en\nel interior de las bolsas de las mejillas.",
        it: "Quando s'arrabbia, libera subito l'energia\naccumulata nelle sacche sulle guance.",
        de: "Ist es wütend, entlädt sich augenblicklich die\nElektrizität, die es in seinen Backentaschen\ngespeichert hat.",
        "pt-br": "Quando está com raiva, descarrega\nimediatamente a energia armazenada\nnas bolsas em suas bochechas.",
        "zh-tw": "當它被激怒時，它會立即釋放臉頰眼袋中儲存的能量。"
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Spark",
                fr: "Étincelle",
                es: "Chispa",
                it: "Scintilla",
                de: "Funkensprung",
                "pt-br": "Faísca",
                "zh-tw": "電光"
            },
            effect: {
                en: "This attack also does 10 damage to 1 of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige également 10 dégâts à 1 des Pokémon de Banc de votre adversaire.",
                es: "Este ataque también hace 10 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge anche 10 danni a 1 dei Pokémon nella panchina del tuo avversario.",
                de: "Dieser Angriff fügt außerdem 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 10 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊也會對對手後備的 1 只寶可夢造成 10 點傷害。"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
