import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    name: {
        en: "Kabuto",
        "fr": "Kabuto",
        "es": "kabuto",
        "it": "Kabuto",
        "de": "Kabuto",
        "pt-br": "Kabuto",
        "zh-tw": "兜"
    },
    illustrator: "Krgc",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    evolveFrom: {
        en: "Dome Fossil",
        "fr": "Fossile du Dôme",
        "es": "Fósil de cúpula",
        "it": "Cupola fossile",
        "de": "Kuppelfossil",
        "pt-br": "Cúpula Fóssil",
        "zh-tw": "圓頂化石"
    },
    description: {
        en: "This species is almost entirely extinct. Kabuto\nmolt every three days, making their shells harder\nand harder.",
        "fr": "Cette espèce est presque entièrement éteinte. Kabuto\nmuent tous les trois jours, rendant leur coquille plus dure\net plus dur.",
        "es": "Esta especie está casi completamente extinta. kabuto\nMudan cada tres días, lo que hace que sus caparazones sean más duros.\ny más duro.",
        "it": "Questa specie è quasi del tutto estinta. Kabuto\nmuta ogni tre giorni, rendendo i loro gusci più duri\ne più difficile.",
        "de": "Diese Art ist fast vollständig ausgestorben. Kabuto\nalle drei Tage häuten, wodurch ihre Schalen härter werden\nund härter.",
        "pt-br": "Esta espécie está quase totalmente extinta. Kabuto\nmudam a cada três dias, tornando suas conchas mais duras\ne mais difícil.",
        "zh-tw": "這個物種幾乎完全滅絕了。兜\n每三天換一次皮，使外殼變硬\n而且更難。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Shell Attack",
                "fr": "Attaque d'obus",
                "es": "Ataque de proyectil",
                "it": "Attacco con proiettili",
                "de": "Granatenangriff",
                "pt-br": "Ataque de concha",
                "zh-tw": "砲彈攻擊"
            },
            damage: 40,
            cost: ["Fighting"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
