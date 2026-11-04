import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/061/d4e7c556ca355cdb",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/061/d4e7c556ca355cdb",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/061/d4e7c556ca355cdb",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/061/d4e7c556ca355cdb",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/061/d4e7c556ca355cdb",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/061/d4e7c556ca355cdb",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/061/d4e7c556ca355cdb",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/061/d4e7c556ca355cdb",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/061/d4e7c556ca355cdb"
    },
    name: {
        en: "Treecko",
        fr: "Arcko",
        es: "Treecko",
        it: "Treecko",
        de: "Geckarbor",
        "pt-br": "Treecko",
        "zh-tw": "木守宮",
        ko: "나무지기",
        ja: "キモリ"
    },
    illustrator: "Sekio",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    dexId: [252],
    stage: "Basic",
    description: {
        en: "Treecko can quickly scale even vertical surfaces. It senses humidity with its tail to predict the next day’s weather.",
        fr: "Il grimpe sur les murs avec une grande agilité. Sa queue lui permet de mesurer l'humidité et de prédire ainsi le temps qu'il fera le lendemain.",
        es: "Escala con rapidez incluso superficies verticales. Percibe la humedad ambiental con la cola y así prevé el tiempo que hará al día siguiente.",
        it: "Riesce a scalare rapidamente anche pareti verticali. Rileva l'umidità attraverso la coda per prevedere il tempo dell'indomani.",
        de: "Es kann selbst Wände blitzschnell emporklettern. Mit seinem Schwanz misst es die Luftfeuchtigkeit, um das Wetter des nächsten Tages vorherzusagen.",
        "pt-br": "Treecko consegue escalar superfícies verticais com facilidade. Usa a cauda para sentir a umidade do ar e prever o clima do dia seguinte.",
        "zh-tw": "在垂直的牆壁上也能輕快地攀爬。會用尾巴感知空氣的濕度，以此來判斷明天的天氣。",
        ja: "垂直の 壁も すいすい 登る。 尻尾で 空気の 湿度を 感じ 明日の 天気を 当てる。",
        ko: "수직으로 된 벽도 쭉쭉 타고 올라간다.\n꼬리로 공기 중의 습도를\n감지해서 내일 날씨를 맞힌다."
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Pound",
                fr: "Écras'Face",
                es: "Destructor",
                it: "Botta",
                de: "Klaps",
                "pt-br": "Pancada",
                "zh-tw": "拍擊",
                ja: "はたく",
                ko: "막치기"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
