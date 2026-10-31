import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4a/015",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4a/015",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4a/015",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4a/015",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4a/015",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4a/015",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4a/015",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4a/015",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4a/015"
    },
    name: {
        en: "Tentacool",
        "fr": "Tentacool",
        "es": "Tentacool",
        "it": "Tentacool",
        "de": "Tentacha",
        "pt-br": "Tentacool",
        "zh-tw": "瑪瑙水母",
        ja: "メノクラゲ",
        ko: "왕눈해",
    },
    illustrator: "Hajime Kusajima",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "Tentacool is not a particularly strong swimmer.\nIt drifts across the surface of shallow seas as it\nsearches for prey.",
        "fr": "Tentacool n'est pas un nageur particulièrement fort.\nIl dérive à la surface des mers peu profondes alors qu'il\nrecherche des proies.",
        "es": "Tentacool no es un nadador particularmente fuerte.\nSe desplaza por la superficie de mares poco profundos a medida que avanza.\nbusca presas.",
        "it": "Tentacool non è un nuotatore particolarmente forte.\nVa alla deriva sulla superficie dei mari poco profondi\ncerca la preda.",
        "de": "Tentacool ist kein besonders starker Schwimmer.\nDabei treibt es über die Oberfläche flacher Meere\nsucht nach Beute.",
        "pt-br": "Tentacool não é um nadador particularmente forte.\nEle flutua pela superfície de mares rasos à medida que\nprocura por presas.",
        "zh-tw": "Tentacool 並不是一個特別擅長游泳的人。\n它在淺海表面漂流\n尋找獵物。",
        ja: "泳ぐ 力は 強くは ない。 浅い 海の 水面を 漂いながら 獲物を 探す。",
        ko: "헤엄치는 힘은 강하지 않다.\n얕은 바다 수면을 떠다니면서\n먹이를 찾는다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Poison Sting",
                "fr": "Piqûre de poison",
                "es": "Picadura de veneno",
                "it": "Puntura di veleno",
                "de": "Giftstich",
                "pt-br": "Picada Venenosa",
                "zh-tw": "毒刺",
                ja: "どくばり",
                ko: "독침"
            },
            damage: 20,
            cost: ["Water", "Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Empoisonné.",
                "es": "El Pokémon Activo de tu rival ahora está Envenenado.",
                "it": "Il Pokémon attivo del tuo avversario ora è avvelenato.",
                "de": "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "你對手的主動神奇寶貝現在中毒了。",
                ja: "相手のバトルポケモンをどくにする。",
                ko: "상대의 배틀 포켓몬을 독으로 만든다."
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
