import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/082",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/082",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/082",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/082",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/082",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/082",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/082"
    },
    name: {
        en: "Cubone",
        "fr": "Osselait",
        "es": "Cubone",
        "it": "Cubone",
        "de": "Tragosso",
        "pt-br": "Cubone",
        "zh-tw": "卡拉卡拉"
    },
    illustrator: "Mizue",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    description: {
        en: "This Pokémon wears the skull of its deceased\nmother. Sometimes Cubone's dreams make it cry,\nbut each tear Cubone sheds makes it stronger.",
        "fr": "Ce Pokémon porte le crâne de son défunt\nmère. Parfois les rêves de Cubone le font pleurer,\nmais chaque larme versée par Cubone le rend plus fort.",
        "es": "Este Pokémon porta el cráneo de su difunto\nmadre. A veces los sueños de Cubone lo hacen llorar,\npero cada lágrima que derrama Cubone lo hace más fuerte.",
        "it": "Questo Pokémon indossa il teschio del suo defunto\nmadre. A volte i sogni di Cubone lo fanno piangere,\nma ogni lacrima che Cubone versa lo rende più forte.",
        "de": "Dieses Pokémon trägt den Schädel seines Verstorbenen\nMutter. Manchmal bringen Cubones Träume es zum Weinen,\nAber jede Träne, die Cubone vergießt, macht ihn stärker.",
        "pt-br": "Este Pokémon usa a caveira de seu falecido\nmãe. Às vezes os sonhos de Cubone o fazem chorar,\nmas cada lágrima que Cubone derrama o torna mais forte.",
        "zh-tw": "這只神奇寶貝戴著死者的頭骨\n媽媽。有時庫博恩的夢會讓它哭泣，\n但庫博恩流下的每一滴眼淚都讓它變得更加堅強。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Headbutt",
                "fr": "Coup de tête",
                "es": "cabezazo",
                "it": "Testata",
                "de": "Kopfstoß",
                "pt-br": "Cabeçada",
                "zh-tw": "頭撞"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
