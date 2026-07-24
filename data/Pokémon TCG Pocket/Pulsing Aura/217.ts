import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/217",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/217"
    },
    name: {
        en: "Absol",
        fr: "Absol",
        es: "Absol",
        it: "Absol",
        de: "Absol",
        "pt-br": "Absol",
        "zh-tw": "阿勃梭魯",
        ko: "앱솔",
        ja: "アブソル"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 80,
    types: ["Darkness"],
    dexId: [359],
    stage: "Basic",
    description: {
        en: "Because of this Pokémon’s ability to detect danger, people mistook Absol as a bringer of doom.",
        fr: "Sa capacité à pressentir le danger lui a autrefois\nvalu la réputation de porter malheur.",
        es: "Debido a su capacidad para predecir desastres,\nse lo ha considerado desacertadamente un\nPokémon portador de desgracias.",
        it: "A causa della sua capacità di percepire i disastri\nè stato considerato erroneamente un Pokémon\nportatore di disgrazie.",
        de: "Absol kann Gefahr verspüren, weshalb Menschen\nirrtümlicherweise dachten, dieses Pokémon\nbringe ihnen Unheil.",
        "pt-br": "Devido à capacidade deste Pokémon de detectar o perigo, as pessoas confundiram Absol com um portador da destruição.",
        "zh-tw": "由於擁有察覺危險的能力，\n因此牠被人們誤解是\n會招來災禍的寶可夢。"
    },
    attacks: [
        {
            cost: ["Darkness", "Darkness"],
            name: {
                en: "Ominous Claw",
                fr: "Griffe du Malheur",
                es: "Garra Aciaga",
                it: "Artigli Nefasti",
                de: "Unheilvolle Klaue",
                "pt-br": "Garra Tenebrosa",
                "zh-tw": "不祥之爪"
            },
            effect: {
                en: "Flip a coin. If heads, your opponent reveals their hand. Choose a Supporter card you find there and discard it.",
                fr: "Lancez une pièce de monnaie. Si c'est face, votre adversaire révèle sa main. Choisissez une carte Supporter que vous y trouvez et défaussez-la.",
                es: "Lanza una moneda. Si sale cara, tu oponente revela su mano. Elige una carta de Partidario que encuentres allí y deséchala.",
                it: "Lancia una moneta. Se esce testa, il tuo avversario rivela la sua mano. Scegli una carta Aiuto che trovi lì e scartala.",
                de: "Wirf eine Münze. Bei „Kopf“ zeigt Ihr Gegner seine Hand auf. Wähle eine Unterstützerkarte, die du dort findest, und wirf sie ab.",
                "pt-br": "Jogue uma moeda. Se sair cara, seu oponente revela sua mão. Escolha uma carta de Apoiador que encontrar lá e descarte-a.",
                "zh-tw": "拋一枚硬幣。如果出現正面，你的對手就會亮出他們的牌。選擇您在那裡找到的一張支持者卡並將其丟棄。"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
