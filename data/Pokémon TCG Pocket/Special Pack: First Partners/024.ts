import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/024",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/024",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/024",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/024",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/024",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/024",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/024"
    },
    name: {
        en: "Sobble",
        fr: "Larméléon",
        es: "Sobble",
        "pt-br": "Sobble",
        "zh-tw": "淚眼蜥",
        ja: "メッソン",
        ko: "울머기",
        it: "Sobble",
        de: "Memmeon"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: [
        "Water"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Water Gun",
                fr: "Pistolet à O",
                es: "Pistola Agua",
                it: "Pistolacqua",
                de: "Aquaknarre",
                "pt-br": "Revólver d'Água",
                "zh-tw": "水槍",
                ja: "Water Gun",
                ko: "Water Gun"
            },
            cost: [
                "Colorless",
                "Water"
            ],
            damage: 40
        }
    ],
    abilities: [],
    description: {
        en: "When scared, this Pokémon cries. Its tears pack the chemical punch of 100 onions, and attackers won’t be able to resist weeping.",
        fr: "Quand il a peur, il pleure des larmes contenant une substance lacrymogène d’une puissance équivalente à celle de cent oignons.",
        es: "Cuando se asusta, llora. Unas lágrimas con un factor lacrimógeno equivalente a 100 cebollas para hacer llorar también al rival.",
        it: "Se si spaventa, produce lacrime con un fattore lacrimogeno cento volte più potente di quello di una cipolla, per far piangere anche i nemici.",
        de: "Hat es Angst, vergießt es Tränen, die Reizstoffe enthalten, welche andere genauso zum Weinen bringen. Sie sind so effektiv wie 100 Zwiebeln.",
        "pt-br": "Este Pokémon chora quando está assustado. Suas lágrimas concentram o poder de cem cebolas e aqueles que ousarem atacá-lo não conseguirão deixar de chorar também.",
        "zh-tw": "害怕時流下的淚水中含有 相當於１００顆洋蔥的催淚成分， 能讓對手淚流不止。",
        ja: "When scared, this Pokémon cries. Its tears pack the chemical punch of 100 onions, and attackers won’t be able to resist weeping.",
        ko: "When scared, this Pokémon cries. Its tears pack the chemical punch of 100 onions, and attackers won’t be able to resist weeping."
    }
};

export default card;
