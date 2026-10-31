import { Card } from "../../../interfaces";
import Set from "../Triumphant Light";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A2a/015",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A2a/015",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A2a/015",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A2a/015",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A2a/015",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A2a/015",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A2a/015",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A2a/015",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A2a/015"
    },
    name: {
        en: "Azumarill",
        fr: "Azumarill",
        es: "Azumarill",
        it: "Azumarill",
        de: "Azumarill",
        'pt-br': "Azumarill",
        ja: "マリルリ",
        ko: "마릴리",
        "zh-tw": "瑪力露麗",
    },
    illustrator: "miki kudo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    evolveFrom: {
        en: "Marill",
        "fr": "Marill",
        "es": "Marill",
        "it": "Marill",
        "de": "Marill",
        "pt-br": "Marill",
        "zh-tw": "瑪力露",
        ja: "マリル",
        ko: "마릴",
    },
    description: {
        en: "Its long ears are superb sensors. It can distinguish the movements of things in water and tell what they are.",
        fr: "Ses longues oreilles lui permettent d'entendre tout\nce qui se passe sous l'eau de manière très distincte.",
        es: "Sus largas orejas son unos sensores excepcionales que le\npermiten diferenciar e identificar lo que oye dentro del agua.",
        it: "Le sue lunghe orecchie sono ricettori sensibilissimi.\nRiesce a distinguere e identificare ogni minimo\nrumore perfino sott'acqua.",
        de: "Seine langen Ohren sind hervorragende\nSensoren, mit denen es Geräusche unter\nWasser unterscheiden und zuordnen kann.",
        'pt-br': "Suas orelhas longas são sensores soberbos.\nEle é capaz de diferenciar os movimentos\ndos objetos nas águas e dizer o que eles são.",
        ja: "長い 耳は 優れた センサー。 水の中の 音を 聞き分けて なにが 動いているのか わかる。",
        ko: "긴 귀는 뛰어난 센서.\n물속의 소리를 구별하여\n무엇이 움직이는지 알 수 있다.",
        "zh-tw": "它的長耳朵是極好的傳感器。它可以辨別水中物體的運動並說出它們是什麼。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Waterfall",
                fr: "Cascade",
                es: "Cascada",
                it: "Cascata",
                de: "Kaskade",
                'pt-br': "Cachoeira",
                ja: "たきのぼり",
                ko: "폭포오르기",
                "zh-tw": "瀑布"
            },
            damage: 60,
            cost: ["Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
