import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/177",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/177",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/177",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/177",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/177",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/177"
    },
    name: {
        en: "Galarian Perrserker",
        "fr": "Berserkatt de Galar",
        "es": "Perrserker de Galar",
        "it": "Perrserker di Galar",
        "de": "Galar-Mauzinger",
        "pt-br": "Perrserker de Galar",
        "zh-tw": "伽勒爾喵頭目"
    },
    illustrator: "MINAMINAMI Take",
    rarity: "One Star",
    category: "Pokemon",
    hp: 100,
    types: ["Metal"],
    evolveFrom: {
        en: "Galarian Meowth",
        "fr": "Miaouss de Galar",
        "es": "Meowth de Galar",
        "it": "Meowth di Galar",
        "de": "Galarisches Miauen",
        "pt-br": "Meowth de Galar",
        "zh-tw": "加拉瑞喵喵"
    },
    description: {
        en: "After many battles, it evolved dangerous\nclaws that come together to form daggers\nwhen extended.",
        "fr": "Après de nombreuses batailles, il est devenu dangereux\ngriffes qui se réunissent pour former des poignards\nlorsqu'il est étendu.",
        "es": "Después de muchas batallas, evolucionó peligroso.\nGarras que se unen para formar dagas.\ncuando se extiende.",
        "it": "Dopo molte battaglie, si è evoluto in modo pericoloso\nartigli che si uniscono per formare pugnali\nquando esteso.",
        "de": "Nach vielen Schlachten entwickelte es sich gefährlich\nKrallen, die sich zu Dolchen zusammenfügen\nwenn verlängert.",
        "pt-br": "Depois de muitas batalhas, evoluiu perigoso\ngarras que se unem para formar adagas\nquando estendido.",
        "zh-tw": "經過多次戰鬥，它變得危險\n爪子聚集在一起形成匕首\n當延長時。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Dig Up",
                "fr": "Déterrer",
                "es": "Desenterrar",
                "it": "Scavare",
                "de": "Ausgraben",
                "pt-br": "Desenterrar",
                "zh-tw": "挖掘"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put 2 random Pokémon Tool cards from your discard pile into your hand.",
                "fr": "Une fois pendant votre tour, lorsque vous jouez ce Pokémon depuis votre main pour faire évoluer 1 de vos Pokémon, vous pouvez mettre 2 cartes Outil Pokémon aléatoires de votre pile de défausse dans votre main.",
                "es": "Una vez durante tu turno, cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes poner en tu mano 2 cartas de Herramientas Pokémon aleatorias de tu pila de descartes.",
                "it": "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere 1 dei tuoi Pokémon, puoi mettere nella tua mano due carte Oggetto Pokémon casuali dalla tua pila degli scarti.",
                "de": "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 2 zufällige Pokémon-Ausrüstungskarten von deinem Ablagestapel auf deine Hand nehmen.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá colocar 2 cartas aleatórias de Ferramenta Pokémon da sua pilha de descarte em sua mão.",
                "zh-tw": "在你的回合中，當你從手牌中使用這只神奇寶貝來進化你的1只神奇寶貝時，你可以從你的棄牌堆中隨機將2張神奇寶貝工具卡放入你的手牌。"
            }
        }],
    attacks: [{
            name: {
                en: "Metal Claw",
                "fr": "Griffe Acier",
                "es": "Garra Metal",
                "it": "Ferrartigli",
                "de": "Metallklaue",
                "pt-br": "Garra de Metal",
                "zh-tw": "金屬爪"
            },
            damage: 70,
            cost: ["Metal", "Metal"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
