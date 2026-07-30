import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/024"
    },
    name: {
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
    illustrator: "Teeziro",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    dexId: [155],
    stage: "Basic",
    description: {
        en: "The fire that spouts from its back burns hottest when it is angry. The flaring flames intimidate foes."
    },
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
