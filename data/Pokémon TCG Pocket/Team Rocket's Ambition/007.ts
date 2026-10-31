import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/007",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/007",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/007",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/007",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/007",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/007",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/007",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4a/007",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4a/007"
    },
    name: {
        en: "Team Rocket's Moltres ex",
        fr: "Sulfura-ex de la Team Rocket",
        es: "Moltres ex del Team Rocket",
        it: "Moltres-ex del Team Rocket",
        de: "Team Rockets Lavados-ex",
        "pt-br": "Moltres ex da Equipe Rocket",
        "zh-tw": "火箭隊的火焰鳥ex",
        ko: "로켓단의 파이어 ex",
        ja: "ロケット団のファイヤーex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Fire"],
    stage: "Basic",
    attacks: [
        {
            cost: ["Fire"],
            name: {
                en: "Heat Charged",
                fr: "Chaleur Chargée",
                es: "Carga Térmica",
                it: "Termocarica",
                de: "Hitzeaufladung",
                "pt-br": "Carga de Calor",
                "zh-tw": "高溫充能",
                ja: "ヒートチャージ",
                ko: "히트차지"
            },
            effect: {
                en: "Flip 3 coins. For each heads, produce a {R} Energy from your Energy Zone and attach it to this Pokémon.",
                fr: "Lancez 3 pièces. Pour chaque côté face, prenez une Énergie {R} de votre zone Énergie et attachez‐la à ce Pokémon.",
                es: "Lanza 3 monedas. Por cada cara, une 1 Energía {R} de tu área de Energía a este Pokémon.",
                it: "Lancia 3 volte una moneta. Ogni volta che esce testa, crea un'Energia {R} nella tua Zona Energia e assegnala a questo Pokémon.",
                de: "Wirf 3 Münzen. Generiere pro Kopf 1 {R}-Energie in deinem Energiebereich und lege sie an dieses Pokémon an.",
                "pt-br": "Jogue 3 moedas. Para cada cara, pegue uma Energia {R} da sua Zona de Energia e ligue-a a este Pokémon.",
                "zh-tw": "擲3次硬幣,從自己的能量區抽出與正面出現的次數相同數量的{R}能量,附於這隻寶可夢身上。",
                ja: "コインを3回投げ、オモテの数ぶんの{R}エネルギーを自分のエネルギーゾーンから出し、このポケモンにつける。",
                ko: "동전을 3번 던져서 앞면이 나온 수만큼의 {R}에너지를 자신의 에너지존에서 내보내 이 포켓몬에게 붙인다."
            }
        },
        {
            cost: ["Fire", "Fire", "Fire", "Colorless"],
            name: {
                en: "Netherwing",
                fr: "Ailes des Enfers",
                es: "Ala Averna",
                it: "Ali di Fuoco",
                de: "Infernale Flügel",
                "pt-br": "Asa do Inferno",
                "zh-tw": "獄炎之翼",
                ja: "ごくえんのつばさ",
                ko: "지옥불의날개"
            },
            effect: {
                en: "Discard a {R} Energy from this Pokémon.",
                fr: "Défaussez une Énergie {R} de ce Pokémon.",
                es: "Descarta 1 Energía {R} de este Pokémon.",
                it: "Rimuovi un'Energia {R} da questo Pokémon.",
                de: "Lege 1 {R}-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte 1 Energia {R} deste Pokémon.",
                "zh-tw": "將這隻寶可夢身上的1個{R}能量丟棄。",
                ja: "このポケモンから{R}エネルギーを1個トラッシュ。",
                ko: "이 포켓몬에서 {R}에너지를 1개 트래쉬한다."
            },
            damage: 130
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
