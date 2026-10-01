import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/075",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/075",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/075",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/075",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/075",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/075",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/075"
    },
    name: {
        en: "Drizzile",
        fr: "Arrozard",
        es: "Drizzile",
        it: "Drizzile",
        de: "Phlegleon",
        "pt-br": "Drizzile",
        "zh-tw": "變澀蜥",
        ja: "ジメレオン",
        ko: "누겔레온"
    },
    illustrator: "Mizue",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: [
        "Water"
    ],
    dexId: [
        817
    ],
    evolveFrom: {
        en: "Sobble",
        fr: "Larméléon",
        es: "Sobble",
        it: "Sobble",
        de: "Memmeon",
        "pt-br": "Sobble",
        "zh-tw": "淚眼蜥",
        ja: "Sobble",
        ko: "Sobble"
    },
    stage: "Stage1",
    description: {
        en: "Highly intelligent but also very lazy, it defends its home by laying traps.",
        fr: "Paresseux mais intelligent, ce Pokémon pose des pièges pour protéger son territoire.",
        es: "Pese a su falta de interés en general, es muy inteligente y protege su hogar colocando trampas.",
        it: "Naturalmente svogliato ma di grande intelligenza, protegge la tana piazzando delle trappole.",
        de: "Es ist hochintelligent, aber zugleich lustlos und faul. Daher verteidigt es sein Revier, indem es Fallen aufstellt.",
        "pt-br": "Este Pokémon é muito inteligente e bastante preguiçoso. Defende seu território com armadilhas.",
        "zh-tw": "雖然個性上很怕麻煩，但智商非常高，會設置陷阱來保護自己的住處。",
        ja: "Highly intelligent but also very lazy, it defends its home by laying traps.",
        ko: "Highly intelligent but also very lazy, it defends its home by laying traps."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Swift Shot",
                fr: "Tir Soudain",
                es: "Disparo Dinámico",
                it: "Sparo Rapido",
                de: "Schneller Schuss",
                "pt-br": "Disparo Diligente",
                "zh-tw": "快攻",
                ja: "Swift Shot",
                ko: "Swift Shot"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may do 20 damage to your opponent's Active Pokémon.",
                fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer un de vos Pokémon, vous pouvez infliger 20 dégâts au Pokémon Actif de votre adversaire.",
                es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes hacer 20 puntos de daño al Pokémon Activo de tu rival.",
                it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi infliggere 20 danni al Pokémon attivo del tuo avversario.",
                de: "Einmal während deines Zuges, wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du dem Aktiven Pokémon deines Gegners 20 Schadenspunkte zufügen.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá causar 20 pontos de dano ao Pokémon Ativo do seu oponente.",
                "zh-tw": "在自己的回合,當從手牌使出這張卡並完成進化時,可使用1次。對手的戰鬥寶可夢受到20點傷害。",
                ja: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may do 20 damage to your opponent's Active Pokémon.",
                ko: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may do 20 damage to your opponent's Active Pokémon."
            }
        }
    ],
    attacks: [
        {
            cost: [
                "Water"
            ],
            name: {
                en: "Water Gun",
                fr: "Pistolet à O",
                es: "Pistola Agua",
                it: "Pistolacqua",
                de: "Aquaknarre",
                "pt-br": "Revólver d'Água",
                "zh-tw": "水槍",
                ja: "Water Gun",
                ko: "Water Gun"
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
