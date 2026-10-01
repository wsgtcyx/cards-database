import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/119",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/119",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/119",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/119",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/119",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/119",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/119"
    },
    name: {
        en: "Brambleghast",
        fr: "Virevorreur",
        es: "Brambleghast",
        it: "Brambleghast",
        de: "Horrerba",
        "pt-br": "Brambleghast",
        "zh-tw": "怖納噬草",
        ja: "アノホラグサ",
        ko: "공푸리"
    },
    illustrator: "OKUBO",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: [
        "Psychic"
    ],
    dexId: [
        947
    ],
    evolveFrom: {
        en: "Bramblin",
        fr: "Virovent",
        es: "Bramblin",
        it: "Bramblin",
        de: "Weherba",
        "pt-br": "Bramblin",
        "zh-tw": "納噬草",
        ja: "Bramblin",
        ko: "Bramblin"
    },
    stage: "Stage1",
    description: {
        en: "Brambleghast wanders around arid regions. On rare occasions, mass outbreaks of these Pokémon will bury an entire town.",
        fr: "Ces Pokémon errent à travers les régions arides. En de très rares occasions, ils apparaissent en masse et peuvent engloutir une ville entière.",
        es: "Suele deambular por zonas áridas. En muy raras ocasiones, aparecen en masa y llegan a sepultar un pueblo entero.",
        it: "Vaga per zone aride. In rarissime occasioni una sua comparsa massiccia può seppellire una città intera.",
        de: "Diese Pokémon durchstreifen Trockenzonen. In sehr seltenen Fällen treten sie massenhaft auf und begraben eine ganze Stadt unter sich.",
        "pt-br": "Brambleghast perambulam por regiões áridas. Em raras ocasiões, infestações em massa destes Pokémon são capazes de soterrar uma cidade inteira.",
        "zh-tw": "會在乾燥地帶流浪。有極低的機率會大量出現，把一整座城鎮塞得滿滿滿。",
        ja: "Brambleghast wanders around arid regions. On rare occasions, mass outbreaks of these Pokémon will bury an entire town.",
        ko: "Brambleghast wanders around arid regions. On rare occasions, mass outbreaks of these Pokémon will bury an entire town."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Accept Pain",
                fr: "Réception de Douleur",
                es: "Entereza",
                it: "Accoglidanno",
                de: "Schmerz erdulden",
                "pt-br": "Acatar a Dor",
                "zh-tw": "收下傷害",
                ja: "Accept Pain",
                ko: "Accept Pain"
            },
            effect: {
                en: "Once during your turn, if this Pokémon is on your Bench, you may move 30 damage that your Active Pokémon has on it to this Pokémon.",
                fr: "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez déplacer 30 dégâts de votre Pokémon Actif vers ce Pokémon.",
                es: "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes mover 30 puntos de daño que tenga tu Pokémon Activo a este Pokémon.",
                it: "Una sola volta durante il tuo turno, se questo Pokémon è nella tua panchina, puoi spostare 30 danni dal tuo Pokémon attivo a questo Pokémon.",
                de: "Einmal während deines Zuges, wenn sich dieses Pokémon auf deiner Bank befindet, kannst du 30 Schadenspunkte, die deinem Aktiven Pokémon bereits zugefügt wurden, auf dieses Pokémon übertragen.",
                "pt-br": "Uma vez durante o seu turno, se este Pokémon estiver no seu Banco, você poderá mover 30 pontos de dano do seu Pokémon Ativo para este Pokémon.",
                "zh-tw": "若這隻寶可夢在備戰區,則在自己的回合時可使用1次。將自己的戰鬥寶可夢已受到的傷害移動30點至這隻寶可夢身上。",
                ja: "Once during your turn, if this Pokémon is on your Bench, you may move 30 damage that your Active Pokémon has on it to this Pokémon.",
                ko: "Once during your turn, if this Pokémon is on your Bench, you may move 30 damage that your Active Pokémon has on it to this Pokémon."
            }
        }
    ],
    attacks: [
        {
            cost: [
                "Psychic",
                "Colorless"
            ],
            name: {
                en: "Spooky Shot",
                fr: "Tir Effrayant",
                es: "Disparo Embrujado",
                it: "Colpomistero",
                de: "Spukschuss",
                "pt-br": "Tiro Assustador",
                "zh-tw": "陰森射擊",
                ja: "Spooky Shot",
                ko: "Spooky Shot"
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
