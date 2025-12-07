import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Umbreon",
        "fr": "Ombreon",
        "es": "Umbreón",
        "it": "Umbreon",
        "de": "Umbreon",
        "pt-br": "Umbreon",
        "zh-tw": "月精靈",
    },
    illustrator: "Ryota Murayama",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Darkness"],
    evolveFrom: {
        en: "Eevee",
        "fr": "Évoli",
        "es": "Eevee",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布"
    },
    description: {
        en: "When exposed to the moon's aura, the rings on its\nbody glow faintly and it gains a mysterious power.",
        "fr": "Lorsqu'ils sont exposés à l'aura de la lune, les anneaux sur sa surface\nle corps brille faiblement et il acquiert un pouvoir mystérieux.",
        "es": "Cuando se exponen al aura de la luna, los anillos de su\nEl cuerpo brilla débilmente y adquiere un poder misterioso.",
        "it": "Quando esposti all'aura della luna, gli anelli sulla sua\nil corpo si illumina debolmente e acquisisce un potere misterioso.",
        "de": "Wenn es der Aura des Mondes ausgesetzt wird, bilden sich die Ringe auf ihm\nDer Körper leuchtet schwach und erhält eine geheimnisvolle Kraft.",
        "pt-br": "Quando expostos à aura da lua, os anéis em sua\ncorpo brilha levemente e ganha um poder misterioso.",
        "zh-tw": "當暴露在月球的光環下時，其上的光環\n身體隱隱發光，獲得了神秘的力量。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Dark Binding",
                "fr": "Reliure sombre",
                "es": "Encuadernación oscura",
                "it": "Legatura oscura",
                "de": "Dunkle Bindung",
                "pt-br": "Ligação Negra",
                "zh-tw": "黑暗束縛"
            },
            damage: 40,
            cost: ["Darkness"],
            effect: {
                en: "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn.",
                "fr": "Si le Pokémon défenseur est un Pokémon de base, il ne peut pas attaquer lors du prochain tour de votre adversaire.",
                "es": "Si el Pokémon Defensor es un Pokémon Básico, no puede atacar durante el próximo turno de tu rival.",
                "it": "Se il Pokémon difensore è un Pokémon Base, non può attaccare durante il prossimo turno del tuo avversario.",
                "de": "Wenn das verteidigende Pokémon ein Basis-Pokémon ist, kann es im nächsten Zug deines Gegners nicht angreifen.",
                "pt-br": "Se o Pokémon Defensor for um Pokémon Básico, ele não poderá atacar durante o próximo turno do seu oponente.",
                "zh-tw": "如果防守寶可夢是基礎寶可夢，則在對手的下一個回合中它不能攻擊。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
