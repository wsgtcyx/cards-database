import { Card } from "../../../interfaces";
import Set from "../Celestial Guardians";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3/063",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3/063",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3/063",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3/063",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3/063",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3/063",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3/063",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3/063",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3/063"
    },
    name: {
        en: "Heliolisk",
        fr: "Iguolta",
        es: "Heliolisk",
        it: "Heliolisk",
        de: "Elezard",
        'pt-br': "Heliolisk",
        ja: "エレザード",
        ko: "일레도리자드",
        "zh-tw": "光電傘蜥",
    },
    illustrator: "Kagemaru Himeno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Lightning"],
    evolveFrom: {
        en: "Helioptile",
        "fr": "Galvaran",
        "es": "Helioptile",
        "it": "Helioptile",
        "de": "Eguana",
        "pt-br": "Helioptile",
        "zh-tw": "傘電蜥",
        ja: "エリキテル",
        ko: "목도리키텔",
    },
    description: {
        en: "One Heliolisk basking in the sun with its frill outspread is all it would take to produce enough electricity to power a city.",
        fr: "Lorsqu'il déploie sa collerette pour emmagasiner\nla lumière du soleil, il génère à lui seul assez\nd'électricité pour alimenter une grande ville.",
        es: "Al extender su gorguera y exponerse a la luz\nsolar, genera la energía eléctrica suficiente para\ncubrir el consumo de una metrópoli entera.",
        it: "L'energia prodotta da un Heliolisk quando apre\nil suo collare in un luogo soleggiato è sufficiente\na soddisfare il fabbisogno di una metropoli.",
        de: "Stellt es seine kragenartigen Hautlappen auf und\nabsorbiert damit Sonnenlicht, kann ein Elezard\ngenug Strom für eine Großstadt produzieren.",
        'pt-br': "Um único Heliolisk tomando banho de sol com\nsuas cristas abertas consegue produzir energia\no suficiente para abastecer uma cidade inteira.",
        ja: "襟巻を 広げて 太陽光を 浴びると 大都会で 使われる 電気を １匹で 発電する。",
        ko: "깃을 펼쳐 태양광을 받으면\n대도시에서 사용할 수 있는\n전기를 혼자서 발전한다.",
        "zh-tw": "只要一隻日光蟲在陽光下伸展開來，就可以產生足夠的電力來為一座城市供電。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Rear Kick",
                fr: "Ruade",
                es: "Patada Trasera",
                it: "Retrocalcio",
                de: "Rückwärtskick",
                'pt-br': "Chute Traseiro",
                ja: "うしろげり",
                ko: "뒤로 차기",
                "zh-tw": "後踢"
            },
            damage: 40,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["solgaleo", "lunala"]
};
export default card;
