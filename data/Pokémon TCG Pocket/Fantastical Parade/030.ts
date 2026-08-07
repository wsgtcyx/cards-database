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
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/030"
    },
    name: {
        en: "Galarian Mr. Mime",
        "fr": "M. Mime de Galar",
        "es": "Mr. Mime de Galar",
        "it": "Mr. Mime di Galar",
        "de": "Galar-Pantimos",
        "pt-br": "Mr. Mime de Galar",
        "zh-tw": "伽勒爾魔牆人偶"
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
        "zh-tw": "它能從底部散發出寒意\n腳。它會花一整天的時間在\n結冰的地板。"
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
                "zh-tw": "冰雪"
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
