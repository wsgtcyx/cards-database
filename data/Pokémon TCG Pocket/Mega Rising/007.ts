import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Dustox",
        "fr": "Dustox",
        "es": "polvoox",
        "it": "Dustox",
        "de": "Dustox",
        "pt-br": "Dustox",
        "zh-tw": "毒粉蝶",
    },
    illustrator: "Midori Harada",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Grass"],
    evolveFrom: {
        en: "Cascoon",
        "fr": "Cascoon",
        "es": "cascoon",
        "it": "Cascoon",
        "de": "Kaskon",
        "pt-br": "Cascão",
        "zh-tw": "盾甲繭",
    },
    description: {
        en: "It violently flutters its wings to scatter toxic dust\nwhen attacked. It becomes active after sunset.",
        "fr": "Il bat violemment des ailes pour disperser la poussière toxique\nlorsqu'il est attaqué. Il devient actif après le coucher du soleil.",
        "es": "Agita violentamente sus alas para esparcir polvo tóxico.\ncuando es atacado. Se vuelve activo después del atardecer.",
        "it": "Sbatte violentemente le ali per disperdere polvere tossica\nquando attaccato. Diventa attivo dopo il tramonto.",
        "de": "Es schlägt heftig mit den Flügeln, um giftigen Staub zu verstreuen\nwenn angegriffen. Es wird nach Sonnenuntergang aktiv.",
        "pt-br": "Ele bate as asas violentamente para espalhar poeira tóxica\nquando atacado. Torna-se ativo após o pôr do sol.",
        "zh-tw": "它猛烈地扇動翅膀，驅散有毒的粉塵\n當受到攻擊時。日落後它變得活躍。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Select Powder",
                "fr": "Sélectionnez la poudre",
                "es": "Seleccionar polvo",
                "it": "Seleziona Polvere",
                "de": "Wählen Sie Pulver",
                "pt-br": "Selecione Pó",
                "zh-tw": "選擇粉末"
            },
            damage: 60,
            cost: ["Grass"],
            effect: {
                en: "Choose either Poisoned or Confused. Your opponent's Active Pokémon is now affected by that Special Condition.",
                "fr": "Choisissez Empoisonné ou Confus. Le Pokémon Actif de votre adversaire est désormais affecté par cette Condition Spéciale.",
                "es": "Elige entre Envenenado o Confundido. El Pokémon Activo de tu rival ahora se ve afectado por esa Condición Especial.",
                "it": "Scegli Avvelenato o Confuso. Il Pokémon attivo del tuo avversario è ora influenzato da quella condizione speciale.",
                "de": "Wählen Sie entweder „Vergiftet“ oder „Verwirrt“. Das Aktive Pokémon deines Gegners ist nun von diesem Sonderzustand betroffen.",
                "pt-br": "Escolha Envenenado ou Confuso. O Pokémon Ativo do seu oponente agora é afetado por essa Condição Especial.",
                "zh-tw": "選擇中毒或困惑。你對手的活躍神奇寶貝現在受到該特殊狀態的影響。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
