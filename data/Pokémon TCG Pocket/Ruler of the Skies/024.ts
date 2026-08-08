import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/024",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/024",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/024",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/024",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/024",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/024",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/024"
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
                fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
                es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
                it: "Il Pokémon attivo del tuo avversario è ora bruciato.",
                de: "Das aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "將對手的戰鬥寶可夢灼傷。"
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
