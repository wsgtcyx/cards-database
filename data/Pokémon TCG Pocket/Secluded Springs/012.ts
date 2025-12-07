import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Talonflame",
        "fr": "Talonflamme",
        "es": "llama de garra",
        "it": "Talonflame",
        "de": "Krallenflamme",
        "pt-br": "Talonflame",
        "zh-tw": "烈箭鶲",
    },
    illustrator: "5ban Graphics",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Fire"],
    evolveFrom: {
        en: "Fletchinder",
        "fr": "Fletchinder",
        "es": "Fletchinder",
        "it": "Fletchinder",
        "de": "Fletchinder",
        "pt-br": "Fletchinder",
        "zh-tw": "火箭雀",
    },
    description: {
        en: "It has top-notch flying capabilities. It flies\naround easily, even while carrying prey\nthat weighs more than 220 lbs.",
        "fr": "Il possède des capacités de vol de premier ordre. Ça vole\nse déplacer facilement, même en transportant une proie\nqui pèse plus de 220 livres.",
        "es": "Tiene capacidades de vuelo de primer nivel. Vuela\nmoverse fácilmente, incluso mientras lleva presas\nque pesa más de 220 libras.",
        "it": "Ha capacità di volo di prim'ordine. Vola\nmuoversi facilmente, anche mentre trasporta la preda\nche pesa più di 220 libbre.",
        "de": "Es verfügt über erstklassige Flugfähigkeiten. Es fliegt\nleicht herumlaufen, selbst beim Tragen von Beute\ndas mehr als 220 Pfund wiegt.",
        "pt-br": "Possui capacidades de vôo de alto nível. Ele voa\nfacilmente, mesmo carregando uma presa\nque pesa mais de 220 libras.",
        "zh-tw": "它具有一流的飛行能力。它飛\n即使攜帶獵物，也能輕鬆四處走動\n重量超過 220 磅。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Searing Flame",
                "fr": "Flamme brûlante",
                "es": "Llama abrasadora",
                "it": "Fiamma Ardente",
                "de": "Sengende Flamme",
                "pt-br": "Chama Abrasadora",
                "zh-tw": "灼熱火焰"
            },
            damage: 50,
            cost: ["Fire"],
            effect: {
                en: "Your opponent's Active Pokémon is now Burned.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Brûlé.",
                "es": "El Pokémon Activo de tu rival ahora está Quemado.",
                "it": "Il Pokémon attivo del tuo avversario è ora bruciato.",
                "de": "Das aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "你對手的活躍神奇寶貝現在被燒毀了。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
