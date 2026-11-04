import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/062/b8e21c648ea3df06",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/062/b8e21c648ea3df06",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/062/b8e21c648ea3df06",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/062/b8e21c648ea3df06",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/062/b8e21c648ea3df06",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/062/b8e21c648ea3df06",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/062/b8e21c648ea3df06",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/062/b8e21c648ea3df06",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/062/b8e21c648ea3df06"
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
    illustrator: "kawayoo",
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
        fr: "Toujours prêt à protéger son prochain, il se bat férocement en utilisant ses coudes comme des épées.",
        es: "Cuando quiere proteger a alguien, extiende los codos como si fueran espadas y lucha con fiereza.",
        it: "Quando protegge qualcuno estende i gomiti come se fossero spade e combatte furiosamente.",
        de: "Will es jemanden beschützen, verlängert es seine Ellbogen, um sie wie Schwerter zu nutzen, und kämpft auf wilde Art.",
        "pt-br": "Quando tenta proteger alguém, estende os cotovelos como se eles fossem espadas e luta de forma selvagem.",
        "zh-tw": "在保護著誰時會伸出肘部，並使其變得如刀般銳利後，與對手展開激烈的戰鬥。",
        ja: "だれかを 守ろうと したとき ひじを伸ばし 刀の ように 変化 させて 激しく 戦う。",
        ko: "누군가를 지키려고 할 때는\n팔꿈치를 늘여서 칼처럼\n변화시키고 격렬하게 싸운다."
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
                "zh-tw": "沙場之劍",
                ja: "グラウンドソード",
                ko: "그라운드소드"
            },
            effect: {
                en: "If a Stadium is in play, this attack does 70 more damage.",
                fr: "Si un Stade est en jeu, cette attaque inflige 70 dégâts supplémentaires.",
                es: "Si hay un Estadio en juego, este ataque hace 70 puntos de daño más.",
                it: "Se c’è in gioco una carta Stadio, questo attacco infligge 70 danni in più.",
                de: "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 70 Schadenspunkte mehr zu.",
                "pt-br": "Se um Estádio estiver em jogo, este ataque causará 70 pontos de dano a mais.",
                "zh-tw": "若場上有競技場卡,則增加70點傷害。",
                ja: "場にスタジアムが出ているなら、70ダメージ追加。",
                ko: "필드에 스타디움이 나와 있다면 70데미지를 추가한다."
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
    retreat: 2,
    boosters: []
};

export default card;
