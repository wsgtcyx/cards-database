import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    name: {
        en: "Bramblin",
        fr: "Virovent",
        es: "Bramblin",
        it: "Bramblin",
        de: "Weherba",
        "pt-br": "Bramblin",
        "zh-tw": "納噬草",
        pt: "Bramblin"
    },
    illustrator: "Miki Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Grass"],
    dexId: [946],
    description: {
        en: "Not even Bramblin knows where it is headed as it tumbles across the wilderness, blown by the wind. It loathes getting wet.",
        "fr": "Même Virovent ne sait pas où il se dirige alors qu'il traverse la nature sauvage, soufflé par le vent. Il déteste se mouiller.",
        "es": "Ni siquiera Bramblin sabe hacia dónde se dirige mientras avanza por el desierto, arrastrado por el viento. Detesta mojarse.",
        "it": "Nemmeno Bramblin sa dove è diretto mentre precipita attraverso la natura selvaggia, sospinto dal vento. Detesta bagnarsi.",
        "de": "Nicht einmal Weherba weiß, wohin es geht, während es vom Wind verweht durch die Wildnis taumelt. Es hasst es, nass zu werden.",
        "pt-br": "Nem mesmo Bramblin sabe para onde está indo enquanto cai pela selva, levado pelo vento. Ele detesta se molhar.",
        "zh-tw": "當它被風吹過時，連 納噬草 也不知道它要去哪裡。它討厭被淋濕。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Rollout",
                fr: "Roulade",
                es: "Rodar",
                it: "Rotolamento",
                de: "Walzer",
                "pt-br": "Sair da cama",
                "zh-tw": "推出",
                pt: "Rolagem",
                'es-mx': "Rodada"
            },
            damage: "20",
            cost: ["Colorless"],
        },
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
