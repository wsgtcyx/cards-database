import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/143",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/143",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/143",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/143",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/143",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/143",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/143"
    },
    name: {
        en: "Mega Absol ex",
        fr: "Méga-Absol-ex",
        es: "Mega-Absol ex",
        it: "Mega Absol-ex",
        de: "Mega-Absol-ex",
        "pt-br": "Mega Absol ex",
        "zh-tw": "超級阿勃梭魯ex",
        ja: "メガアブソルex",
        ko: "메가앱솔 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 170,
    types: [
        "Darkness"
    ],
    stage: "Basic",
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Darkness Claw",
                fr: "Griffe des Ténèbres",
                es: "Garra Tenebrosa",
                it: "Artigli Oscuri",
                de: "Finstere Klaue",
                "pt-br": "Garra das Trevas",
                "zh-tw": "暗黑爪",
                ja: "Darkness Claw",
                ko: "Darkness Claw"
            },
            damage: 80,
            cost: [
                "Darkness",
                "Darkness"
            ],
            effect: {
                en: "Your opponent reveals their hand. Choose a Supporter card you find there and discard it.",
                fr: "Votre adversaire dévoile sa main. Choisissez une carte Supporter que vous y trouvez et défaussez‐la.",
                es: "Tu rival enseña las cartas de su mano. Elige 1 carta de Partidario que encuentres entre ellas y descártala.",
                it: "Il tuo avversario mostra le carte che ha in mano. Scegli una carta Aiuto presente tra esse e scartala.",
                de: "Dein Gegner zeigt dir seine Handkarten. Wähle 1 Unterstützerkarte, die du dort findest, und lege sie auf den Ablagestapel deines Gegners.",
                "pt-br": "Seu oponente revela a mão dele. Escolha 1 carta de Apoiador que encontrar lá e descarte-a.",
                "zh-tw": "查看對手所有手牌的正面,從其中選擇1張支援者卡,將其丟棄。",
                ja: "Your opponent reveals their hand. Choose a Supporter card you find there and discard it.",
                ko: "Your opponent reveals their hand. Choose a Supporter card you find there and discard it."
            }
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
