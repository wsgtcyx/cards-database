import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/031",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/031",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/031",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/031",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/031",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/031"
    },
    name: {
        en: "Spoink",
        fr: "Spoink",
        es: "Spoink",
        it: "Spoink",
        de: "Spoink",
        "pt-br": "Spoink",
        "zh-tw": "跳跳豬",
        ko: "피그점프",
        ja: "バネブー"
    },
    illustrator: "MAHOU",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    dexId: [325],
    stage: "Basic",
    description: {
        en: "Using its tail like a spring, it keeps its heart beating by bouncing constantly. If it stops, it dies.",
        fr: "Utilisant sa queue comme un ressort, il fait battre son cœur en rebondissant constamment. S'il s'arrête, il meurt.",
        es: "Usando su cola como un resorte, mantiene su corazón latiendo rebotando constantemente. Si se detiene, muere.",
        it: "Usando la coda come una molla, fa battere il cuore rimbalzando costantemente. Se si ferma, muore.",
        de: "Er nutzt seinen Schwanz wie eine Feder und hält sein Herz durch ständiges Hüpfen am Schlagen. Wenn es aufhört, stirbt es.",
        "pt-br": "Usando sua cauda como uma mola, ele mantém seu coração batendo saltando constantemente. Se parar, ele morre.",
        "zh-tw": "它利用尾巴像彈簧一樣不斷彈跳來保持心臟的跳動。如果它停止了，它就會死。"
    },
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Psyshot",
                fr: "Piqûre Psy",
                es: "Disparo Psi",
                it: "Psicosparo",
                de: "Psychoschuss",
                "pt-br": "Tiro Psíquico",
                "zh-tw": "精神射擊"
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
