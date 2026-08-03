import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/108",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/108",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/108",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/108",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/108",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/108",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/108"
    },
    name: {
        en: "Amoonguss",
        fr: "Gaulet",
        es: "Amoonguss",
        it: "Amoonguss",
        de: "Hutsassa",
        "pt-br": "Amoonguss",
        "zh-tw": "敗露球菇",
        ko: "뽀록나",
        ja: "モロバレル"
    },
    illustrator: "GOSSAN",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Darkness"],
    dexId: [591],
    evolveFrom: {
        en: "Foongus",
        fr: "Trompignon",
        es: "Foongus",
        it: "Foongus",
        de: "Tarnpignon",
        "pt-br": "Foongus",
        "zh-tw": "哎呀球菇",
        ko: "깜놀버슬",
        ja: "タマゲタケ"
    },
    stage: "Stage1",
    description: {
        en: "Amoonguss mimics Poké Balls. It is not yet clear whether this mimicry is effective against other Pokémon.",
        fr: "Gaulet imite les Poké Balls. On ne sait pas encore si ce mimétisme est efficace contre les autres Pokémon.",
        es: "Amoonguss imita las Poké Balls. Aún no está claro si este mimetismo es efectivo contra otros Pokémon.",
        it: "Amoonguss imita le Poké Ball. Non è ancora chiaro se questo mimetismo sia efficace contro altri Pokémon.",
        de: "Hutsassa ahmt Pokébälle nach. Es ist noch nicht klar, ob diese Mimikry gegen andere Pokémon wirksam ist.",
        "pt-br": "Amoonguss imita Pokébolas. Ainda não está claro se este mimetismo é eficaz contra outros Pokémon.",
        "zh-tw": "敗露球菇 模仿寶可夢球。目前尚不清楚這種模仿是否對其他寶可夢有效。"
    },
    attacks: [
        {
            cost: ["Darkness", "Colorless"],
            name: {
                en: "Dangerous Spores",
                fr: "Spores Dangereuses",
                es: "Esporas Peligrosas",
                it: "Spore Pericolose",
                de: "Gefährliche Sporen",
                "pt-br": "Esporos Perigosos",
                "zh-tw": "險惡孢子"
            },
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned and Paralyzed.",
                fr: "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Empoisonné et Paralysé.",
                es: "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival ahora estará Envenenado y Paralizado.",
                it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è avvelenato e paralizzato.",
                de: "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt vergiftet und gelähmt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente agora está Envenenado e Paralisado.",
                "zh-tw": "拋一枚硬幣。如果正面，對手的活躍寶可夢現在中毒並麻痺。"
            },
            damage: 30
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
