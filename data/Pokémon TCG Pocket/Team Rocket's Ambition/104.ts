import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/104",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/104",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/104",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/104",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/104",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/104",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/104",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4a/104",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4a/104"
    },
    name: {
        en: "Swellow",
        fr: "Hélédelle",
        es: "Swellow",
        it: "Swellow",
        de: "Schwalboss",
        "pt-br": "Swellow",
        "zh-tw": "大王燕",
        ko: "스왈로",
        ja: "オオスバメ"
    },
    illustrator: "whomor Inc.",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    dexId: [277],
    evolveFrom: {
        en: "Taillow",
        fr: "Nirondelle",
        es: "Taillow",
        it: "Taillow",
        de: "Schwalbini",
        "pt-br": "Taillow",
        "zh-tw": "傲骨燕",
        ko: "테일로",
        ja: "スバメ"
    },
    stage: "Stage1",
    description: {
        en: "It dives at a steep angle as soon as it spots its prey. It catches its prey with sharp claws.",
        fr: "Une fois sa proie repérée, il fond sur elle en un éclair et la capture avec ses griffes acérées.",
        es: "Vive en los bosques. Si encuentra una presa, se lanza en picado y la atrapa con sus afiladas garras.",
        it: "Trova nella foresta le sue prede, vi si scaglia sopra in picchiata e le afferra con i suoi artigli affilati.",
        de: "Findet es Beute, stürzt es sich aus großer Höhe darauf und packt sie mit seinen spitzen Krallen.",
        "pt-br": "Ele mergulha em um ângulo Íngreme assim que avista sua presa. Ele captura suas presas com garras afiadas.",
        "zh-tw": "發現居住在森林裡的獵物時，會從高空俯衝而下，用銳利的爪子捕捉獵物。",
        ja: "森に 住む 獲物を 見つけると 上空から 急降下。 鋭い ツメで 捕まえる。",
        ko: "숲에 사는 먹이를 찾으면\n상공에서 급강하해서\n예리한 발톱으로 잡는다."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Repelling Wind",
                fr: "Vent Repousse",
                es: "Viento Repelente",
                it: "Vento Respingente",
                de: "Zurückwerfender Wind",
                "pt-br": "Vento Repelente",
                "zh-tw": "防蟲之風",
                ja: "むしよけウインド",
                ko: "벌레회피 윈드"
            },
            effect: {
                en: "Once during your turn, you may switch out your opponent's Active Basic Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
                fr: "Une fois pendant votre tour, vous pouvez échanger le Pokémon de base Actif de votre adversaire contre l'un de ses Pokémon de Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
                es: "Una vez durante tu turno, puedes mover el Pokémon Básico Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
                it: "Una sola volta durante il tuo turno, puoi spostare il Pokémon Base attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
                de: "Einmal während deines Zuges kannst du das Aktive Basis-Pokémon deines Gegners auf seine Bank auswechseln. (Dein Gegner wählt das neue Aktive Pokémon.)",
                "pt-br": "Uma vez durante o seu turno, você poderá mandar o Pokémon Básico Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
                "zh-tw": "在自己的回合時，可使用1次。將對手的戰鬥場的基礎寶可夢與備戰寶可夢互換。（由對手選擇放置於戰鬥場的寶可夢。）",
                ja: "自分の番に1回使える。相手のバトル場のたねポケモンをベンチポケモンと入れ替える。[バトル場に出すポケモンは相手が選ぶ。]",
                ko: "자신의 차례에 1번 사용할 수 있다. 상대 배틀필드의 기본 포켓몬을 벤치 포켓몬과 교체한다. (배틀필드로 내보낼 포켓몬은 상대가 선택한다.)"
            }
        }
    ],
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Wing Attack",
                fr: "Cru-Ailes",
                es: "Ataque Ala",
                it: "Attacco d'Ala",
                de: "Flügelschlag",
                "pt-br": "Ataque de Asa",
                "zh-tw": "翅膀攻擊",
                ja: "つばさでうつ",
                ko: "날개치기"
            },
            damage: 50
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
