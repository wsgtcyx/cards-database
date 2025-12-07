import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    name: {
        en: "Marill",
        "fr": "Marill",
        "es": "Marill",
        "it": "Marill",
        "de": "Marill",
        "pt-br": "Marill",
        "zh-tw": "瑪力露",
    },
    illustrator: "Shibuzoh.",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "The fur on its body naturally repels water. It can\nstay dry even when it plays in the water.",
        "fr": "La fourrure de son corps repousse naturellement l'eau. Cela peut\nreste au sec même lorsqu'il joue dans l'eau.",
        "es": "The fur on its body naturally repels water. puede\nstay dry even when it plays in the water.",
        "it": "La pelliccia sul suo corpo respinge naturalmente l'acqua. Può\nresta asciutto anche quando gioca nell'acqua.",
        "de": "Das Fell seines Körpers weist von Natur aus Wasser ab. Es kann\nBleiben Sie trocken, auch wenn es im Wasser spielt.",
        "pt-br": "A pelagem do seu corpo repele naturalmente a água. Pode\nfique seco mesmo quando brinca na água.",
        "zh-tw": "它身上的皮毛天然具有防水功能。它可以\n即使在水中玩耍時也能保持乾燥。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tackle",
                "fr": "Tacle",
                "es": "Abordar",
                "it": "Attrezzatura",
                "de": "Tackle",
                "pt-br": "Enfrentar",
                "zh-tw": "處理"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
