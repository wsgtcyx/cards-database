import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/018",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/018",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/018",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/018",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/018",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/018"
    },
    name: {
        en: "Luvdisc",
        fr: "Lovdisc",
        es: "Luvdisc",
        it: "Luvdisc",
        de: "Liebiskus",
        "pt-br": "Luvdisc",
        "zh-tw": "愛心魚",
        ko: "사랑동이",
        ja: "ラブカス"
    },
    illustrator: "ryoma uratsuka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    dexId: [370],
    stage: "Basic",
    description: {
        en: "During the spawning season, countless Luvdisc congregate at coral reefs, turning the waters pink.",
        fr: "Pendant la saison des amours, d’innombrables\nLovdisc se réunissent près des barrières de corail et\ndonnent l’impression que la mer est rose.",
        es: "Durante el desove, multitud de Luvdisc se concentran\nen los arrecifes de coral coloreando de rosa el agua.",
        it: "Durante il periodo riproduttivo, numerosi Luvdisc si\nriuniscono intorno alla barriera corallina, colorando\nl’acqua di rosa.",
        de: "Während der Laichzeit versammeln sich zahllose\nLiebiskus in den Korallenriffen. Daher erstrahlt\ndas Wasser rosa.",
        "pt-br": "Durante a época de desova, inúmeros Luvdisc se reúnem nos recifes de coral, tornando as águas rosadas.",
        "zh-tw": "在產卵季節，無數的愛心魚聚集在珊瑚礁上，將海水變成粉紅色。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Water Gun",
                fr: "Pistolet à O",
                es: "Pistola Agua",
                it: "Pistolacqua",
                de: "Aquaknarre",
                "pt-br": "Revólver d'Água",
                "zh-tw": "水槍"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
