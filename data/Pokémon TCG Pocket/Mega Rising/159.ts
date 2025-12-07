import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Skrelp",
        "fr": "Skrelp",
        "es": "Skrelp",
        "it": "Skrelp",
        "de": "Skrelp",
        "pt-br": "Skrelp",
        "zh-tw": "斯克雷爾普"
    },
    illustrator: "Mina Nakai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "This Pokémon is a poor swimmer. If it's caught in\na fierce storm, it will sometimes get washed far\naway and become unable to return to its home.",
        "fr": "Ce Pokémon est un mauvais nageur. S'il est pris dans\nune violente tempête, elle sera parfois emportée loin\nloin et devient incapable de retourner chez lui.",
        "es": "Este Pokémon es un mal nadador. Si está atrapado en\nuna tormenta feroz, a veces será arrastrada lejos\nalejarse y no poder regresar a su hogar.",
        "it": "Questo Pokémon è un pessimo nuotatore. Se è intrappolato\nuna violenta tempesta, a volte verrà trascinata lontano\nallontanarsi e diventare incapace di tornare a casa.",
        "de": "Dieses Pokémon ist ein schlechter Schwimmer. Wenn es sich verfängt\nein heftiger Sturm, der manchmal weit weggeschwemmt wird\nweg und kann nicht mehr in seine Heimat zurückkehren.",
        "pt-br": "Este Pokémon é um péssimo nadador. Se estiver preso\numa tempestade feroz, às vezes será levada longe\nlonge e se torna incapaz de retornar para sua casa.",
        "zh-tw": "這只神奇寶貝游泳技術很差。如果它被夾在\n一場猛烈的風暴，有時會被沖得很遠\n離開並無法返回其家。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Razor Fin",
                "fr": "Aileron de rasoir",
                "es": "Aleta de afeitar",
                "it": "Pinna di rasoio",
                "de": "Rasiermesserflosse",
                "pt-br": "Barbatana Navalha",
                "zh-tw": "刀鰭"
            },
            damage: 40,
            cost: ["Darkness", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
