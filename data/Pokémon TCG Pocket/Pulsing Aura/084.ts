import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/084",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/084",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/084",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/084",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/084",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/084"
    },
    name: {
        en: "Gallade",
        fr: "Gallame",
        es: "Gallade",
        it: "Gallade",
        de: "Galagladi",
        "pt-br": "Gallade",
        "zh-tw": "艾路雷朵",
        ko: "엘레이드",
        ja: "エルレイド"
    },
    illustrator: "Kazumasa Yasukuni",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
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
    description: {
        en: "When trying to protect someone, it extends its elbows as if they were swords and fights savagely.",
        fr: "Lorsqu'il essaie de protéger quelqu'un, il étend ses coudes comme s'il s'agissait d'épées et se bat sauvagement.",
        es: "Al intentar proteger a alguien extiende los codos como si fueran espadas y lucha salvajemente.",
        it: "Quando cerca di proteggere qualcuno, allunga i gomiti come se fossero spade e combatte ferocemente.",
        de: "Wenn es versucht, jemanden zu beschützen, streckt es seine Ellbogen aus, als wären es Schwerter, und kämpft brutal.",
        "pt-br": "Ao tentar proteger alguém, estende os cotovelos como se fossem espadas e luta ferozmente.",
        "zh-tw": "當試圖保護某人時，它會像劍一樣伸出肘部並進行野蠻的戰鬥。"
    },
    attacks: [
        {
            cost: ["Fighting", "Colorless", "Colorless"],
            name: {
                en: "Earthen Sword",
                fr: "Épée Terrestre",
                es: "Espada Telúrica",
                it: "Geospada",
                de: "Irdenes Schwert",
                "pt-br": "Espada Terrestre",
                "zh-tw": "沙場之劍"
            },
            effect: {
                en: "If a Stadium is in play, this attack does 70 more damage.",
                fr: "Si un Stade est en jeu, cette attaque inflige 70 dégâts supplémentaires.",
                es: "Si hay un Estadio en juego, este ataque hace 70 puntos de daño más.",
                it: "Se è in gioco uno Stadio, questo attacco infligge 70 danni in più.",
                de: "Wenn ein Stadion im Spiel ist, fügt dieser Angriff 70 Schadenspunkte mehr zu.",
                "pt-br": "Se um Estádio estiver em jogo, este ataque causa 70 de dano a mais.",
                "zh-tw": "如果體育場正在進行中，則此攻擊會造成 70 點以上的傷害。"
            },
            damage: "70+"
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
