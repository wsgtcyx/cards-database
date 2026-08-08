import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/130",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/130",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/130",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/130",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/130",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/130",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/130"
    },
    name: {
        en: "Raticate",
        fr: "Rattatac",
        es: "Raticate",
        it: "Raticate",
        de: "Rattikarl",
        "pt-br": "Raticate",
        "zh-tw": "拉達",
        ko: "레트라",
        ja: "ラッタ"
    },
    illustrator: "sowsow",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    dexId: [20],
    evolveFrom: {
        en: "Rattata",
        fr: "Rattata",
        es: "Rattata",
        it: "Rattata",
        de: "Rattfratz",
        "pt-br": "Rattata",
        "zh-tw": "小拉達",
        ko: "꼬렛",
        ja: "コラッタ"
    },
    stage: "Stage1",
    description: {
        en: "Its whiskers are essential for maintaining its balance. No matter how friendly you are, it will get angry and bite you if you touch its whiskers.",
        fr: "Il se sert de ses moustaches pour garder\nl’équilibre. Que le Rattatac soit apprivoisé\nou non, ne le touchez pas ou il vous mordrait !",
        es: "Mantiene el equilibrio gracias a sus bigotes.\nAunque le coja confianza a alguien, uno puede\nllevarse un mordisco si intenta tocarlo.",
        it: "Usa i baffi per mantenersi in equilibrio.\nSe qualcuno li sfiora, si arrabbia e morde anche\nquelli a cui è molto affezionato.",
        de: "Mit seinen Barthaaren hält es die Balance.\nBerührt man sie, wird es wütend und beißt zu,\negal, wie zutraulich es auch sein mag.",
        "zh-tw": "鬍鬚是用來保持平衡的重要器官。\n就算感情再好，如果摸了牠的鬍鬚，\n牠都會生氣地咬過來。",
        "pt-br": "Seus bigodes são essenciais para manter o equilibrio. Não importa o quão amigável seja, se tocar os bigodes deste Pokémon, ele vai se irritar e morder você."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Treasure Collecting",
                fr: "Collecte de Trésors",
                es: "Coleccionar Tesoros",
                "pt-br": "Colecionar Tesouro",
                "zh-tw": "集寶",
                "it": "Raccolta Tesori",
                "de": "Schatzsammler"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may look at the top 4 cards of your deck and put all Item cards you find there into your hand. Shuffle the other cards back into your deck.",
                fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer un de vos Pokémon, vous pouvez regarder les 4 cartes du dessus de votre deck et ajouter toutes les cartes Objet que vous y trouvez à votre main. Mélangez les autres cartes avec votre deck.",
                es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes mirar las 4 primeras cartas de tu baraja. Pon en tu mano todas las cartas de Objeto que encuentres entre ellas. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá olhar as 4 cartas de cima do seu baralho e colocar todas as cartas de Item que você encontrar lá na sua mão. Embaralhe as outras cartas de volta no seu baralho.",
                "zh-tw": "在自己的回合,當從手牌使出這張卡並完成進化時,可使用1次。查看自己的牌庫上方4張卡,從其中將物品卡全部加入手牌。將剩餘卡放回牌庫。",
                "it": "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi guardare le prime 4 carte del tuo mazzo e aggiungere tutte le carte Strumento che trovi alle carte che hai in mano. Poi rimischia le altre carte nel tuo mazzo.",
                "de": "Einmal während deines Zuges, wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du dir die obersten 4 Karten deines Decks anschauen und alle Itemkarten, die du dort findest, auf deine Hand nehmen. Mische die anderen Karten zurück in dein Deck."
            }
        }
    ],
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Speed Attack",
                fr: "Attaque Rapide",
                es: "Ataque Fugaz",
                it: "Attacco Veloce",
                de: "Tempoangriff",
                "pt-br": "Ataque em Velocidade",
                "zh-tw": "高速攻擊"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};
export default card;
