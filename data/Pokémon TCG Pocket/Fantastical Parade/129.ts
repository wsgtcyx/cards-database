import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/129",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/129",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/129",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/129",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/129",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/129"
    },
    name: {
        en: "Furret",
        "fr": "Fouinar",
        "es": "Furret",
        "it": "Furret",
        "de": "Wiesenior",
        "pt-br": "Furret",
        "zh-tw": "大尾立"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    evolveFrom: {
        en: "Sentret",
        "fr": "Sentret",
        "es": "Sentret",
        "it": "Sentret",
        "de": "Sentret",
        "pt-br": "Sentido",
        "zh-tw": "森特雷"
    },
    description: {
        en: "It is nimble and has a very flexible body.\nEven if you get ahold of it, it'll slip right out\nof your arms.",
        "fr": "Il est agile et possède un corps très flexible.\nMême si tu l'attrapes, il t'échappera\nde tes bras.",
        "es": "Es ágil y tiene un cuerpo muy flexible.\nIncluso si lo consigues, se te escapará.\nde tus brazos.",
        "it": "È agile e ha un corpo molto flessibile.\nAnche se riesci a trattenerlo, ti scivolerà via\ndelle tue braccia.",
        "de": "Es ist flink und hat einen sehr flexiblen Körper.\nSelbst wenn man es in die Hand nimmt, rutscht es sofort heraus\ndeiner Arme.",
        "pt-br": "É ágil e possui um corpo muito flexível.\nMesmo se você conseguir, ele vai escapar\ndos seus braços.",
        "zh-tw": "它行動敏捷，身體非常靈活。\n即使你抓住它，它也會直接滑落\n你的手臂。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Headbutt Bounce",
                "fr": "Rebond de coup de tête",
                "es": "Rebote de cabezazo",
                "it": "Rimbalzo della testata",
                "de": "Kopfstoß-Abprall",
                "pt-br": "Salto de cabeçada",
                "zh-tw": "頭撞彈跳"
            },
            damage: 40,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
