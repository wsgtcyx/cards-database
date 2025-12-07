import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Bellossom",
        "fr": "Bellossom",
        "es": "Bellossom",
        "it": "Bellossom",
        "de": "Bellossom",
        "pt-br": "Belo",
        "zh-tw": "貝洛索姆"
    },
    illustrator: "Nagomi Nijo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Grass"],
    evolveFrom: {
        en: "Gloom",
        "fr": "Obscurité",
        "es": "Oscuridad",
        "it": "Tristezza",
        "de": "Düsternis",
        "pt-br": "Melancolia",
        "zh-tw": "愁雲"
    },
    description: {
        en: "Plentiful in the tropics. When it dances, its petals\nrub together and make a pleasant ringing sound.",
        "fr": "Abondant sous les tropiques. Quand il danse, ses pétales\nfrottez ensemble et faites une sonnerie agréable.",
        "es": "Abundante en los trópicos. Cuando baila, sus pétalos\nse frotan y emiten un agradable sonido de timbre.",
        "it": "Abbondante ai tropici. Quando balla, i suoi petali\nstrofinare insieme e produrre un piacevole suono squillante.",
        "de": "In den Tropen reichlich vorhanden. Wenn es tanzt, sind seine Blütenblätter\naneinander reiben und einen angenehmen Klang erzeugen.",
        "pt-br": "Abundante nos trópicos. Quando dança, suas pétalas\nesfregue e faça um som de toque agradável.",
        "zh-tw": "熱帶地區資源豐富。當它跳舞時，它的花瓣\n相互摩擦並發出悅耳的鈴聲。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Petal Dance",
                "fr": "Danse des pétales",
                "es": "danza de pétalos",
                "it": "Danza dei petali",
                "de": "Blütenblatttanz",
                "pt-br": "Dança das Pétalas",
                "zh-tw": "花瓣舞"
            },
            damage: 60,
            cost: ["Grass", "Grass"],
            effect: {
                en: "Flip 3 coins. This attack does 60 damage for each heads. This Pokémon is now Confused.",
                "fr": "Lancez 3 pièces. Cette attaque inflige 60 dégâts pour chaque tête. Ce Pokémon est désormais Confus.",
                "es": "Lanza 3 monedas. Este ataque hace 60 de daño por cada cabeza. Este Pokémon ahora está Confundido.",
                "it": "Lancia 3 monete. Questo attacco infligge 60 danni per ogni testa. Questo Pokémon ora è confuso.",
                "de": "Wirf 3 Münzen. Dieser Angriff verursacht 60 Schaden pro Kopf. Dieses Pokémon ist jetzt verwirrt.",
                "pt-br": "Jogue 3 moedas. Este ataque causa 60 de dano para cada cabeça. Este Pokémon agora está confuso.",
                "zh-tw": "翻轉 3 個硬幣。這次攻擊對每個頭造成 60 點傷害。這只神奇寶貝現在處於混亂狀態。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
