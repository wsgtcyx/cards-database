import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/073",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/073",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/073",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/073",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/073",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/073",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/073"
    },
    name: {
        en: "Greninja ex",
        fr: "Amphinobi-ex",
        es: "Greninja ex",
        it: "Greninja-ex",
        de: "Quajutsu-ex",
        "pt-br": "Greninja ex",
        "zh-tw": "甲賀忍蛙ex",
        ja: "ゲッコウガex",
        ko: "개굴닌자 ex"
    },
    illustrator: "PLANETA Mochizuki",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 170,
    types: [
        "Water"
    ],
    evolveFrom: {
        en: "Frogadier",
        fr: "Croâporal",
        es: "Frogadier",
        it: "Frogadier",
        de: "Amphizel",
        "pt-br": "Frogadier",
        "zh-tw": "呱頭蛙",
        ja: "Frogadier",
        ko: "Frogadier"
    },
    stage: "Stage2",
    suffix: "EX",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Shifting Stream",
                fr: "Courant Changeant",
                es: "Torrente Cambiante",
                it: "Mutaflusso",
                de: "Wandelströmung",
                "pt-br": "Corrente de Água Mutável",
                "zh-tw": "水流變幻",
                ja: "Shifting Stream",
                ko: "Shifting Stream"
            },
            effect: {
                en: "Once during your turn, you may switch your Active {W} Pokémon with 1 of your Benched Pokémon.",
                fr: "Une fois pendant votre tour, vous pouvez échanger votre Pokémon {W} Actif contre un de vos Pokémon de Banc.",
                es: "Una vez durante tu turno, puedes cambiar tu Pokémon {W} Activo por 1 de tus Pokémon en Banca.",
                it: "Una sola volta durante il tuo turno, puoi sostituire il tuo Pokémon {W} attivo con uno dei tuoi Pokémon in panchina.",
                de: "Einmal während deines Zuges kannst du dein Aktives {W}-Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
                "pt-br": "Uma vez durante o seu turno, você poderá trocar o seu Pokémon {W} Ativo por 1 dos seus Pokémon no Banco.",
                "zh-tw": "在自己的回合時,可使用1次。將自己的戰鬥場的{W}寶可夢與備戰寶可夢互換。",
                ja: "Once during your turn, you may switch your Active {W} Pokémon with 1 of your Benched Pokémon.",
                ko: "Once during your turn, you may switch your Active {W} Pokémon with 1 of your Benched Pokémon."
            }
        }
    ],
    attacks: [
        {
            name: {
                en: "Aqua Edge",
                fr: "Aqua-Dague",
                es: "Filo Agua",
                it: "Acquataglio",
                de: "Aquaschneide",
                "pt-br": "Aqua Gume",
                "zh-tw": "水之刀鋒",
                ja: "Aqua Edge",
                ko: "Aqua Edge"
            },
            damage: 100,
            cost: [
                "Water",
                "Water"
            ]
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
