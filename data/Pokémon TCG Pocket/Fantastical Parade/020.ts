import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/020",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/020",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/020",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/020",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/020"
    },
    name: {
        en: "Litleo",
        "fr": "Litléo",
        "es": "pequeño",
        "it": "Litleo",
        "de": "Litleo",
        "pt-br": "Pequeno",
        "zh-tw": "利特萊奧"
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fire"],
    description: {
        en: "The more a Litleo trains its body and spirit by\nbattling mighty enemies, the hotter its mane\nwill grow.",
        "fr": "Plus un Litleo entraîne son corps et son esprit en\ncombattant de puissants ennemis, plus sa crinière est chaude\nva grandir.",
        "es": "Cuanto más entrena un Litleo su cuerpo y espíritu\nluchando contra enemigos poderosos, más caliente es su melena\ncrecerá.",
        "it": "Più un Litleo allena il suo corpo e il suo spirito\ncombattendo potenti nemici, più calda è la sua criniera\ncrescerà.",
        "de": "Je mehr ein Litleo seinen Körper und Geist trainiert\nJe mehr er gegen mächtige Feinde kämpft, desto heißer ist seine Mähne\nwird wachsen.",
        "pt-br": "Quanto mais um Litleo treina seu corpo e espírito\nlutando contra inimigos poderosos, mais quente será sua juba\ncrescerá.",
        "zh-tw": "Litleo 對其身體和精神的訓練越多\n與強大的敵人作戰，它的鬃毛越熱\n會成長。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Stampede",
                "fr": "Débandade",
                "es": "Estampida",
                "it": "Fuga precipitosa",
                "de": "Ansturm",
                "pt-br": "Debandada",
                "zh-tw": "踩踏"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
