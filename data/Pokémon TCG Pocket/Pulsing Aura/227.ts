import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/227",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/227",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/227",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/227",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/227",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/227",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/227"
    },
    name: {
        en: "Greninja ex",
        fr: "Amphinobi-ex",
        es: "Greninja ex",
        it: "Greninja-ex",
        de: "Quajutsu-ex",
        "pt-br": "Greninja ex",
        "zh-tw": "甲賀忍蛙ex",
        ko: "개굴닌자 ex",
        ja: "ゲッコウガex"
    },
    illustrator: "PLANETA Saito",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 170,
    types: ["Water"],
    dexId: [658],
    evolveFrom: {
        en: "Frogadier",
        fr: "Croâporal",
        es: "Frogadier",
        it: "Frogadier",
        de: "Amphizel",
        "pt-br": "Frogadier",
        "zh-tw": "呱頭蛙",
        ko: "개굴반장",
        ja: "ゲコガシラ"
    },
    stage: "Stage2",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Shifting Stream",
                fr: "Flux changeant",
                es: "Corriente cambiante",
                it: "Flusso mutevole",
                de: "Wechselnder Strom",
                "pt-br": "Mudança de fluxo",
                "zh-tw": "水流鑾幻"
            },
            effect: {
                en: "Once during your turn, you may switch your Active {W} Pokémon with 1 of your Benched Pokémon.",
                fr: "Une fois pendant votre tour, vous pouvez échanger votre Pokémon {W} Actif avec 1 de votre Pokémon de Banc.",
                es: "Una vez durante tu turno, puedes cambiar tu Pokémon Activo {W} por 1 de tus Pokémon en Banca.",
                it: "Una sola volta durante il tuo turno, puoi scambiare il tuo Pokémon attivo {W} con 1 dei tuoi Pokémon in panchina.",
                de: "Einmal während deines Zuges kannst du dein Aktives {W}-Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
                "pt-br": "Uma vez durante o seu turno, você pode trocar seu Pokémon Ativo {W} por 1 dos seus Pokémon no Banco.",
                "zh-tw": "在你的回合中，你可以將你的活躍 {W} 寶可夢與你的 1 只後備寶可夢交換。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Water", "Water"],
            name: {
                en: "Aqua Edge",
                fr: "Aqua-Dague",
                es: "Filo Agua",
                it: "Acquataglio",
                de: "Aquaschneide",
                "pt-br": "Aqua Gume",
                "zh-tw": "水之刀鋒"
            },
            damage: 100
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
