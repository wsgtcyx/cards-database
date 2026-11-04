import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/047/c1ff612a49a0c41f",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/047/c1ff612a49a0c41f",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/047/c1ff612a49a0c41f",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/047/c1ff612a49a0c41f",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/047/c1ff612a49a0c41f",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/047/c1ff612a49a0c41f",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/047/c1ff612a49a0c41f",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/047/c1ff612a49a0c41f",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/047/c1ff612a49a0c41f"
    },
    name: {
        en: "Gastly",
        fr: "Fantominus",
        es: "Gastly",
        it: "Gastly",
        de: "Nebulak",
        "pt-br": "Gastly",
        "zh-tw": "鬼斯",
        ko: "고오스",
        ja: "ゴース"
    },
    illustrator: "kodama",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    dexId: [92],
    stage: "Basic",
    description: {
        en: "Its body is made of gas. Despite lacking substance, it can envelop an opponent of any size and cause suffocation.",
        fr: "Son corps est composé de gaz. Il peut ainsi envelopper un adversaire de n'importe quelle taille et le faire suffoquer.",
        es: "Su etéreo cuerpo está hecho de gas. Puede envolver\na un oponente de cualquier tamaño hasta ahogarlo.",
        it: "Il suo corpo impalpabile è fatto di gas. Avvolge nemici di ogni dimensione, soffocandoli.",
        de: "Mit seinem gasförmigen Körper kann es Gegner jeder Größe einhüllen und ersticken.",
        "pt-br": "Seu corpo é feito de gás. Apesar da falta de consistência, pode envolver um oponente de qualquer tamanho e causar sufocamento.",
        "zh-tw": "不管對手的體型多大，由氣體構成的輕薄身體都能裹住對手並結束其性命。",
        ja: "ガスでできた 薄い 体は どんな 大きさの 相手も 包みこみ 息の根を 止める。",
        ko: "가스로 만들어진 몸은\n어떠한 크기의 상대라도\n둘러싸서 숨을 못 쉬게 한다."
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Mumble",
                fr: "Murmure",
                es: "Farfullar",
                it: "Borbottio",
                de: "Grummeln",
                "pt-br": "Resmungo",
                "zh-tw": "囈語",
                ja: "つぶやく",
                ko: "중얼거리기"
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
    retreat: 1,
    boosters: []
};

export default card;
