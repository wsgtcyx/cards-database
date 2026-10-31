import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/008",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/008",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/008",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/008",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/008",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/008",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/008",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2b/008",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2b/008"
    },
    name: {
        en: "Charmeleon",
        fr: "Reptincel",
        es: "Charmeleon",
        it: "Charmeleon",
        de: "Glutexo",
        "pt-br": "Charmeleon",
        "zh-tw": "火恐龍",
        ko: "리자드",
        ja: "リザード"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    dexId: [5],
    evolveFrom: {
        en: "Charmander",
        fr: "Salamèche",
        es: "Charmander",
        it: "Charmander",
        de: "Glumanda",
        "pt-br": "Charmander",
        "zh-tw": "小火龍",
        ko: "파이리",
        ja: "ヒトカゲ"
    },
    stage: "Stage1",
    description: {
        en: "It is very hotheaded by nature, so it constantly seeks opponents to battle against. Its aggression will not be quelled if it doesn’t win.",
        fr: "Il est de nature très impétueuse et cherche donc constamment des adversaires contre lesquels se battre. Son agression ne sera pas réprimée s’il ne gagne pas.",
        es: "Es muy impulsivo por naturaleza, por lo que busca constantemente oponentes contra quienes luchar. Su agresión no será sofocada si no gana.",
        it: "È molto focoso per natura, quindi cerca costantemente avversari contro cui combattere. La sua aggressività non verrà repressa se non vince.",
        de: "Es ist von Natur aus sehr hitzköpfig und sucht daher ständig nach Gegnern, gegen die es kämpfen kann. Seine Aggression wird nicht unterdrückt werden, wenn es nicht gewinnt.",
        "pt-br": "É muito impetuoso por natureza, por isso procura constantemente oponentes para lutar. A sua agressão não será reprimida se não vencer.",
        "zh-tw": "它生性急躁，所以不斷尋找對手來對抗。如果不獲勝，它的侵略性就不會被平息。",
        ja: "燃えたぎるような 性格で いつも 戦う 相手を 探している。 勝たないと 血が 静まらない。",
        ko: "타오르는 듯한 성격으로\n늘 싸울 상대를 찾는다.\n이겨야만 마음이 가라앉는다."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Ignition",
                fr: "Allumage",
                es: "Encendido",
                it: "Accensione",
                de: "Zündung",
                "pt-br": "Ignição",
                "zh-tw": "點火",
                ja: "イグニッション",
                ko: "이그니션"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may take a {R} Energy from your Energy Zone and attach it to your Active {R} Pokémon.",
                fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon depuis votre main pour faire évoluer 1 de vos Pokémon, vous pouvez prendre une Énergie {R} de votre Zone d'Énergie et l'attacher à votre Pokémon Actif {R}.",
                es: "Una vez durante tu turno, cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes tomar una Energía {R} de tu Zona de Energía y unirla a tu Pokémon {R} Activo.",
                it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi prendere un'Energia {R} dalla tua Zona Energetica e assegnarla al tuo Pokémon {R} attivo.",
                de: "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du eine {R}-Energie aus deiner Energiezone nehmen und sie an dein aktives {R}-Pokémon anlegen.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá pegar uma Energia {R} da sua Zona de Energia e ligá-la aos seus Pokémon {R} Ativos.",
                "zh-tw": "在你的回合中，當你從手上使用這只寶可夢來進化你的一隻寶可夢時，你可以從你的能量區取出一個{R}能量並將其附加到你的活躍{R}寶可夢上。",
                ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のエネルギーゾーンから{R}エネルギーを1個出し、バトル場の{R}ポケモンにつける。",
                ko: "자신의 차례에 이 카드를 패에서 꺼내서 진화시켰을 때 1번 사용할 수 있다. 자신의 에너지존에서 {R}에너지를 1개 내보내 배틀필드의 {R}포켓몬에게 붙인다."
            }
        }
    ],
    attacks: [
        {
            cost: ["Fire", "Fire"],
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
