import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/007",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/007",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/007",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/007",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/007",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/007",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/007"
    },
    name: {
        en: "Charmander",
        fr: "Salamèche",
        es: "Charmander",
        it: "Charmander",
        de: "Glumanda",
        "pt-br": "Charmander",
        "zh-tw": "小火龍",
        ko: "파이리",
        ja: "ヒトカゲ"
    },
    illustrator: "Masakazu Fukuda",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fire"],
    dexId: [4],
    stage: "Basic",
    description: {
        en: "If Charmander is healthy, the flame on the tip of its tail will burn vigorously and won’t go out even if it gets a bit wet.",
        fr: "Si Salamèche est en bonne santé, la flamme au bout de sa queue brûlera vigoureusement et ne s'éteindra pas même s'il est un peu mouillé.",
        es: "Si Charmander está sano, la llama en la punta de su cola arderá vigorosamente y no se apagará aunque se moje un poco.",
        it: "Se Charmander è sano, la fiamma sulla punta della coda brucerà vigorosamente e non si spegnerà anche se si bagna un po'.",
        de: "Wenn Glumanda gesund ist, brennt die Flamme an der Schwanzspitze kräftig und erlischt nicht, selbst wenn es etwas nass wird.",
        "pt-br": "Se Charmander estiver saudável, a chama na ponta de sua cauda queimará vigorosamente e não se apagará mesmo que fique um pouco molhada.",
        "zh-tw": "如果小火龍健康的話，它尾尖上的火焰會燃燒得旺盛，即使沾濕一點也不會熄滅。"
    },
    attacks: [
        {
            cost: ["Fire", "Colorless"],
            name: {
                en: "Flame Tail",
                fr: "Queue de Flammes",
                es: "Cola de Fuego",
                it: "Codafiamma",
                de: "Flammenschweif",
                "pt-br": "Cauda de Chamas",
                "zh-tw": "火之尾"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
