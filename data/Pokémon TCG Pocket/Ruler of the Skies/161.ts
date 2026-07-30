import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/161"
    },
    name: {
        en: "Quilava",
        fr: "Feurisson",
        es: "Quilava",
        it: "Quilava",
        de: "Igelavar",
        "pt-br": "Quilava",
        "zh-tw": "火岩鼠",
        ko: "마그케인",
        ja: "マグマラシ"
    },
    illustrator: "Mizue",
    rarity: "One Star",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    dexId: [156],
    evolveFrom: {
        en: "Cyndaquil",
        fr: "Héricendre",
        es: "Cyndaquil",
        it: "Cyndaquil",
        de: "Feurigel",
        "pt-br": "Cyndaquil",
        "zh-tw": "火球鼠",
        ko: "브케인",
        ja: "ヒノアラシ"
    },
    stage: "Stage1",
    description: {
        en: "The fur covering this Pokémon's body never burns, no matter what. It can shrug off any kind of fire attack."
    },
    attacks: [
        {
            cost: ["Fire", "Fire"],
            name: {
                en: "Heat Wave",
                fr: "Canicule",
                es: "Onda Ígnea",
                it: "Ondacalda",
                de: "Hitzewelle",
                "zh-tw": "熱風"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Burned.",
                fr: "Le Pokémon Actif de votre adversaire est désormais Brûlé.",
                es: "El Pokémon Activo de tu rival ahora está Quemado.",
                it: "Il Pokémon attivo del tuo avversario è ora bruciato.",
                de: "Das aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "你對手的活躍寶可夢現在被燒毀了。"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
