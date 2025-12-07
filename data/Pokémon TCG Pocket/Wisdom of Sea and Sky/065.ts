import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Lanturn ex",
        "fr": "Lanturn ex",
        "es": "Lanturn ex",
        "it": "Lanturn es",
        "de": "Lanturn ex",
        "pt-br": "Lanturn ex",
        "zh-tw": "燈籠EX"
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Lightning"],
    evolveFrom: {
        en: "Chinchou",
        "fr": "Chinchou",
        "es": "Chinchú",
        "it": "Chinchou",
        "de": "Chinchou",
        "pt-br": "Chinchou",
        "zh-tw": "欽州"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Flashing Signal",
                "fr": "Signal clignotant",
                "es": "Señal intermitente",
                "it": "Segnale lampeggiante",
                "de": "Blinkendes Signal",
                "pt-br": "Sinal piscando",
                "zh-tw": "閃爍信號"
            },
            damage: 80,
            cost: ["Lightning", "Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed. If tails, your opponent's Active Pokémon is now Confused.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Paralysé. Si c'est pile, le Pokémon Actif de votre adversaire est désormais Confus.",
                "es": "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado. Si sale cruz, el Pokémon Activo de tu rival ahora está Confundido.",
                "it": "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è paralizzato. Se esce croce, il Pokémon attivo del tuo avversario è confuso.",
                "de": "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt gelähmt. Bei „Zahl“ ist das Aktive Pokémon deines Gegners jetzt verwirrt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente ficará Paralisado. Se sair coroa, o Pokémon Ativo do seu oponente ficará Confuso.",
                "zh-tw": "拋一枚硬幣。如果正面，則對手的活躍神奇寶貝現在處於麻痺狀態。如果出現反面，則對手的活躍神奇寶貝現在處於混亂狀態。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
