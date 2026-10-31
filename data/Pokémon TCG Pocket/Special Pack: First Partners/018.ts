import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/018",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/018",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/018",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/018",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/018",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/018",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/018"
    },
    name: {
        en: "Froakie",
        fr: "Grenousse",
        es: "Froakie",
        "pt-br": "Froakie",
        "zh-tw": "呱呱泡蛙",
        ja: "ケロマツ",
        ko: "개구마르",
        it: "Froakie",
        de: "Froxy"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: [
        "Water"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Pound",
                fr: "Écras'Face",
                es: "Destructor",
                it: "Botta",
                de: "Klaps",
                "pt-br": "Pancada",
                "zh-tw": "拍擊",
                ja: "Pound",
                ko: "Pound"
            },
            cost: [
                "Water"
            ],
            damage: 20
        }
    ],
    abilities: [],
    description: {
        en: "It secretes flexible bubbles from its chest and back. The bubbles reduce the damage it would otherwise take when attacked.",
        fr: "Sa poitrine et son dos sécrètent une mousse qui lui permet de subir moins de dégâts en amortissant le choc des attaques.",
        es: "Segrega burbujas flexibles por la espalda, como por el pecho. Gracias a la elasticidad de estas, puede parar ataques y reducir el daño recibido.",
        it: "Dal petto e dalla schiena secerne una schiuma che gli permette di attutire i danni causati dagli attacchi nemici.",
        de: "Es stößt aus Brust und Rücken elastische Blasen aus, mit denen es gegnerische Angriffe abfängt und so den erlittenen Schaden verringert.",
        "pt-br": "Libera bolhas flexíveis do peito e das costas. As bolhas reduzem os danos que sofreria ao serem atacadas.",
        "zh-tw": "從胸口和背部製造泡泡。利用有彈性的泡泡承受攻擊，降低所受的傷害。",
        ja: "It secretes flexible bubbles from its chest and back. The bubbles reduce the damage it would otherwise take when attacked.",
        ko: "It secretes flexible bubbles from its chest and back. The bubbles reduce the damage it would otherwise take when attacked."
    }
};

export default card;
