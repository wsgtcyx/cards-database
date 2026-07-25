import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/117",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/117",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/117",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/117",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/117",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/117"
    },
    name: {
        en: "Bronzor",
        fr: "Archéomire",
        es: "Bronzor",
        it: "Bronzor",
        de: "Bronzel",
        "pt-br": "Bronzor",
        "zh-tw": "銅鏡怪",
        ko: "동미러",
        ja: "ドーミラー"
    },
    illustrator: "Hajime Kusajima",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    dexId: [436],
    stage: "Basic",
    description: {
        en: "They are found in ancient tombs. The patterns on their backs are said to be imbued with mysterious power.",
        fr: "On les retrouve dans les tombes anciennes. On dit que les motifs sur leur dos sont imprégnés d’un pouvoir mystérieux.",
        es: "Se encuentran en tumbas antiguas. Se dice que los patrones en sus espaldas están imbuidos de un poder misterioso.",
        it: "Si trovano in tombe antiche. Si dice che i motivi sulla loro schiena siano intrisi di un potere misterioso.",
        de: "Sie werden in alten Gräbern gefunden. Die Muster auf ihrem Rücken sollen von geheimnisvoller Kraft durchdrungen sein.",
        "pt-br": "Eles são encontrados em tumbas antigas. Diz-se que os padrões em suas costas estão imbuídos de um poder misterioso.",
        "zh-tw": "它們是在古墓中發現的。據說它們背上的圖案充滿了神秘的力量。"
    },
    attacks: [
        {
            cost: ["Metal"],
            name: {
                en: "Speed Dive",
                fr: "Plongée Rapide",
                es: "Picado Rápido",
                it: "Immersione Rapida",
                de: "Tempohechtsprung",
                "pt-br": "Mergulho Veloz",
                "zh-tw": "高速飛行"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
