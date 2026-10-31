import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/104",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/104",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/104",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/104",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/104",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/104",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/104",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/104",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/104"
    },
    name: {
        en: "Pidgeot",
        fr: "Roucarnage",
        es: "Pidgeot",
        "pt-br": "Pidgeot",
        "zh-tw": "大比鳥",
        ja: "ピジョット",
        ko: "피죤투",
        it: "Pidgeot",
        de: "Tauboss"
    },
    illustrator: "kawayoo",
    rarity: "Three Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 130,
    types: [
        "Colorless"
    ],
    stage: "Stage2",
    retreat: 1,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Pidgeotto",
        fr: "Roucoups",
        es: "Pidgeotto",
        it: "Pidgeotto",
        de: "Tauboga",
        "pt-br": "Pidgeotto",
        "zh-tw": "比比鳥",
        ja: "ピジョン",
        ko: "피죤"
    },
    attacks: [
        {
            name: {
                en: "Clean Hit",
                fr: "Coup Net",
                es: "Impacto Limpio",
                it: "Colpo Pulito",
                de: "Sauberer Treffer",
                "pt-br": "Golpe Certeiro",
                "zh-tw": "俐落一擊",
                ja: "クリーンヒット",
                ko: "클린히트"
            },
            cost: [
                "Colorless"
            ],
            damage: "40+",
            effect: {
                en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 80 more damage.",
                fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 80 dégâts supplémentaires.",
                es: "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 80 puntos de daño más.",
                it: "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 80 danni in più.",
                de: "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 80 Schadenspunkte mehr zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 80 pontos de dano a mais.",
                "zh-tw": "若對手的戰鬥寶可夢為進化寶可夢,則增加80點傷害。",
                ja: "相手のバトルポケモンが進化ポケモンなら、80ダメージ追加。",
                ko: "상대의 배틀 포켓몬이 진화 포켓몬이라면 80데미지를 추가한다."
            }
        }
    ],
    abilities: [],
    description: {
        en: "When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.",
        fr: "Il survole la surface de l’eau pour repérer une proie et plonge en piqué pour l’attraper.",
        es: "Cuando caza, vuela muy deprisa a ras del agua y sorprende a inocentes presas como Magikarp.",
        it: "Quando caccia, vola velocissimo sul pelo dell’acqua e cattura ignare prede come Magikarp.",
        de: "Dieses Pokémon schnellt bei der Jagd blitzschnell unter Wasser, um seine ahnungslose Beute zu fangen.",
        "pt-br": "Quando caça, bate na superfície da água em alta velocidade para capturar presas desavisadas, como Magikarp.",
        "zh-tw": "覓食的時候，會貼著水面飛行而過，抓起鯉魚王等獵物。",
        ja: "エサを 探すとき 水面 すれすれを 滑るように 飛んで コイキングなどを わしづかみにする。",
        ko: "먹이를 찾을 때 수면을\n아슬아슬하게 미끄러지듯 날아\n잉어킹 등을 움켜잡는다."
    }
};

export default card;
