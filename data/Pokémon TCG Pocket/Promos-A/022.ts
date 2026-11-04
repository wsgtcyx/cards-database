import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/022/099c2798cdb6fcb7",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/022/099c2798cdb6fcb7",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/022/099c2798cdb6fcb7",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/022/099c2798cdb6fcb7",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/022/099c2798cdb6fcb7",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/022/099c2798cdb6fcb7",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/022/099c2798cdb6fcb7",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/022/099c2798cdb6fcb7",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/022/099c2798cdb6fcb7"
    },
    name: {
        en: "Jigglypuff",
        fr: "Rondoudou",
        es: "Jigglypuff",
        it: "Jigglypuff",
        de: "Pummeluff",
        'pt-br': "Jigglypuff",
        ja: "プリン",
        ko: "푸린",
        "zh-tw": "胖丁",
    },
    illustrator: "Kurata So",
    rarity: "One Diamond",
    category: "Pokemon",
    types: ["Colorless"],
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sing",
                fr: "Berceuse",
                es: "Canto",
                it: "Canto",
                de: "Gesang",
                'pt-br': "Canção",
                ja: "うたう",
                ko: "노래하기",
                "zh-tw": "唱歌"
            },
            cost: ["Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
                es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
                it: "Il Pokémon attivo del tuo avversario viene addormentato.",
                de: "Das Aktive Pokémon deines Gegners schläft jetzt.",
                ja: "相手のバトルポケモンをねむりにする。",
                ko: "상대의 배틀 포켓몬을 잠듦으로 만든다.",
                'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "將對手的戰鬥寶可夢睡眠。"
            }
        }],
    hp: 50,
    description: {
        en: "When its huge eyes waver, it sings a mysteriously\nsoothing melody that lulls its enemies to sleep.",
        fr: "Quand ses grands yeux luisent, il chante\nune berceuse mystérieuse et agréable\nqui pousse ses ennemis à s'endormir.",
        es: "Cuando le tiemblan sus redondos y adorables\nojos, entona una melodía agradable y misteriosa\ncon la que duerme a sus enemigos.",
        it: "Quando i suoi occhioni rotondi tremolano, canta\nuna misteriosa melodia che fa addormentare.",
        de: "Wenn seine Kulleraugen zu flackern beginnen,\nsingt es ein mysteriöses, wohlklingendes Lied,\ndas Zuhörer in Schlaf versetzt.",
        'pt-br': "Quando seus enormes olhos ficam pesados,\ncanta uma melodia misteriosa e relaxante,\nfazendo com que os inimigos adormeçam.",
        ja: "つぶらな 瞳が 揺れるとき 眠たくなるような 不思議で 気持ちのいい 歌を 歌う。",
        ko: "초롱초롱한 눈동자가 흔들릴 때\n졸음이 쏟아지게 하는 이상하고\n기분 좋은 노래를 부른다.",
        "zh-tw": "當牠圓圓的大眼睛轉動時，就會唱起奇妙的歌曲，讓人舒服地昏昏欲睡。"
    },
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["vol2"]
};
export default card;
