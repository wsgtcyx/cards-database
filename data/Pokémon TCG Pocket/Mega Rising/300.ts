import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/300",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/300",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/300",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/300",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/300",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/300",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/300",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/300",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/300"
    },
    name: {
        en: "Popplio",
        "fr": "Otaquin",
        "es": "Popplio",
        "it": "Popplio",
        "de": "Robball",
        "pt-br": "Popplio",
        "zh-tw": "球球海獅",
        ja: "アシマリ",
        ko: "누리공",
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "The balloons it inflates with its nose grow\nlarger and larger as it practices day by day.",
        "fr": "Les ballons qu'il gonfle avec son nez grandissent\nde plus en plus grand à mesure qu'il s'entraîne jour après jour.",
        "es": "Los globos que infla con su nariz crecen\nmás y más grande a medida que se practica día a día.",
        "it": "I palloncini che gonfia con il naso crescono\nsempre più grande man mano che si esercita giorno dopo giorno.",
        "de": "Die Ballons, die es mit seiner Nase aufbläst, wachsen\ngrößer und größer, je mehr es Tag für Tag praktiziert.",
        "pt-br": "Os balões que ele infla com o nariz crescem\ncada vez maior à medida que pratica dia após dia.",
        "zh-tw": "它用鼻子吹的氣球長大了\n隨著它日復一日的練習，它變得越來越大。",
        ja: "鼻で 膨らませる バルーンは 日々 練習を 重ねることで 少しずつ 大きく なっていく。",
        ko: "코로 부풀리는 벌룬은\n매일 연습을 반복하면서\n조금씩 커진다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sing",
                "fr": "Chanter",
                "es": "Cantar",
                "it": "Cantare",
                "de": "Singen",
                "pt-br": "Cantar",
                "zh-tw": "唱歌",
                ja: "うたう",
                ko: "노래하기"
            },
            cost: ["Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Endormi.",
                "es": "El Pokémon Activo de tu rival ahora está Dormido.",
                "it": "Il Pokémon attivo del tuo avversario è addormentato.",
                "de": "Das aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "你對手的活躍神奇寶貝現在處於睡眠狀態。",
                ja: "相手のバトルポケモンをねむりにする。",
                ko: "상대의 배틀 포켓몬을 잠듦으로 만든다."
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-altaria"
	]
};
export default card;
