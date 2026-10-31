import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/072",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/072",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/072",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/072",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/072",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/072",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/072",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/072",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/072"
    },
    name: {
        en: "Frogadier",
        fr: "Croâporal",
        es: "Frogadier",
        it: "Frogadier",
        de: "Amphizel",
        "pt-br": "Frogadier",
        "zh-tw": "呱頭蛙",
        ja: "ゲコガシラ",
        ko: "개굴반장"
    },
    illustrator: "5ban Graphics",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: [
        "Water"
    ],
    evolveFrom: {
        en: "Froakie",
        fr: "Grenousse",
        es: "Froakie",
        it: "Froakie",
        de: "Froxy",
        "pt-br": "Froakie",
        "zh-tw": "呱呱泡蛙",
        ja: "ケロマツ",
        ko: "개구마르"
    },
    description: {
        en: "Its swiftness is unparalleled.\nIt can scale a tower of more\nthan 2,000 feet in a minute's time.",
        fr: "Son agilité est incomparable. Il peut gravir une tour de 600 m de haut en moins d'une minute.",
        es: "Su agilidad no tiene parangón. De hecho, es capaz de escalar una torre de más de 600 metros en tan solo un minuto.",
        it: "Grazie alla sua straordinaria agilità, è in grado di scalare una torre alta più di 600 m in meno di un minuto.",
        de: "Seine Flinkheit sucht ihresgleichen. Es kann einen 600 m hohen Turm in weniger als einer Minute erklimmen.",
        "pt-br": "Sua velocidade é incomparável. Pode escalar uma torre de mais de 600 metros em um minuto.",
        "zh-tw": "靈巧的動作不會輸給任何人。只需1分鐘就能登上超過600公尺高的塔頂。",
        ja: "身軽さは だれにも 負けない。 ６００メートルを 超える タワーの 天辺まで １分で 登りきる。",
        ko: "누구보다도 가벼운 몸을 갖고 있다.\n600m를 넘는 타워의\n꼭대기까지 1분이면 올라간다."
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Bounce",
                fr: "Rebond",
                es: "Bote",
                it: "Rimbalzo",
                de: "Sprungfeder",
                "pt-br": "Ricochete",
                "zh-tw": "彈跳",
                ja: "とびはねる",
                ko: "뛰어오르기"
            },
            damage: 40,
            cost: [
                "Water",
                "Water"
            ],
            effect: {
                en: "Switch this Pokémon with 1 of your Benched Pokémon.",
                fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
                es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
                it: "Scambia questo Pokémon con uno della tua panchina.",
                de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
                "pt-br": "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
                "zh-tw": "將這隻寶可夢與備戰寶可夢互換。",
                ja: "このポケモンをベンチポケモンと入れ替える。",
                ko: "이 포켓몬을 벤치 포켓몬과 교체한다."
            }
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
