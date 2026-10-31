import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/188",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/188",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/188",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/188",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/188",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/188",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/188",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/188"
    },
    name: {
        en: "Treecko",
        fr: "Arcko",
        es: "Treecko",
        "pt-br": "Treecko",
        "zh-tw": "木守宮",
        ja: "キモリ",
        ko: "나무지기",
        it: "Treecko",
        de: "Geckarbor"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 60,
    types: [
        "Grass"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Pound",
                fr: "Écras'Face",
                es: "Destructor",
                it: "Botta",
                de: "Klaps",
                "pt-br": "Pancada",
                "zh-tw": "拍擊",
                ja: "はたく",
                ko: "Pound"
            },
            cost: [
                "Grass"
            ],
            damage: 20
        }
    ],
    abilities: [],
    description: {
        en: "Treecko can quickly scale even vertical surfaces. It senses humidity with its tail to predict the next day’s weather.",
        fr: "Il grimpe sur les murs avec une grande agilité. Sa queue lui permet de mesurer l’humidité et de prédire ainsi le temps qu’il fera le lendemain.",
        es: "Escala con rapidez incluso superficies verticales. Percibe la humedad ambiental con la cola y así prevé el tiempo que hará al día siguiente.",
        it: "Riesce a scalare rapidamente anche pareti verticali. Rileva l’umidità attraverso la coda per prevedere il tempo dell’indomani.",
        de: "Es kann selbst Wände blitzschnell emporklettern. Mit seinem Schwanz misst es die Luftfeuchtigkeit, um das Wetter des nächsten Tages vorherzusagen.",
        "pt-br": "Treecko consegue escalar superfícies verticais com facilidade. Usa a cauda para sentir a umidade do ar e prever o clima do dia seguinte.",
        "zh-tw": "在垂直的牆壁上也能敏捷攀爬。會用尾巴感知空氣的濕度，以此來判斷明天的天氣。",
        ja: "垂直の 壁も すいすい 登る。 尻尾で 空気の 湿度を 感じ 明日の 天気を 当てる。",
        ko: "Treecko can quickly scale even vertical surfaces. It senses humidity with its tail to predict the next day’s weather."
    }
};

export default card;
