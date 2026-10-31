import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/065",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/065",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/065",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/065",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/065",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/065",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/065",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/065",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/065"
    },
    name: {
        en: "Cosmoem",
        fr: "Cosmovum",
        es: "Cosmoem",
        "pt-br": "Cosmoem",
        "zh-tw": "科斯莫姆",
        ja: "コスモウム",
        ko: "코스모움",
        it: "Cosmoem",
        de: "Cosmovum"
    },
    illustrator: "Kouki Saitou",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x",
        "pikachu"
    ],
    hp: 100,
    types: [
        "Psychic"
    ],
    stage: "Stage1",
    retreat: 3,
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Cosmog",
        fr: "Cosmog",
        es: "Cosmog",
        it: "Cosmog",
        de: "Cosmog",
        "pt-br": "Cosmog",
        "zh-tw": "科斯莫古",
        ja: "コスモッグ",
        ko: "코스모그"
    },
    attacks: [
        {
            name: {
                en: "Ram",
                fr: "Collision",
                es: "Apisonar",
                it: "Carica",
                de: "Ramme",
                "pt-br": "Aríete",
                "zh-tw": "衝撞",
                ja: "ぶつかる",
                ko: "부딪치기"
            },
            cost: [
                "Colorless",
                "Colorless"
            ],
            damage: 30
        }
    ],
    abilities: [],
    description: {
        en: "The absorption of starlight fuels this Pokémon's growth. The shell that encases it is harder than any known material.",
        fr: "La carapace qui le recouvre est plus dure que tout ce qui est connu par l’Homme. Il grandit en absorbant la lumière des étoiles.",
        es: "Está recubierto de un caparazón de una dureza que escapa al entendimiento humano. Crece al exponerse a la luz de las estrellas.",
        it: "Il suo esoscheletro è più duro di qualunque cosa che gli esseri umani conoscano. Cresce assorbendo la luce delle stelle.",
        de: "Es wird von einer Schale umhüllt, deren Härte Menschen vor ein Rätsel stellt. Es wächst, indem es in Sternenlicht badet.",
        "pt-br": "O crescimento deste Pokémon é nutrido pela absorção da luz das estrelas. A carapaça que o envolve é mais dura do que qualquer material conhecido.",
        "zh-tw": "將核心包裹起來的外殼擁有超越人類認知範圍的硬度。透過沐浴星光而成長。",
        ja: "人知を 超えた 硬さの 殻に 包まれている。 星の 光を 浴びて 成長する。",
        ko: "인간의 지식을 뛰어넘는 강도를 가진\n껍질에 둘러싸여 있다.\n별의 빛을 받아서 성장한다."
    }
};

export default card;
