import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Seismitoad",
        "fr": "Sismique",
        "es": "Seismitoad",
        "it": "Seistomad",
        "de": "Erdbeben",
        "pt-br": "Seismitoad",
        "zh-tw": "地震儀"
    },
    illustrator: "SATOSHI NAKAI",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Water"],
    evolveFrom: {
        en: "Palpitoad",
        "fr": "Palpitoad",
        "es": "palpitante",
        "it": "Palpitoad",
        "de": "Palpitoad",
        "pt-br": "Palpitoad",
        "zh-tw": "心悸蟾蜍"
    },
    description: {
        en: "This Pokémon is popular among the elderly,\nwho say the vibrations of its lumps are great\nfor massages.",
        "fr": "Ce Pokémon est populaire parmi les personnes âgées,\nqui dit que les vibrations de ses morceaux sont grandes\npour les massages.",
        "es": "Este Pokémon es popular entre las personas mayores.\nque dicen que las vibraciones de sus bultos son geniales\npara masajes.",
        "it": "Questo Pokémon è popolare tra gli anziani,\nche dicono che le vibrazioni dei suoi grumi sono grandi\nper i massaggi.",
        "de": "Dieses Pokémon ist bei älteren Menschen beliebt,\ndie sagen, dass die Vibrationen seiner Klumpen großartig sind\nfür Massagen.",
        "pt-br": "Este Pokémon é popular entre os idosos,\nque dizem que as vibrações de seus pedaços são ótimas\npara massagens.",
        "zh-tw": "這個神奇寶貝很受老年人歡迎，\n誰說它的塊體振動很大\n用於按摩。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Split Spiral Punch",
                "fr": "Poinçon en spirale fendue",
                "es": "Puñetazo en espiral dividido",
                "it": "Punzone a spirale diviso",
                "de": "Geteilter Spiralstanzer",
                "pt-br": "Perfurador Espiral Dividido",
                "zh-tw": "分體式螺旋沖頭"
            },
            damage: 90,
            cost: ["Water", "Water", "Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Confused.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Confus.",
                "es": "El Pokémon Activo de tu rival ahora está Confundido.",
                "it": "Il Pokémon attivo del tuo avversario è ora confuso.",
                "de": "Das aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "你對手的活躍神奇寶貝現在處於混亂狀態。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 3
};
export default card;
