import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/019",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/019",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/019",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/019",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/019",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/019",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/019",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/SP1/019"
    },
    name: {
        en: "Rowlet",
        fr: "Brindibou",
        es: "Rowlet",
        "pt-br": "Rowlet",
        "zh-tw": "木木梟",
        ja: "モクロー",
        ko: "나몰빼미",
        it: "Rowlet",
        de: "Bauz"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: [
        "Grass"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Tackle",
                fr: "Charge",
                es: "Placaje",
                it: "Azione",
                de: "Tackle",
                "pt-br": "Investida",
                "zh-tw": "撞擊",
                ja: "たいあたり",
                ko: "Tackle"
            },
            cost: [
                "Colorless",
                "Grass"
            ],
            damage: 40
        }
    ],
    abilities: [],
    description: {
        en: "This wary Pokémon uses photosynthesis to store up energy during the day, while becoming active at night.",
        fr: "Ce Pokémon ne baisse jamais sa garde. Pendant la journée, il accumule de l’énergie par photosynthèse, pour mieux agir la nuit venue.",
        es: "Es cauteloso, desconfiado y de naturaleza nocturna. Durante el día acumula energía mediante la fotosíntesis.",
        it: "Questo Pokémon è sempre all’erta. Di giorno accumula energia tramite fotosintesi per poi passare all’azione di notte.",
        de: "Ein wachsames und nachtaktives Pokémon. Tagsüber sammelt es per Photosynthese Kräfte, um fit für die Nacht zu sein.",
        "pt-br": "Este Pokémon cauteloso usa a fotossíntese para armazenar energia durante o dia, tornando-se ativo à noite.",
        "zh-tw": "警戒心很強。白天利用光合作用積蓄力量，到了夜晚才開始活動。",
        ja: "警戒心が 強い。 昼は 光合成で 力を 溜めて 夜になったら 活動開始。",
        ko: "This wary Pokémon uses photosynthesis to store up energy during the day, while becoming active at night."
    }
};

export default card;
