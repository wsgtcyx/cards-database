import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    name: {
        en: "Stufful",
        es: "Stufful",
        "fr": "Bourré",
        "it": "Stupendo",
        "de": "Stoffig",
        "pt-br": "Recheado",
        "zh-tw": "童偶熊",
    },
    illustrator: "Kanako Eo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    description: {
        en: "Its fluffy fur is a delight to pet, but carelessly reaching out\nto touch this Pokémon could result in painful retaliation.",
        es: "Su suave pelaje invita a acariciarlo, pero quien cometa\nsemejante temeridad recibirá un severo escarmiento.",
        "fr": "Sa fourrure duveteuse est un plaisir à caresser, mais à tendre la main avec insouciance\ntoucher ce Pokémon pourrait entraîner des représailles douloureuses.",
        "it": "La sua soffice pelliccia è un piacere da accarezzare, ma si allunga con noncuranza\ntoccare questo Pokémon potrebbe provocare dolorose ritorsioni.",
        "de": "Es ist eine Freude, sein flauschiges Fell zu streicheln, wenn man es jedoch achtlos ausstreckt\nDas Berühren dieses Pokémon könnte zu einer schmerzhaften Vergeltung führen.",
        "pt-br": "Seu pelo fofo é uma delícia para acariciar, mas estende a mão descuidadamente\ntocar neste Pokémon pode resultar em retaliação dolorosa.",
        "zh-tw": "它蓬鬆的皮毛讓寵物很高興，但不小心伸出手\n觸摸這只神奇寶貝可能會導致痛苦的報復。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Ram",
                es: "Apisonar",
                "fr": "Bélier",
                "it": "Ram",
                "de": "RAM",
                "pt-br": "Bater",
                "zh-tw": "內存"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2,
    boosters: []
};
export default card;
