import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/007",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/007"
    },
    name: {
        en: "Golduck",
        fr: "Akwakwak",
        es: "Golduck",
        it: "Golduck",
        de: "Entoron",
        "pt-br": "Golduck",
        "zh-tw": "哥達鴨",
        ko: "골덕",
        ja: "ゴルダック"
    },
    illustrator: "Taira Akitsu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    dexId: [55],
    evolveFrom: {
        en: "Psyduck",
        fr: "Psykokwak",
        es: "Psyduck",
        it: "Psyduck",
        de: "Enton",
        "pt-br": "Psyduck",
        "zh-tw": "可達鴨",
        ko: "고라파덕",
        ja: "コダック"
    },
    stage: "Stage1",
    description: {
        en: "It swims gracefully along on the quiet, slow- moving rivers and lakes of which it is so fond.",
        fr: "Il nage gracieusement sur les rivières et les lacs calmes et au courant lent qu’il affectionne tant.",
        es: "Nada con gracia en los tranquilos y lentos ríos y lagos que tanto le gustan.",
        it: "Nuota con grazia sui fiumi e sui laghi tranquilli e lenti che gli piacciono tanto.",
        de: "Es schwimmt anmutig auf den ruhigen, langsam fließenden Flüssen und Seen entlang, die es so liebt.",
        "pt-br": "Ele nada graciosamente nos rios e lagos calmos e lentos dos quais tanto gosta.",
        "zh-tw": "它在它所喜愛的安靜、緩慢的河流和湖泊中優雅地遊動。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Psychic",
                fr: "Psyko",
                es: "Psíquico",
                it: "Psichico",
                de: "Psychokinese",
                "pt-br": "Psíquico",
                "zh-tw": "精神強念"
            },
            effect: {
                en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
                es: "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
                it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
                de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jede Energie zu, die an das Aktive Pokémon deines Gegners angelegt ist.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
                "zh-tw": "對手的戰鬥寶可夢身上每附加一個能量，此攻擊就會造成 20 點額外傷害。"
            },
            damage: "20+"
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
