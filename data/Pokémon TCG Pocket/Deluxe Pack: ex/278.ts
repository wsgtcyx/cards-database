import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Jigglypuff",
        "fr": "Jigglypuff",
        "es": "Jigglypuff",
        "it": "Jigglypuff",
        "de": "Jigglypuff",
        "pt-br": "Jigglypuff",
        "zh-tw": "胖夫"
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
        "zh-tw": "當它巨大的眼睛擺動時，它會唱出神秘的歌聲\n舒緩的旋律可以讓敵人入睡。"
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
                "zh-tw": "磅"
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
