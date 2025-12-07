import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Terrakion",
        "fr": "Terrakion",
        "es": "Terrakión",
        "it": "Terrakion",
        "de": "Terrakion",
        "pt-br": "Terrakion",
        "zh-tw": "特拉基翁"
    },
    illustrator: "Takeshi Nakamura",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fighting"],
    description: {
        en: "It has phenomenal power. It will mercilessly crush\nanyone or anything that bullies small Pokémon.",
        "fr": "Il a un pouvoir phénoménal. Il écrasera sans pitié\nquiconque ou quoi que ce soit qui intimide les petits Pokémon.",
        "es": "Tiene un poder fenomenal. Aplastará sin piedad\ncualquier persona o cosa que intimide a los Pokémon pequeños.",
        "it": "Ha un potere fenomenale. Lo schiaccerà senza pietà\nchiunque o qualunque cosa faccia il prepotente contro i Pokémon piccoli.",
        "de": "Es hat eine phänomenale Kraft. Es wird gnadenlos zermalmen\nirgendjemand oder irgendetwas, das kleine Pokémon schikaniert.",
        "pt-br": "Tem um poder fenomenal. Ele irá esmagar impiedosamente\nqualquer pessoa ou qualquer coisa que intimide pequenos Pokémon.",
        "zh-tw": "它具有驚人的力量。它將無情地碾壓\n任何欺負小神奇寶貝的人或事物。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sacred Sword",
                "fr": "Épée sacrée",
                "es": "Espada Sagrada",
                "it": "Spada Sacra",
                "de": "Heiliges Schwert",
                "pt-br": "Espada Sagrada",
                "zh-tw": "聖劍"
            },
            damage: 110,
            cost: ["Fighting", "Fighting", "Colorless"],
            effect: {
                en: "During your next turn, this Pokémon can't use Sacred Sword.",
                "fr": "Lors de votre prochain tour, ce Pokémon ne pourra pas utiliser l'Épée Sacrée.",
                "es": "Durante tu próximo turno, este Pokémon no puede usar Espada Sagrada.",
                "it": "Durante il tuo prossimo turno, questo Pokémon non può usare la Spada Sacra.",
                "de": "Während deines nächsten Zuges kann dieses Pokémon Sacred Sword nicht verwenden.",
                "pt-br": "Durante o seu próximo turno, este Pokémon não poderá usar Sacred Sword.",
                "zh-tw": "在你的下一個回合中，這只神奇寶貝不能使用聖劍。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 3
};
export default card;
