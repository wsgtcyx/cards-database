import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/075",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/075",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/075",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/075",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/075",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/075",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/075"
    },
    name: {
        en: "Snom",
        fr: "Frissonille",
        es: "Snom",
        it: "Snom",
        de: "Snomnom",
        "pt-br": "Snom",
        "zh-tw": "雪吞蟲",
        ko: "누니머기",
        ja: "ユキハミ"
    },
    illustrator: "Shinya Komatsu",
    rarity: "One Star",
    category: "Pokemon",
    hp: 50,
    types: ["Water"],
    dexId: [872],
    stage: "Basic",
    description: {
        en: "Within its internal organs, Snom amplifies the frigid air it gets from eating snow and then uses this amplified air to create icicle-like spikes.",
        fr: "Au sein de ses organes internes, Frissonille amplifie l'air glacial qu'il obtient en mangeant de la neige, puis utilise cet air amplifié pour créer des pointes ressemblant à des glaçons.",
        es: "Dentro de sus órganos internos, Snom amplifica el aire gélido que obtiene al comer nieve y luego usa este aire amplificado para crear picos en forma de carámbanos.",
        it: "All'interno dei suoi organi interni, Snom amplifica l'aria gelida che ottiene mangiando la neve e poi usa quest'aria amplificata per creare punte simili a ghiaccioli.",
        de: "In seinen inneren Organen verstärkt Snomnom die kalte Luft, die es durch das Fressen von Schnee erhält, und nutzt diese verstärkte Luft dann, um eiszapfenartige Spitzen zu erzeugen.",
        "pt-br": "Dentro de seus órgãos internos, Snom amplifica o ar gelado que obtém ao comer neve e, em seguida, usa esse ar amplificado para criar pontas semelhantes a pingentes de gelo.",
        "zh-tw": "在它的內部器官中，雪吞蟲 放大了它從吃雪中獲得的寒冷空氣，然後利用這種放大的空氣產生冰柱狀的尖刺。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Gnaw",
                fr: "Ronge",
                es: "Roer",
                it: "Rosicchiamento",
                de: "Nagen",
                "pt-br": "Roída",
                "zh-tw": "咬"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
