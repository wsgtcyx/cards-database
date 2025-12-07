import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Carkol",
        "fr": "Carkol",
        "es": "Carkol",
        "it": "Carkol",
        "de": "Carkol",
        "pt-br": "Carkol",
        "zh-tw": "卡科爾"
    },
    illustrator: "Uta",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    evolveFrom: {
        en: "Rolycoly",
        "fr": "Rolycoly",
        "es": "rolicoly",
        "it": "Rolycoli",
        "de": "Rolycoly",
        "pt-br": "Rolycoly",
        "zh-tw": "羅利科利"
    },
    description: {
        en: "Due to the coal tar created inside it, the heap of\ncoal on Carkol's back never falls apart, even\nwhen the Pokémon rolls around at high speeds.",
        "fr": "En raison du goudron de houille créé à l'intérieur, le tas de\nle charbon sur le dos de Carkol ne s'effondre jamais, même\nlorsque le Pokémon roule à grande vitesse.",
        "es": "Debido al alquitrán de hulla creado en su interior, el montón de\nEl carbón en la espalda de Carkol nunca se desmorona, incluso\ncuando el Pokémon rueda a altas velocidades.",
        "it": "A causa del catrame di carbone creato al suo interno, il mucchio di\nnemmeno il carbone sulla schiena di Carkol va in pezzi\nquando il Pokémon rotola ad alta velocità.",
        "de": "Aufgrund des darin entstehenden Kohlenteers ist der Haufen von\nDie Kohle auf Carkols Rücken zerfällt nicht einmal\nwenn das Pokémon mit hoher Geschwindigkeit herumrollt.",
        "pt-br": "Devido ao alcatrão de carvão criado no seu interior, a pilha de\no carvão nas costas de Carkol nunca se desfaz, mesmo\nquando o Pokémon rola em alta velocidade.",
        "zh-tw": "由於其內部產生煤焦油，\n卡科爾背上的煤永遠不會散開，甚至\n當神奇寶貝高速滾動時。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Heat Crash",
                "fr": "Coup de chaleur",
                "es": "Choque de calor",
                "it": "Crollo di calore",
                "de": "Hitzecrash",
                "pt-br": "Queda de calor",
                "zh-tw": "熱崩潰"
            },
            damage: 50,
            cost: ["Fighting", "Fighting"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
