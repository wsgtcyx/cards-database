import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/208",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/208",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/208",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/208",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/208",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/208",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/208"
    },
    name: {
        en: "Typhlosion ex",
        fr: "Typhlosion-ex",
        es: "Typhlosion ex",
        "pt-br": "Typhlosion ex",
        "zh-tw": "火爆獸ex",
        ja: "バクフーンex",
        ko: "블레이범 ex",
        it: "Typhlosion-ex",
        de: "Tornupto-ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 180,
    types: [
        "Fire"
    ],
    stage: "Stage2",
    retreat: 2,
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Quilava",
        fr: "Feurisson",
        es: "Quilava",
        it: "Quilava",
        de: "Igelavar",
        "pt-br": "Quilava",
        "zh-tw": "火岩鼠",
        ja: "Quilava",
        ko: "Quilava"
    },
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Destructive Inferno",
                fr: "Enfer Destructeur",
                es: "Infierno Devastador",
                it: "Incendio Distruttivo",
                de: "Verzehrendes Inferno",
                "pt-br": "Inferno Destrutivo",
                "zh-tw": "破壞業火",
                ja: "Destructive Inferno",
                ko: "Destructive Inferno"
            },
            cost: [
                "Colorless",
                "Fire",
                "Fire"
            ],
            damage: 110,
            effect: {
                en: "Flip a coin until you get tails. For each heads, discard a random Energy from your opponent's Active Pokémon.",
                fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque côté face, défaussez au hasard une Énergie du Pokémon Actif de votre adversaire.",
                es: "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta 1 Energía aleatoria del Pokémon Activo de tu rival.",
                it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta un’Energia a caso dal Pokémon attivo del tuo avversario.",
                de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Lege pro Kopf 1 zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Jogue uma moeda até sair coroa. Para cada cara, descarte uma Energia aleatória do Pokémon Ativo do seu oponente.",
                "zh-tw": "擲硬幣直到出現反面,將對手的戰鬥寶可夢身上的能量隨機丟棄與正面出現的次數相同數量。",
                ja: "Flip a coin until you get tails. For each heads, discard a random Energy from your opponent's Active Pokémon.",
                ko: "Flip a coin until you get tails. For each heads, discard a random Energy from your opponent's Active Pokémon."
            }
        }
    ],
    abilities: []
};

export default card;
