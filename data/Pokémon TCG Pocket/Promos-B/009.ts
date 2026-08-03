import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/009",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/009",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/009",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/009",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/009",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/009",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/009"
    },
    name: {
        en: "Mega Absol ex",
        fr: "Méga-Absol-ex",
        es: "Mega-Absol ex",
        it: "Mega Absol-ex",
        de: "Mega-Absol-ex",
        "pt-br": "Mega Absol ex",
        "zh-tw": "超級阿勃梭魯ex",
        ko: "메가앱솔 ex",
        ja: "メガアブソルex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "None",
    category: "Pokemon",
    hp: 170,
    types: ["Darkness"],
    dexId: [359],
    stage: "Basic",
    attacks: [
        {
            cost: ["Darkness", "Darkness"],
            name: {
                en: "Darkness Claw",
                fr: "Griffe des Ténèbres",
                es: "Garra Tenebrosa",
                it: "Artigli Oscuri",
                de: "Finstere Klaue",
                "pt-br": "Garra das Trevas",
                "zh-tw": "暗黑爪"
            },
            effect: {
                en: "Your opponent reveals their hand. Choose a Supporter card you find there and discard it.",
                fr: "Votre adversaire révèle sa main. Choisissez une carte Supporter que vous y trouvez et défaussez-la.",
                es: "Tu oponente revela su mano. Elige una carta de Partidario que encuentres allí y deséchala.",
                it: "Il tuo avversario rivela la sua mano. Scegli una carta Aiuto che trovi lì e scartala.",
                de: "Ihr Gegner deckt seine Hand auf. Wähle eine Unterstützerkarte, die du dort findest, und wirf sie ab.",
                "pt-br": "Seu oponente revela sua mão. Escolha uma carta de Apoiador que encontrar lá e descarte-a.",
                "zh-tw": "你的對手亮出了他們的牌。選擇您在那裡找到的一張支持者卡並將其丟棄。"
            },
            damage: 80
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
