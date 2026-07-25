import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/032",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/032",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/032",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/032",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/032",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/032"
    },
    name: {
        en: "Volcarona",
        fr: "Pyrax",
        es: "Volcarona",
        it: "Volcarona",
        de: "Ramoth",
        "pt-br": "Volcarona",
        "zh-tw": "火神蛾",
        ko: "불카모스",
        ja: "ウルガモス"
    },
    illustrator: "NC Empire",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Fire"],
    dexId: [637],
    evolveFrom: {
        en: "Larvesta",
        fr: "Pyronille",
        es: "Larvesta",
        it: "Larvesta",
        de: "Ignivor",
        "pt-br": "Larvesta",
        "zh-tw": "燃燒蟲",
        ko: "활화르바",
        ja: "メラルバ"
    },
    stage: "Stage1",
    description: {
        en: "This Pokémon scatters burning scales. Most of the danger of these scales is not in their heat—it’s in the way they rob the surrounding air of oxygen.",
        fr: "Ce Pokémon disperse des écailles brûlantes. La plupart du danger de ces écailles ne réside pas dans leur chaleur, mais dans la façon dont elles privent l’air ambiant d’oxygène.",
        es: "Este Pokémon esparce escamas ardientes. La mayor parte del peligro de estas escamas no está en su calor, sino en la forma en que roban oxígeno al aire circundante.",
        it: "Questo Pokémon sparge scaglie ardenti. La maggior parte del pericolo di queste scaglie non è nel loro calore, ma nel modo in cui privano l’aria circostante di ossigeno.",
        de: "Dieses Pokémon verstreut brennende Schuppen. Die größte Gefahr dieser Schuppen liegt nicht in ihrer Hitze, sondern in der Art und Weise, wie sie der Umgebungsluft Sauerstoff entziehen.",
        "pt-br": "Este Pokémon espalha escamas ardentes. A maior parte do perigo destas escamas não está no seu calor – está na forma como roubam o oxigénio do ar circundante.",
        "zh-tw": "該寶可夢會散佈燃燒的鱗片。這些鱗片的大部分危險並不在於它們的熱量，而是它們會奪取周圍空氣中的氧氣。"
    },
    attacks: [
        {
            cost: ["Fire", "Fire"],
            name: {
                en: "Fire Arrow",
                fr: "Flèche de feu",
                es: "Flecha Ígnea",
                it: "Freccia Infuocata",
                de: "Feuerpfeil",
                "pt-br": "Disparar Flecha",
                "zh-tw": "火焰箭"
            },
            effect: {
                en: "This attack does 50 damage to 1 of your opponent's Pokémon.",
                fr: "Cette attaque inflige 50 dégâts à 1 des Pokémon de votre adversaire.",
                es: "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival.",
                it: "Questo attacco infligge 50 danni a 1 dei Pokémon del tuo avversario.",
                de: "Dieser Angriff fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "這次攻擊對對手的 1 只寶可夢造成 50 點傷害。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
