import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/408/hd-4672f06c1478",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/408",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/408/hd-568b23cf5f04",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/408",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/408",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/408",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/408",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/408",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/408"
    },
    name: {
        en: "Eevee",
        fr: "Évoli",
        es: "Eevee",
        it: "Eevee",
        de: "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ja: "イーブイ",
        ko: "이브이"
    },
    illustrator: "Tika Matsuno",
    rarity: "One Star",
    category: "Pokemon",
    hp: 50,
    types: [
        "Colorless"
    ],
    description: {
        en: "Its genetic code is irregular. It may mutate if it is\nexposed to radiation from element stones.",
        fr: "Ses gènes atypiques lui permettent de muter s'il est exposé aux radiations d'une pierre.",
        es: "De código genético irregular, puede mutar si se le expone a la radiación de piedras evolutivas.",
        it: "A causa del suo codice genetico anomalo, può trasformarsi improvvisamente se esposto alle radiazioni emesse dalle pietre.",
        de: "Das Erbmaterial von Evoli ist anomal. Die Strahlung von besonderen Steinen lässt es mutieren.",
        "pt-br": "Seu código genético é irregular. Fica suscetível a mutações caso seja exposto à radiação de pedras elementares.",
        "zh-tw": "有著不規則的基因。石頭散發出的放射線，會使牠的身體發生突變。",
        ja: "不規則な 遺伝子を 持つ。 石から出る 放射線によって 体が 突然変異を 起こす。",
        ko: "불규칙한 유전자를 가졌다.\n돌에서 나오는 방사선에 의해\n몸이 돌연변이를 일으킨다."
    },
    stage: "Basic",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Boosted Evolution",
                fr: "Évolution Boostée",
                es: "Evolución Potenciada",
                it: "Evoluzione Potenziata",
                de: "Evolutionsschub",
                "pt-br": "Impulso da Evolução",
                "zh-tw": "提升進化",
                ja: "ブーストしんか",
                ko: "부스트 진화"
            },
            effect: {
                en: "As long as this Pokémon is in the Active Spot, it can evolve during your first turn or the turn you play it.",
                fr: "Tant que ce Pokémon est sur le Poste Actif, il peut évoluer pendant votre premier tour ou pendant le tour où vous le jouez.",
                es: "Mientras este Pokémon esté en el Puesto Activo, puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego.",
                it: "Fintanto che questo Pokémon è in posizione attiva, può evolversi durante il tuo primo turno o il turno in cui lo giochi.",
                de: "Solange dieses Pokémon in der Aktiven Position ist, kann es sich während deines ersten Zuges oder während des Zuges, in dem du es spielst, entwickeln.",
                "pt-br": "Enquanto este Pokémon estiver no Campo Ativo, ele poderá evoluir durante o seu primeiro turno ou durante o turno em que for colocado em jogo.",
                "zh-tw": "只要這隻寶可夢在戰鬥場上,就算在自己的最初回合或者剛使出的回合,也可進化。",
                ja: "このポケモンは、バトル場にいるかぎり、最初の自分の番や、出したばかりの番でも進化できる。",
                ko: "이 포켓몬은 배틀필드에 있는 한, 자신의 첫 번째 차례나 필드에 처음 나왔을 때라도 진화할 수 있다."
            }
        }
    ],
    attacks: [
        {
            name: {
                en: "Stampede",
                fr: "Ruée",
                es: "Estampida",
                it: "Fuggi Fuggi",
                de: "Zertrampeln",
                "pt-br": "Estouro",
                "zh-tw": "踩",
                ja: "ふむ",
                ko: "밟기"
            },
            damage: 10,
            cost: [
                "Colorless"
            ]
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
