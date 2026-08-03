import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/011",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/011",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/011",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/011",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/011",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/011",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/011"
    },
    name: {
        en: "Shroomish",
        fr: "Balignon",
        es: "Shroomish",
        it: "Shroomish",
        de: "Knilz",
        "pt-br": "Shroomish",
        "zh-tw": "蘑蘑菇",
        ko: "버섯꼬",
        ja: "キノココ"
    },
    illustrator: "Kyoko Umemoto",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    dexId: [285],
    stage: "Basic",
    description: {
        en: "If it senses danger, it scatters spores from the top of its head to protect itself.",
        fr: "S’il sent un danger, il disperse des spores du haut de sa tête pour se protéger.",
        es: "Si siente peligro, esparce esporas desde la parte superior de su cabeza para protegerse.",
        it: "Se avverte il pericolo, sparge spore dalla sommità della testa per proteggersi.",
        de: "Wenn es Gefahr wittert, streut es Sporen von seinem Kopf, um sich zu schützen.",
        "pt-br": "Se sentir perigo, espalha esporos do topo da cabeça para se proteger.",
        "zh-tw": "如果它感覺到危險，就會從頭頂散播孢子來保護自己。"
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Spore",
                fr: "Spore",
                es: "Espora",
                it: "Spora",
                de: "Pilzspore",
                "pt-br": "Esporos",
                "zh-tw": "蘑菇孢子"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                fr: "Le Pokémon Actif de votre adversaire est désormais Endormi.",
                es: "El Pokémon Activo de tu rival ahora está Dormido.",
                it: "Il Pokémon attivo del tuo avversario è addormentato.",
                de: "Das aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "你對手的活躍寶可夢現在處於睡眠狀態。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
