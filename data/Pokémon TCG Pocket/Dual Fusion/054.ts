import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/054",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/054",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/054",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/054",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/054",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/054",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/054",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/054",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/054"
    },
    name: {
        en: "Kadabra",
        fr: "Kadabra",
        es: "Kadabra",
        "pt-br": "Kadabra",
        "zh-tw": "勇基拉",
        ja: "ユンゲラー",
        ko: "윤겔라",
        it: "Kadabra",
        de: "Kadabra"
    },
    illustrator: "Bun Toujo",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 80,
    types: [
        "Psychic"
    ],
    stage: "Stage1",
    retreat: 1,
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Abra",
        fr: "Abra",
        es: "Abra",
        it: "Abra",
        de: "Abra",
        "pt-br": "Abra",
        "zh-tw": "凱西",
        ja: "ケーシィ",
        ko: "캐이시"
    },
    attacks: [
        {
            name: {
                en: "Psychic Sphere",
                fr: "Sphère Psy",
                es: "Esfera Psíquica",
                it: "Psicosfera",
                de: "Psychosphäre",
                "pt-br": "Esfera Psíquica",
                "zh-tw": "念動彈",
                ja: "ねんどうだん",
                ko: "염동탄"
            },
            cost: [
                "Colorless",
                "Psychic"
            ],
            damage: 50
        }
    ],
    abilities: [],
    description: {
        en: "Using its psychic power, Kadabra levitates as it sleeps. It uses its springy tail as a pillow.",
        fr: "Ses pouvoirs psychiques lui permettent de léviter en dormant. Il utilise alors sa queue très souple comme un oreiller.",
        es: "Duerme suspendido en el aire gracias a sus poderes psíquicos. La cola, de una flexibilidad extraordinaria, hace las veces de almohada.",
        it: "I suoi poteri psichici gli permettono di levitare mentre dorme. Come cuscino usa la sua coda straordinariamente elastica.",
        de: "Kadabras Psycho-Kräfte ermöglichen es ihm, schwebend zu schlafen. Seinen äußerst elastischen Schweif nutzt es dabei als Kissen.",
        "pt-br": "Usando seu poder psíquico, Kadabra levita enquanto dorme. Usa sua cauda elástica como um travesseiro.",
        "zh-tw": "會用精神力量浮在空中睡覺。伸縮性非凡的尾巴會當成枕頭用。",
        ja: "サイコパワーで 宙に 浮いたまま 眠る。 弾力に 優れた しっぽを 枕がわりに するぞ。",
        ko: "사이코 파워로 공중에 떠서 잠든다.\n탄력이 뛰어난 꼬리를\n베개 대신으로 사용한다."
    }
};

export default card;
