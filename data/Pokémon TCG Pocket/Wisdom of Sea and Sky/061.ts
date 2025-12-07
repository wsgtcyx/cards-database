import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Crawdaunt",
        "fr": "Crawdaunt",
        "es": "Crawdaunt",
        "it": "Crawdaunt",
        "de": "Crawdaunt",
        "pt-br": "Crawdaunt",
        "zh-tw": "鐵螯龍蝦",
    },
    illustrator: "Hajime Kusajima",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    evolveFrom: {
        en: "Corphish",
        "fr": "Corphish",
        "es": "corphish",
        "it": "Corphish",
        "de": "Corphish",
        "pt-br": "Corpus",
        "zh-tw": "科菲什"
    },
    description: {
        en: "A rough customer that wildly flails its giant claws.\nIt is said to be extremely hard to raise.",
        "fr": "Un client brutal qui agite sauvagement ses griffes géantes.\nOn dit que c'est extrêmement difficile à élever.",
        "es": "Un cliente rudo que agita salvajemente sus garras gigantes.\nSe dice que es extremadamente difícil de criar.",
        "it": "Un cliente rude che agita selvaggiamente i suoi artigli giganti.\nSi dice che sia estremamente difficile da allevare.",
        "de": "Ein rauer Kunde, der wild mit seinen riesigen Krallen um sich schlägt.\nEs soll extrem schwierig sein, es aufzubringen.",
        "pt-br": "Um cliente rude que agita descontroladamente suas garras gigantes.\nDiz-se que é extremamente difícil de aumentar.",
        "zh-tw": "一個粗魯的顧客，瘋狂地揮舞著巨大的爪子。\n據說飼養起來極其困難。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Unruly Claw",
                "fr": "Griffe indisciplinée",
                "es": "Garra rebelde",
                "it": "Artiglio indisciplinato",
                "de": "Widerspenstige Klaue",
                "pt-br": "Garra Indisciplinada",
                "zh-tw": "不羈之爪"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may discard a random Energy from your opponent's Active Pokémon.",
                "fr": "Une fois pendant votre tour, lorsque vous jouez ce Pokémon depuis votre main pour faire évoluer 1 de vos Pokémon, vous pouvez défausser une Énergie aléatoire du Pokémon Actif de votre adversaire.",
                "es": "Una vez durante tu turno, cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes descartar una Energía aleatoria del Pokémon Activo de tu rival.",
                "it": "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi scartare un'Energia casuale dal Pokémon attivo del tuo avversario.",
                "de": "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du eine zufällige Energie vom Aktiven Pokémon deines Gegners abwerfen.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá descartar uma Energia aleatória do Pokémon Ativo do seu oponente.",
                "zh-tw": "在你的回合中，當你從手牌中使用這只神奇寶貝來進化你的一隻神奇寶貝時，你可以從對手的活躍神奇寶貝中隨機丟棄一個能量。"
            }
        }],
    attacks: [{
            name: {
                en: "Crabhammer",
                "fr": "Marteau-crabe",
                "es": "Martillo de cangrejo",
                "it": "Granchio",
                "de": "Krabbenhammer",
                "pt-br": "Martelo Caranguejo",
                "zh-tw": "蟹錘"
            },
            damage: 70,
            cost: ["Water", "Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
