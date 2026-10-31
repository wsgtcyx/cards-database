import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/082",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/082",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/082",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/082",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/082",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/082",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/082",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/082",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/082"
    },
    name: {
        en: "Haunter",
        fr: "Spectrum",
        es: "Haunter",
        "pt-br": "Haunter",
        "zh-tw": "鬼斯通",
        ja: "ゴースト",
        ko: "고우스트",
        it: "Haunter",
        de: "Alpollo"
    },
    illustrator: "HYOGONOSUKE",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 80,
    types: [
        "Darkness"
    ],
    stage: "Stage1",
    retreat: 1,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Gastly",
        fr: "Fantominus",
        es: "Gastly",
        it: "Gastly",
        de: "Nebulak",
        "pt-br": "Gastly",
        "zh-tw": "鬼斯",
        ja: "ゴース",
        ko: "고오스"
    },
    attacks: [
        {
            name: {
                en: "Suffocating Gas",
                fr: "Gaz Suffocant",
                es: "Gas Sofocante",
                it: "Gas Soffocante",
                de: "Würgegas",
                "pt-br": "Gás Asfixiante",
                "zh-tw": "瓦斯包圍",
                ja: "ガスでつつむ",
                ko: "가스로감싸기"
            },
            cost: [
                "Darkness"
            ],
            damage: 30
        }
    ],
    abilities: [],
    description: {
        en: "It likes to lurk in the dark and tap shoulders with a gaseous hand. Its touch causes endless shuddering.",
        fr: "Il adore se tapir dans l'ombre et faire frissonner ses proies pour l'éternité en leur touchant l'épaule.",
        es: "Le gusta acechar en la oscuridad y tocarles el hombro a sus víctimas con su mano gaseosa. Estas se quedan temblando para siempre.",
        it: "Adora stare in agguato nell'oscurità e toccare le spalle delle vittime con le sue mani gassose. Il suo tocco causa brividi incontrollabili.",
        de: "Es lauert gern im Dunkeln und tippt Leuten mit seiner gasförmigen Hand auf die Schulter. Seine Berührung erzeugt endloses Schaudern.",
        "pt-br": "Gosta de se esconder no escuro e bater nos ombros dos outros com sua mão gasosa. Seu toque causa arrepios que não acabam mais.",
        "zh-tw": "喜歡在黑暗中伸出氣體狀的手拍人的肩膀。一旦被摸到，就會顫抖個不停。",
        ja: "暗闇にまぎれ ガスの手を 伸ばし 人の肩を 叩くのが 好き。 触られると 震えが 止まらない。",
        ko: "어둠을 틈타 가스로 된 손을 뻗쳐\n사람의 어깨를 두드리기 좋아한다.\n그 손에 닿으면 떨림이 멈추지 않는다."
    }
};

export default card;
