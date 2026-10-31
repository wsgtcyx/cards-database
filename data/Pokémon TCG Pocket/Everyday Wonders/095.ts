import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/095",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/095",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/095",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/095",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/095",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/095",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/095",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3b/095",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3b/095"
    },
    name: {
        en: "Flaaffy",
        fr: "Lainergie",
        es: "Flaaffy",
        it: "Flaaffy",
        de: "Waaty",
        "pt-br": "Flaaffy",
        "zh-tw": "茸茸羊",
        ko: "보송송",
        ja: "モココ"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 90,
    types: ["Lightning"],
    dexId: [180],
    evolveFrom: {
        en: "Mareep",
        fr: "Wattouat",
        es: "Mareep",
        it: "Mareep",
        de: "Voltilamm",
        "pt-br": "Mareep",
        "zh-tw": "咩利羊",
        ko: "메리프",
        ja: "メリープ"
    },
    stage: "Stage1",
    description: {
        en: "Because of its rubbery, electricity-resistant skin, it can store lots of electricity in its fur.",
        fr: "Grâce à sa peau caoutchouteuse et résistante à l’électricité, il peut stocker beaucoup d’électricité dans sa fourrure.",
        es: "Debido a su piel gomosa y resistente a la electricidad, puede almacenar mucha electricidad en su pelaje.",
        it: "Grazie alla sua pelle gommosa e resistente all'elettricità, può immagazzinare molta elettricità nella sua pelliccia.",
        de: "Aufgrund seiner gummiartigen, stromresistenten Haut kann es in seinem Fell viel Strom speichern.",
        "pt-br": "Devido à sua pele emborrachada e resistente à eletricidade, ele pode armazenar muita eletricidade em seu pelo.",
        "zh-tw": "由於它的皮膚有彈性、耐電，它可以在皮毛中儲存大量的電力。",
        ja: "電気を 通さない 地肌は ゴムのように つるつるだが 体毛は 電気を 溜めやすい。",
        ko: "전기가 통하지 않는 맨살은\n고무처럼 매끈하지만\n털은 전기를 모으기 쉽다."
    },
    attacks: [
        {
            cost: ["Lightning", "Colorless"],
            name: {
                en: "Electric Punch",
                fr: "Poing Électrique",
                es: "Puño Eléctrico",
                it: "Pugno Elettrico",
                de: "Elektroschlag",
                "pt-br": "Murro Elétrico",
                "zh-tw": "麻麻拳",
                ja: "ビリリパンチ",
                ko: "찌리리펀치"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
