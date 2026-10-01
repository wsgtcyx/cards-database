import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/335",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/335",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/335",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/335",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/335",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/335",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/335"
    },
    name: {
        en: "Galarian Perrserker",
        fr: "Berserkatt de Galar",
        es: "Perrserker de Galar",
        it: "Perrserker di Galar",
        de: "Galar-Mauzinger",
        "pt-br": "Perrserker de Galar",
        "zh-tw": "伽勒爾喵頭目",
        ja: "ガラルニャイキング",
        ko: "가라르나이킹"
    },
    illustrator: "Shigenori Negishi",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: [
        "Metal"
    ],
    evolveFrom: {
        en: "Galarian Meowth",
        fr: "Miaouss de Galar",
        es: "Meowth de Galar",
        it: "Meowth di Galar",
        de: "Galar-Mauzi",
        "pt-br": "Meowth de Galar",
        "zh-tw": "伽勒爾喵喵",
        ja: "Galarian Meowth",
        ko: "Galarian Meowth"
    },
    description: {
        en: "After many battles, it evolved dangerous\nclaws that come together to form daggers\nwhen extended.",
        fr: "Il s'est tant adonné au combat qu'il a évolué : il est désormais doté de griffes redoutables qui prennent la forme de dagues en s'allongeant.",
        es: "Su devoción por la lucha ha propiciado que evolucionara y le ha conferido unas peligrosas garras que se convierten en dagas al extenderse.",
        it: "Si è evoluto dopo aver passato giorni interi a lottare e ha sviluppato degli artigli che, una volta sfoderati, diventano temibili pugnali.",
        de: "Es entwickelte sich nach einer langen Zeit voller Kämpfe. Nun kann es seine Krallen ausfahren, um sie als Dolche zu nutzen.",
        "pt-br": "Depois de muitas batalhas, este Pokémon desenvolveu garras perigosas que se juntam para formar adagas ao serem estendidas.",
        "zh-tw": "在日復一日的戰鬥中得以進化。進化的結果是那危險的指甲，留長後能當作短劍來用。",
        ja: "After many battles, it evolved dangerous\nclaws that come together to form daggers\nwhen extended.",
        ko: "After many battles, it evolved dangerous\nclaws that come together to form daggers\nwhen extended."
    },
    stage: "Stage1",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Dig Up",
                fr: "Désenfouir",
                es: "Hozar",
                it: "Sbucafossa",
                de: "Ausbuddeln",
                "pt-br": "Desencavar",
                "zh-tw": "抓取",
                ja: "Dig Up",
                ko: "Dig Up"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put 2 random Pokémon Tool cards from your discard pile into your hand.",
                fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer un de vos Pokémon, vous pouvez placer au hasard 2 cartes Outil Pokémon de votre pile de défausse dans votre main.",
                es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes poner 2 cartas de Herramienta Pokémon aleatorias de tu pila de descartes en tu mano.",
                it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi prendere 2 carte Oggetto Pokémon a caso dalla tua pila degli scarti e aggiungerle alle carte che hai in mano.",
                de: "Einmal während deines Zuges, wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 2 zufällige Pokémon-Ausrüstungen aus deinem Ablagestapel auf deine Hand nehmen.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá colocar 2 cartas de Ferramenta Pokémon aleatórias da sua pilha de descarte na sua mão.",
                "zh-tw": "在自己的回合,當從手牌使出這張卡並完成進化時,可使用1次。從自己的棄牌區隨機將2張「寶可夢道具」卡加入手牌。",
                ja: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put 2 random Pokémon Tool cards from your discard pile into your hand.",
                ko: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put 2 random Pokémon Tool cards from your discard pile into your hand."
            }
        }
    ],
    attacks: [
        {
            name: {
                en: "Metal Claw",
                fr: "Griffe Acier",
                es: "Garra Metal",
                it: "Ferrartigli",
                de: "Metallklaue",
                "pt-br": "Garra de Metal",
                "zh-tw": "金屬爪",
                ja: "Metal Claw",
                ko: "Metal Claw"
            },
            damage: 70,
            cost: [
                "Metal",
                "Metal"
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
