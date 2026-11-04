import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/030/cad3502fa8a4d31d",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/030/cad3502fa8a4d31d",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/030/cad3502fa8a4d31d",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/030/cad3502fa8a4d31d",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/030/cad3502fa8a4d31d",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/030/cad3502fa8a4d31d",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/030/cad3502fa8a4d31d",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/030/cad3502fa8a4d31d",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/030/cad3502fa8a4d31d"
    },
    name: {
        en: "Tornadus",
        fr: "Boréas",
        es: "Tornadus",
        it: "Tornadus",
        de: "Boreos",
        "pt-br": "Tornadus",
        "zh-tw": "龍捲雲",
        ko: "토네로스",
        ja: "トルネロス"
    },
    illustrator: "Shigenori Negishi",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    dexId: [641],
    stage: "Basic",
    description: {
        en: "Tornadus expels massive energy from its tail, causing severe storms. Its power is great enough to blow houses away.",
        fr: "L’énergie dégagée par sa queue provoque d’énormes\ntempêtes dont la force peut renverser des maisons.",
        es: "La energía que desprende de su cola genera violentas\ntempestades capaces de echar abajo casas.",
        it: "L’energia sprigionata dalla coda di Tornadus provoca una\nviolenta tempesta in grado di spazzare via le case.",
        de: "Mit der Energie aus seiner Rute erzeugt es wilde Stürme,\ndie stark genug sind, um ganze Wohnhäuser davonzuwehen.",
        "pt-br": "Tornadus expele energia massiva de sua cauda, causando tempestades severas. Seu poder é grande o bastante para arrastar casas.",
        "zh-tw": "從龍捲雲尾部噴出的能量會引起暴風雨。威力足以將整棟房屋吹走。",
        ja: "トルネロスの 尻尾から 噴き出した エネルギーが 大嵐を 起こす。 民家を 吹き飛ばす パワー。",
        ko: "토네로스의 꼬리에서 뿜어져 나온\n에너지가 큰 폭풍을 일으킨다.\n민가를 날려버릴 정도의 힘이다."
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Blow Through",
                fr: "Grosse Bourrasque",
                es: "Gran Torbellino",
                it: "Colposecco",
                de: "Durchdringender Strahl",
                "pt-br": "Sopro Intenso",
                "zh-tw": "穿堂風",
                ja: "ふきぬける",
                ko: "불어지나가기"
            },
            effect: {
                en: "If a Stadium is in play, this attack does 40 more damage.",
                fr: "Si un Stade est en jeu, cette attaque inflige 40 dégâts supplémentaires.",
                es: "Si hay un Estadio en juego, este ataque hace 40 puntos de daño más.",
                it: "Se c’è in gioco una carta Stadio, questo attacco infligge 40 danni in più.",
                de: "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 40 Schadenspunkte mehr zu.",
                "pt-br": "Se um Estádio estiver em jogo, este ataque causará 40 pontos de dano a mais.",
                "zh-tw": "若場上有競技場卡,則增加40點傷害。",
                ja: "場にスタジアムが出ているなら、40ダメージ追加。",
                ko: "필드에 스타디움이 나와 있다면 40데미지를 추가한다."
            },
            damage: "40+"
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol4"]
};

export default card;
