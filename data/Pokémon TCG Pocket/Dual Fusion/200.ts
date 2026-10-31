import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/200",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/200",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/200",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/200",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/200",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/200",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/200",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/200",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/200"
    },
    name: {
        en: "Rhydon",
        fr: "Rhinoféros",
        es: "Rhydon",
        "pt-br": "Rhydon",
        "zh-tw": "鑽角犀獸",
        ja: "サイドン",
        ko: "코뿌리",
        it: "Rhydon",
        de: "Rizeros"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 110,
    types: [
        "Fighting"
    ],
    stage: "Stage1",
    retreat: 3,
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Rhyhorn",
        fr: "Rhinocorne",
        es: "Rhyhorn",
        it: "Rhyhorn",
        de: "Rihorn",
        "pt-br": "Rhyhorn",
        "zh-tw": "獨角犀牛",
        ja: "サイホーン",
        ko: "뿔카노"
    },
    attacks: [
        {
            name: {
                en: "Megahorn",
                fr: "Mégacorne",
                es: "Megacuerno",
                it: "Megacorno",
                de: "Vielender",
                "pt-br": "Megachifre",
                "zh-tw": "超級角擊",
                ja: "メガホーン",
                ko: "메가혼"
            },
            cost: [
                "Fighting",
                "Fighting"
            ],
            damage: 100,
            effect: {
                en: "Flip a coin. If tails, this attack does nothing.",
                fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
                es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
                it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
                de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
                "pt-br": "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
                "zh-tw": "擲1次硬幣若為反面,則這個招式失敗。",
                ja: "コインを1回投げウラなら、このワザは失敗。",
                ko: "동전을 1번 던져서 뒷면이 나오면 이 기술은 실패한다."
            }
        }
    ],
    abilities: [],
    description: {
        en: "The horn of a Rhydon is powerful enough to crush raw diamonds. These Pokémon polish their horns by bashing them together.",
        fr: "Il frappe sa corne contre celle de ses congénères afin de la renforcer. Celle-ci est assez robuste pour briser un diamant à l’état brut.",
        es: "Hace chocar el cuerno con el de sus congéneres para afilarlo. Es capaz de horadar diamantes en bruto con él.",
        it: "Si scontra con i suoi simili per affinare il corno che può fracassare perfino i diamanti grezzi.",
        de: "Mit seinem Horn kann es selbst Rohdiamanten zertrümmern. Artgenossen stoßen ihre Hörner aneinander, um sie zu schärfen.",
        "pt-br": "O chifre de um Rhydon é tão poderoso que pode até esmagar diamantes. Estes Pokémon batem seus chifres uns nos outros para mantê-los sempre lustrosos.",
        "zh-tw": "角的威力足以粉碎鑽石原石。會與夥伴碰撞彼此的角，藉此來打磨打磨它。",
        ja: "ダイヤモンドの 原石を 砕く 威力の ツノを 仲間同士で ぶつけあって 磨きあげている。",
        ko: "다이아몬드 원석도 부숴 버리는\n위력을 자랑하는 뿔을\n동료들과 부딪치며 단련한다."
    }
};

export default card;
