import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Litten",
        "fr": "Litten",
        "es": "litten",
        "it": "Litten",
        "de": "Litten",
        "pt-br": "Litten",
        "zh-tw": "火斑喵",
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    description: {
        en: "If you try too hard to get close to it, it won't\nopen up to you. Even if you do grow close,\ngiving it too much affection is still a no-no.",
        "fr": "Si vous essayez trop de vous en approcher, ce ne sera pas le cas.\ns'ouvrir à vous. Même si tu te rapproches,\nlui donner trop d'affection est toujours un non-non.",
        "es": "Si intentas demasiado acercarte a él, no lo hará.\nabrirse a ti. Incluso si te acercas,\ndarle demasiado cariño sigue siendo un no-no.",
        "it": "Se ti sforzi troppo per avvicinarti ad esso, non lo farà\naprirmi a te. Anche se ti avvicini,\ndargli troppo affetto è ancora un no-no.",
        "de": "Wenn man sich zu sehr anstrengt, sich ihm zu nähern, wird es nicht funktionieren\nöffne mich dir. Auch wenn Sie sich näher kommen,\nEs ist immer noch ein Tabu, ihm zu viel Zuneigung zu schenken.",
        "pt-br": "Se você tentar muito chegar perto disso, não vai\nse abra para você. Mesmo que você se aproxime,\ndar muito carinho ainda é proibido.",
        "zh-tw": "如果你太努力去接近它，它不會\n向你敞開心扉。就算你們的關係越來越親近，\n給予它太多的感情仍然是一個禁忌。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Heat Tackle",
                "fr": "S'attaquer à la chaleur",
                "es": "Abordaje de calor",
                "it": "Affronto di calore",
                "de": "Hitzegerät",
                "pt-br": "Equipamento térmico",
                "zh-tw": "熱力鏟球"
            },
            damage: 30,
            cost: ["Fire"],
            effect: {
                en: "This Pokémon also does 10 damage to itself.",
                "fr": "Ce Pokémon s'inflige également 10 dégâts.",
                "es": "Este Pokémon también se hace 10 daños a sí mismo.",
                "it": "Questo Pokémon infligge anche 10 danni a se stesso.",
                "de": "Dieses Pokémon fügt sich selbst außerdem 10 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 10 de dano a si mesmo.",
                "zh-tw": "該神奇寶貝也會對其自身造成 10 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
