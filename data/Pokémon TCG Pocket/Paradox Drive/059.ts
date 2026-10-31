import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/059",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/059",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/059",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/059",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/059",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/059",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/059",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3a/059",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3a/059"
    },
    name: {
        en: "Dunsparce",
        fr: "Insolourdo",
        es: "Dunsparce",
        it: "Dunsparce",
        de: "Dummisel",
        "pt-br": "Dunsparce",
        "zh-tw": "土龍弟弟",
        ko: "노고치",
        ja: "ノコッチ"
    },
    illustrator: "ryoma uratsuka",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [206],
    stage: "Basic",
    description: {
        en: "If spotted, it escapes by burrowing with its tail. It can float just slightly using its wings.",
        fr: "S'il est repéré, il s'échappe en creusant avec sa queue. Il peut flotter légèrement grâce à ses ailes.",
        es: "Si se le ve, escapa excavando con la cola. Puede flotar ligeramente usando sus alas.",
        it: "Se avvistato scappa scavando con la coda. Può galleggiare leggermente usando le ali.",
        de: "Wenn es entdeckt wird, entkommt es, indem es sich mit seinem Schwanz eingräbt. Mit seinen Flügeln kann es leicht schweben.",
        "pt-br": "Se for avistado, ele escapa cavando com a cauda. Ele pode flutuar ligeiramente usando suas asas.",
        "zh-tw": "如果被發現，它會用尾巴挖洞逃脫。它可以用翅膀輕微漂浮。",
        ja: "だれかに 姿を 見られると 尻尾で 穴を掘って 逃げだす。 羽で 少しだけ 浮かべる。",
        ko: "누군가에게 모습을 보이면\n꼬리로 구멍을 파서 도망친다.\n날개로 약간은 공중에 뜰 수 있다."
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Rollout",
                fr: "Roulade",
                es: "Rodar",
                it: "Rotolamento",
                de: "Walzer",
                "pt-br": "Rolagem",
                "zh-tw": "滾動",
                ja: "ころがる",
                ko: "구르기"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
