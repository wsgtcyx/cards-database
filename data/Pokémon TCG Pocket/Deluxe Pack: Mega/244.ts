import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/244",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/244",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/244",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/244",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/244",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/244",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/244"
    },
    name: {
        en: "Treecko",
        fr: "Arcko",
        es: "Treecko",
        it: "Treecko",
        de: "Geckarbor",
        "pt-br": "Treecko",
        "zh-tw": "木守宮",
        ja: "キモリ",
        ko: "나무지기"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Grass"
    ],
    dexId: [
        252
    ],
    stage: "Basic",
    description: {
        en: "Treecko can quickly scale even vertical surfaces. It senses humidity with its tail to predict the next day’s weather.",
        fr: "Il grimpe sur les murs avec une grande agilité. Sa queue lui permet de mesurer l'humidité et de prédire ainsi le temps qu'il fera le lendemain.",
        es: "Escala con rapidez incluso superficies verticales. Percibe la humedad ambiental con la cola y así prevé el tiempo que hará al día siguiente.",
        it: "Riesce a scalare rapidamente anche pareti verticali. Rileva l'umidità attraverso la coda per prevedere il tempo dell'indomani.",
        de: "Es kann selbst Wände blitzschnell emporklettern. Mit seinem Schwanz misst es die Luftfeuchtigkeit, um das Wetter des nächsten Tages vorherzusagen.",
        "pt-br": "Treecko consegue escalar superfícies verticais com facilidade. Usa a cauda para sentir a umidade do ar e prever o clima do dia seguinte.",
        "zh-tw": "在垂直的牆壁上也能輕快地攀爬。會用尾巴感知空氣的濕度，以此來判斷明天的天氣。",
        ja: "Treecko can quickly scale even vertical surfaces. It senses humidity with its tail to predict the next day’s weather.",
        ko: "Treecko can quickly scale even vertical surfaces. It senses humidity with its tail to predict the next day’s weather."
    },
    attacks: [
        {
            cost: [
                "Grass"
            ],
            name: {
                en: "Pound",
                fr: "Écras'Face",
                es: "Destructor",
                it: "Botta",
                de: "Klaps",
                "pt-br": "Pancada",
                "zh-tw": "拍擊",
                ja: "Pound",
                ko: "Pound"
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
    retreat: 1
};

export default card;
