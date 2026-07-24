import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/072",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/072"
    },
    name: {
        en: "Bramblin",
        fr: "Virovent",
        es: "Bramblin",
        it: "Bramblin",
        de: "Weherba",
        "pt-br": "Bramblin",
        "zh-tw": "納噬草",
        ko: "그푸리",
        ja: "アノクサ"
    },
    illustrator: "Pani Kobayashi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    dexId: [946],
    stage: "Basic",
    description: {
        en: "Not even Bramblin knows where it is headed as it tumbles across the wilderness, blown by the wind. It loathes getting wet.",
        fr: "Même Virovent ne sait pas où il se dirige alors qu'il traverse la nature sauvage, soufflé par le vent. Il déteste se mouiller.",
        es: "Ni siquiera Bramblin sabe hacia dónde se dirige mientras avanza por el desierto, arrastrado por el viento. Detesta mojarse.",
        it: "Nemmeno Bramblin sa dove è diretto mentre precipita attraverso la natura selvaggia, sospinto dal vento. Detesta bagnarsi.",
        de: "Nicht einmal Weherba weiß, wohin es geht, während es vom Wind verweht durch die Wildnis taumelt. Es hasst es, nass zu werden.",
        "pt-br": "Nem mesmo Bramblin sabe para onde está indo enquanto cai pela selva, levado pelo vento. Ele detesta se molhar.",
        "zh-tw": "當它被風吹過時，連 納噬草 也不知道它要去哪裡。它討厭被淋濕。"
    },
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Petty Grudge",
                fr: "Rancune Mesquine",
                es: "Rencor Ruin",
                it: "Rancormeschino",
                de: "Mini-Groll",
                "pt-br": "Rancinho",
                "zh-tw": "咒怨一下"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
