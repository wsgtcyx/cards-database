import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/053/97d8c05d2fea2a7e",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/053/97d8c05d2fea2a7e",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/053/97d8c05d2fea2a7e",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/053/97d8c05d2fea2a7e",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/053/97d8c05d2fea2a7e",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/053/97d8c05d2fea2a7e",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/053/97d8c05d2fea2a7e",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/053/97d8c05d2fea2a7e",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/053/97d8c05d2fea2a7e"
    },
    name: {
        en: "Zygarde ex",
        fr: "Zygarde-ex",
        es: "Zygarde ex",
        it: "Zygarde-ex",
        de: "Zygarde-ex",
        "pt-br": "Zygarde ex",
        "zh-tw": "基格爾德ex",
        ko: "지가르데 ex",
        ja: "ジガルデex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 170,
    types: ["Fighting"],
    dexId: [718],
    stage: "Basic",
    attacks: [
        {
            cost: ["Fighting", "Fighting", "Fighting"],
            name: {
                en: "Land Laser",
                fr: "Laser Chtonien",
                es: "Láser Telúrico",
                it: "Laser Tellurico",
                de: "Bodenlaser",
                "pt-br": "Laser da Terra",
                "zh-tw": "大地鐳射",
                ja: "グランドレーザー",
                ko: "그라운드 레이저"
            },
            effect: {
                en: "Flip 2 coins. This attack does 100 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 100 dégâts pour chaque côté face.",
                es: "Lanza 2 monedas. Este ataque hace 100 puntos de daño por cada cara.",
                it: "Lancia 2 volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa.",
                de: "Wirf 2 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 100 pontos de dano para cada cara.",
                "zh-tw": "擲2次硬幣,造成正面出現的次數×100點傷害。",
                ja: "コインを2回投げ、オモテの数×100ダメージ。",
                ko: "동전을 2번 던져서 앞면이 나온 수 × 100데미지를 준다."
            },
            damage: "100x"
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 4,
    boosters: ["vol7"]
};

export default card;
