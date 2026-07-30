import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/129"
    },
    name: {
        en: "Rattata",
        fr: "Rattata",
        es: "Rattata",
        it: "Rattata",
        de: "Rattfratz",
        "pt-br": "Rattata",
        "zh-tw": "小拉達",
        ko: "꼬렛",
        ja: "コラッタ"
    },
    illustrator: "Yukiko Baba",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Colorless"],
    dexId: [19],
    stage: "Basic",
    description: {
        en: "This Pokémon is common but hazardous. Its sharp incisors can easily cut right through hard wood.",
        fr: "Prenez garde à ce Pokémon très répandu :\nses puissantes incisives sont si acérées\nqu’elles peuvent couper des troncs d’arbre.",
        es: "Un Pokémon muy extendido con el que conviene\ntener cuidado ya que sus afilados incisivos son\ncapaces de roer maderas nobles sin problema.",
        it: "È un Pokémon molto comune con il quale è\nmeglio fare attenzione: con i suoi incisivi affilati\npuò tranciare anche un’asse di legno durissimo.",
        de: "Ein weitverbreitetes Pokémon, das nicht ganz\nungefährlich ist. Selbst hartes Holz zerkleinert\nes mit seinen scharfen Nagezähnen mühelos.",
        "zh-tw": "雖然是常見的寶可夢，但還是要小心。\n銳利的門牙十分堅硬，\n就連木材也能輕易咬斷。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Surprise Attack",
                fr: "Attaque Surprise",
                es: "Ataque Sorpresa",
                it: "Attacco a Sorpresa",
                de: "Überraschungsangriff",
                "pt-br": "Ataque Surpresa",
                "zh-tw": "偷襲"
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
            damage: 40
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
