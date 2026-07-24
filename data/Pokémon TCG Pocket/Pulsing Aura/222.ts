import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/222",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/222"
    },
    name: {
        en: "Porygon",
        fr: "Porygon",
        es: "Porygon",
        it: "Porygon",
        de: "Porygon",
        "pt-br": "Porygon",
        "zh-tw": "多邊獸",
        ko: "폴리곤",
        ja: "ポリゴン"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [137],
    stage: "Basic",
    description: {
        en: "State-of-the-art technology was used to create Porygon. It was the first artificial Pokémon to be created via computer programming.",
        fr: "C'est le premier Pokémon au monde à avoir\nété créé à partir de programmes informatiques,\ngrâce à une technologie de pointe.",
        es: "Se trata del primer Pokémon del mundo\ncreado a partir de códigos de programación\ngracias al uso de tecnología de vanguardia.",
        it: "È il primo Pokémon della storia a essere\nstato creato tramite programmi, grazie\nall'impiego di tecnologie all'avanguardia.",
        de: "Es ist weltweit das erste künstliche Pokémon,\ndas dank neuester Technologien mittels\nComputerprogrammen erschaffen wurde.",
        "pt-br": "Tecnologia de ponta foi usada na criação\nde Porygon. Foi o primeiro Pokémon artificial\ncriado por meio de um programa de computador.",
        "zh-tw": "Porygon 的製造採用了最先進的技術。它是第一個通過計算機編程創建的人造寶可夢。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Stiffen",
                fr: "Raidissement",
                es: "Endurecimiento",
                it: "Indurimento",
                de: "Verhärten",
                "pt-br": "Fortificar",
                "zh-tw": "凝固"
            },
            effect: {
                en: "During your opponent's next turn, this Pokémon takes -20 damage from attacks.",
                fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit - 20 dégâts provenant des attaques.",
                es: "Durante el próximo turno de tu rival, los ataques hacen -20 puntos de daño a este Pokémon.",
                it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -20 danni dagli attacchi.",
                de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken - 20 Schadenspunkte zugefügt.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon receberá -20 pontos de dano de ataques.",
                "zh-tw": "在對手的下一個回合中，這只寶可夢受到的攻擊傷害為-20。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
