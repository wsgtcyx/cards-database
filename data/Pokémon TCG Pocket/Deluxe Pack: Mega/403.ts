import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/403",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/403",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/403",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/403",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/403",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/403",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/403",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/403",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/403"
    },
    name: {
        en: "Charmeleon",
        fr: "Reptincel",
        es: "Charmeleon",
        it: "Charmeleon",
        de: "Glutexo",
        "pt-br": "Charmeleon",
        "zh-tw": "火恐龍",
        ja: "リザード",
        ko: "리자드"
    },
    illustrator: "Jerky",
    rarity: "One Star",
    category: "Pokemon",
    hp: 80,
    types: [
        "Fire"
    ],
    dexId: [
        5
    ],
    evolveFrom: {
        en: "Charmander",
        fr: "Salamèche",
        es: "Charmander",
        it: "Charmander",
        de: "Glumanda",
        "pt-br": "Charmander",
        "zh-tw": "小火龍",
        ja: "ヒトカゲ",
        ko: "파이리"
    },
    stage: "Stage1",
    description: {
        en: "It is very hotheaded by nature, so it constantly seeks opponents to battle against. Its aggression will not be quelled if it doesn’t win.",
        fr: "Ce Pokémon au sang chaud est constamment à la recherche d'adversaires. Il ne se calme qu'une fois qu'il a gagné.",
        es: "Por naturaleza, se acalora con facilidad: siempre está buscando adversarios. Solo se calma cuando gana.",
        it: "Turbolento di natura, è sempre alla ricerca di avversari. Si placa solo dopo aver vinto.",
        de: "Glutexo hat ein hitziges Gemüt und sucht ständig nach Gegnern. Es beruhigt sich nur, wenn es gewinnt.",
        "pt-br": "Tem um temperamento explosivo, por isso sempre busca oponentes para enfrentar. Não sossega enquanto não vence.",
        "zh-tw": "性情如烈火，無時無刻都在尋找要交戰的對手。得要打贏才會冷靜下來。",
        ja: "燃えたぎるような 性格で いつも 戦う 相手を 探している。 勝たないと 血が 静まらない。",
        ko: "타오르는 듯한 성격으로\n늘 싸울 상대를 찾는다.\n이겨야만 마음이 가라앉는다."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Ignition",
                fr: "Préchauffe",
                es: "Llama de Ignición",
                it: "Accensione",
                de: "Zündung",
                "pt-br": "Ignição",
                "zh-tw": "點火",
                ja: "イグニッション",
                ko: "이그니션"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may take a {R} Energy from your Energy Zone and attach it to your Active {R} Pokémon.",
                fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer un de vos Pokémon, vous pouvez prendre une Énergie {R} de votre zone Énergie et l'attacher à votre Pokémon {R} Actif.",
                es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes unir 1 Energía {R} de tu área de Energía a tu Pokémon {R} Activo.",
                it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi prendere un'Energia {R} dalla Zona Energia e assegnarla al tuo Pokémon {R} attivo.",
                de: "Einmal während deines Zuges, wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 1 {R}-Energie aus deinem Energiebereich an dein Aktives {R}-Pokémon anlegen.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá pegar 1 Energia {R} da sua Zona de Energia e ligá-la ao seu Pokémon {R} Ativo.",
                "zh-tw": "在自己的回合,當從手牌使出這張卡並完成進化時,可使用1次。從自己的能量區抽出1個{R}能量,附於戰鬥場的{R}寶可夢身上。",
                ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のエネルギーゾーンから{R}エネルギーを1個出し、バトル場の{R}ポケモンにつける。",
                ko: "자신의 차례에 이 카드를 패에서 꺼내서 진화시켰을 때 1번 사용할 수 있다. 자신의 에너지존에서 {R}에너지를 1개 내보내 배틀필드의 {R}포켓몬에게 붙인다."
            }
        }
    ],
    attacks: [
        {
            cost: [
                "Fire",
                "Fire"
            ],
            name: {
                en: "Slash",
                fr: "Tranche",
                es: "Cuchillada",
                it: "Lacerazione",
                de: "Schlitzer",
                "pt-br": "Talho",
                "zh-tw": "劈開",
                ja: "きりさく",
                ko: "베어가르기"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
