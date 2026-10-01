import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/283",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/283",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/283",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/283",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/283",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/283",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/283"
    },
    name: {
        en: "Froakie",
        fr: "Grenousse",
        es: "Froakie",
        it: "Froakie",
        de: "Froxy",
        "pt-br": "Froakie",
        "zh-tw": "呱呱泡蛙",
        ja: "ケロマツ",
        ko: "개구마르"
    },
    illustrator: "Sanosuke Sakuma",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Water"
    ],
    description: {
        en: "It protects its skin by covering its body in\ndelicate bubbles. Beneath its happy-go-lucky air,\nit keeps a watchful eye on its surroundings.",
        fr: "Il protège son corps en l'entourant d'une mousse délicate. Malgré son apparence insouciante, ce Pokémon est en fait constamment à l'affût.",
        es: "Protege su piel cubriendo el cuerpo con una fina capa de burbujas. Aunque parezca despreocupado, no deja de vigilar con astucia lo que le rodea.",
        it: "Si protegge avvolgendo il corpo in una schiuma delicata. Nonostante l'aria spensierata, scruta sempre l'ambiente circostante con molta attenzione.",
        de: "Es schützt seine Haut mit feinen Blasen, die seinen Körper umhüllen. Es mag unbekümmert aussehen, behält die Umgebung aber immer aufmerksam im Auge.",
        "pt-br": "Protege sua pele cobrindo seu corpo com bolhas delicadas. Por trás do seu ar alegre e despreocupado, mantém um olhar atento sobre os arredores.",
        "zh-tw": "以細膩的泡沫包住身體，保護皮膚。裝出一副悠閒的樣子，但其實精明地打量著四周。",
        ja: "It protects its skin by covering its body in\ndelicate bubbles. Beneath its happy-go-lucky air,\nit keeps a watchful eye on its surroundings.",
        ko: "It protects its skin by covering its body in\ndelicate bubbles. Beneath its happy-go-lucky air,\nit keeps a watchful eye on its surroundings."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Water Drip",
                fr: "Goutte à Goutte",
                es: "Goteo de Agua",
                it: "Gocciolacqua",
                de: "Spritzwasser",
                "pt-br": "Gotejo",
                "zh-tw": "水漂",
                ja: "Water Drip",
                ko: "Water Drip"
            },
            damage: 20,
            cost: [
                "Water"
            ]
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
