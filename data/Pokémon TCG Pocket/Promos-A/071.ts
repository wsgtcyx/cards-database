import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/071/fdef6807fd594313",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/071/fdef6807fd594313",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/071/fdef6807fd594313",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/071/fdef6807fd594313",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/071/fdef6807fd594313",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/071/fdef6807fd594313",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/071/fdef6807fd594313",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/071/fdef6807fd594313",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/071/fdef6807fd594313"
    },
    name: {
        en: "Crabrawler",
        fr: "Crabagarre",
        es: "Crabrawler",
        it: "Crabrawler",
        de: "Krabbox",
        'pt-br': "Crabrawler",
        ja: "マケンカニ",
        ko: "오기지게",
        "zh-tw": "好勝蟹",
    },
    illustrator: "Miki Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    description: {
        en: "This Pokémon punches trees and eats\nthe berries that drop down, training itself\nand getting food at the same time.",
        fr: "Il boxe les arbres et mange les Baies qui\nen tombent, ce qui lui permet de s'entraîner\net de se nourrir en même temps.",
        es: "Propina puñetazos a los árboles y devora las\nbayas que caen al suelo tras el impacto. Esto le\npermite entrenar y alimentarse al mismo tiempo.",
        it: "Prende a pugni gli alberi, per poi cibarsi delle\nbacche che cadono dai rami. In questo modo,\nsi allena e si procaccia il cibo simultaneamente.",
        de: "Dieses Pokémon boxt Bäume und frisst dann die Beeren,\ndie von ihnen herabfallen. So gelangt es an Nahrung und\nkann gleichzeitig trainieren.",
        'pt-br': "Este Pokémon esmurra árvores e come as frutas que\ncaem, treinando e conseguindo comida ao mesmo tempo.",
        ja: "木を 殴りつけ 木の実を 落として 食べる。 トレーニングしつつ エサも 採れて 一石二鳥 なのだ。",
        ko: "나무를 때려서 떨어진 나무열매를 먹는다.\n트레이닝도 되고 먹이도 구해져서\n그야말로 일석이조다.",
        "zh-tw": "會擊落樹上的樹果來吃。訓練和覓食都能同時達成，簡直可以說是一舉兩得。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Punch",
                fr: "Koud'Poing",
                es: "Puño",
                it: "Pugno",
                de: "Boxhieb",
                'pt-br': "Soco",
                ja: "パンチ",
                ko: "펀치",
                "zh-tw": "出拳"
            },
            damage: 20,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["vol8"]
};
export default card;
