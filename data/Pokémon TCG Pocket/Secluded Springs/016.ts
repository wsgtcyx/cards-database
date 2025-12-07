import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Tentacruel",
        "fr": "Tentacruel",
        "es": "tentacruel",
        "it": "Tentacrudele",
        "de": "Tentacruel",
        "pt-br": "Tentacruel",
        "zh-tw": "毒刺水母",
    },
    illustrator: "Hajime Kusajima",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Water"],
    evolveFrom: {
        en: "Tentacool",
        "fr": "Tentacool",
        "es": "tentacool",
        "it": "Tentacool",
        "de": "Tentacool",
        "pt-br": "Tentacool",
        "zh-tw": "瑪瑙水母",
    },
    description: {
        en: "When the red orbs on Tentacruel's head glow\nbrightly, watch out. The Pokémon is about to\nfire off a burst of ultrasonic waves.",
        "fr": "Quand les orbes rouges sur la tête de Tentacruel brillent\nbrillamment, attention. Le Pokémon est sur le point de\ndéclencher une rafale d'ondes ultrasonores.",
        "es": "Cuando los orbes rojos en la cabeza de Tentacruel brillan\nbrillantemente, cuidado. El Pokémon está a punto de\ndispara una ráfaga de ondas ultrasónicas.",
        "it": "Quando le sfere rosse sulla testa di Tentacruel si illuminano\nbrillantemente, attenzione. Il Pokémon sta per farlo\nemettere una raffica di onde ultrasoniche.",
        "de": "Wenn die roten Kugeln auf Tentacruels Kopf leuchten\nhell, pass auf. Das Pokémon steht kurz davor\nFeuern Sie einen Ultraschallwellenstoß ab.",
        "pt-br": "Quando os orbes vermelhos na cabeça de Tentacruel brilham\nbrilhantemente, cuidado. O Pokémon está prestes a\ndisparar uma explosão de ondas ultrassônicas.",
        "zh-tw": "當刺傷克魯爾頭上的紅色球體發光時\n光明，小心。寶可夢即將\n發射一陣超聲波。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Stun Poison",
                "fr": "Poison étourdissant",
                "es": "Veneno aturdidor",
                "it": "Veleno stordente",
                "de": "Betäubungsgift",
                "pt-br": "Veneno de atordoamento",
                "zh-tw": "眩暈毒藥"
            },
            damage: 50,
            cost: ["Water", "Water", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned and Paralyzed.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Empoisonné et Paralysé.",
                "es": "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival ahora estará Envenenado y Paralizado.",
                "it": "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è avvelenato e paralizzato.",
                "de": "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt vergiftet und gelähmt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente agora está Envenenado e Paralisado.",
                "zh-tw": "拋一枚硬幣。如果正面，對手的活躍神奇寶貝現在中毒並麻痺。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
