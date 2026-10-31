import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/227",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/227",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/227",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/227",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/227",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/227",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/227",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/227",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/227"
    },
    name: {
        en: "Nidorino",
        "fr": "Nidorino",
        "es": "Nidorino",
        "it": "Nidorino",
        "de": "Nidorino",
        "pt-br": "Nidorino",
        "zh-tw": "尼多力諾",
        ja: "ニドリーノ",
        ko: "니드리노",
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 90,
    types: ["Darkness"],
    evolveFrom: {
        en: "Nidoran♂",
        "fr": "Nidoran♂",
        "es": "Nidoran♂",
        "it": "Nidoran ♂",
        "de": "Nidoran♂",
        "pt-br": "Nidoran♂",
        "zh-tw": "尼多朗",
        ja: "ニドラン♂",
        ko: "니드런♂",
    },
    description: {
        en: "With a horn that's harder than diamond, this\nPokémon goes around shattering boulders as it\nsearches for a moon stone.",
        "fr": "Avec une corne plus dure que le diamant, ce\nPokémon contourne les rochers en brisant\ncherche une pierre de lune.",
        "es": "Con un cuerno que es más duro que el diamante, este\nPokémon anda rompiendo rocas mientras\nbusca una piedra lunar.",
        "it": "Con un corno più duro del diamante, questo\nI Pokémon vanno in giro frantumando i massi\ncerca una pietra di luna.",
        "de": "Mit einem Horn, das härter als Diamant ist\nPokémon geht umher und zerschmettert dabei Felsbrocken\nsucht nach einem Mondstein.",
        "pt-br": "Com um chifre mais duro que o diamante, este\nPokémon anda quebrando pedras enquanto\nprocura por uma pedra da lua.",
        "zh-tw": "擁有比鑽石還硬的號角，這\n神奇寶貝四處走動，粉碎巨石\n尋找月光石。",
        ja: "ダイヤモンドより 硬い ツノで 岩石を 砕いて まわる。 つきのいしを 探しているのだ。",
        ko: "다이아몬드보다 단단한 뿔로\n암석을 부수며 다닌다.\n달의돌을 찾고 있는 것이다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Horn Attack",
                "fr": "Attaque de corne",
                "es": "Ataque de cuerno",
                "it": "Attacco di corno",
                "de": "Hornangriff",
                "pt-br": "Ataque de chifre",
                "zh-tw": "號角攻擊",
                ja: "つのでつく",
                ko: "뿔찌르기"
            },
            damage: 40,
            cost: ["Darkness", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh"]
};
export default card;
