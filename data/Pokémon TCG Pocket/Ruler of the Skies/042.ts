import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/042",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/042",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/042",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/042",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/042",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/042",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/042"
    },
    name: {
        en: "Oshawott",
        fr: "Moustillon",
        es: "Oshawott",
        it: "Oshawott",
        de: "Ottaro",
        "pt-br": "Oshawott",
        "zh-tw": "水水獺",
        ko: "수댕이",
        ja: "ミジュマル"
    },
    illustrator: "kurumitsu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [501],
    stage: "Basic",
    description: {
        en: "It's said that Oshawott learned to maintain its scalchop with riverbed stones by mimicking humans it saw using whetstones.",
        fr: "On dit que c'est pour imiter les gens utilisant une pierre à aiguiser qu'il a commencé à affûter son « coupillage » sur les rochers le long des rivières.",
        es: "Se dice que aprendió a cuidar de su cuchilleira utilizando cantos de la orilla del río e imitando a los humanos que usaban piedras de afilar.",
        it: "Si dice che abbia imparato ad affilare la sua mollusciabola con le pietre del greto dei fiumi osservando gli esseri umani usare una cote.",
        de: "Angeblich fing es an, seine Muschel mit Steinen aus Flüssen in Stand zu halten, nachdem es sah, wie Menschen Wetzsteine nutzen.",
        "pt-br": "Dizem que Oshawott aprendeu a afiar sua scalchop com pedras dos rios ao imitar humanos que viu usando pedras de amolar.",
        "zh-tw": "據說牠是模仿了人類使用\n磨刀石的樣子，於是學得會用\n河灘上的石頭來保養扇貝貝。"
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
            damage: 20
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
