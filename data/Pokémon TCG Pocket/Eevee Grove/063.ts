import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Cinccino",
        "fr": "Cinccino",
        "es": "Cinccino",
        "it": "Cincino",
        "de": "Cinccino",
        "pt-br": "Cinccino",
        "zh-tw": "奇諾栗鼠",
    },
    illustrator: "Mizue",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    evolveFrom: {
        en: "Minccino",
        "fr": "Minccino",
        "es": "Minccino",
        "it": "Minccino",
        "de": "Minccino",
        "pt-br": "Mincino",
        "zh-tw": "明奇諾"
    },
    description: {
        en: "Its body secretes oil that this Pokémon spreads\nover its nest as a coating to protect it from dust.\nCinccino won't tolerate even a speck of the stuff.",
        "fr": "Son corps sécrète de l'huile que ce Pokémon répand\nsur son nid comme revêtement pour le protéger de la poussière.\nCinccino ne tolérera même pas la moindre parcelle de ce genre de choses.",
        "es": "Su cuerpo segrega aceite que este Pokémon esparce\nsobre su nido como una capa para protegerlo del polvo.\nCinccino no tolera ni una pizca de esa sustancia.",
        "it": "Il suo corpo secerne olio che questo Pokémon diffonde\nsopra il suo nido come rivestimento per proteggerlo dalla polvere.\nCinccino non tollererà nemmeno un briciolo di quella roba.",
        "de": "Sein Körper sondert Öl ab, das dieses Pokémon verbreitet\nüber seinem Nest als Beschichtung, um es vor Staub zu schützen.\nCinccino duldet nicht einmal ein bisschen davon.",
        "pt-br": "Seu corpo secreta óleo que este Pokémon espalha\nsobre seu ninho como um revestimento para protegê-lo da poeira.\nCinccino não tolera nem um pouquinho dessa coisa.",
        "zh-tw": "它的身體會分泌這種神奇寶貝傳播的油\n在它的巢上作為塗層，以保護它免受灰塵侵害。\n辛奇諾連一丁點都不能容忍。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Slap",
                "fr": "Gifler",
                "es": "Bofetada",
                "it": "Schiaffo",
                "de": "Schlagen",
                "pt-br": "Tapa",
                "zh-tw": "拍擊"
            },
            damage: 40,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
