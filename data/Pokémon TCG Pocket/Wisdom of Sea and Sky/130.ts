import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Fearow",
        "fr": "Peur",
        "es": "miedo",
        "it": "Fearow",
        "de": "Angst",
        "pt-br": "Medo",
        "zh-tw": "費羅"
    },
    illustrator: "Shin Nagasawa",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    evolveFrom: {
        en: "Spearow",
        "fr": "Lance",
        "es": "lanza",
        "it": "Spearow",
        "de": "Speer",
        "pt-br": "Lança",
        "zh-tw": "斯皮羅"
    },
    description: {
        en: "Carrying food through Fearow's territory is\ndangerous. It will snatch the food away from\nyou in a flash!",
        "fr": "Transporter de la nourriture à travers le territoire de Fearow est\ndangereux. Il arrachera la nourriture des\nvous en un éclair !",
        "es": "Llevar comida a través del territorio de Fearow es\npeligroso. Le arrebatará la comida\n¡tú en un instante!",
        "it": "Trasportare il cibo attraverso il territorio di Fearow lo è\npericoloso. Strapperà via il cibo\ntu in un lampo!",
        "de": "Das Tragen von Lebensmitteln durch Fearows Territorium ist\ngefährlich. Es wird das Essen wegreißen\nDu im Handumdrehen!",
        "pt-br": "Transportar comida pelo território de Fearow é\nperigoso. Isso vai roubar a comida\nvocê em um piscar de olhos!",
        "zh-tw": "通過費羅領地運送食物是\n危險的。它會搶走食物\n你在一瞬間！"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Peck Bugs",
                "fr": "Picorer les insectes",
                "es": "Picotear insectos",
                "it": "Becca gli insetti",
                "de": "Pick Bugs",
                "pt-br": "Bicar insetos",
                "zh-tw": "啄蟲"
            },
            damage: 30,
            cost: ["Colorless"],
            effect: {
                en: "If your opponent's Active Pokémon is a {G} Pokémon, this attack does 40 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire est un Pokémon {G}, cette attaque inflige 40 dégâts supplémentaires.",
                "es": "Si el Pokémon Activo de tu rival es un Pokémon {G}, este ataque hace 40 puntos de daño más.",
                "it": "Se il Pokémon attivo del tuo avversario è un Pokémon {G}, questo attacco infligge 40 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners ein {G}-Pokémon ist, fügt dieser Angriff 40 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente for um Pokémon {G}, este ataque causará 40 pontos de dano a mais.",
                "zh-tw": "如果對手的活躍寶可夢是 {G} 寶可夢，則此攻擊造成的傷害增加 40 點。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
