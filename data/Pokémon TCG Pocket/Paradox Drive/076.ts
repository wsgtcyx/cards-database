import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/076",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/076"
    },
    name: {
        en: "Flittle",
        fr: "Flotillon",
        es: "Flittle",
        it: "Flittle",
        de: "Flattutu",
        "pt-br": "Flittle",
        "zh-tw": "飄飄雛",
        ko: "하느라기",
        ja: "ヒラヒナ"
    },
    illustrator: "Kanami Ogata",
    rarity: "One Star",
    category: "Pokemon",
    hp: 40,
    types: ["Psychic"],
    dexId: [955],
    stage: "Basic",
    description: {
        en: "It spends its time running around wastelands. If anyone steals its beloved berries, it will chase them down and exact its revenge.",
        fr: "Il passe son temps à courir dans les terrains vagues. Si quelqu’un vole ses baies bien-aimées, il les poursuivra et se vengera.",
        es: "Pasa su tiempo corriendo por terrenos baldíos. Si alguien roba sus queridas bayas, los perseguirá y se vengará.",
        it: "Trascorre il suo tempo correndo per le terre desolate. Se qualcuno ruba le sue amate bacche, lo inseguirà e si vendicherà.",
        de: "Es verbringt seine Zeit damit, durch Ödland zu rennen. Wenn jemand seine geliebten Beeren stiehlt, wird er sie jagen und Rache üben.",
        "pt-br": "Ele passa o tempo correndo por terrenos baldios. Se alguém roubar suas queridas frutas, ele irá persegui-los e se vingar.",
        "zh-tw": "它花時間在荒地裡奔跑。如果有人偷了它心愛的漿果，它就會追捕並實施報復。"
    },
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Psy Bolt",
                fr: "Boulon Psy",
                es: "Perno psi",
                it: "Psico Bolt",
                de: "Psy Bolt",
                "pt-br": "Raio Psíquico",
                "zh-tw": "念力"
            },
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                fr: "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Paralysé.",
                es: "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è paralizzato.",
                de: "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt gelähmt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
                "zh-tw": "拋一枚硬幣。如果正面，則對手的戰鬥寶可夢現在處於麻痺狀態。"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
