import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/156",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/156",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/156",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/156",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/156",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/156",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/156"
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
    illustrator: "danciao",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    dexId: [252],
    stage: "Basic",
    description: {
        en: "Treecko can quickly scale even vertical surfaces. It senses humidity with its tail to predict the next day’s weather.",
        fr: "Arcko peut rapidement redimensionner même les surfaces verticales. Il détecte l’humidité avec sa queue pour prédire la météo du lendemain.",
        es: "Treecko puede escalar rápidamente incluso superficies verticales. Detecta la humedad con su cola para predecir el tiempo del día siguiente.",
        it: "Treecko può ridimensionare rapidamente anche le superfici verticali. Rileva l’umidità con la coda per prevedere il tempo del giorno successivo.",
        de: "Geckarbor kann selbst vertikale Flächen schnell skalieren. Mit seinem Schwanz spürt es die Luftfeuchtigkeit auf, um das Wetter für den nächsten Tag vorherzusagen.",
        "pt-br": "Treecko pode dimensionar rapidamente até mesmo superfícies verticais. Ele detecta a umidade com a cauda para prever o tempo do dia seguinte.",
        "zh-tw": "木守宮 甚至可以快速縮放垂直表面。它用尾巴感知濕度來預測第二天的天氣。"
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
                "zh-tw": "拍擊"
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
