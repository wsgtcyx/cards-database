import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3b/063",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3b/063",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3b/063",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3b/063",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3b/063",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3b/063",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3b/063",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3b/063",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3b/063"
    },
    name: {
        en: "Cinccino",
        "fr": "Pashmilla",
        "es": "Cinccino",
        "it": "Cinccino",
        "de": "Chillabell",
        "pt-br": "Cinccino",
        "zh-tw": "奇諾栗鼠",
        ja: "チラチーノ",
        ko: "치라치노",
    },
    illustrator: "Mizue",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    evolveFrom: {
        en: "Minccino",
        "fr": "Chinchidou",
        "es": "Minccino",
        "it": "Minccino",
        "de": "Picochilla",
        "pt-br": "Minccino",
        "zh-tw": "泡沫栗鼠",
        ja: "チラーミィ",
        ko: "치라미",
    },
    description: {
        en: "Its body secretes oil that this Pokémon spreads\nover its nest as a coating to protect it from dust.\nCinccino won't tolerate even a speck of the stuff.",
        "fr": "Son corps sécrète de l'huile que ce Pokémon répand\nsur son nid comme revêtement pour le protéger de la poussière.\nCinccino ne tolérera même pas la moindre parcelle de ce genre de choses.",
        "es": "Su cuerpo segrega aceite que este Pokémon esparce\nsobre su nido como una capa para protegerlo del polvo.\nCinccino no tolera ni una pizca de esa sustancia.",
        "it": "Il suo corpo secerne olio che questo Pokémon diffonde\nsopra il suo nido come rivestimento per proteggerlo dalla polvere.\nCinccino non tollererà nemmeno un briciolo di quella roba.",
        "de": "Sein Körper sondert Öl ab, das dieses Pokémon verbreitet\nüber seinem Nest als Beschichtung, um es vor Staub zu schützen.\nCinccino duldet nicht einmal ein bisschen davon.",
        "pt-br": "Seu corpo secreta óleo que este Pokémon espalha\nsobre seu ninho como um revestimento para protegê-lo da poeira.\nCinccino não tolera nem um pouquinho dessa coisa.",
        "zh-tw": "它的身體會分泌這種神奇寶貝傳播的油\n在它的巢上作為塗層，以保護它免受灰塵侵害。\n辛奇諾連一丁點都不能容忍。",
        ja: "塵ひとつ 許せない 潔癖。 体から 染み出る 油を 巣に 塗りつけ コーティングする。",
        ko: "먼지 한 톨도 용납하지 않는 결벽증.\n몸에서 나오는 기름을\n둥지에 발라서 코팅한다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Slap",
                "fr": "Gifler",
                "es": "Bofetada",
                "it": "Schiaffo",
                "de": "Schlagen",
                "pt-br": "Tapa",
                "zh-tw": "拍擊",
                ja: "ビンタ",
                ko: "뺨치기"
            },
            damage: 40,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
