import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/038",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/038",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/038",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/038",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/038",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/038",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/038"
    },
    name: {
        en: "Spheal",
        fr: "Obalie",
        es: "Spheal",
        it: "Spheal",
        de: "Seemops",
        "pt-br": "Spheal",
        "zh-tw": "海豹球",
        ko: "대굴레오",
        ja: "タマザラシ"
    },
    illustrator: "sui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [363],
    stage: "Basic",
    description: {
        en: "As it drifts among the waves, Spheal probes the sea. As soon as it spots prey, it informs the Walrein in its herd.",
        fr: "Il scrute la mer en se laissant porter par\nles vagues. Lorsqu’il repère des proies,\nil avertit les Kaimorse du groupe.",
        es: "Flota entre las olas para examinar el océano.\nSi encuentra una presa, avisa enseguida a los\nWalrein de su manada.",
        it: "Fluttua tra le onde ispezionando il mare.\nQuando individua una preda, avverte i Walrein\ndel suo gruppo.",
        de: "Seemops lässt sich von den Wellen treiben, um\ndas Meer zu erkunden. Entdeckt es Beute, setzt\nes die Walraisa seiner Herde davon in Kenntnis.",
        "zh-tw": "會漂浮在波浪間探查\n周圍的狀況。一旦發現獵物，\n就會通知群體的帝牙海獅。"
    },
    attacks: [
        {
            cost: ["Water", "Colorless"],
            name: {
                en: "Rollout",
                fr: "Roulade",
                es: "Rodar",
                it: "Rotolamento",
                de: "Walzer",
                "pt-br": "Rolagem",
                "zh-tw": "滾動"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
