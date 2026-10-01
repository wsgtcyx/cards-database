import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/003",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/003",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/003",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/003",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/003",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/003",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/003"
    },
    name: {
        en: "Mega Venusaur ex",
        fr: "Méga-Florizarre-ex",
        es: "Mega-Venusaur ex",
        it: "Mega Venusaur-ex",
        de: "Mega-Bisaflor-ex",
        "pt-br": "Mega Venusaur ex",
        "zh-tw": "超級妙蛙花ex",
        ja: "メガフシギバナex",
        ko: "메가이상해꽃 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 240,
    types: [
        "Grass"
    ],
    evolveFrom: {
        en: "Ivysaur",
        fr: "Herbizarre",
        es: "Ivysaur",
        it: "Ivysaur",
        de: "Bisaknosp",
        "pt-br": "Ivysaur",
        "zh-tw": "妙蛙草",
        ja: "Ivysaur",
        ko: "Ivysaur"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Critical Bloom",
                fr: "Floraison Fatale",
                es: "Floración Crítica",
                it: "Fioritura Critica",
                de: "Krisenblüte",
                "pt-br": "Florescimento Crítico",
                "zh-tw": "危機綻放",
                ja: "Critical Bloom",
                ko: "Critical Bloom"
            },
            damage: 120,
            cost: [
                "Grass",
                "Grass",
                "Colorless",
                "Colorless"
            ],
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned and Asleep.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Endormi.",
                es: "El Pokémon Activo de tu rival pasa a estar Envenenado y Dormido.",
                it: "Il Pokémon attivo del tuo avversario viene avvelenato e addormentato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet und schläft.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado e Adormecido.",
                "zh-tw": "將對手的戰鬥寶可夢中毒與睡眠。",
                ja: "Your opponent's Active Pokémon is now Poisoned and Asleep.",
                ko: "Your opponent's Active Pokémon is now Poisoned and Asleep."
            }
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 4
};

export default card;
