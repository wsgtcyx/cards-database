import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/405",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/405",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/405",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/405",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/405",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/405",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/405",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/405",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/405"
    },
    name: {
        en: "Meloetta",
        fr: "Meloetta",
        es: "Meloetta",
        it: "Meloetta",
        de: "Meloetta",
        "pt-br": "Meloetta",
        "zh-tw": "美洛耶塔",
        ja: "メロエッタ",
        ko: "메로엣타"
    },
    illustrator: "Mina Nakai",
    rarity: "One Star",
    category: "Pokemon",
    hp: 70,
    types: [
        "Psychic"
    ],
    description: {
        en: "Its melodies are sung with a special vocalization\nmethod that can control the feelings of those who\nhear it.",
        fr: "Sa voix si particulière lui permet de chanter des mélodies qui ensorcellent les gens et modifient leurs émotions.",
        es: "Controla los sentimientos de los que escuchan las melodías que emite con su singular vocalización.",
        it: "Controlla a suo piacimento le emozioni di coloro che ascoltano i suoi singolari vocalizzi.",
        de: "Wer die Melodie hört, die es in einer speziellen Stimmlage von sich gibt, steht voll in seinem Bann.",
        "pt-br": "Suas melodias são cantadas com um método de vocalização especial que é capaz de controlar os sentimentos daqueles que as ouvem.",
        "zh-tw": "以特殊的發聲法唱出的旋律，能自在地操控聽者的情緒。",
        ja: "特殊な 発声法で 歌う メロディは 聞いた者の 感情を 自在に 操る。",
        ko: "특수한 발성법으로 노래하는\n멜로디는 노래를 들은 자의\n감정을 자유자재로 조종한다."
    },
    stage: "Basic",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Strange Singing",
                fr: "Chant Étrange",
                es: "Canto Misterioso",
                it: "Canto Misterioso",
                de: "Geheimnisvoller Gesang",
                "pt-br": "Cantoria Bizarra",
                "zh-tw": "神奇歌聲",
                ja: "ふしぎなうたごえ",
                ko: "이상한 노랫소리"
            },
            effect: {
                en: "At the beginning of your turn, if this Pokémon is in the Active Spot, put a random {P} Pokémon from your deck into your hand.",
                fr: "Au début de votre tour, si ce Pokémon est sur le Poste Actif, ajoutez au hasard un Pokémon {P} de votre deck à votre main.",
                es: "Al principio de tu turno, si este Pokémon está en el Puesto Activo, pon 1 Pokémon {P} aleatorio de tu baraja en tu mano.",
                it: "All'inizio del tuo turno, se questo Pokémon è in posizione attiva, prendi un Pokémon {P} a caso dal tuo mazzo e aggiungilo alle carte che hai in mano.",
                de: "Zu Beginn deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, nimm 1 zufälliges {P}-Pokémon aus deinem Deck auf deine Hand.",
                "pt-br": "No início do seu turno, se este Pokémon estiver no Campo Ativo, coloque 1 Pokémon {P} aleatório do seu baralho na sua mão.",
                "zh-tw": "在自己的回合開始時,若這隻寶可夢在戰鬥場上,則從自己的牌庫隨機將1張{P}寶可夢卡加入手牌。",
                ja: "自分の番のはじめに、このポケモンがバトル場にいるなら、自分の山札から{P}ポケモンをランダムに1枚、手札に加える。",
                ko: "자신의 차례 처음에 이 포켓몬이 배틀필드에 있다면 자신의 덱에서 {P}포켓몬을 랜덤으로 1장 패로 가져온다."
            }
        }
    ],
    attacks: [
        {
            name: {
                en: "Psyshot",
                fr: "Piqûre Psy",
                es: "Disparo Psi",
                it: "Psicosparo",
                de: "Psychoschuss",
                "pt-br": "Tiro Psíquico",
                "zh-tw": "精神射擊",
                ja: "サイコショット",
                ko: "사이코숏"
            },
            damage: 50,
            cost: [
                "Psychic",
                "Psychic"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
