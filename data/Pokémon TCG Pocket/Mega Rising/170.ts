import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/170",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/170",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/170",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/170",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/170",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/170",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/170",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/170",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/170"
    },
    name: {
        en: "Honedge",
        "fr": "Monorpale",
        "es": "Honedge",
        "it": "Honedge",
        "de": "Gramokles",
        "pt-br": "Honedge",
        "zh-tw": "獨劍鞘",
        ja: "ヒトツキ",
        ko: "단칼빙",
    },
    illustrator: "Suwama Chiaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    description: {
        en: "The blue eye on the sword's handguard is the\ntrue body of Honedge. With its old cloth, it\ndrains people's lives away.",
        "fr": "L'œil bleu sur le garde-main de l'épée est le\nvéritable corps de Honedge. Avec son vieux drap, il\ndraine la vie des gens.",
        "es": "El ojo azul en el guardamano de la espada es el\nverdadero cuerpo de Honedge. Con su tela vieja,\ndrena la vida de las personas.",
        "it": "L'occhio azzurro sul paramano della spada è il\nvero corpo di Honedge. Con la sua vecchia stoffa, esso\nprosciuga la vita delle persone.",
        "de": "Das blaue Auge am Handschutz des Schwertes ist das\nwahrer Körper von Honedge. Mit seinem alten Stoff, es\nraubt den Menschen das Leben.",
        "pt-br": "O olho azul no protetor de mão da espada é o\nverdadeiro corpo de Honedge. Com seu pano velho,\ndrena a vida das pessoas.",
        "zh-tw": "劍護手上的藍色眼睛是\n洪內奇的真身。用它的舊佈，\n耗盡人們的生命。",
        ja: "剣の 鍔の 青い 目玉が ヒトツキの 本体。 古びた 布で 人の 生気を 吸い取る。",
        ko: "검의 가드 부분에 있는 푸른 눈동자가\n단칼빙의 본체다. 낡은 천으로\n사람의 생기를 빨아들인다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Pierce",
                "fr": "Percer",
                "es": "Atravesar",
                "it": "Forare",
                "de": "Pierce",
                "pt-br": "Perfurar",
                "zh-tw": "刺穿",
                ja: "つきさす",
                ko: "궤찌르기"
            },
            damage: 20,
            cost: ["Metal"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-blaziken"
	]
};
export default card;
