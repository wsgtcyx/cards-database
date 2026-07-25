import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/073",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/073",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/073",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/073",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/073",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/073"
    },
    name: {
        en: "Brambleghast",
        fr: "Virevorreur",
        es: "Brambleghast",
        it: "Brambleghast",
        de: "Horrerba",
        "pt-br": "Brambleghast",
        "zh-tw": "怖納噬草",
        ko: "공푸리",
        ja: "アノホラグサ"
    },
    illustrator: "OKUBO",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Psychic"],
    dexId: [947],
    evolveFrom: {
        en: "Bramblin",
        fr: "Virovent",
        es: "Bramblin",
        it: "Bramblin",
        de: "Weherba",
        "pt-br": "Bramblin",
        "zh-tw": "納噬草",
        ko: "그푸리",
        ja: "アノクサ"
    },
    stage: "Stage1",
    description: {
        en: "Brambleghast wanders around arid regions. On rare occasions, mass outbreaks of these Pokémon will bury an entire town.",
        fr: "Virevorreur erre dans les régions arides. En de rares occasions, des épidémies massives de ces Pokémon enseveliront une ville entière.",
        es: "Brambleghast deambula por regiones áridas. En raras ocasiones, brotes masivos de estos Pokémon enterrarán una ciudad entera.",
        it: "Brambleghast vaga per regioni aride. In rare occasioni, epidemie di massa di questi Pokémon seppelliranno un'intera città.",
        de: "Horrerba wandert durch trockene Regionen. In seltenen Fällen begraben Massenausbrüche dieser Pokémon eine ganze Stadt.",
        "pt-br": "Brambleghast vagueia por regiões áridas. Em raras ocasiões, surtos em massa destes Pokémon enterrarão uma cidade inteira.",
        "zh-tw": "怖納噬草在乾旱地區徘徊。在極少數情況下，這些寶可夢的大規模爆發將埋葬整個城鎮。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Accept Pain",
                fr: "Accepter la douleur",
                es: "aceptar el dolor",
                it: "Accetta il dolore",
                de: "Akzeptiere den Schmerz",
                "pt-br": "Aceite a dor",
                "zh-tw": "收下傷害"
            },
            effect: {
                en: "Once during your turn, if this Pokémon is on your Bench, you may move 30 damage that your Active Pokémon has on it to this Pokémon.",
                fr: "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez déplacer 30 dégâts que votre Pokémon Actif possède sur ce Pokémon.",
                es: "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes mover 30 puntos de daño que tenga tu Pokémon Activo a este Pokémon.",
                it: "Una sola volta durante il tuo turno, se questo Pokémon è nella tua panchina, puoi trasferire 30 danni che il tuo Pokémon attivo ha su di esso su questo Pokémon.",
                de: "Wenn sich dieses Pokémon einmal während deines Zuges auf deiner Bank befindet, kannst du 30 Schadenspunkte, die dein Aktives Pokémon auf sich hat, auf dieses Pokémon verschieben.",
                "pt-br": "Uma vez durante o seu turno, se este Pokémon estiver no seu Banco, você poderá transferir 30 pontos de dano que o seu Pokémon Ativo causar para este Pokémon.",
                "zh-tw": "在你的回合中，如果這隻寶可夢在你的替補席上，你可以將你的活躍寶可夢身上的 30 點傷害轉移到這隻寶可夢身上。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Psychic", "Colorless"],
            name: {
                en: "Spooky Shot",
                fr: "Tir Effrayant",
                es: "Disparo Embrujado",
                it: "Colpomistero",
                de: "Spukschuss",
                "pt-br": "Tiro Assustador",
                "zh-tw": "陰森射擊"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
