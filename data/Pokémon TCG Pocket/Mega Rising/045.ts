import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/045",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/045",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/045",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/045",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/045",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/045",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/045"
    },
    name: {
        en: "Litleo",
        "fr": "Hélionceau",
        "es": "Litleo",
        "it": "Litleo",
        "de": "Leufeo",
        "pt-br": "Litleo",
        "zh-tw": "小獅獅",
    },
    illustrator: "Misa Tsutsui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
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
                en: "Live Coal",
                "fr": "Charbon vivant",
                "es": "Carbón vivo",
                "it": "Carbone vivo",
                "de": "Lebende Kohle",
                "pt-br": "Carvão Vivo",
                "zh-tw": "生煤"
            },
            damage: 20,
            cost: ["Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
