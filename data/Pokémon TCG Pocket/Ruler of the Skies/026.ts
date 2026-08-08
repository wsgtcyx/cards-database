import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/026",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/026",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/026",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/026",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/026",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/026",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/026"
    },
    name: {
        en: "Typhlosion ex",
        fr: "Typhlosion-ex",
        es: "Typhlosion ex",
        it: "Typhlosion-ex",
        de: "Tornupto-ex",
        "pt-br": "Typhlosion ex",
        "zh-tw": "火爆獸ex",
        ko: "블레이범 ex",
        ja: "バクフーンex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 180,
    types: ["Fire"],
    dexId: [157],
    evolveFrom: {
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
    stage: "Stage2",
    attacks: [
        {
            cost: ["Fire", "Fire", "Colorless"],
            name: {
                en: "Destructive Inferno",
                fr: "Enfer Destructeur",
                es: "Infierno Devastador",
                "pt-br": "Inferno Destrutivo",
                "zh-tw": "破壞業火",
                "it": "Incendio Distruttivo",
                "de": "Verzehrendes Inferno 110"
            },
            effect: {
                en: "Flip a coin until you get tails. For each heads, discard a random Energy from your opponent's Active Pokémon.",
                fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque côté face, défaussez au hasard une Énergie du Pokémon Actif de votre adversaire.",
                es: "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta 1 Energía aleatoria del Pokémon Activo de tu rival.",
                it: "Lancia una moneta finché non esce croce. Per ogni testa, scarta un'Energia casuale dal Pokémon attivo del tuo avversario.",
                de: "Wirf eine Münze, bis du „Zahl“ erhältst. Lege für jeden Kopf eine zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Jogue uma moeda até sair coroa. Para cada cara, descarte uma Energia aleatória do Pokémon Ativo do seu oponente.",
                "zh-tw": "擲硬幣直到出現反面,將對手的戰鬥寶可夢身上的能量隨機丟棄與正面出現的次數相同數量。"
            },
            damage: 110
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 2
};
export default card;
