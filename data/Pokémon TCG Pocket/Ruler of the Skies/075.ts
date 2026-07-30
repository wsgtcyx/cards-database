import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/075"
    },
    name: {
        en: "Woobat",
        fr: "Chovsourir",
        es: "Woobat",
        it: "Woobat",
        de: "Fleknoil",
        "pt-br": "Woobat",
        "zh-tw": "滾滾蝙蝠",
        ko: "또르박쥐",
        ja: "コロモリ"
    },
    illustrator: "Shibuzoh.",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    dexId: [527],
    stage: "Basic",
    description: {
        en: "It emits ultrasonic waves as it flutters about, searching for its prey—bug Pokémon.",
        fr: "Il virevolte gaiement et émet des ultrasons\npour trouver des Pokémon Insecte à grignoter.",
        es: "Emite ultrasonidos mientras revolotea en busca\nde los Pokémon insecto con los que se sustenta.",
        it: "Svolazza emettendo ultrasuoni in cerca\ndi Pokémon di tipo Coleottero, di cui si nutre.",
        de: "Es fliegt umher und sendet Ultraschallwellen aus,\num Käfer-Pokémon aufzuspüren, welche ihm als\nNahrung dienen.",
        "zh-tw": "一邊發出超音波，一邊\n飛來飛去尋找蟲寶可夢\n來填飽自己的肚子。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Air Cutter",
                fr: "Tranch’Air",
                es: "Aire Afilado",
                it: "Aerasoio",
                de: "Windschnitt",
                "zh-tw": "空氣利刃"
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
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
