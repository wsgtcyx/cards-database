import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/031",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/031",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/031",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/031",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/031",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/031",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/031"
    },
    name: {
        en: "Nacli",
        fr: "Selutin",
        es: "Nacli",
        it: "Nacli",
        de: "Geosali",
        "pt-br": "Nacli",
        "zh-tw": "鹽石寶",
        ko: "베베솔트",
        ja: "コジオ"
    },
    illustrator: "Ounishi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    dexId: [932],
    stage: "Basic",
    description: {
        en: "The ground scrapes its body as it travels, causing it to leave salt behind. Salt is constantly being created and replenished inside Nacli’s body.",
        fr: "Le sol gratte son corps lors de son déplacement, ce qui lui fait laisser du sel derrière lui. Le sel est constamment créé et reconstitué dans le corps de Selutin.",
        es: "El suelo raspa su cuerpo mientras viaja, lo que hace que deje sal. La sal se crea y repone constantemente dentro del cuerpo de Nacli.",
        it: "Il terreno raschia il suo corpo mentre viaggia, facendogli lasciare dietro di sé sale. Il sale viene costantemente creato e reintegrato all'interno del corpo di Nacli.",
        de: "Der Boden schabt auf seiner Reise an seinem Körper, wodurch Salz zurückbleibt. Im Körper von Geosali wird ständig Salz erzeugt und erneuert.",
        "pt-br": "O chão raspa seu corpo enquanto ele viaja, deixando sal para trás. O sal é constantemente criado e reabastecido dentro do corpo de Nacli.",
        "zh-tw": "當它行進時，地面會刮傷它的身體，導致它留下鹽分。鹽在鹽石寶的體內不斷產生和補充。"
    },
    attacks: [
        {
            cost: ["Fighting"],
            name: {
                en: "Headbutt",
                fr: "Coup d'Boule",
                es: "Golpe Cabeza",
                it: "Bottintesta",
                de: "Kopfnuss",
                "pt-br": "Cabeçada",
                "zh-tw": "頭錘"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
