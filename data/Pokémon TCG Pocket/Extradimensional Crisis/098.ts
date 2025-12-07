import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Aerodactyl",
        "fr": "Aérodactyle",
        "es": "Aerodáctilo",
        "it": "Aerodattilo",
        "de": "Aerodaktylus",
        "pt-br": "Aerodáctilo",
        "zh-tw": "化石翼龍",
    },
    illustrator: "Masakazu Fukuda",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    evolveFrom: {
        en: "Old Amber",
        "fr": "Vieil Ambre",
        "es": "Ámbar viejo",
        "it": "Vecchia Ambra",
        "de": "Alter Bernstein",
        "pt-br": "Âmbar Velho",
        "zh-tw": "秘密琥珀",
    },
    description: {
        en: "This is a ferocious Pokémon from ancient times.\nApparently even modern technology is incapable\nof producing a perfectly restored specimen.",
        "fr": "C'est un Pokémon féroce des temps anciens.\nApparemment, même la technologie moderne est incapable\nde produire un exemplaire parfaitement restauré.",
        "es": "Este es un Pokémon feroz de la antigüedad.\nAl parecer, ni siquiera la tecnología moderna es capaz\nde producir un ejemplar perfectamente restaurado.",
        "it": "Questo è un Pokémon feroce dei tempi antichi.\nApparentemente anche la tecnologia moderna è incapace\ndi produrre un esemplare perfettamente restaurato.",
        "de": "Dies ist ein wildes Pokémon aus der Antike.\nOffenbar ist selbst die moderne Technologie dazu nicht in der Lage\nein perfekt restauriertes Exemplar herzustellen.",
        "pt-br": "Este é um Pokémon feroz dos tempos antigos.\nAparentemente, mesmo a tecnologia moderna é incapaz\nde produzir um espécime perfeitamente restaurado.",
        "zh-tw": "這是自古以來兇猛的寶可夢。\n顯然現代科技也無能為力\n製作完美修復的標本。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Primal Wingbeat",
                "fr": "Battement d'aile primordial",
                "es": "Latido de alas primigenio",
                "it": "Battito d'ali primordiale",
                "de": "Urflügelschlag",
                "pt-br": "Batida de asa primordial",
                "zh-tw": "原始翼拍"
            },
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, your opponent shuffles their Active Pokémon into their deck.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, votre adversaire mélange son Pokémon Actif dans son deck.",
                "es": "Lanza una moneda. Si sale cara, tu oponente baraja sus Pokémon Activos en su mazo.",
                "it": "Lancia una moneta. Se esce testa, il tuo avversario rimischia i suoi Pokémon attivi nel suo mazzo.",
                "de": "Wirf eine Münze. Bei „Kopf“ mischt dein Gegner sein Aktives Pokémon in sein Deck.",
                "pt-br": "Jogue uma moeda. Se der cara, seu oponente embaralhará seus Pokémon Ativos em seu deck.",
                "zh-tw": "拋一枚硬幣。如果出現正面，對手將其活躍神奇寶貝洗入牌組。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    rarity: "One Shiny"
};
export default card;
