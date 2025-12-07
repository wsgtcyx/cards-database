import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Alolan Muk ex",
        "fr": "Alolan Muk ex",
        "es": "Muk de Alola ex",
        "it": "Alolan Muk ex",
        "de": "Alolan Muk ex",
        "pt-br": "Ex-Alolan Muk",
        "zh-tw": "阿羅蘭·穆克超級"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Darkness"],
    evolveFrom: {
        en: "Alolan Grimer",
        "fr": "Alolan Grimer",
        "es": "Grimer de Alola",
        "it": "Grimer di Alola",
        "de": "Alolan Grimer",
        "pt-br": "Alola Grimer",
        "zh-tw": "阿羅蘭·格里默"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Chemical Panic",
                "fr": "Panique chimique",
                "es": "Pánico químico",
                "it": "Panico chimico",
                "de": "Chemische Panik",
                "pt-br": "Pânico Químico",
                "zh-tw": "化學恐慌"
            },
            damage: 80,
            cost: ["Darkness", "Darkness", "Colorless"],
            effect: {
                en: "1 Special Condition from among Asleep, Burned, Confused, Paralyzed, and Poisoned is chosen at random, and your opponent's Active Pokémon is now affected by that Special Condition. Any Special Conditions already affecting that Pokémon will not be chosen.",
                "fr": "1 Condition Spéciale parmi Endormi, Brûlé, Confus, Paralysé et Empoisonné est choisie au hasard, et le Pokémon Actif de votre adversaire est désormais affecté par cette Condition Spéciale. Les Conditions Spéciales affectant déjà ce Pokémon ne seront pas choisies.",
                "es": "Se elige al azar 1 Condición Especial entre Dormido, Quemado, Confundido, Paralizado y Envenenado, y el Pokémon Activo de tu rival ahora se ve afectado por esa Condición Especial. Cualquier Condición Especial que ya afecte a ese Pokémon no será elegida.",
                "it": "Viene scelta casualmente 1 condizione speciale tra Addormentato, Bruciato, Confuso, Paralizzato e Avvelenato e il Pokémon attivo del tuo avversario è ora influenzato da quella condizione speciale. Eventuali condizioni speciali che già influenzano quel Pokémon non verranno scelte.",
                "de": "1 besonderer Zustand aus den Kategorien „Schlafend“, „Verbrannt“, „verwirrt“, „gelähmt“ und „vergiftet“ wird zufällig ausgewählt und das aktive Pokémon deines Gegners ist nun von diesem besonderen Zustand betroffen. Alle besonderen Bedingungen, die dieses Pokémon bereits betreffen, werden nicht ausgewählt.",
                "pt-br": "1 Condição Especial entre Adormecido, Queimado, Confuso, Paralisado e Envenenado é escolhida aleatoriamente, e o Pokémon Ativo do seu oponente agora é afetado por essa Condição Especial. Quaisquer Condições Especiais que já afetem esse Pokémon não serão escolhidas.",
                "zh-tw": "從睡眠、燒傷、混亂、麻痺和中毒中隨機選擇 1 個特殊狀態，對手的活躍神奇寶貝現在受到該特殊狀態的影響。任何已經影響該神奇寶貝的特殊情況都不會被選擇。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
