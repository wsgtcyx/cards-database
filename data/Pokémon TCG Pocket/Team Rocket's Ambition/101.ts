import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/101",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/101",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/101",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/101",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/101",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/101",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/101"
    },
    name: {
        en: "Polteageist",
        fr: "Polthégeist",
        es: "Polteageist",
        it: "Polteageist",
        de: "Mortipot",
        "pt-br": "Polteageist",
        "zh-tw": "怖思壺",
        ko: "포트데스",
        ja: "ポットデス"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    dexId: [855],
    evolveFrom: {
        en: "Sinistea",
        fr: "Théffroi",
        es: "Sinistea",
        it: "Sinistea",
        de: "Fatalitee",
        "pt-br": "Sinistea",
        "zh-tw": "來悲茶",
        ko: "데인차",
        ja: "ヤバチャ"
    },
    stage: "Stage1",
    description: {
        en: "These Pokémon multiply by creeping into teapots and pouring themselves into leftover tea.",
        fr: "Il s'introduit dans des théières et se verse sur des restes de thé noir pour créer des Théffroi et ainsi faire perdurer l'espèce.",
        es: "Se esconde dentro de teteras y se vierte en tés a medio beber para generar un Sinistea y asi propagar la especie.",
        it: "Si introduce furtivamente nelle teiere e versa parte del suo corpo nel tè avanzato, creando cosi nuovi Sinistea.",
        de: "Es kriecht in Teekannen und ergießt sich über nicht ausgetrunkenen Schwarztee, um sich zu vermehren.",
        "pt-br": "Para se multiplicar, estes Pokémon se infiltram em bules, depois derramam a si mesmos em restos de chá.",
        "zh-tw": "會潛入茶壺裡，然後把自己倒進喝到一半的紅茶裡來使茶量變多。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Refreshing Tea",
                fr: "Thé Rafraîchissant",
                es: "Té Refrescante",
                it: "Tè Rinfrescante",
                de: "Erfrischender Tee",
                "pt-br": "Chá Refrescante",
                "zh-tw": "煥活茶"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may have your opponent shuffle their hand into their deck. For each remaining point that your opponent needs to win, they draw a card.",
                fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer un de vos Pokémon, vous pouvez demander à votre adversaire de mélanger sa main avec son deck. Votre adversaire pioche ensuite une carte pour chaque point qui lui reste à gagner pour obtenir la victoire.",
                es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes hacer que tu rival ponga las cartas de su mano en su baraja y las baraje todas. Por cada punto restante que necesite conseguir tu rival para ganar, robará una carta.",
                it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi costringere il tuo avversario a rimischiare le carte che ha in mano nel proprio mazzo. L'avversario pesca quindi una carta per ogni punto che deve ancora ottenere per vincere.",
                de: "Einmal während deines Zuges, wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du deinen Gegner dazu veranlassen, seine Handkarten in sein Deck zu mischen. Für jeden verbleibenden Punkt, den dein Gegner benötigt, um zu gewinnen, zieht er eine Karte.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá fazer com que o seu oponente embaralhe a mão dele no baralho dele. Para cada ponto restante que seu oponente precisa para vencer, ele comprará uma carta.",
                "zh-tw": "在自己的回合,當從手牌使出這張卡並完成進化時,可使用1次。將對手的手牌全部放回牌庫。對手從牌庫抽出與對手自己獲勝所需的剩餘分數相同數量的卡。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Spooky Shot",
                fr: "Tir Effrayant",
                es: "Disparo Embrujado",
                it: "Colpomistero",
                de: "Spukschuss",
                "pt-br": "Tiro Assustador",
                "zh-tw": "陰森射擊"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
