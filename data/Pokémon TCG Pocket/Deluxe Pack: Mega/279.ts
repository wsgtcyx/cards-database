import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/279",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/279",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/279",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/279",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/279",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/279",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/279"
    },
    name: {
        en: "Marshtomp",
        fr: "Flobio",
        es: "Marshtomp",
        it: "Marshtomp",
        de: "Moorabbel",
        "pt-br": "Marshtomp",
        "zh-tw": "沼躍魚",
        ja: "ヌマクロー",
        ko: "늪짱이"
    },
    illustrator: "sui",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: [
        "Water"
    ],
    evolveFrom: {
        en: "Mudkip",
        fr: "Gobou",
        es: "Mudkip",
        it: "Mudkip",
        de: "Hydropi",
        "pt-br": "Mudkip",
        "zh-tw": "水躍魚",
        ja: "Mudkip",
        ko: "Mudkip"
    },
    description: {
        en: "It is at its best when on muddy ground that offers\npoor footing. It quickly overwhelms opponents\nthat are bogged down and unable to move.",
        fr: "En terrain boueux, il peut exprimer son plein potentiel et dominer rapidement les adversaires embourbés qui peinent à se mouvoir.",
        es: "Está en su salsa en terrenos lodosos, donde aprovecha la reducida movilidad de sus rivales para someterlos en un abrir y cerrar de ojos.",
        it: "Dà il meglio di sé nei terreni fangosi, dove approfitta della mobilità ridotta degli avversari per sopraffarli in un attimo.",
        de: "Auf instabilem, schlammigem Untergrund kann es sein wahres Potenzial entfalten. Feststeckende Gegner überwältigt es im Handumdrehen.",
        "pt-br": "Prefere terrenos lamacentos e escorregadios. Atordoa os oponentes presos na lama, incapazes de se mover.",
        "zh-tw": "在泥濘的地上更能發揮真本事。會把無法動彈的對手一口氣逼入絕境。",
        ja: "It is at its best when on muddy ground that offers\npoor footing. It quickly overwhelms opponents\nthat are bogged down and unable to move.",
        ko: "It is at its best when on muddy ground that offers\npoor footing. It quickly overwhelms opponents\nthat are bogged down and unable to move."
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Surf",
                fr: "Surf",
                es: "Surf",
                it: "Surf",
                de: "Surfer",
                "pt-br": "Surfar",
                "zh-tw": "衝浪",
                ja: "Surf",
                ko: "Surf"
            },
            damage: 40,
            cost: [
                "Water",
                "Colorless"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
