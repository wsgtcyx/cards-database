import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/084"
    },
    name: { en: "Skitty", fr: "Skitty", es: "Skitty", it: "Skitty", de: "Eneco", "pt-br": "Skitty", "zh-tw": "向尾喵", ko: "에나비", ja: "エネコ" },
    illustrator: "Atsuko Nishida",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [300],
    stage: "Basic",
    attacks: [{
        cost: ["Colorless"],
        name: { en: "Whimsy Tackle", fr: "Charge Bizarre", es: "Placaje Caprichoso", it: "Capriccioazione", de: "Launischer Tackle", "pt-br": "Investida Fantástica", "zh-tw": "胡思亂撞" },
        effect: {
            en: "Flip a coin. If tails, this attack does nothing.", fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.", es: "Lanza una moneda. Si sale cruz, este ataque no hace nada.",
            it: "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto.", de: "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts.",
            "pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada.", "zh-tw": "擲1次硬幣若為反面，則這個招式失敗。"
        },
        damage: 40
    }],
    weaknesses: [{ type: "Fighting", value: "+20" }],
    retreat: 1,
    boosters: ["vol11"]
};

export default card;
