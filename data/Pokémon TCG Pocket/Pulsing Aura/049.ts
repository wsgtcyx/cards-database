import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/049",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/049",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/049",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/049",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/049",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/049"
    },
    name: {
        en: "Drizzile",
        fr: "Arrozard",
        es: "Drizzile",
        it: "Drizzile",
        de: "Phlegleon",
        "pt-br": "Drizzile",
        "zh-tw": "變澀蜥",
        ko: "누겔레온",
        ja: "ジメレオン"
    },
    illustrator: "Mizue",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    dexId: [817],
    evolveFrom: {
        en: "Sobble",
        fr: "Larméléon",
        es: "Sobble",
        it: "Sobble",
        de: "Memmeon",
        "pt-br": "Sobble",
        "zh-tw": "淚眼蜥",
        ko: "울머기",
        ja: "メッソン"
    },
    stage: "Stage1",
    description: {
        en: "Highly intelligent but also very lazy, it defends its home by laying traps.",
        fr: "Très intelligent mais aussi très paresseux, il défend son habitat en posant des pièges.",
        es: "Muy inteligente pero también muy perezoso, defiende su hogar poniendo trampas.",
        it: "Molto intelligente ma anche molto pigro, difende la sua casa piazzando trappole.",
        de: "Hochintelligent, aber auch sehr faul, verteidigt er sein Zuhause, indem er Fallen legt.",
        "pt-br": "Altamente inteligente, mas também muito preguiçoso, defende a sua casa armando armadilhas.",
        "zh-tw": "它非常聰明，但也非常懶惰，透過設置陷阱來保衛自己的家園。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Swift Shot",
                fr: "Tir rapide",
                es: "Disparo rápido",
                it: "Tiro rapido",
                de: "Schneller Schuss",
                "pt-br": "Tiro Rápido",
                "zh-tw": "快攻"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may do 20 damage to your opponent's Active Pokémon.",
                fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon depuis votre main pour faire évoluer 1 de vos Pokémon, vous pouvez infliger 20 dégâts au Pokémon Actif de votre adversaire.",
                es: "Una vez durante tu turno, cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes hacer 20 puntos de daño al Pokémon Activo de tu rival.",
                it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere 1 dei tuoi Pokémon, puoi infliggere 20 danni al Pokémon attivo del tuo avversario.",
                de: "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du dem Aktiven Pokémon deines Gegners 20 Schadenspunkte zufügen.",
                "pt-br": "Uma vez durante a sua vez de jogar, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá causar 20 de dano ao Pokémon Ativo do seu oponente.",
                "zh-tw": "在你的回合中，當你從手牌中使用這隻寶可夢來進化你的一隻寶可夢時，你可以對對手的活躍寶可夢造成20點傷害。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Water Gun",
                fr: "Pistolet à O",
                es: "Pistola Agua",
                it: "Pistolacqua",
                de: "Aquaknarre",
                "pt-br": "Revólver d'Água",
                "zh-tw": "水槍"
            },
            damage: 20
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
