import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/079",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/079",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/079",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/079",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/079",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/079",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/079"
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
    rarity: "Two Star",
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
                "zh-tw": "高溫充能"
            },
            effect: {
                en: "Flip 3 coins. For each heads, produce a {R} Energy from your Energy Zone and attach it to this Pokémon.",
                fr: "Lancez 3 pièces. Pour chaque côté face, prenez une Énergie {R} de votre zone Énergie et attachez‐la à ce Pokémon.",
                es: "Lanza 3 monedas. Por cada cara, une 1 Energía {R} de tu área de Energía a este Pokémon.",
                it: "Lancia 3 volte una moneta. Ogni volta che esce testa, crea un'Energia {R} nella tua Zona Energia e assegnala a questo Pokémon.",
                de: "Wirf 3 Münzen. Generiere pro Kopf 1 {R}-Energie in deinem Energiebereich und lege sie an dieses Pokémon an.",
                "pt-br": "Jogue 3 moedas. Para cada cara, pegue uma Energia {R} da sua Zona de Energia e ligue-a a este Pokémon.",
                "zh-tw": "擲3次硬幣,從自己的能量區抽出與正面出現的次數相同數量的{R}能量,附於這隻寶可夢身上。"
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
                "zh-tw": "獄炎之翼"
            },
            effect: {
                en: "Discard a {R} Energy from this Pokémon.",
                fr: "Défaussez une Énergie {R} de ce Pokémon.",
                es: "Descarta 1 Energía {R} de este Pokémon.",
                it: "Rimuovi un'Energia {R} da questo Pokémon.",
                de: "Lege 1 {R}-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte 1 Energia {R} deste Pokémon.",
                "zh-tw": "將這隻寶可夢身上的1個{R}能量丟棄。"
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
