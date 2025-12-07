import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Quagsire",
        "fr": "Marapère",
        "es": "Quagsire",
        "it": "Quagsire",
        "de": "Quagsire",
        "pt-br": "Quagsire",
        "zh-tw": "沼王",
    },
    illustrator: "Kagemaru Himeno",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Water"],
    evolveFrom: {
        en: "Wooper",
        "fr": "Wooper",
        "es": "Wooper",
        "it": "Wooper",
        "de": "Wooper",
        "pt-br": "Wooper",
        "zh-tw": "烏波",
    },
    description: {
        en: "It has an easygoing nature. It doesn't care if it\nbumps its head on boats and boulders\nwhile swimming.",
        "fr": "Il a un caractère décontracté. Cela s'en fiche si c'est\nse cogne la tête sur des bateaux et des rochers\nen nageant.",
        "es": "Tiene un carácter tranquilo. No importa si\nse golpea la cabeza con barcos y rocas\nmientras nada.",
        "it": "Ha un carattere accomodante. Non importa se lo è\nsbatte la testa contro barche e massi\nmentre nuotava.",
        "de": "Es hat eine lockere Natur. Es ist egal, ob es so ist\nstößt mit dem Kopf gegen Boote und Felsbrocken\nbeim Schwimmen.",
        "pt-br": "Tem uma natureza descontraída. Não importa se\nbate a cabeça em barcos e pedras\nenquanto nadava.",
        "zh-tw": "它有一種隨和的性格。它不在乎是否\n頭撞到船隻和巨石上\n游泳時。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Surf",
                "fr": "Surf",
                "es": "Navegar",
                "it": "Navigare",
                "de": "Surfen",
                "pt-br": "Surfar",
                "zh-tw": "衝浪"
            },
            damage: 80,
            cost: ["Water", "Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["lugia"]
};
export default card;
