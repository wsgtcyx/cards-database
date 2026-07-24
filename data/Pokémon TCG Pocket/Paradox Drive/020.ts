import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/020",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/020"
    },
    name: {
        en: "Espeon",
        fr: "Mentali",
        es: "Espeon",
        it: "Espeon",
        de: "Psiana",
        "pt-br": "Espeon",
        "zh-tw": "太陽伊布",
        ko: "에브이",
        ja: "エーフィ"
    },
    illustrator: "Mizue",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Psychic"],
    dexId: [196],
    evolveFrom: {
        en: "Eevee",
        fr: "Évoli",
        es: "Eevee",
        it: "Eevee",
        de: "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ko: "이브이",
        ja: "イーブイ"
    },
    stage: "Stage1",
    description: {
        en: "It uses the fine hair that covers its body to sense air currents and predict its enemy’s actions.",
        fr: "Il utilise les poils fins qui recouvrent son corps pour détecter les courants d’air et prédire les actions de ses ennemis.",
        es: "Utiliza el fino pelo que cubre su cuerpo para detectar corrientes de aire y predecir las acciones de su enemigo.",
        it: "Utilizza i sottili peli che ricoprono il suo corpo per percepire le correnti d'aria e prevedere le azioni del nemico.",
        de: "Es nutzt die feinen Haare, die seinen Körper bedecken, um Luftströmungen zu spüren und die Aktionen seines Feindes vorherzusagen.",
        "pt-br": "Ele usa o cabelo fino que cobre seu corpo para sentir as correntes de ar e prever as ações do inimigo.",
        "zh-tw": "它利用覆蓋身體的細毛來感知氣流並預測敵人的行動。"
    },
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Hypnoblast",
                fr: "Hypnoblast",
                es: "Hipnorrayo",
                it: "Ipnobomba",
                de: "Hypnoschuss",
                "pt-br": "Borrifada Hipnótica",
                "zh-tw": "催眠波動"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                fr: "Le Pokémon Actif de votre adversaire est désormais Endormi.",
                es: "El Pokémon Activo de tu rival ahora está Dormido.",
                it: "Il Pokémon attivo del tuo avversario è addormentato.",
                de: "Das aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "你對手的活躍寶可夢現在處於睡眠狀態。"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
