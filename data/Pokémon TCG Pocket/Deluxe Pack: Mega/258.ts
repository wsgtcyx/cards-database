import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/258",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/258",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/258",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/258",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/258",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/258",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/258"
    },
    name: {
        en: "Charmander",
        fr: "Salamèche",
        es: "Charmander",
        it: "Charmander",
        de: "Glumanda",
        "pt-br": "Charmander",
        "zh-tw": "小火龍",
        ja: "ヒトカゲ",
        ko: "파이리"
    },
    illustrator: "Masakazu Fukuda",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: [
        "Fire"
    ],
    dexId: [
        4
    ],
    stage: "Basic",
    description: {
        en: "If Charmander is healthy, the flame on the tip of its tail will burn vigorously and won’t go out even if it gets a bit wet.",
        fr: "Quand il est en bonne santé, la flamme au bout de sa queue continue de flamboyer même si elle est légèrement aspergée d'eau.",
        es: "Si está sano, la llama de la punta de su cola arderá vigorosamente, aunque se le moje un poco.",
        it: "Se è in forma, la fiamma che ha sulla punta della coda brucia con forza e non si spegne neanche se la coda si bagna un po'.",
        de: "Ist es gesund, strahlt die Flamme an seiner Schwanzspitze leuchtend hell und erlischt selbst dann nicht, wenn sie ein wenig nass wird.",
        "pt-br": "Se Charmander estiver saudável, a chama na ponta da sua cauda queimará vigorosamente e não apagará mesmo que fique um pouco molhada.",
        "zh-tw": "如果小火龍的活力十足，那麼尾巴前端的火焰即使稍微淋濕也會熊熊燃燒，不會熄滅。",
        ja: "If Charmander is healthy, the flame on the tip of its tail will burn vigorously and won’t go out even if it gets a bit wet.",
        ko: "If Charmander is healthy, the flame on the tip of its tail will burn vigorously and won’t go out even if it gets a bit wet."
    },
    attacks: [
        {
            cost: [
                "Fire",
                "Colorless"
            ],
            name: {
                en: "Flame Tail",
                fr: "Queue de Flammes",
                es: "Cola de Fuego",
                it: "Codafiamma",
                de: "Flammenschweif",
                "pt-br": "Cauda de Chamas",
                "zh-tw": "火之尾",
                ja: "Flame Tail",
                ko: "Flame Tail"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
