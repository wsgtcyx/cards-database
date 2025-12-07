import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Pupitar",
        "fr": "Pupitre",
        "es": "pupitar",
        "it": "Pupitar",
        "de": "Pupitar",
        "pt-br": "Pupitar",
        "zh-tw": "沙基拉",
    },
    illustrator: "Sekio",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    evolveFrom: {
        en: "Larvitar",
        "fr": "Larvitar",
        "es": "Larvitar",
        "it": "Larvitar",
        "de": "Larvitar",
        "pt-br": "larvitar",
        "zh-tw": "幼蟲"
    },
    description: {
        en: "This pupa flies around wildly by venting with\ngreat force the gas pressurized inside its body.",
        "fr": "Cette chrysalide vole sauvagement en s'évacuant avec\ngrande force le gaz pressurisé à l'intérieur de son corps.",
        "es": "Esta pupa vuela salvajemente ventilándose con\ngran fuerza el gas presurizado dentro de su cuerpo.",
        "it": "Questa pupa vola in giro all'impazzata sfogandosi con\ngrande forza il gas pressurizzato all'interno del suo corpo.",
        "de": "Diese Puppe fliegt wild umher, indem sie sich Luft macht\nMit großer Kraft wird das Gas in seinem Körper unter Druck gesetzt.",
        "pt-br": "Esta pupa voa descontroladamente, desabafando com\ngrande força o gás pressurizado dentro de seu corpo.",
        "zh-tw": "這只蛹通過發洩來瘋狂地飛來飛去\n體內的氣體受到巨大的壓力。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Guard Press",
                "fr": "Presse de garde",
                "es": "Prensa de guardia",
                "it": "Stampa della Guardia",
                "de": "Gardepresse",
                "pt-br": "Imprensa da Guarda",
                "zh-tw": "守衛壓力機"
            },
            damage: 20,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "During your opponent's next turn, this Pokémon takes −30 damage from attacks.",
                "fr": "Lors du prochain tour de votre adversaire, ce Pokémon subit -30 dégâts des attaques.",
                "es": "Durante el próximo turno de tu rival, este Pokémon recibe -30 de daño por ataques.",
                "it": "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -30 danni dagli attacchi.",
                "de": "Während des nächsten Zuges deines Gegners erleidet dieses Pokémon −30 Schadenspunkte durch Angriffe.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon sofrerá -30 de dano de ataques.",
                "zh-tw": "在對手的下一個回合中，這只神奇寶貝受到的攻擊傷害為-30。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh"]
};
export default card;
