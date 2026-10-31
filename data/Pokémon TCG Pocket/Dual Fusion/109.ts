import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/109",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/109",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/109",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/109",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/109",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/109",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/109",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/109",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/109"
    },
    name: {
        en: "Porygon2",
        fr: "Porygon2",
        es: "Porygon2",
        "pt-br": "Porygon2",
        "zh-tw": "多邊獸Ⅱ",
        ja: "ポリゴン2",
        ko: "폴리곤2",
        it: "Porygon2",
        de: "Porygon2"
    },
    illustrator: "GOSSAN",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 90,
    types: [
        "Colorless"
    ],
    stage: "Stage1",
    retreat: 2,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Porygon",
        fr: "Porygon",
        es: "Porygon",
        it: "Porygon",
        de: "Porygon",
        "pt-br": "Porygon",
        "zh-tw": "多邊獸",
        ja: "ポリゴン",
        ko: "폴리곤"
    },
    attacks: [
        {
            name: {
                en: "Tackle",
                fr: "Charge",
                es: "Placaje",
                it: "Azione",
                de: "Tackle",
                "pt-br": "Investida",
                "zh-tw": "撞擊",
                ja: "たいあたり",
                ko: "몸통박치기"
            },
            cost: [
                "Colorless"
            ],
            damage: 30
        }
    ],
    abilities: [],
    description: {
        en: "This artificial Pokémon evolved thanks to cutting-edge science. It sometimes displays behavior that is not in its programming.",
        fr: "Ce Pokémon artificiel a évolué grâce aux derniers progrès scientifiques. Il a parfois des réactions qui ne font pas partie de sa programmation.",
        es: "Pokémon artificial evolucionado con tecnología de vanguardia. En ocasiones muestra reacciones que no forman parte de su código.",
        it: "Un Pokémon artificiale realizzato con tecnologia d’avanguardia. Di tanto in tanto mostra reazioni non programmate.",
        de: "Dieses künstliche Pokémon entwickelte sich mithilfe neuester Technologie. Manchmal zeigt es Reaktionen, die nicht einprogrammiert sind.",
        "pt-br": "Este Pokémon artificial evoluiu graças à ciência moderna. Às vezes, demonstra um comportamento que não está em sua programação.",
        "zh-tw": "利用最新科技進化的人工寶可夢。有時會表現出程式裡沒有的反應。",
        ja: "最新科学で 進化した 人工の ポケモン。 ときどき プログラムにない 反応をみせる。",
        ko: "최신 과학에 의해 진화한 인공 포켓몬.\n가끔씩 프로그래밍되어 있지 않은\n반응을 보인다."
    }
};

export default card;
