import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/030",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/030",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/030",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/030",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/030",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/030",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/030",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/030",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/030"
    },
    name: {
        en: "Galarian Mr. Mime",
        "fr": "M. Mime de Galar",
        "es": "Mr. Mime de Galar",
        "it": "Mr. Mime di Galar",
        "de": "Galar-Pantimos",
        "pt-br": "Mr. Mime de Galar",
        "zh-tw": "伽勒爾魔牆人偶",
        ja: "ガラルバリヤード",
        ko: "가라르 마임맨"
    },
    illustrator: "Misa Tsutsui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    description: {
        en: "It can radiate chilliness from the bottoms of its\nfeet. It'll spend the whole day tap-dancing on a\nfrozen floor.",
        "fr": "Il peut émettre du froid depuis le bas de son corps.\npieds. Il passera toute la journée à faire des claquettes sur un\nsol gelé.",
        "es": "Puede irradiar frialdad desde la parte inferior de su\npies. Se pasará todo el día bailando claqué en una\nsuelo congelado.",
        "it": "Può irradiare freddezza dal basso\npiedi. Passerà l'intera giornata a ballare il tip tap\npavimento ghiacciato.",
        "de": "Von unten kann es Kälte ausstrahlen\nFüße. Es wird den ganzen Tag damit verbringen, auf einem Stepptanz zu tanzen\ngefrorener Boden.",
        "pt-br": "Ele pode irradiar frio da parte inferior de seu\npés. Vai passar o dia inteiro sapateando em um\nchão congelado.",
        "zh-tw": "它能從底部散發出寒意\n腳。它會花一整天的時間在\n結冰的地板。",
        ja: "足の 裏から 冷気を 出す。 凍らせた 床の 上で 1日 タップダンスに 励んでいる。",
        ko: "발바닥에서 냉기를 내뿜는다.\n얼린 바닥 위에서 온종일\n탭 댄스에 열중한다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Icy Snow",
                "fr": "Neige glacée",
                "es": "Nieve helada",
                "it": "Neve ghiacciata",
                "de": "Eisiger Schnee",
                "pt-br": "Neve gelada",
                "zh-tw": "冰雪",
                ja: "スノーアイス",
                ko: "스노아이스"
            },
            damage: 20,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
