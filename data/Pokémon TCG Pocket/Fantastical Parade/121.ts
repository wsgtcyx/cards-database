import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/121",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/121",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/121",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/121",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/121",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/121",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/121",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/121",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/121"
    },
    name: {
        en: "Bagon",
        "fr": "Draby",
        "es": "Bagon",
        "it": "Bagon",
        "de": "Kindwurm",
        "pt-br": "Bagon",
        "zh-tw": "寶貝龍",
        ja: "タツベイ",
        ko: "아공이"
    },
    illustrator: "sui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Dragon"],
    description: {
        en: "Its belief that it will be able to fly one day is\napparently the influence of information carried\nin its genes.",
        "fr": "Sa conviction qu'il sera capable de voler un jour est\napparemment l'influence des informations véhiculées\ndans ses gènes.",
        "es": "Su creencia de que algún día podrá volar es\naparentemente la influencia de la información transportada\nen sus genes.",
        "it": "La sua convinzione che un giorno sarà in grado di volare lo è\napparentemente l'influenza delle informazioni trasportate\nnei suoi geni.",
        "de": "Sein Glaube, dass es eines Tages fliegen kann, ist\noffenbar der Einfluss der übermittelten Informationen\nin seinen Genen.",
        "pt-br": "Sua crença de que um dia poderá voar é\naparentemente a influência da informação transportada\nem seus genes.",
        "zh-tw": "它堅信自己有一天能夠飛翔，這是\n顯然是所攜帶信息的影響\n在它的基因中。",
        ja: "いつか 飛べると 信じているのは 遺伝子の 中の 情報が 影響 しているから らしい。",
        ko: "언젠가 날 수 있다고 믿는 것은\n유전자 안의 정보가\n영향을 주고 있기 때문이라고 한다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Bite",
                "fr": "Mordre",
                "es": "Morder",
                "it": "Morso",
                "de": "Beißen",
                "pt-br": "Morder",
                "zh-tw": "咬",
                ja: "かみつく",
                ko: "물기"
            },
            damage: 20,
            cost: ["Colorless"]
        }],
    retreat: 1
};
export default card;
