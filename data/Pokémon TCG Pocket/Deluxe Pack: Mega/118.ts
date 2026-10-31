import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/118",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/118",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/118",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/118",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/118",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/118",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/118",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/118",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/118"
    },
    name: {
        en: "Bramblin",
        fr: "Virovent",
        es: "Bramblin",
        it: "Bramblin",
        de: "Weherba",
        "pt-br": "Bramblin",
        "zh-tw": "納噬草",
        ja: "アノクサ",
        ko: "그푸리"
    },
    illustrator: "Pani Kobayashi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Psychic"
    ],
    dexId: [
        946
    ],
    stage: "Basic",
    description: {
        en: "Not even Bramblin knows where it is headed as it tumbles across the wilderness, blown by the wind. It loathes getting wet.",
        fr: "Ce Pokémon roule à travers les plaines arides, porté par le vent, sans savoir lui-même où cela va le mener. Il déteste être mouillé.",
        es: "Rueda por los páramos a merced del viento, sin que él mismo sepa dónde recalará. No soporta mojarse.",
        it: "Spinto dal vento, rotola per distese brulle senza sapere dove andrà a finire. Detesta bagnarsi.",
        de: "Vom Wind getrieben rollt dieses Pokémon durch die Ödnis, ohne zu wissen, wohin die Reise geht. Es verabscheut es, nass zu werden.",
        "pt-br": "Ao ser levado pelo vento, nem mesmo Bramblin sabe aonde vai parar. Não suporta ficar molhado.",
        "zh-tw": "在風的吹拂下滾動於荒野間，就連自己也不知道會滾到哪裡去。最討厭身體被弄得濕答答的。",
        ja: "風に吹かれて 荒野を 転がり 行き先は 自分でも わからない。 体が 濡れるのが 大嫌い。",
        ko: "바람에 날려 황야를 구르며\n어디로 가는지는 자신도 모른다.\n몸이 젖는 것을 매우 싫어한다."
    },
    attacks: [
        {
            cost: [
                "Psychic"
            ],
            name: {
                en: "Petty Grudge",
                fr: "Rancune Mesquine",
                es: "Rencor Ruin",
                it: "Rancormeschino",
                de: "Mini-Groll",
                "pt-br": "Rancinho",
                "zh-tw": "咒怨一下",
                ja: "ちょっとうらむ",
                ko: "조금원망하기"
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
