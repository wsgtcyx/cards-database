import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Mega Absol ex",
        "fr": "Méga Absol ex",
        "es": "Mega Absol ex",
        "it": "Mega Absol es",
        "de": "Mega Absol ex",
        "pt-br": "Mega Absol ex",
        "zh-tw": "超級阿布索爾超級"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 170,
    types: ["Darkness"],
    description: {
        en: "As the energy of Mega Evolution fills it, its fur\nbristles. What you see on its back are not true\nwings, and this Pokémon isn't able to fly.",
        "fr": "Au fur et à mesure que l'énergie de Mega Evolution le remplit, sa fourrure\npoils. Ce que vous voyez sur son dos n'est pas vrai\ndes ailes, et ce Pokémon n'est pas capable de voler.",
        "es": "A medida que la energía de la Mega Evolución lo llena, su pelaje\ncerdas. Lo que ves en su espalda no es cierto.\nalas, y este Pokémon no puede volar.",
        "it": "Mentre l'energia della megaevoluzione lo riempie, la sua pelliccia\nsetole. Ciò che vedi sul dorso non è vero\nali e questo Pokémon non è in grado di volare.",
        "de": "Während die Energie von Mega Evolution es erfüllt, ist sein Fell\nBorsten. Was Sie auf der Rückseite sehen, ist nicht wahr\nFlügel, und dieses Pokémon kann nicht fliegen.",
        "pt-br": "À medida que a energia da Mega Evolução o preenche, seu pelo\ncerdas. O que você vê nas costas não é verdade\nasas, e este Pokémon não é capaz de voar.",
        "zh-tw": "當超級進化的能量充滿它時，它的毛皮\n鬃毛。你在它背面看到的不是真的\n翅膀，但這只神奇寶貝不能飛。"
    },
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Darkness Claw",
                "fr": "Griffe des Ténèbres",
                "es": "Garra Oscura",
                "it": "Artiglio dell'Oscurità",
                "de": "Dunkelheitsklaue",
                "pt-br": "Garra da Escuridão",
                "zh-tw": "黑暗之爪"
            },
            damage: 80,
            cost: ["Darkness", "Darkness"],
            effect: {
                en: "Your opponent reveals their hand. Choose a Supporter card you find there and discard it.",
                "fr": "Votre adversaire révèle sa main. Choisissez une carte Supporter que vous y trouvez et défaussez-la.",
                "es": "Tu oponente revela su mano. Elige una carta de Partidario que encuentres allí y deséchala.",
                "it": "Il tuo avversario rivela la sua mano. Scegli una carta Aiuto che trovi lì e scartala.",
                "de": "Ihr Gegner deckt seine Hand auf. Wähle eine Unterstützerkarte, die du dort findest, und wirf sie ab.",
                "pt-br": "Seu oponente revela sua mão. Escolha uma carta de Apoiador que encontrar lá e descarte-a.",
                "zh-tw": "你的對手亮出了他們的牌。選擇您在那裡找到的一張支持者卡並將其丟棄。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
