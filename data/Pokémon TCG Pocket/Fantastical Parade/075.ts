import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/075",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/075",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/075",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/075",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/075",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/075",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/075"
    },
    name: {
        en: "Polteageist",
        "fr": "Polthégeist",
        "es": "Polteageist",
        "it": "Polteageist",
        "de": "Mortipot",
        "pt-br": "Polteageist",
        "zh-tw": "怖思壺"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    evolveFrom: {
        en: "Sinistea",
        "fr": "Sinistéa",
        "es": "Sinistea",
        "it": "Sinistea",
        "de": "Sinistea",
        "pt-br": "Sinistea",
        "zh-tw": "西尼斯泰亞"
    },
    description: {
        en: "These Pokémon multiply by creeping into teapots\nand pouring themselves into leftover tea.",
        "fr": "Ces Pokémon se multiplient en se glissant dans les théières\net se versant dans les restes de thé.",
        "es": "Estos Pokémon se multiplican metiéndose en las teteras\ny se sirven en el té sobrante.",
        "it": "Questi Pokémon si moltiplicano insinuandosi nelle teiere\ne versandosi nel tè avanzato.",
        "de": "Diese Pokémon vermehren sich, indem sie in Teekannen kriechen\nund gießen sich in übriggebliebenen Tee.",
        "pt-br": "Esses Pokémon se multiplicam entrando em bules\ne se servindo das sobras do chá.",
        "zh-tw": "這些神奇寶貝通過爬進茶壺來繁殖\n並把自己倒進剩下的茶裡。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Refreshing Tea",
                "fr": "Thé rafraîchissant",
                "es": "Té refrescante",
                "it": "Tè rinfrescante",
                "de": "Erfrischender Tee",
                "pt-br": "Chá Refrescante",
                "zh-tw": "提神茶"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may have your opponent shuffle their hand into their deck. For each remaining point that your opponent needs to win, they draw a card.",
                "fr": "Une fois pendant votre tour, lorsque vous jouez ce Pokémon depuis votre main pour faire évoluer 1 de vos Pokémon, vous pouvez demander à votre adversaire de mélanger sa main dans son deck. Pour chaque point restant que votre adversaire doit gagner, il pioche une carte.",
                "es": "Una vez durante tu turno, cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes pedirle a tu oponente que mezcle su mano en su mazo. Por cada punto restante que tu oponente necesita para ganar, roba una carta.",
                "it": "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi chiedere al tuo avversario di rimescolare la sua mano nel suo mazzo. Per ogni punto rimanente di cui il tuo avversario ha bisogno per vincere, pesca una carta.",
                "de": "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du deinen Gegner seine Hand in sein Deck mischen lassen. Für jeden verbleibenden Punkt, den Ihr Gegner zum Gewinnen benötigt, zieht er eine Karte.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá fazer com que seu oponente embaralhe a mão dele no baralho dele. Para cada ponto restante que seu oponente precisa para vencer, ele compra uma carta.",
                "zh-tw": "在你的回合中，當你從你的手牌中使用這只神奇寶貝來進化你的一隻神奇寶貝時，你可以讓你的對手將他們的手牌洗入他們的牌庫中。對於對手需要贏得的每一剩餘分數，他們都會抽一張牌。"
            }
        }],
    attacks: [{
            name: {
                en: "Spooky Shot",
                "fr": "Tir effrayant",
                "es": "Tiro espeluznante",
                "it": "Colpo spettrale",
                "de": "Gruseliger Schuss",
                "pt-br": "Tiro assustador",
                "zh-tw": "幽靈射擊"
            },
            damage: 40,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
