import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/023",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/023",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/023",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/023",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/023",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/023",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/023"
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
                fr: "Piqué",
                es: "Ataque Aéreo",
                it: "Attacco al cielo",
                de: "Himmelsangriff",
                "pt-br": "Ataque do Céu",
                "zh-tw": "神鳥猛擊"
            },
            effect: {
                en: "Flip a coin. If tails, this attack does nothing.",
                fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
                es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
                it: "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto.",
                de: "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts.",
                "pt-br": "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
                "zh-tw": "擲1次硬幣若為反面,則這個招式失敗。"
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
