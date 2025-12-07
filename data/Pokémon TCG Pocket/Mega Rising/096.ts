import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Boltund",
        "fr": "Boltund",
        "es": "Boltund",
        "it": "Boltund",
        "de": "Boltund",
        "pt-br": "Boltund",
        "zh-tw": "逐電犬",
    },
    illustrator: "chibi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Lightning"],
    evolveFrom: {
        en: "Yamper",
        "fr": "Yamper",
        "es": "Yamper",
        "it": "Yamper",
        "de": "Yamper",
        "pt-br": "Yamper",
        "zh-tw": "來電汪",
    },
    description: {
        en: "It sends electricity through its legs to boost their\nstrength. Running at top speed, it easily breaks\n50 mph.",
        "fr": "Il envoie de l'électricité à travers ses pattes pour stimuler leur\nforce. Fonctionnant à toute vitesse, il se casse facilement\n50 mph.",
        "es": "Envía electricidad a través de sus piernas para aumentar su\nfuerza. Al correr a máxima velocidad, se rompe fácilmente.\n50 mph.",
        "it": "Invia elettricità attraverso le gambe per potenziarle\nforza. Correndo alla massima velocità si rompe facilmente\n50 miglia all'ora.",
        "de": "Es sendet Elektrizität durch seine Beine, um sie anzukurbeln\nStärke. Bei Höchstgeschwindigkeit geht es leicht kaputt\n50 Meilen pro Stunde.",
        "pt-br": "Ele envia eletricidade pelas pernas para aumentar seu\nforça. Correndo em alta velocidade, ele quebra facilmente\n50 mph.",
        "zh-tw": "它通過腿部發送電力來增強其力量\n力量。高速跑很容易壞\n50 英里/小時。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Zap Kick",
                "fr": "Coup de pied Zap",
                "es": "Patada rápida",
                "it": "Calcio di zap",
                "de": "Zap-Kick",
                "pt-br": "Chute Zap",
                "zh-tw": "電擊踢"
            },
            damage: 60,
            cost: ["Lightning", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
