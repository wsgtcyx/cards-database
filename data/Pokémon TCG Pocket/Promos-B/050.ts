import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/050",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/050",
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/050",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/050",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/050",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/050",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/050",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/P-B/050",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/P-B/050"
    },
    name: {
        en: "Meloetta",
        fr: "Meloetta",
        es: "Meloetta",
        it: "Meloetta",
        de: "Meloetta",
        "pt-br": "Meloetta",
        "zh-tw": "美洛耶塔",
        ko: "메로엣타",
        ja: "メロエッタ"
    },
    illustrator: "Mizue",
    rarity: "None",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    dexId: [648],
    stage: "Basic",
    description: {
        en: "Its melodies are sung with a special vocalization method that can control the feelings of those who hear it.",
        fr: "Sa voix si particulière lui permet de chanter des mélodies\nqui ensorcellent les gens et modifient leurs émotions.",
        es: "Controla los sentimientos de los que escuchan las melodías\nque emite con su singular vocalización.",
        it: "Controlla a suo piacimento le emozioni di coloro che ascoltano\ni suoi singolari vocalizzi.",
        de: "Wer die Melodie hört, die es in einer speziellen Stimmlage\nvon sich gibt, steht voll in seinem Bann.",
        "pt-br": "Suas melodias são cantadas com um método especial de vocalização que consegue controlar os sentimentos de quem a ouve.",
        "zh-tw": "它的旋律是用一種特殊的發聲方法來唱的，可以控制聽者的感情。",
        ja: "特殊な 発声法で 歌う メロディは 聞いた者の 感情を 自在に 操る。",
        ko: "특수한 발성법으로 노래하는\n멜로디는 노래를 들은 자의\n감정을 자유자재로 조종한다."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Strange Singing",
                fr: "Chant étrange",
                es: "canto extraño",
                it: "Canto strano",
                de: "Seltsamer Gesang",
                "pt-br": "Canto Estranho",
                "zh-tw": "神奇歌聲",
                ja: "ふしぎなうたごえ",
                ko: "이상한 노랫소리"
            },
            effect: {
                en: "At the beginning of your turn, if this Pokémon is in the Active Spot, put a random {P} Pokémon from your deck into your hand.",
                fr: "Au début de votre tour, si ce Pokémon est dans le Spot Actif, mettez dans votre main un Pokémon {P} aléatoire de votre deck.",
                es: "Al comienzo de tu turno, si este Pokémon está en el Punto Activo, pon un {P} Pokémon aleatorio de tu mazo en tu mano.",
                it: "All'inizio del tuo turno, se questo Pokémon è in posizione attiva, metti nella tua mano un Pokémon {P} casuale dal tuo mazzo.",
                de: "Wenn sich dieses Pokémon zu Beginn deines Zuges an der aktiven Stelle befindet, nimm ein zufälliges {P}-Pokémon aus deinem Deck auf deine Hand.",
                "pt-br": "No início do seu turno, se este Pokémon estiver no Ponto Ativo, coloque um Pokémon {P} aleatório do seu baralho na sua mão.",
                "zh-tw": "在你的回合開始時，如果這只寶可夢位於活躍位置，則從你的牌組中隨機將一隻 {P} 寶可夢置入你的手牌。",
                ja: "自分の番のはじめに、このポケモンがバトル場にいるなら、自分の山札から{P}ポケモンをランダムに1枚、手札に加える。",
                ko: "자신의 차례 처음에 이 포켓몬이 배틀필드에 있다면 자신의 덱에서 {P}포켓몬을 랜덤으로 1장 패로 가져온다."
            }
        }
    ],
    attacks: [
        {
            cost: ["Psychic", "Psychic"],
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
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol7"]
};

export default card;
