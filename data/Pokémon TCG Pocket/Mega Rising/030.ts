import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Ponyta",
        "fr": "Ponyta",
        "es": "ponyta",
        "it": "Ponyta",
        "de": "Ponyta",
        "pt-br": "Ponyta",
        "zh-tw": "小火馬",
    },
    illustrator: "Jiro Sasumo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    description: {
        en: "If you've been accepted by Ponyta, its burning\nmane is mysteriously no longer hot to the touch.",
        "fr": "Si tu as été accepté par Ponyta, ça brûle\nla crinière n'est mystérieusement plus chaude au toucher.",
        "es": "Si Ponyta te ha aceptado, está ardiendo.\nLa melena misteriosamente ya no está caliente al tacto.",
        "it": "Se sei stato accettato da Ponyta, sarà bruciato\nla criniera misteriosamente non è più calda al tatto.",
        "de": "Wenn Sie von Ponyta akzeptiert wurden, brennt es\nMeine Mähne fühlt sich seltsamerweise nicht mehr heiß an.",
        "pt-br": "Se você foi aceito por Ponyta, está queimando\na juba misteriosamente não está mais quente ao toque.",
        "zh-tw": "如果你被 Ponyta 接受了，它就會燃燒\n鬃毛摸起來不再那麼熱了。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Combustion",
                "fr": "Combustion",
                "es": "Combustión",
                "it": "Combustione",
                "de": "Verbrennung",
                "pt-br": "Combustão",
                "zh-tw": "燃燒"
            },
            damage: 40,
            cost: ["Fire", "Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
