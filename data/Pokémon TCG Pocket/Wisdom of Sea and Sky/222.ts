import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Primeape",
        "fr": "Primeape",
        "es": "primape",
        "it": "Primeape",
        "de": "Primeape",
        "pt-br": "Primeape",
        "zh-tw": "火爆猴",
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    evolveFrom: {
        en: "Mankey",
        "fr": "Mankey",
        "es": "mankey",
        "it": "Mankey",
        "de": "Mankey",
        "pt-br": "Mankey",
        "zh-tw": "猴怪",
    },
    description: {
        en: "It becomes wildly furious if it even senses\nsomeone looking at it. It chases anyone\nthat meets its glare.",
        "fr": "Il devient extrêmement furieux s'il sent seulement\nquelqu'un qui le regarde. Il poursuit n'importe qui\nqui rencontre son éclat.",
        "es": "Se vuelve salvajemente furioso si siquiera siente\nalguien mirándolo. persigue a cualquiera\nque se encuentra con su resplandor.",
        "it": "Diventa selvaggiamente furioso anche solo se percepisce\nqualcuno lo guarda. Insegue chiunque\nche incontra il suo splendore.",
        "de": "Es wird wild wütend, wenn es überhaupt etwas spürt\njemand, der es betrachtet. Es jagt jeden\ndas trifft seinen Glanz.",
        "pt-br": "Fica extremamente furioso se sentir\nalguém olhando para isso. Ele persegue qualquer um\nque encontra seu brilho.",
        "zh-tw": "如果它感覺到的話，它就會變得非常憤怒\n有人看著它。它追趕任何人\n遇到它的眩光。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Fight Back",
                "fr": "Riposter",
                "es": "Contraatacar",
                "it": "Combatti",
                "de": "Schlagen Sie zurück",
                "pt-br": "Contra-atacar",
                "zh-tw": "回擊"
            },
            damage: 40,
            cost: ["Fighting", "Fighting"],
            effect: {
                en: "If this Pokémon has damage on it, this attack does 60 more damage.",
                "fr": "Si ce Pokémon subit des dégâts, cette attaque inflige 60 dégâts supplémentaires.",
                "es": "Si este Pokémon tiene daño, este ataque hace 60 puntos de daño más.",
                "it": "Se questo Pokémon ha dei danni su di sé, questo attacco infligge 60 danni in più.",
                "de": "Wenn dieses Pokémon Schaden hat, fügt dieser Angriff 60 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon sofrer dano, este ataque causará 60 de dano a mais.",
                "zh-tw": "如果這只神奇寶貝受到傷害，則這次攻擊會造成額外 60 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
