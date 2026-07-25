import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/059",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/059",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/059",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/059",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/059"
    },
    name: {
        en: "Galarian Rapidash",
        "fr": "Rapidash galarien",
        "es": "Rapidash de Galar",
        "it": "Rapidash galariano",
        "de": "Galarischer Rapidash",
        "pt-br": "Rapidash de Galar",
        "zh-tw": "加拉利安·拉皮達什"
    },
    illustrator: "You Iribi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    evolveFrom: {
        en: "Galarian Ponyta",
        "fr": "Ponyta de Galar",
        "es": "Ponyta de Galar",
        "it": "Ponyta Galariano",
        "de": "Galarischer Ponyta",
        "pt-br": "Ponyta de Galar",
        "zh-tw": "加拉利安·波尼塔"
    },
    description: {
        en: "Brave and prideful, this Pokémon dashes airily\nthrough the forest, its steps aided by the psychic\npower stored in the fur on its fetlocks.",
        "fr": "Courageux et fier, ce Pokémon se précipite avec légèreté\nà travers la forêt, ses pas aidés par le psychique\npuissance emmagasinée dans la fourrure de ses boulets.",
        "es": "Valiente y orgulloso, este Pokémon corre alegremente\na través del bosque, sus pasos ayudados por lo psíquico\npoder almacenado en el pelaje de sus menudillos.",
        "it": "Coraggioso e orgoglioso, questo Pokémon scatta con aria ariosa\nattraverso la foresta, i suoi passi aiutati dal sensitivo\npotere immagazzinato nella pelliccia sui suoi nodelli.",
        "de": "Dieses Pokémon ist mutig und stolz und stürmt unbeschwert davon\ndurch den Wald, seine Schritte werden vom Hellseher unterstützt\nKraft, die im Fell seiner Fesseln gespeichert ist.",
        "pt-br": "Corajoso e orgulhoso, este Pokémon corre alegremente\npela floresta, seus passos auxiliados pelo psíquico\npoder armazenado na pele em seus boletos.",
        "zh-tw": "這只神奇寶貝勇敢而驕傲，輕快地衝刺\n穿過森林，它的腳步在心靈的幫助下\n球節毛皮中儲存的能量。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Photon Laser",
                "fr": "Laser à photons",
                "es": "Láser de fotones",
                "it": "Laser fotonico",
                "de": "Photonenlaser",
                "pt-br": "Laser de fótons",
                "zh-tw": "光子激光"
            },
            damage: 40,
            cost: ["Psychic"],
            effect: {
                en: "If you have 5 or more {P} Energy in play, this attack does 60 more damage.",
                "fr": "Si vous avez 5 Énergie {P} ou plus en jeu, cette attaque inflige 60 dégâts supplémentaires.",
                "es": "Si tienes 5 o más Energías {P} en juego, este ataque hace 60 daños más.",
                "it": "Se hai 5 o più Energie {P} in gioco, questo attacco infligge 60 danni in più.",
                "de": "Wenn du 5 oder mehr {P}-Energie im Spiel hast, verursacht dieser Angriff 60 Schadenspunkte mehr.",
                "pt-br": "Se você tiver 5 ou mais {P} Energias em jogo, este ataque causará 60 de dano a mais.",
                "zh-tw": "如果你場上有 5 或更多 {P} 能量，則此攻擊造成的傷害增加 60 點。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2
};
export default card;
