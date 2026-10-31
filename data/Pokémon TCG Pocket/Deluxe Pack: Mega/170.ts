import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/170",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/170",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/170",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/170",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/170",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/170",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/170",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/170",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/170"
    },
    name: {
        en: "Dragonair",
        fr: "Draco",
        es: "Dragonair",
        it: "Dragonair",
        de: "Dragonir",
        "pt-br": "Dragonair",
        "zh-tw": "哈克龍",
        ja: "ハクリュー",
        ko: "신뇽"
    },
    illustrator: "HACCAN",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: [
        "Dragon"
    ],
    dexId: [
        148
    ],
    evolveFrom: {
        en: "Dratini",
        fr: "Minidraco",
        es: "Dratini",
        it: "Dratini",
        de: "Dratini",
        "pt-br": "Dratini",
        "zh-tw": "迷你龍",
        ja: "ミニリュウ",
        ko: "미뇽"
    },
    stage: "Stage1",
    description: {
        en: "It is called the divine POKéMON. When its entire body brightens slightly, the weather changes.",
        fr: "On dit de lui que c'est un Pokémon divin. Quand son corps se met à briller, la météo change.",
        es: "Se refieren a él como un Pokémon divino. Cuando le brilla el cuerpo, el tiempo cambia inmediatamente.",
        it: "È chiamato il Pokémon sacro. Quando il corpo emana un lieve bagliore, cambia il tempo.",
        de: "Es wird als heiliges Pokémon bezeichnet. Wenn sein gesamter Körper ein wenig leuchtet, ändert sich das Wetter.",
        "pt-br": "É conhecido como o Pokémon divino. Quando seu corpo brilha suavemente, o clima muda.",
        "zh-tw": "被稱作是神聖的寶可夢。當全身開始微微發光，周圍天氣也會為之一變。",
        ja: "神聖な ポケモンと 言われる。 全身が ほのかに 光ると あたりの 天気が 様変わりする。",
        ko: "신성한 포켓몬이라 전해지고 있다.\n온몸이 은은하게 빛나면\n주변의 날씨가 바뀌어 버린다."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Dragon's Blessing",
                fr: "Bénédiction du Dragon",
                es: "Bendición Dragontina",
                "pt-br": "Bênção do Dragão",
                "zh-tw": "龍恩",
                it: "Preghiera del Drago",
                de: "Drachensegen",
                ja: "りゅうのめぐみ",
                ko: "용의 은혜"
            },
            effect: {
                en: "Once during your turn, if this Pokémon is on your Bench, you may attach an Energy from your discard pile to your Active Dragon Pokémon.",
                fr: "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez attacher une Énergie de votre pile de défausse à votre Pokémon Dragon Actif.",
                es: "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes unir 1 Energía de tu pila de descartes a tu Pokémon Dragón Activo.",
                it: "Una sola volta durante il tuo turno, se questo Pokémon è nella tua panchina, puoi assegnare al tuo Pokémon attivo un'Energia dalla tua pila degli scarti.",
                de: "Einmal während deines Zuges, wenn sich dieses Pokémon auf deiner Bank befindet, kannst du 1 Energie aus deinem Ablagestapel an dein Aktives Drachen-Pokémon anlegen.",
                "pt-br": "Uma vez durante o seu turno, se este Pokémon estiver no seu Banco, você poderá ligar 1 Energia da sua pilha de descarte ao seu Pokémon Dragão Ativo.",
                "zh-tw": "若這隻寶可夢在備戰區,則在自己的回合時可使用1次。從自己的棄牌區選擇1個能量,附於戰鬥場的龍寶可夢身上。",
                ja: "このポケモンがベンチにいるなら、自分の番に1回使える。自分のトラッシュからエネルギーを1個選び、バトル場のドラゴンポケモンにつける。",
                ko: "이 포켓몬이 벤치에 있다면 자신의 차례에 1번 사용할 수 있다. 자신의 트래쉬에서 에너지를 1개 선택해서 배틀필드의 드래곤포켓몬에게 붙인다."
            }
        }
    ],
    attacks: [
        {
            cost: [
                "Colorless",
                "Colorless"
            ],
            name: {
                en: "Draconic Whip",
                fr: "Fouet Draconien",
                es: "Látigo Dracónico",
                it: "Frustata del Drago",
                de: "Drachenpeitsche",
                "pt-br": "Chicote Dracônico",
                "zh-tw": "龍之鞭打",
                ja: "ドラゴンウィップ",
                ko: "드래곤휩"
            },
            damage: 40
        }
    ],
    retreat: 2
};

export default card;
