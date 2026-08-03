import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/083",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/083",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/083",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/083",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/083",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/083",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/083"
    },
    name: {
        en: "Toxicroak",
        fr: "Coatox",
        es: "Toxicroak",
        it: "Toxicroak",
        de: "Toxiquak",
        "pt-br": "Toxicroak",
        "zh-tw": "毒骷蛙",
        ko: "독개굴",
        ja: "ドクロッグ"
    },
    illustrator: "Ryuta Fuse",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    dexId: [454],
    evolveFrom: {
        en: "Croagunk",
        fr: "Cradopaud",
        es: "Croagunk",
        it: "Croagunk",
        de: "Glibunkel",
        "pt-br": "Croagunk",
        "zh-tw": "不良蛙",
        ko: "삐딱구리",
        ja: "グレッグル"
    },
    stage: "Stage1",
    description: {
        en: "It bounces toward opponents and gouges them with poisonous claws. No more than a scratch is needed to knock out its adversaries.",
        fr: "Il bondit sur ses adversaires pour les transpercer\navec ses griffes empoisonnées. Une simple\négratignure suffit à les mettre K.O.",
        es: "Se abalanza sobre el rival y lo destroza con sus\ngarras venenosas. Basta un rasguño para debilitar\nal adversario.",
        it: "Si avvicina a balzi al nemico e lo colpisce\ncon i suoi artigli avvelenati. Basta un graffio\nper mandare KO l’avversario.",
        de: "Es nähert sich springend seinem Gegner und\nbohrt seine giftigen Klauen in ihn hinein. Schon\nein kleiner Kratzer lässt den Gegner K.O. gehen.",
        "pt-br": "Ele salta em direção aos oponentes e os ataca com garras venenosas. Não é necessário mais do que um arranhão para nocautear seus adversários.",
        "zh-tw": "一躍而起接近敵人，\n用有毒的爪子狠抓對方！\n光是擦傷就能將對手ＫＯ。"
    },
    attacks: [
        {
            cost: ["Fighting"],
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
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
