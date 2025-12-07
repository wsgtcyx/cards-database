import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Absol",
        "fr": "Absolu",
        "es": "Absol",
        "it": "Assoluto",
        "de": "Absol",
        "pt-br": "Absolver",
        "zh-tw": "阿布索爾"
    },
    illustrator: "nagimiso",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Darkness"],
    description: {
        en: "Because of this Pokémon's ability to detect\ndanger, people mistook Absol as a bringer\nof doom.",
        "fr": "Grâce à la capacité de ce Pokémon à détecter\ndanger, les gens ont pris Absol pour un porteur\nde malheur.",
        "es": "Debido a la capacidad de este Pokémon para detectar\npeligro, la gente confundió a Absol con un portador\nde fatalidad.",
        "it": "A causa della capacità di rilevamento di questo Pokémon\npericolo, la gente ha scambiato Absol per un portatore\ndi sventura.",
        "de": "Aufgrund der Erkennungsfähigkeit dieses Pokémon\nGefahr, die Leute verwechselten Absol mit einem Bringer\ndes Untergangs.",
        "pt-br": "Devido à capacidade deste Pokémon de detectar\nperigo, as pessoas confundiram Absol com um portador\nda desgraça.",
        "zh-tw": "由於這只神奇寶貝具有檢測能力\n危險，人們誤以為阿勃索爾是使者\n厄運。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Ominous Claw",
                "fr": "Griffe menaçante",
                "es": "Garra siniestra",
                "it": "Artiglio minaccioso",
                "de": "Unheilvolle Klaue",
                "pt-br": "Garra Sinistra",
                "zh-tw": "不祥之爪"
            },
            damage: 50,
            cost: ["Darkness", "Darkness"],
            effect: {
                en: "Flip a coin. If heads, your opponent reveals their hand. Choose a Supporter card you find there and discard it.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, votre adversaire révèle sa main. Choisissez une carte Supporter que vous y trouvez et défaussez-la.",
                "es": "Lanza una moneda. Si sale cara, tu oponente revela su mano. Elige una carta de Partidario que encuentres allí y deséchala.",
                "it": "Lancia una moneta. Se esce testa, il tuo avversario rivela la sua mano. Scegli una carta Aiuto che trovi lì e scartala.",
                "de": "Wirf eine Münze. Bei „Kopf“ zeigt Ihr Gegner seine Hand auf. Wähle eine Unterstützerkarte, die du dort findest, und wirf sie ab.",
                "pt-br": "Jogue uma moeda. Se sair cara, seu oponente revela sua mão. Escolha uma carta de Apoiador que encontrar lá e descarte-a.",
                "zh-tw": "拋一枚硬幣。如果出現正面，你的對手就會亮出他們的牌。選擇您在那裡找到的一張支持者卡並將其丟棄。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
