import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/131",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/131",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/131",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/131",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/131",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/131",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/131",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/131",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/131"
    },
    name: {
        en: "Gigalith ex",
        fr: "Gigalithe-ex",
        es: "Gigalith ex",
        it: "Gigalith-ex",
        de: "Brockoloss-ex",
        "pt-br": "Gigalith ex",
        "zh-tw": "龐岩怪ex",
        ja: "ギガイアスex",
        ko: "기가이어스 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 190,
    types: [
        "Fighting"
    ],
    evolveFrom: {
        en: "Boldore",
        fr: "Géolithe",
        es: "Boldore",
        it: "Boldore",
        de: "Sedimantur",
        "pt-br": "Boldore",
        "zh-tw": "地幔岩",
        ja: "ガントル",
        ko: "암트르"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Megaton Cannon",
                fr: "Canon Mégatonne",
                es: "Cañón Megatón",
                it: "Cannone Megatonico",
                de: "Megatonnenkanone",
                "pt-br": "Canhão Megaton",
                "zh-tw": "百萬噸加農炮",
                ja: "メガトンキャノン",
                ko: "메가톤캐논"
            },
            cost: [
                "Fighting",
                "Fighting",
                "Fighting",
                "Fighting"
            ],
            effect: {
                en: "This attack does 140 damage to 1 of your opponent's Pokémon. During your next turn, this Pokémon can't attack.",
                fr: "Cette attaque inflige 140 dégâts à un des Pokémon de votre adversaire. Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
                es: "Este ataque hace 140 puntos de daño a 1 de los Pokémon de tu rival. Durante tu próximo turno, este Pokémon no puede atacar.",
                it: "Questo attacco infligge 140 danni a uno dei Pokémon del tuo avversario. Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
                de: "Diese Attacke fügt 1 Pokémon deines Gegners 140 Schadenspunkte zu. Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
                "pt-br": "Este ataque causa 140 pontos de dano a 1 dos Pokémon do seu oponente. Durante o seu próximo turno, este Pokémon não poderá atacar.",
                "zh-tw": "對手的1隻寶可夢受到140點傷害。在下個自己的回合,這隻寶可夢無法使用招式。",
                ja: "相手のポケモン1匹に140ダメージ。次の自分の番、このポケモンはワザが使えない。",
                ko: "상대의 포켓몬 1마리에게 140데미지를 준다. 자신의 다음 차례에 이 포켓몬은 기술을 사용할 수 없다."
            }
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 4
};

export default card;
