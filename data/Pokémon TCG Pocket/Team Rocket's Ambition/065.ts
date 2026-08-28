import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/065",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/065",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/065",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/065",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/065",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/065",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/065"
    },
    name: {
        en: "Lechonk",
        fr: "Gourmelet",
        es: "Lechonk",
        it: "Lechonk",
        de: "Ferkuli",
        "pt-br": "Lechonk",
        "zh-tw": "愛吃豚",
        ko: "맛보돈",
        ja: "グルトン"
    },
    illustrator: "Mina Nakai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [915],
    stage: "Basic",
    description: {
        en: "This Pokémon spurns all but the finest of foods. Its body gives off an herblike scent that bug Pokémon detest.",
        fr: "Il ne mange que des mets raffinés. Son corps dégage une odeur d'herbes que les Pokémon Insecte exècrent.",
        es: "Se alimenta únicamente de los más selectos manjares. Su cuerpo despide un olor herbáceo que los Pokémon de tipo Bicho detestan.",
        it: "Si nutre esclusivamente del cibo più pregiato. Il suo corpo emette un odore di erbe che i Pokémon Coleottero detestano.",
        de: "Es nimmt nur erlesene Kost zu sich. Sein Körper sondert einen kräuterartigen Geruch ab, den Käfer-Pokémon abstoßend finden.",
        "pt-br": "Este Pokémon rejeita todos os alimentos, exceto os melhores. Seu corpo exala um cheiro de erva que os Pokémon inseto detestam.",
        "zh-tw": "只吃精挑細選過的食物。蟲寶可夢很討厭牠身上散發的那種聞起來像是香草的氣味。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Headbutt",
                fr: "Coup d'Boule",
                es: "Golpe Cabeza",
                it: "Bottintesta",
                de: "Kopfnuss",
                "pt-br": "Cabeçada",
                "zh-tw": "頭錘"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
