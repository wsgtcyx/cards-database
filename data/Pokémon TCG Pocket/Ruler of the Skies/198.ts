import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/198"
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
                en: "Resonating Blade"
            },
            effect: {
                en: "If you played a Supporter card from your hand during this turn, this attack does 50 more damage.",
                fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 50 dégâts supplémentaires.",
                es: "Si jugaste una carta de Partidario de tu mano durante este turno, este ataque causa 50 puntos de daño más.",
                it: "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 50 danni in più.",
                de: "Wenn du in diesem Zug eine Unterstützerkarte aus deiner Hand gespielt hast, fügt dieser Angriff 50 Schadenspunkte mehr zu.",
                "pt-br": "Se você jogou uma carta de Apoiador da sua mão durante este turno, este ataque causará 50 de dano a mais.",
                "zh-tw": "如果你在本回合中從手牌中打出了支持者卡，則此攻擊造成的傷害增加 50 點。"
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
