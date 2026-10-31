import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3a/055",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3a/055",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3a/055",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3a/055",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3a/055",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3a/055",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3a/055",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3a/055",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3a/055"
    },
    name: {
        en: "Herdier",
        "fr": "Ponchien",
        "es": "Herdier",
        "it": "Herdier",
        "de": "Terribark",
        "pt-br": "Herdier",
        "zh-tw": "哈約克",
        ja: "ハーデリア",
        ko: "하데리어",
    },
    illustrator: "Midori Harada",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    evolveFrom: {
        en: "Lillipup",
        "fr": "Ponchiot",
        "es": "Lillipup",
        "it": "Lillipup",
        "de": "Yorkleff",
        "pt-br": "Lillipup",
        "zh-tw": "小約克",
        ja: "ヨーテリー",
        ko: "요테리",
    },
    description: {
        en: "Herdier is a very smart and friendly Pokémon.\nSo much so that there's a theory that Herdier was\nthe first Pokémon to partner with people.",
        "fr": "Herdier est un Pokémon très intelligent et sympathique.\nÀ tel point qu'il existe une théorie selon laquelle Herdier était\nle premier Pokémon à s'associer avec les gens.",
        "es": "Herdier es un Pokémon muy inteligente y amigable.\nTanto es así que existe la teoría de que Herdier fue\nel primer Pokémon en asociarse con personas.",
        "it": "Herdier è un Pokémon molto intelligente e amichevole.\nTanto che esiste una teoria secondo cui Herdier lo era\nil primo Pokémon a collaborare con le persone.",
        "de": "Herdier ist ein sehr kluges und freundliches Pokémon.\nSo sehr, dass es eine Theorie gibt, dass Herdier es war\ndas erste Pokémon, das mit Menschen zusammenarbeitet.",
        "pt-br": "Herdier é um Pokémon muito inteligente e amigável.\nTanto é verdade que existe uma teoria de que Herdier foi\no primeiro Pokémon a fazer parceria com pessoas.",
        "zh-tw": "赫迪爾是一隻非常聰明且友好的神奇寶貝。\n以至於有一種理論認為赫迪爾是\n第一個與人類合作的神奇寶貝。",
        ja: "とても 賢く よく 懐く。 はじめて 人のパートナーに なった ポケモンと いう 説も あるのだ。",
        ko: "매우 영리하고 금방 친해진다.\n인간의 파트너가 된\n첫 포켓몬이라는 설도 있다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Bite",
                "fr": "Mordre",
                "es": "Morder",
                "it": "Morso",
                "de": "Beißen",
                "pt-br": "Morder",
                "zh-tw": "咬",
                ja: "かみつく",
                ko: "물기"
            },
            damage: 30,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
