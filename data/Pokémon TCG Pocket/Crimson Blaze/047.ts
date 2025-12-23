import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Purrloin",
        "fr": "Chacripan",
        "es": "Purrloin",
        "it": "Purrloin",
        "de": "Felilou",
        "pt-br": "Purrloin",
        "zh-tw": "扒手貓"
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "Opponents that get drawn in by its adorable\nbehavior come away with stinging scratches from\nits claws and stinging pride from its laughter.",
        "fr": "Des adversaires attirés par son adorable\nle comportement s'en va avec des égratignures cuisantes de\nses griffes et la fierté piquante de son rire.",
        "es": "Oponentes que se sienten atraídos por su adorable\ncomportamiento sale con rasguños punzantes de\nsus garras y el orgullo punzante de su risa.",
        "it": "Avversari che vengono attratti dalla sua adorabile\ncomportamento viene via con graffi pungenti\ni suoi artigli e l'orgoglio pungente delle sue risate.",
        "de": "Gegner, die sich von seiner Liebenswürdigkeit anziehen lassen\nVerhalten kommt mit stechenden Kratzern weg\nseine Krallen und der stechende Stolz seines Lachens.",
        "pt-br": "Oponentes que são atraídos por seu adorável\ncomportamento sai com arranhões dolorosos de\nsuas garras e o orgulho pungente de sua risada.",
        "zh-tw": "被其可愛所吸引的對手\n行為會隨著刺痛的划痕而消失\n它的爪子和笑聲帶來的刺痛的驕傲。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Trip Over",
                "fr": "Voyage terminé",
                "es": "Tropezar",
                "it": "Inciampare",
                "de": "Stolpern vorbei",
                "pt-br": "Viagem",
                "zh-tw": "絆倒"
            },
            damage: 10,
            cost: ["Darkness"],
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                "fr": "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
                "es": "Lanza una moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                "it": "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                "de": "Wirf eine Münze. Bei „Kopf“ verursacht dieser Angriff 30 weitere Schadenspunkte.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 30 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 30 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
