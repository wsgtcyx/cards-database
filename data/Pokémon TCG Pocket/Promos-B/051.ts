import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/051/746354d59320223f",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/051/746354d59320223f",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/051/746354d59320223f",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/051/746354d59320223f",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/051/746354d59320223f",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/051/746354d59320223f",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/051/746354d59320223f",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/051/746354d59320223f",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/051/746354d59320223f"
    },
    name: {
        en: "Zygarde",
        fr: "Zygarde",
        es: "Zygarde",
        it: "Zygarde",
        de: "Zygarde",
        "pt-br": "Zygarde",
        "zh-tw": "基格爾德",
        ko: "지가르데",
        ja: "ジガルデ"
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    dexId: [718],
    stage: "Basic",
    description: {
        en: "Born when around 10% of Zygarde’s cells have been gathered from all over, this form is skilled in close-range combat.",
        fr: "La forme que Zygarde prend lorsqu'il rassemble 10 % de ses Cellules éparpillées un peu partout. Il excelle au combat au corps-à-corps.",
        es: "Zygarde adopta esta forma al reunir el 10% de sus células. Destaca en el combate a corta distancia.",
        it: "Forma di Zygarde derivante dall'aggregazione del 10% delle sue cellule sparse nel mondo. Eccelle nelle lotte corpo a corpo.",
        de: "Diese Form nimmt es an, wenn 10 % seiner Zellen gesammelt wurden. Das Spezialgebiet von diesem Pokémon ist der Nahkampf.",
        "pt-br": "Esta forma especializada em combates a curta distância nasce quando cerca de 10% das células de Zygarde se reúnem de todas as partes.",
        "zh-tw": "各地的基格爾德・細胞聚集了10%之後所誕生。擅長近距離戰鬥。",
        ja: "各地の ジガルデ・セルが 10% 集まったとき 生まれる。 接近戦が 得意だぞ。",
        ko: "각지의 지가르데 셀이\n10% 모였을 때 태어난다.\n접근전이 특기다."
    },
    attacks: [
        {
            cost: ["Fighting"],
            name: {
                en: "Bite",
                fr: "Morsure",
                es: "Mordisco",
                it: "Morso",
                de: "Biss",
                "pt-br": "Mordida",
                "zh-tw": "咬住",
                ja: "かみつく",
                ko: "물기"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol7"]
};

export default card;
