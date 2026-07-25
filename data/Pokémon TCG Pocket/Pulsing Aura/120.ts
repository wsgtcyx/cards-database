import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/120",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/120",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/120",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/120",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/120",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/120"
    },
    name: {
        en: "Bisharp",
        fr: "Scalproie",
        es: "Bisharp",
        it: "Bisharp",
        de: "Caesurio",
        "pt-br": "Bisharp",
        "zh-tw": "劈斬司令",
        ko: "절각참",
        ja: "キリキザン"
    },
    illustrator: "DOM",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Metal"],
    dexId: [625],
    evolveFrom: {
        en: "Pawniard",
        fr: "Scalpion",
        es: "Pawniard",
        it: "Pawniard",
        de: "Gladiantri",
        "pt-br": "Pawniard",
        "zh-tw": "駒刀小兵",
        ko: "자망칼",
        ja: "コマタナ"
    },
    stage: "Stage1",
    description: {
        en: "Bisharp mercilessly cuts its opponents to pieces with the sharp blades covering its body. It will do anything to win.",
        fr: "Scalproie coupe sans pitié ses adversaires avec les lames tranchantes recouvrant son corps. Il fera tout pour gagner.",
        es: "Bisharp corta sin piedad a sus oponentes en pedazos con las afiladas hojas que cubren su cuerpo. Hará cualquier cosa para ganar.",
        it: "Bisharp fa a pezzi senza pietà i suoi avversari con le lame affilate che gli coprono il corpo. Farà di tutto per vincere.",
        de: "Caesurio zerteilt seine Gegner gnadenlos mit den scharfen Klingen, die seinen Körper bedecken. Es wird alles tun, um zu gewinnen.",
        "pt-br": "Bisharp corta impiedosamente seus oponentes em pedaços com as lâminas afiadas que cobrem seu corpo. Fará de tudo para vencer.",
        "zh-tw": "劈斬司令用覆蓋全身的鋒利刀片無情地將對手切成碎片。為了獲勝，它會不擇手段。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Night Slash",
                fr: "Tranche-Nuit",
                es: "Tajo Umbrío",
                it: "Nottesferza",
                de: "Nachthieb",
                "pt-br": "Talho Noturno",
                "zh-tw": "暗襲要害"
            },
            effect: {
                en: "Switch this Pokémon with 1 of your Benched Pokémon.",
                fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
                es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
                it: "Scambia questo Pokémon con 1 dei tuoi Pokémon in panchina.",
                de: "Tausche dieses Pokémon gegen eines deiner Bank-Pokémon aus.",
                "pt-br": "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
                "zh-tw": "將此寶可夢與你的 1 個備戰寶可夢交換。"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
