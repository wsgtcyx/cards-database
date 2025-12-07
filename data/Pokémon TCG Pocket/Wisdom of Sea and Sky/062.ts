import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Ducklett",
        "fr": "Canard",
        "es": "patito",
        "it": "Ducklett",
        "de": "Ducklett",
        "pt-br": "Patinho",
        "zh-tw": "達克利特"
    },
    illustrator: "MAHOU",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "When attacked, it uses its feathers to splash water,\nescaping under cover of the spray.",
        "fr": "Lorsqu'il est attaqué, il utilise ses plumes pour projeter de l'eau,\ns'échappant sous le couvert des embruns.",
        "es": "Cuando es atacado, utiliza sus plumas para salpicar agua,\nescapando al amparo del spray.",
        "it": "Quando viene attaccato, usa le sue piume per schizzare l'acqua,\nscappare sotto la copertura degli spruzzi.",
        "de": "Wenn es angegriffen wird, spritzt es mit seinen Federn Wasser,\nunter dem Schutz des Sprays entweicht.",
        "pt-br": "Quando atacado, usa suas penas para espirrar água,\nescapando sob a cobertura do spray.",
        "zh-tw": "當受到攻擊時，它會用羽毛濺水，\n在噴霧的掩護下逃脫。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Rain Splash",
                "fr": "Éclaboussure de pluie",
                "es": "Salpicaduras de lluvia",
                "it": "Spruzzi di pioggia",
                "de": "Regenspritzer",
                "pt-br": "Respingo de chuva",
                "zh-tw": "雨濺"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
