import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/057",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/057",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/057",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/057",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/057",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/057"
    },
    name: {
        en: "Annihilape",
        fr: "Courrousinge",
        es: "Annihilape",
        it: "Annihilape",
        de: "Epitaff",
        "pt-br": "Annihilape",
        "zh-tw": "棄世猴",
        pt: "Annihilape",
        'es-mx': "Annihilape"
    },
    illustrator: "Anesaki Dynamic",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Fighting"],
    dexId: [979],
    evolveFrom: {
        en: "Primeape",
        fr: "Colossinge",
        es: "Primeape",
        it: "Primeape",
        de: "Rasaff",
        'pt-br': "Primeape",
        "zh-tw": "火爆猴",
        ko: "성원숭"
    },
    description: {
        en: "It imbues its fists with the power of the rage that it kept hidden in its heart. Opponents struck by these imbued fists will be shattered to their core.",
        "fr": "Il imprègne ses poings de la puissance de la rage qu'il gardait cachée dans son cœur. Les adversaires frappés par ces poings imprégnés seront brisés jusqu’au cœur.",
        "es": "Imbuye sus puños con el poder de la ira que mantenía escondida en su corazón. Los oponentes golpeados por estos puños imbuidos quedarán destrozados hasta la médula.",
        "it": "Infonde nei suoi pugni il potere della rabbia che teneva nascosta nel suo cuore. Gli avversari colpiti da questi pugni imbevuti verranno distrutti nel profondo.",
        "de": "Es erfüllt seine Fäuste mit der Kraft der Wut, die es in seinem Herzen verborgen hielt. Gegner, die von diesen machtvollen Fäusten getroffen werden, werden bis ins Mark zerschmettert.",
        "pt-br": "Ele imbui seus punhos com o poder da raiva que mantinha escondida em seu coração. Os oponentes atingidos por esses punhos imbuídos serão totalmente despedaçados.",
        "zh-tw": "它的拳頭充滿了隱藏在心中的憤怒之力。被這些充滿力量的拳頭擊中的對手將會被徹底粉碎。"
    },
    stage: "Stage2",
    attacks: [
        {
            name: {
                en: "Dynamite Punch",
                fr: "Poing Dynamite",
                es: "Puño Dinamita",
                it: "Pugno Dinamite",
                de: "Dynamitstoß",
                "pt-br": "Soco Dinamite",
                "zh-tw": "炸藥沖頭",
                pt: "Soco Dinamite"
            },
            damage: "90",
            cost: ["Fighting"],
            effect: {
                en: "This Pokémon also does 30 damage to itself.",
                fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
                es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
                it: "Questo Pokémon infligge anche 30 danni a se stesso.",
                de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 30 de dano a si mesmo.",
                "zh-tw": "這隻寶可夢也會對自身造成 30 點傷害。",
                pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
                'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo."
            },
        },
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
