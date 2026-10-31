import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/030",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/030",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/030",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/030",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/030",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/030",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/030",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/030",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/030"
    },
    name: {
        en: "Wartortle",
        fr: "Carabaffe",
        es: "Wartortle",
        "pt-br": "Wartortle",
        "zh-tw": "卡咪龜",
        ja: "カメール",
        ko: "어니부기",
        it: "Wartortle",
        de: "Schillok"
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 90,
    types: [
        "Water"
    ],
    stage: "Stage1",
    retreat: 2,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Squirtle",
        fr: "Carapuce",
        es: "Squirtle",
        it: "Squirtle",
        de: "Schiggy",
        "pt-br": "Squirtle",
        "zh-tw": "傑尼龜",
        ja: "ゼニガメ",
        ko: "꼬부기"
    },
    attacks: [
        {
            name: {
                en: "Spinning Attack",
                fr: "Attaque Tournante",
                es: "Ataque Giratorio",
                it: "Attacco Rotante",
                de: "Rundumangriff",
                "pt-br": "Ataque Giratório",
                "zh-tw": "迴轉攻擊",
                ja: "かいてんアタック",
                ko: "회전어택"
            },
            cost: [
                "Water",
                "Water"
            ],
            damage: 50
        }
    ],
    abilities: [],
    description: {
        en: "Wartortle’s long, furry tail is a symbol of longevity, so this Pokémon is quite popular among older people.",
        fr: "Sa longue queue touffue est un symbole de longévité. Les personnes âgées apprécient donc particulièrement ce Pokémon.",
        es: "Tiene una cola larga y peluda que simboliza la longevidad y lo hace popular entre los mayores.",
        it: "La coda lunga e folta è simbolo di longevità. È un Pokémon particolarmente popolare tra le persone anziane.",
        de: "Sein langer und buschiger Schweif zeugt von Langlebigkeit. Es ist besonders bei älteren Menschen beliebt.",
        "pt-br": "A cauda longa e peluda de Wartortle é um símbolo de longevidade, por isso este Pokémon é bem popular entre pessoas mais velhas.",
        "zh-tw": "蓬鬆長長的尾巴被視為長壽的象徵。特別深受老人喜愛。",
        ja: "長くて ふさふさの 尻尾は 長生きの シンボル。 とくに お年寄りに 人気がある。",
        ko: "길고 탐스러운 꼬리는\n장수의 상징이다.\n노인층에게 특히 인기가 많다."
    }
};

export default card;
