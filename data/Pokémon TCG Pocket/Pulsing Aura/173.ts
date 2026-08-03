import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/173",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/173",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/173",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/173",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/173",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/173",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/173"
    },
    name: {
        en: "Seviper",
        fr: "Séviper",
        es: "Seviper",
        it: "Seviper",
        de: "Vipitis",
        "pt-br": "Seviper",
        "zh-tw": "飯匙蛇",
        ko: "세비퍼",
        ja: "ハブネーク"
    },
    illustrator: "REND",
    rarity: "One Star",
    category: "Pokemon",
    hp: 70,
    types: ["Darkness"],
    dexId: [336],
    stage: "Basic",
    description: {
        en: "Constant polishing makes the edge of the blade on its tail extremely sharp. It’s Zangoose’s archrival.",
        fr: "Il affûte la lame de sa queue sur des rochers pour\nla rendre bien tranchante. Le rival de longue date\nde Mangriff.",
        es: "Le une una relación de enemistad con Zangoose.\nSe lima con las rocas su cola en forma de espada\npara tenerla afilada.",
        it: "Affila di continuo la lama della sua coda sulle rocce\nper renderla taglientissima. È un acerrimo nemico di\nZangoose.",
        de: "Es hält die Klinge an seinem Schweif scharf,\nindem es sie ständig an Steinen wetzt. Es ist\nder Erzfeind von Sengo.",
        "pt-br": "O polimento constante torna o fio da lâmina na cauda extremamente afiado. É o arquirrival de Zangoose.",
        "zh-tw": "不斷的拋光使得其尾部的刀刃極其鋒利。這是貓鼬斬的主要競爭對手。"
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Poison Jab",
                fr: "Direct Toxik",
                es: "Puya Nociva",
                it: "Velenpuntura",
                de: "Gifthieb",
                "pt-br": "Golpe Envenenado",
                "zh-tw": "毒擊"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                fr: "Le Pokémon Actif de votre adversaire est désormais Empoisonné.",
                es: "El Pokémon Activo de tu rival ahora está Envenenado.",
                it: "Il Pokémon attivo del tuo avversario ora è avvelenato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "你對手的戰鬥寶可夢現在中毒了。"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
