import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/198",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/198",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/198",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/198",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/198",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/198",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/198"
    },
    name: {
        en: "Mega Gallade ex",
        fr: "Méga-Gallame-ex",
        es: "Mega-Gallade ex",
        it: "Mega Gallade-ex",
        de: "Mega-Galagladi-ex",
        "pt-br": "Mega Gallade ex",
        "zh-tw": "超級艾路雷朵ex",
        ko: "메가엘레이드 ex",
        ja: "メガエルレイドex"
    },
    illustrator: "Kuroimori",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 220,
    types: ["Fighting"],
    dexId: [475],
    evolveFrom: {
        en: "Kirlia",
        fr: "Kirlia",
        es: "Kirlia",
        it: "Kirlia",
        de: "Kirlia",
        "pt-br": "Kirlia",
        "zh-tw": "奇魯莉安",
        ko: "킬리아",
        ja: "キルリア"
    },
    stage: "Stage2",
    attacks: [
        {
            cost: ["Fighting", "Colorless", "Colorless"],
            name: {
                en: "Resonating Blade",
                fr: "Lame Résonante",
                es: "Hoja Resonante",
                "pt-br": "Lâmina Ressonante",
                "zh-tw": "共鳴刃"
            },
            effect: {
                en: "If you played a Supporter card from your hand during this turn, this attack does 50 more damage.",
                fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 50 dégâts supplémentaires.",
                es: "Si has jugado 1 carta de Partidario de tu mano durante este turno, este ataque hace 50 puntos de daño más.",
                it: "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 50 danni in più.",
                de: "Wenn du in diesem Zug eine Unterstützerkarte aus deiner Hand gespielt hast, fügt dieser Angriff 50 Schadenspunkte mehr zu.",
                "pt-br": "Se você jogou uma carta de Apoiador da sua mão durante este turno, este ataque causará 50 pontos de dano a mais.",
                "zh-tw": "在這個回合,若從手牌使出了支援者卡,則增加50點傷害。"
            },
            damage: "100+"
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
