import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/219"
    },
    name: {
        en: "Galarian Perrserker",
        fr: "Berserkatt de Galar",
        es: "Perrserker de Galar",
        it: "Perrserker di Galar",
        de: "Galar-Mauzinger",
        "pt-br": "Perrserker de Galar",
        "zh-tw": "伽勒爾的伽勒爾 喵頭目",
        ko: "가라르 가라르 나이킹",
        ja: "ガラル ガラル ニャイキング"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 100,
    types: ["Metal"],
    evolveFrom: {
        en: "Galarian Meowth",
        fr: "Miaouss de Galar",
        es: "Meowth de Galar",
        it: "Meowth di Galar",
        de: "Galar-Mauzi",
        "pt-br": "Meowth de Galar",
        "zh-tw": "伽勒爾的喵喵",
        ko: "가라르 나옹",
        ja: "ガラル ニャース"
    },
    stage: "Stage1",
    description: {
        en: "After many battles, it evolved dangerous claws that come together to form daggers when extended.",
        fr: "Il s’est tant adonné au combat qu’il a évolué :\nil est désormais doté de griffes redoutables\nqui prennent la forme de dagues en s’allongeant.",
        es: "Su devoción por la lucha ha propiciado que\nevolucionara y le ha conferido unas peligrosas\ngarras que se convierten en dagas al extenderse.",
        it: "Si è evoluto dopo aver passato giorni interi\na lottare e ha sviluppato degli artigli che,\nuna volta sfoderati, diventano temibili pugnali.",
        de: "Es entwickelte sich nach einer langen Zeit voller\nKämpfe. Nun kann es seine Krallen ausfahren,\num sie als Dolche zu nutzen.",
        "zh-tw": "在日復一日的戰鬥中得以進化。\n進化的結果是那危險的指甲，\n留長後能當作短劍來用。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Dig Up",
                fr: "Déterrer",
                es: "Desenterrar",
                it: "Scavare",
                de: "Ausgraben",
                "pt-br": "Desenterrar",
                "zh-tw": "挖掘"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put 2 random Pokémon Tool cards from your discard pile into your hand.",
                fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon depuis votre main pour faire évoluer 1 de vos Pokémon, vous pouvez mettre 2 cartes Outil Pokémon aléatoires de votre pile de défausse dans votre main.",
                es: "Una vez durante tu turno, cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes poner en tu mano 2 cartas de Herramientas Pokémon aleatorias de tu pila de descartes.",
                it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere 1 dei tuoi Pokémon, puoi mettere nella tua mano due carte Oggetto Pokémon casuali dalla tua pila degli scarti.",
                de: "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 2 zufällige Pokémon-Ausrüstungskarten von deinem Ablagestapel auf deine Hand nehmen.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá colocar 2 cartas aleatórias de Ferramenta Pokémon da sua pilha de descarte em sua mão.",
                "zh-tw": "在你的回合中，當你從手牌中使用這只寶可夢來進化你的1只寶可夢時，你可以從你的棄牌堆中隨機將2張寶可夢工具卡放入你的手牌。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Metal", "Metal"],
            name: {
                en: "Metal Claw",
                fr: "Griffe Acier",
                es: "Garra Metal",
                it: "Ferrartigli",
                de: "Metallklaue",
                "pt-br": "Garra de Metal",
                "zh-tw": "金屬爪"
            },
            damage: 70
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
