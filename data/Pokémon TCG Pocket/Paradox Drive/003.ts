import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/003",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/003"
    },
    name: {
        en: "Brute Bonnet",
        fr: "Fongus-Furie",
        es: "Furioseta",
        it: "Fungofurioso",
        de: "Wutpilz",
        "pt-br": "Capuz Bruto",
        "zh-tw": "猛惡菇",
        ko: "사나운버섯",
        ja: "アラブルタケ"
    },
    illustrator: "Anesaki Dynamic",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Grass"],
    dexId: [986],
    stage: "Basic",
    description: {
        en: "It bears a slight resemblance to a Pokémon described in a dubious magazine as a cross between a dinosaur and a mushroom.",
        fr: "Il ressemble légèrement à un Pokémon décrit dans un magazine douteux comme un croisement entre un dinosaure et un champignon.",
        es: "Tiene un ligero parecido con un Pokémon descrito en una revista dudosa como un cruce entre un dinosaurio y un hongo.",
        it: "Ha una leggera somiglianza con un Pokémon descritto in una rivista dubbia come un incrocio tra un dinosauro e un fungo.",
        de: "Es hat eine leichte Ähnlichkeit mit einem Pokémon, das in einer dubiosen Zeitschrift als Kreuzung zwischen einem Dinosaurier und einem Pilz beschrieben wird.",
        "pt-br": "Tem uma ligeira semelhança com um Pokémon descrito em uma revista duvidosa como um cruzamento entre um dinossauro e um cogumelo.",
        "zh-tw": "它與一本可疑雜誌中描述的恐龍和蘑菇雜交的寶可夢略有相似。"
    },
    attacks: [
        {
            cost: ["Grass", "Colorless"],
            name: {
                en: "Spirited Smack",
                fr: "Smack fougueux",
                es: "Golpe enérgico",
                it: "Schiaffo vivace",
                de: "Temperamentvoller Schlag",
                "pt-br": "Golpe Espirituoso",
                "zh-tw": "威猛強打"
            },
            effect: {
                en: "Flip a coin. If tails, this attack does nothing.",
                fr: "Lancez une pièce de monnaie. Si c’est pile, cette attaque ne fait rien.",
                es: "Lanza una moneda. Si sale cruz, este ataque no hace nada.",
                it: "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto.",
                de: "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts.",
                "pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada.",
                "zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。"
            },
            damage: 90
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
