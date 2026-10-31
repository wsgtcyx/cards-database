import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/031",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/031",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/031",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/031",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/031",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/031",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/031",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/031",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/031"
    },
    name: {
        en: "Blastoise",
        fr: "Tortank",
        es: "Blastoise",
        "pt-br": "Blastoise",
        "zh-tw": "水箭龜",
        ja: "カメックス",
        ko: "거북왕",
        it: "Blastoise",
        de: "Turtok"
    },
    illustrator: "NC Empire",
    rarity: "Three Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 150,
    types: [
        "Water"
    ],
    stage: "Stage2",
    retreat: 4,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Wartortle",
        fr: "Carabaffe",
        es: "Wartortle",
        it: "Wartortle",
        de: "Schillok",
        "pt-br": "Wartortle",
        "zh-tw": "卡咪龜",
        ja: "カメール",
        ko: "어니부기"
    },
    attacks: [
        {
            name: {
                en: "Surf",
                fr: "Surf",
                es: "Surf",
                it: "Surf",
                de: "Surfer",
                "pt-br": "Surfar",
                "zh-tw": "衝浪",
                ja: "なみのり",
                ko: "파도타기"
            },
            cost: [
                "Water",
                "Water",
                "Water"
            ],
            damage: 100
        }
    ],
    abilities: [
        {
            name: {
                en: "Aqua Charge",
                fr: "Charge Aqua",
                es: "Hidrocarga",
                it: "Idrocarica",
                de: "Aqualadung",
                "pt-br": "Carga Aquática",
                "zh-tw": "水流充能",
                ja: "アクアチャージ",
                ko: "아쿠아 차지"
            },
            effect: {
                en: "Once during your turn, you may take a {W} Energy from your Energy Zone and attach it to this Pokémon.",
                fr: "Une fois pendant votre tour, vous pouvez prendre une Énergie {W} de votre zone Énergie et l'attacher à ce Pokémon.",
                es: "Una vez durante tu turno, puedes unir 1 Energía {W} de tu área de Energía a este Pokémon.",
                it: "Una sola volta durante il tuo turno, puoi prendere un'Energia {W} dalla tua Zona Energia e assegnarla a questo Pokémon.",
                de: "Einmal während deines Zuges kannst du 1 {W}-Energie aus deinem Energiebereich an dieses Pokémon anlegen.",
                "pt-br": "Uma vez durante o seu turno, você poderá pegar 1 Energia {W} da sua Zona de Energia e ligá-la a este Pokémon.",
                "zh-tw": "在自己的回合時,可使用1次。從自己的能量區抽出1個{W}能量,附於這隻寶可夢身上。",
                ja: "自分の番に1回使える。自分のエネルギーゾーンから{W}エネルギーを1個出し、このポケモンにつける。",
                ko: "자신의 차례에 1번 사용할 수 있다. 자신의 에너지존에서 {W}에너지를 1개 내보내 이 포켓몬에게 붙인다."
            },
            type: "Ability"
        }
    ],
    description: {
        en: "It deliberately increases its body weight so it can withstand the recoil of the water jets it fires.",
        fr: "Il augmente délibérément sa masse corporelle pour contrer le recul de ses puissants jets d'eau.",
        es: "Aumenta de peso deliberadamente para contrarrestar la fuerza de los chorros de agua que dispara.",
        it: "Aumenta di proposito il suo peso corporeo per resistere al contraccolpo dei getti d'acqua che spara.",
        de: "Es macht sich absichtlich schwer, um den Rückstoß seiner Wasserstrahlen abzufangen.",
        "pt-br": "Aumenta o seu próprio peso deliberadamente para aguentar o ricochete dos jatos de água que dispara.",
        "zh-tw": "為了讓自己能夠抵擋噴射水流的後座力，於是刻意增加體重。",
        ja: "噴射した 水の 勢いに 負けないように わざと 体重を 重くしているのだ。",
        ko: "분사한 물의 기세에\n밀리지 않도록 일부러\n체중을 무겁게 불리고 있다."
    }
};

export default card;
