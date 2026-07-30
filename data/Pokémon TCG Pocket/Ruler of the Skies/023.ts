import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/023"
    },
    name: {
        en: "Moltres",
        fr: "Sulfura",
        es: "Moltres",
        it: "Moltres",
        de: "Lavados",
        "pt-br": "Moltres",
        "zh-tw": "火焰鳥",
        ko: "파이어",
        ja: "ファイヤー"
    },
    illustrator: "Ken Sugimori",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fire"],
    dexId: [146],
    stage: "Basic",
    description: {
        en: "There are stories of this Pokémon using its radiant, flame-cloaked wings to light up paths for those lost in the mountains.",
        fr: "On raconte qu’il a sauvé des personnes perdues\nen montagne en illuminant les sentiers à l’aide\nde ses splendides ailes flamboyantes.",
        es: "Se cuenta que alguna vez ha iluminado el camino\ncon sus alas flamígeras para rescatar a alguien\nque se había perdido en la montaña.",
        it: "Si narra che abbia aiutato dei viandanti che si\nerano persi illuminando i sentieri montuosi con\nle splendide ali infuocate.",
        de: "Überlieferungen nach soll Lavados mit seinen\nwunderschön lodernden Flügeln Bergpfade\nerleuchtet und dadurch Verirrten geholfen haben.",
        "zh-tw": "相傳牠會以美麗燃燒的\n翅膀照亮山路，救助在\n山中遇險的人。"
    },
    attacks: [
        {
            cost: ["Fire", "Colorless", "Colorless", "Colorless"],
            name: {
                en: "Sky Attack",
                fr: "Attaque du ciel",
                es: "Ataque al cielo",
                it: "Attacco al cielo",
                de: "Himmelsangriff",
                "pt-br": "Ataque Celestial",
                "zh-tw": "神鳥猛擊"
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
            damage: 150
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
