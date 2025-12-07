import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Donphan",
        "fr": "Donphan",
        "es": "Donphan",
        "it": "Donphan",
        "de": "Donphan",
        "pt-br": "Donphan",
        "zh-tw": "頓甲",
    },
    illustrator: "Kagemaru Himeno",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fighting"],
    evolveFrom: {
        en: "Phanpy",
        "fr": "Phanpy",
        "es": "fanpy",
        "it": "Fanpy",
        "de": "Phanpy",
        "pt-br": "Fanpy",
        "zh-tw": "小小象",
    },
    description: {
        en: "Donphan is covered in tough hide, so even being\nhit by a car won't faze this Pokémon. However, it\nis extremely susceptible to rain.",
        "fr": "Donphan est couvert d'une peau dure, donc même s'il est\nheurté par une voiture ne dérangera pas ce Pokémon. Cependant, il\nest extrêmement sensible à la pluie.",
        "es": "Donphan está cubierto de piel dura, por lo que incluso siendo\natropellado por un coche no perturbará a este Pokémon. Sin embargo,\nes extremadamente susceptible a la lluvia.",
        "it": "Donphan è ricoperto di pelle dura, quindi anche lo è\ninvestito da un'auto non spaventerà questo Pokémon. Tuttavia, esso\nè estremamente suscettibile alla pioggia.",
        "de": "Donphan ist mit zäher Haut bedeckt, also ebenmäßig\nWenn es von einem Auto angefahren wird, wird dieses Pokémon nicht aus der Fassung gebracht. Allerdings ist es\nist extrem anfällig für Regen.",
        "pt-br": "Donphan é coberto por uma pele dura, então mesmo sendo\natropelado por um carro não intimidará este Pokémon. No entanto,\né extremamente suscetível à chuva.",
        "zh-tw": "唐凡全身覆蓋著堅韌的獸皮，所以即使是\n被車撞不會讓這只神奇寶貝感到困擾。然而，它\n極易受雨影響。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Exoskeleton",
                "fr": "Exosquelette",
                "es": "exoesqueleto",
                "it": "Esoscheletro",
                "de": "Exoskelett",
                "pt-br": "Exoesqueleto",
                "zh-tw": "外骨骼"
            },
            effect: {
                en: "This Pokémon takes −20 damage from attacks.",
                "fr": "Ce Pokémon subit -20 dégâts des attaques.",
                "es": "Este Pokémon recibe −20 de daño por ataques.",
                "it": "Questo Pokémon subisce -20 danni dagli attacchi.",
                "de": "Dieses Pokémon erleidet −20 Schaden durch Angriffe.",
                "pt-br": "Este Pokémon sofre -20 de dano de ataques.",
                "zh-tw": "這只神奇寶貝受到的攻擊傷害為 -20。"
            }
        }],
    attacks: [{
            name: {
                en: "Land Crush",
                "fr": "Écrasement de terre",
                "es": "Aplastamiento de la tierra",
                "it": "Schiacciamento della terra",
                "de": "Land Crush",
                "pt-br": "Esmagamento terrestre",
                "zh-tw": "土地擠壓"
            },
            damage: 80,
            cost: ["Fighting", "Fighting", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 4
};
export default card;
