import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Lapras",
        "fr": "Lapras",
        "es": "Lapras",
        "it": "Lapras",
        "de": "Lapras",
        "pt-br": "Lapras",
        "zh-tw": "拉普拉斯"
    },
    illustrator: "Nelnal",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    description: {
        en: "A smart and kindhearted Pokémon,\nit glides across the surface of the sea while\nits beautiful song echoes around it.",
        "fr": "Un Pokémon intelligent et bienveillant,\nil glisse à la surface de la mer tandis que\nsa belle chanson résonne autour de lui.",
        "es": "Un Pokémon inteligente y de buen corazón,\nse desliza por la superficie del mar mientras\nsu hermoso canto resuena a su alrededor.",
        "it": "Un Pokémon intelligente e di buon cuore,\nscivola sulla superficie del mare mentre\nintorno ad esso risuona il suo bel canto.",
        "de": "Ein kluges und gutherziges Pokémon,\nes gleitet dabei über die Meeresoberfläche\nSein wunderschönes Lied hallt um ihn herum wider.",
        "pt-br": "Um Pokémon inteligente e de bom coração,\nele desliza pela superfície do mar enquanto\nsua bela canção ecoa ao seu redor.",
        "zh-tw": "聰明又善良的寶可夢，\n它滑過海面，同時\n它優美的歌聲在周圍迴響。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Hydro Pump",
                "fr": "Pompe hydraulique",
                "es": "Bomba hidráulica",
                "it": "Pompa idroelettrica",
                "de": "Hydropumpe",
                "pt-br": "Bomba Hidro",
                "zh-tw": "液壓泵"
            },
            damage: 20,
            cost: ["Water"],
            effect: {
                en: "If this Pokémon has at least 3 extra {W} Energy attached, this attack does 70 more damage.",
                "fr": "Si ce Pokémon a au moins 3 Énergies {W} supplémentaires attachées, cette attaque inflige 70 dégâts supplémentaires.",
                "es": "Si este Pokémon tiene al menos 3 Energías {W} extra unidas, este ataque hace 70 puntos de daño más.",
                "it": "Se questo Pokémon ha almeno tre Energie {W} extra assegnate, questo attacco infligge 70 danni in più.",
                "de": "Wenn an dieses Pokémon mindestens 3 zusätzliche {W}-Energien angelegt sind, fügt dieser Angriff 70 Schadenspunkte mehr zu.",
                "pt-br": "Se este Pokémon tiver pelo menos 3 energias {W} extras anexadas, este ataque causará 70 de dano a mais.",
                "zh-tw": "如果這只神奇寶貝附加了至少 3 個額外的 {W} 能量，則此攻擊造成的傷害增加 70 點。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
