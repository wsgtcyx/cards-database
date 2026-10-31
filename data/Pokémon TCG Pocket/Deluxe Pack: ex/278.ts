import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/278",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/278",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/278",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/278",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/278",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/278",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/278",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/278",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4b/278"
    },
    name: {
        en: "Jigglypuff",
        "fr": "Rondoudou",
        "es": "Jigglypuff",
        "it": "Jigglypuff",
        "de": "Pummeluff",
        "pt-br": "Jigglypuff",
        "zh-tw": "胖丁",
        ja: "プリン",
        ko: "푸린",
    },
    illustrator: "Mizue",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "When its huge eyes waver, it sings a mysteriously\nsoothing melody that lulls its enemies to sleep.",
        "fr": "Quand ses yeux immenses vacillent, il chante mystérieusement\nmélodie apaisante qui endort ses ennemis.",
        "es": "Cuando sus enormes ojos vacilan, canta misteriosamente\nMelodía relajante que adormece a sus enemigos.",
        "it": "Quando i suoi enormi occhi tremano, canta misteriosamente\nmelodia rilassante che fa addormentare i suoi nemici.",
        "de": "Wenn seine großen Augen zittern, singt es geheimnisvoll\nberuhigende Melodie, die ihre Feinde in den Schlaf wiegt.",
        "pt-br": "Quando seus enormes olhos vacilam, ele canta misteriosamente\nmelodia suave que acalma seus inimigos para dormir.",
        "zh-tw": "當它巨大的眼睛擺動時，它會唱出神秘的歌聲\n舒緩的旋律可以讓敵人入睡。",
        ja: "つぶらな 瞳が 揺れるとき 眠たくなるような 不思議で 気持ちのいい 歌を 歌う。",
        ko: "초롱초롱한 눈동자가 흔들릴 때\n졸음이 쏟아지게 하는 이상하고\n기분 좋은 노래를 부른다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Pound",
                "fr": "Livre",
                "es": "Libra",
                "it": "Libbra",
                "de": "Pfund",
                "pt-br": "Libra",
                "zh-tw": "磅",
                ja: "はたく",
                ko: "막치기"
            },
            damage: 30,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
