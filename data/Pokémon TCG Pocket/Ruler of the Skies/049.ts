import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/049",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/049",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/049",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/049",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/049"
    },
    name: {
        en: "Pikachu",
        fr: "Pikachu",
        es: "Pikachu",
        it: "Pikachu",
        de: "Pikachu",
        "pt-br": "Pikachu",
        "zh-tw": "皮卡丘",
        ko: "피카츄",
        ja: "ピカチュウ"
    },
    illustrator: "Kariya",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    dexId: [25],
    stage: "Basic",
    description: {
        en: "When several of these POKéMON gather, their electricity can build and cause lightning storms."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Growl",
                fr: "Rugissement",
                es: "Gruñido",
                it: "Ruggito",
                de: "Heuler",
                "pt-br": "Rosnadura",
                "zh-tw": "叫聲"
            },
            effect: {
                en: "During your opponent's next turn, attacks used by the Defending Pokémon do −20 damage.",
                fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent − 20 dégâts.",
                es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen -20 puntos de daño.",
                "pt-br": "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão −20 pontos de dano.",
                "zh-tw": "在下個對手的回合,受到這個招式的寶可夢使用招式的傷害-20點。"
            }
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
