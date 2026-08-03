import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4a/095",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4a/095",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4a/095",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4a/095",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4a/095",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4a/095"
    },
    name: {
        en: "Krabby",
        "fr": "Crabe",
        "es": "Cangrejero",
        "it": "Krabby",
        "de": "Krabby",
        "pt-br": "Siriguejo",
        "zh-tw": "大鉗蟹",
    },
    illustrator: "Shigenori Negishi",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    description: {
        en: "It can be found near the sea. The large pincers\ngrow back if they are torn out of their sockets.",
        "fr": "On le trouve près de la mer. Les grosses pinces\nrepousser s'ils sont arrachés de leurs orbites.",
        "es": "Se puede encontrar cerca del mar. Las pinzas grandes\nvolver a crecer si se los arranca de sus órbitas.",
        "it": "Può essere trovato vicino al mare. Le grandi tenaglie\nricrescono se vengono strappati dalle loro orbite.",
        "de": "Es kann in der Nähe des Meeres gefunden werden. Die große Zange\nwachsen nach, wenn sie aus ihren Höhlen gerissen werden.",
        "pt-br": "Pode ser encontrado perto do mar. As grandes pinças\nvoltar a crescer se forem arrancados das órbitas.",
        "zh-tw": "它可以在海邊附近找到。大鉗子\n如果它們被從插座中拔出，它們會重新長出來。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Vise Grip",
                "fr": "Poignée d'étau",
                "es": "Agarre de tornillo de banco",
                "it": "Presa a morsa",
                "de": "Schraubstockgriff",
                "pt-br": "Torno Grip",
                "zh-tw": "虎鉗夾具"
            },
            damage: 40,
            cost: ["Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
