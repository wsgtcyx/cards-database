import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/209",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/209",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/209",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/209",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/209",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/209",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/209"
    },
    name: {
        en: "Mega Gallade ex",
        fr: "Méga-Gallame-ex",
        es: "Mega-Gallade ex",
        "pt-br": "Mega Gallade ex",
        "zh-tw": "超級艾路雷朵ex",
        ja: "メガエルレイドex",
        ko: "메가엘레이드 ex",
        it: "Mega Gallade-ex",
        de: "Mega-Galagladi-ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 220,
    types: [
        "Fighting"
    ],
    stage: "Stage2",
    retreat: 2,
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Kirlia",
        fr: "Kirlia",
        es: "Kirlia",
        it: "Kirlia",
        de: "Kirlia",
        "pt-br": "Kirlia",
        "zh-tw": "奇魯莉安",
        ja: "Kirlia",
        ko: "Kirlia"
    },
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Resonating Blade",
                fr: "Lame Résonante",
                es: "Hoja Resonante",
                it: "Lama Risonante",
                de: "Resonanzklinge",
                "pt-br": "Lâmina Ressonante",
                "zh-tw": "共鳴刃",
                ja: "Resonating Blade",
                ko: "Resonating Blade"
            },
            cost: [
                "Colorless",
                "Colorless",
                "Fighting"
            ],
            damage: "100+",
            effect: {
                en: "If you played a Supporter card from your hand during this turn, this attack does 50 more damage.",
                fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 50 dégâts supplémentaires.",
                es: "Si has jugado 1 carta de Partidario de tu mano durante este turno, este ataque hace 50 puntos de daño más.",
                it: "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 50 danni in più.",
                de: "Wenn du eine Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 50 Schadenspunkte mehr zu.",
                "pt-br": "Se você jogou uma carta de Apoiador da sua mão durante este turno, este ataque causará 50 pontos de dano a mais.",
                "zh-tw": "在這個回合,若從手牌使出了支援者卡,則增加50點傷害。",
                ja: "If you played a Supporter card from your hand during this turn, this attack does 50 more damage.",
                ko: "If you played a Supporter card from your hand during this turn, this attack does 50 more damage."
            }
        }
    ],
    abilities: []
};

export default card;
