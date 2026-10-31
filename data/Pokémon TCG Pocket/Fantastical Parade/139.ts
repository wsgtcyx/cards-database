import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/139",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/139",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/139",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/139",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/139",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/139",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/139",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/139",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/139"
    },
    name: {
        en: "Bunnelby",
        "fr": "Sapereau",
        "es": "Bunnelby",
        "it": "Bunnelby",
        "de": "Scoppel",
        "pt-br": "Bunnelby",
        "zh-tw": "掘掘兔",
        ja: "ホルビー",
        ko: "파르빗"
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "It's very sensitive to danger. The sound of\nCorviknight's flapping will have Bunnelby\ndigging a hole to hide underground in moments.",
        "fr": "Il est très sensible au danger. Le son de\nLes battements de Corvaillus auront Bunnelby\ncreuser un trou pour se cacher sous terre en quelques instants.",
        "es": "Es muy sensible al peligro. El sonido de\nEl aleteo de Corviknight tendrá a Bunnelby\ncavando un hoyo para esconderse bajo tierra en unos momentos.",
        "it": "E' molto sensibile al pericolo. Il suono di\nIl battito d'ali di Corviknight avrà Bunnelby\nscavare una buca per nascondersi sottoterra in pochi istanti.",
        "de": "Es ist sehr empfindlich gegenüber Gefahren. Der Klang von\nCorviknights Flattern wird Bunnelby haben\nIn wenigen Augenblicken ein Loch graben, um sich unter der Erde zu verstecken.",
        "pt-br": "É muito sensível ao perigo. O som de\nAs batidas de Corviknight terão Bunnelby\ncavar um buraco para se esconder no subsolo em instantes.",
        "zh-tw": "它對危險非常敏感。的聲音\n科維克奈特的撲翼將讓邦內爾比\n瞬間挖個洞躲到地下。",
        ja: "危険に 敏感。 アーマーガアの 羽音を 聴きとると あっという間に 穴を 掘って 地面に 潜る。",
        ko: "위험에 민감하다. 아머까오의\n날갯소리를 들으면 눈 깜짝할 사이에\n구멍을 파고 땅으로 숨어든다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Gnaw",
                "fr": "Ronger",
                "es": "Roer",
                "it": "Rosicchiare",
                "de": "Nagen",
                "pt-br": "Roer",
                "zh-tw": "啃",
                ja: "かじる",
                ko: "갉기"
            },
            damage: 20,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
