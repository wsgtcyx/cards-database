import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/044",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/044",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/044",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/044",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/044",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/044",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/044"
    },
    name: {
        en: "Scraggy",
        fr: "Baggiguane",
        es: "Scraggy",
        it: "Scraggy",
        de: "Zurrokex",
        "pt-br": "Scraggy",
        "zh-tw": "滑滑小子",
        ko: "곤율랭",
        ja: "ズルッグ"
    },
    illustrator: "sowsow",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Darkness"],
    dexId: [559],
    stage: "Basic",
    description: {
        en: "It will abruptly headbutt anyone that makes eye contact with it. Its skull is extremely hard.",
        fr: "Il donnera un coup de tête brusque à quiconque établira un contact visuel avec lui. Son crâne est extrêmement dur.",
        es: "Le dará un cabezazo abrupto a cualquiera que haga contacto visual con él. Su cráneo es extremadamente duro.",
        it: "Dà una testata improvvisa a chiunque stabilisca un contatto visivo con esso. Il suo cranio è estremamente duro.",
        de: "Es wird jedem, der Augenkontakt damit hat, einen plötzlichen Kopfstoß verpassen. Sein Schädel ist extrem hart.",
        "pt-br": "Ele dará uma cabeçada abrupta em qualquer um que fizer contato visual com ele. Seu crânio é extremamente duro.",
        "zh-tw": "它會突然用頭撞任何與它有眼神接觸的人。它的頭骨極為堅硬。"
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Low Kick",
                fr: "Balayage",
                es: "Patada Baja",
                it: "Colpo Basso",
                de: "Fußkick",
                "pt-br": "Rasteira",
                "zh-tw": "踢倒"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
