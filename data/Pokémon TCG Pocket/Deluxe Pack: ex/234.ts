import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/234",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/234",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/234",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/234",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/234",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/234",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/234",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/234",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4b/234"
    },
    name: {
        en: "Alolan Grimer",
        "fr": "Tadmorv d'Alola",
        "es": "Grimer de Alola",
        "it": "Grimer di Alola",
        "de": "Alola-Sleima",
        "pt-br": "Grimer de Alola",
        "zh-tw": "阿羅拉臭泥",
        ja: "アローラベトベター",
        ko: "알로라 질퍽이",
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Darkness"],
    description: {
        en: "There are a hundred or so of them living in\nAlola's waste-disposal site. They're all hard\nworkers who eat a lot of trash.",
        "fr": "Ils sont une centaine à vivre à\nDécharge d'Alola. Ils sont tous durs\ndes travailleurs qui mangent beaucoup de déchets.",
        "es": "Hay un centenar de ellos viviendo en\nSitio de eliminación de desechos de Alola. son todos duros\ntrabajadores que comen mucha basura.",
        "it": "Ci vivono un centinaio o giù di lì\nIl sito di smaltimento dei rifiuti di Alola. Sono tutti difficili\nlavoratori che mangiano molta spazzatura.",
        "de": "Etwa hundert von ihnen leben hier\nAlolas Mülldeponie. Sie sind alle hart\nArbeiter, die viel Müll essen.",
        "pt-br": "Há cerca de uma centena deles vivendo em\nLocal de eliminação de resíduos de Alola. Eles são todos difíceis\ntrabalhadores que comem muito lixo.",
        "zh-tw": "他們大約有一百多人居住在\n阿羅拉的垃圾處理場。他們都很難\n吃大量垃圾的工人。",
        ja: "アローラの ゴミ処分場 には 100匹前後が 棲んでいる。 みな たくさん ゴミを 食う 働きもの。",
        ko: "알로라의 쓰레기 처리장에서는\n약 100마리가 살고 있다. 모두\n쓰레기를 많이 먹는 유능한 일꾼이다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sludge Toss",
                "fr": "Lancer des boues",
                "es": "Lanzamiento de lodos",
                "it": "Lancio dei fanghi",
                "de": "Schlammwurf",
                "pt-br": "Lançamento de lama",
                "zh-tw": "污泥拋擲",
                ja: "ヘドロなげ",
                ko: "오물던지기"
            },
            damage: 30,
            cost: ["Darkness", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
