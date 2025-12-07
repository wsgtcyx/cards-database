import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Skorupi",
        "fr": "Skorupí",
        "es": "Skorupí",
        "it": "Skorupi",
        "de": "Skorupi",
        "pt-br": "Skorupi",
        "zh-tw": "紫天蠍",
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "It attacks using the claws on its tail. Once locked\nin its grip, its prey is unable to move as this\nPokémon's poison seeps in.",
        "fr": "Il attaque en utilisant les griffes de sa queue. Une fois verrouillé\nsous son emprise, sa proie est incapable de bouger car cela\nLe poison de Pokémon s'infiltre.",
        "es": "Ataca usando las garras de su cola. Una vez bloqueado\nen su agarre, su presa no puede moverse ya que esto\nEl veneno de Pokémon se filtra.",
        "it": "Attacca usando gli artigli sulla coda. Una volta bloccato\nnella sua presa, la sua preda non è in grado di muoversi\nIl veleno dei Pokémon penetra.",
        "de": "Es greift mit den Krallen an seinem Schwanz an. Einmal verschlossen\nIn seinem Griff kann sich seine Beute nicht so fortbewegen\nDas Gift des Pokémon dringt ein.",
        "pt-br": "Ele ataca usando as garras da cauda. Uma vez bloqueado\nem suas garras, sua presa é incapaz de se mover, pois isso\nO veneno do Pokémon penetra.",
        "zh-tw": "它使用尾巴上的爪子進行攻擊。一旦鎖定\n在它的控制下，它的獵物無法移動\n寶可夢的毒液滲入體內。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Bug Bite",
                "fr": "Morsure d'insecte",
                "es": "picadura de insecto",
                "it": "Morso di insetto",
                "de": "Insektenstich",
                "pt-br": "Mordida de inseto",
                "zh-tw": "蟲咬"
            },
            damage: 20,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
