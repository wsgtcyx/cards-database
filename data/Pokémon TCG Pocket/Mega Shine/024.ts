import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/024",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/024",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/024",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/024",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/024",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/024",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/024",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2b/024",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2b/024"
    },
    name: {
        en: "Electabuzz",
        fr: "Élektek",
        es: "Electabuzz",
        it: "Electabuzz",
        de: "Elektek",
        "pt-br": "Electabuzz",
        "zh-tw": "電擊獸",
        ko: "에레브",
        ja: "エレブー"
    },
    illustrator: "OKACHEKE",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    dexId: [125],
    stage: "Basic",
    description: {
        en: "Research is progressing on storing lightning in Electabuzz so this energy can be used at any time.",
        fr: "La recherche progresse sur le stockage de la foudre dans Élektek afin que cette énergie puisse être utilisée à tout moment.",
        es: "Se está avanzando en la investigación para almacenar rayos en Electabuzz para que esta energía pueda usarse en cualquier momento.",
        it: "La ricerca sta progredendo sull'immagazzinamento dei fulmini in Electabuzz in modo che questa energia possa essere utilizzata in qualsiasi momento.",
        de: "Die Forschung zur Speicherung von Blitzen in Elektek schreitet voran, sodass diese Energie jederzeit genutzt werden kann.",
        "pt-br": "A pesquisa está progredindo no armazenamento de raios no Electabuzz para que essa energia possa ser usada a qualquer momento.",
        "zh-tw": "在 電擊獸 中儲存閃電的研究正在進行中，以便隨時可以使用該能量。",
        ja: "エレブーに 雷を 溜めこませ いつでも 使えるようにする 研究が 進められている。",
        ko: "에레브에게 번개를 비축시켜\n언제라도 쓸 수 있도록 하는\n연구가 진행되고 있다."
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Head Bolt",
                fr: "Éclair Frontal",
                es: "Rayo de Cabeza",
                it: "Zuccalampo",
                de: "Kopf-Blitz",
                "pt-br": "Raio de Cabeça",
                "zh-tw": "伏特頭擊",
                ja: "ヘッドボルト",
                ko: "헤드볼트"
            },
            damage: 30
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
