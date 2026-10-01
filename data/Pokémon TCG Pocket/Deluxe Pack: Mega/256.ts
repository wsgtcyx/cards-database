import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/256",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/256",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/256",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/256",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/256",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/256",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/256"
    },
    name: {
        en: "Arboliva",
        fr: "Arboliva",
        es: "Arboliva",
        it: "Arboliva",
        de: "Olithena",
        "pt-br": "Arboliva",
        "zh-tw": "奧利瓦",
        ja: "オリーヴァ",
        ko: "올리르바"
    },
    illustrator: "Kouki Saitou",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: [
        "Grass"
    ],
    dexId: [
        930
    ],
    evolveFrom: {
        en: "Dolliv",
        fr: "Olivado",
        es: "Dolliv",
        it: "Dolliv",
        de: "Olivinio",
        "pt-br": "Dolliv",
        "zh-tw": "奧利紐",
        ja: "Dolliv",
        ko: "Dolliv"
    },
    description: {
        en: "This calm Pokémon is very compassionate. It will share its delicious, nutrient-rich oil with weakened Pokémon.",
        fr: "Calme et bienveillant, il partage son huile délicieuse et riche en nutriments avec les Pokémon affaiblis.",
        es: "Es pacífico y compasivo. Comparte su delicioso y nutritivo aceite con los Pokémon que han perdido las fuerzas.",
        it: "Ha un'indole tranquilla ed estremamente compassionevole. Dona il suo olio delizioso e nutriente ai Pokémon debilitati.",
        de: "Dieses Pokémon ist sehr friedlich und gütig. Es teilt sein leckeres, nährstoffreiches Öl mit geschwächten Pokémon.",
        "pt-br": "Este Pokémon calmo tem muita compaixão. Divide seu delicioso azeite rico em nutrientes com Pokémon enfraquecidos.",
        "zh-tw": "性情溫和，慈悲為懷。會把營養豐富且美味可口的油分給虛弱的寶可夢。",
        ja: "This calm Pokémon is very compassionate. It will share its delicious, nutrient-rich oil with weakened Pokémon.",
        ko: "This calm Pokémon is very compassionate. It will share its delicious, nutrient-rich oil with weakened Pokémon."
    },
    stage: "Stage2",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Extra Heal",
                fr: "Soin Supplémentaire",
                es: "Cura Adicional",
                it: "Extracura",
                de: "Extraheilung",
                "pt-br": "Cura Complementar",
                "zh-tw": "額外治療",
                ja: "Extra Heal",
                ko: "Extra Heal"
            },
            effect: {
                en: "Once during your turn, you may heal 60 damage from 1 of your Pokémon ex that has any Energy attached. If you do, discard a random Energy from that Pokémon.",
                fr: "Une fois pendant votre tour, vous pouvez soigner 60 dégâts à un de vos Pokémon‐ex auquel de l'Énergie est attachée. Dans ce cas, défaussez une Énergie au hasard de ce Pokémon.",
                es: "Una vez durante tu turno, puedes curar 60 puntos de daño a 1 de tus Pokémon ex que tenga alguna Energía unida. Si lo haces, descarta 1 Energía aleatoria de ese Pokémon.",
                it: "Una sola volta durante il tuo turno, puoi curare da 60 danni uno dei tuoi Pokémon-ex che ha delle Energie assegnate. Se lo fai, rimuovi un'Energia a caso da quel Pokémon.",
                de: "Einmal während deines Zuges kannst du 60 Schadenspunkte bei 1 deiner Pokémon-ex heilen, an das mindestens 1 Energie angelegt ist. Wenn du das machst, lege 1 zufällige Energie von jenem Pokémon ab.",
                "pt-br": "Uma vez durante o seu turno, você poderá curar 60 pontos de dano de 1 dos seus Pokémon ex que tiver alguma Energia ligada a ele. Se fizer isso, descarte 1 Energia aleatória daquele Pokémon.",
                "zh-tw": "在自己的回合時,可使用1次。將自己的1隻身上附有能量的「寶可夢ex」恢復60HP。然後,將該寶可夢身上的隨機1個能量丟棄。",
                ja: "Once during your turn, you may heal 60 damage from 1 of your Pokémon ex that has any Energy attached. If you do, discard a random Energy from that Pokémon.",
                ko: "Once during your turn, you may heal 60 damage from 1 of your Pokémon ex that has any Energy attached. If you do, discard a random Energy from that Pokémon."
            }
        }
    ],
    attacks: [
        {
            name: {
                en: "Seed Bomb",
                fr: "Canon Graine",
                es: "Bomba Germen",
                it: "Semebomba",
                de: "Samenbomben",
                "pt-br": "Bomba de Sementes",
                "zh-tw": "種子炸彈",
                "es-mx": "Bomba Semilla",
                pt: "Bomba de Sementes",
                ja: "Seed Bomb",
                ko: "Seed Bomb"
            },
            damage: 70,
            cost: [
                "Colorless",
                "Colorless"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
