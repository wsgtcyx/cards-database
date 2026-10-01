import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/038",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/038",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/038",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/038",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/038",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/038",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/038"
    },
    name: {
        en: "Typhlosion ex",
        fr: "Typhlosion-ex",
        es: "Typhlosion ex",
        it: "Typhlosion-ex",
        de: "Tornupto-ex",
        "pt-br": "Typhlosion ex",
        "zh-tw": "火爆獸ex",
        ja: "バクフーンex",
        ko: "블레이범 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 180,
    types: [
        "Fire"
    ],
    dexId: [
        157
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
    stage: "Stage2",
    attacks: [
        {
            cost: [
                "Fire",
                "Fire",
                "Colorless"
            ],
            name: {
                en: "Destructive Inferno",
                fr: "Enfer Destructeur",
                es: "Infierno Devastador",
                "pt-br": "Inferno Destrutivo",
                "zh-tw": "破壞業火",
                it: "Incendio Distruttivo",
                de: "Verzehrendes Inferno",
                ja: "Destructive Inferno",
                ko: "Destructive Inferno"
            },
            effect: {
                en: "Flip a coin until you get tails. For each heads, discard a random Energy from your opponent's Active Pokémon.",
                fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque côté face, défaussez au hasard une Énergie du Pokémon Actif de votre adversaire.",
                es: "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta 1 Energía aleatoria del Pokémon Activo de tu rival.",
                it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta un'Energia a caso dal Pokémon attivo del tuo avversario.",
                de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Lege pro Kopf 1 zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Jogue uma moeda até sair coroa. Para cada cara, descarte uma Energia aleatória do Pokémon Ativo do seu oponente.",
                "zh-tw": "擲硬幣直到出現反面,將對手的戰鬥寶可夢身上的能量隨機丟棄與正面出現的次數相同數量。",
                ja: "Flip a coin until you get tails. For each heads, discard a random Energy from your opponent's Active Pokémon.",
                ko: "Flip a coin until you get tails. For each heads, discard a random Energy from your opponent's Active Pokémon."
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
