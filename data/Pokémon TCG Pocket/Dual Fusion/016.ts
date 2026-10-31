import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/016",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/016",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/016",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/016",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/016",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/016",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/016",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/016"
    },
    name: {
        en: "Charmander",
        fr: "Salamèche",
        es: "Charmander",
        "pt-br": "Charmander",
        "zh-tw": "小火龍",
        ja: "ヒトカゲ",
        ko: "파이리",
        it: "Charmander",
        de: "Glumanda"
    },
    illustrator: "DOM",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 60,
    types: [
        "Fire"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Ember",
                fr: "Flammèche",
                es: "Ascuas",
                it: "Braciere",
                de: "Glut",
                "pt-br": "Brasa",
                "zh-tw": "火花",
                ja: "ひのこ",
                ko: "Ember"
            },
            cost: [
                "Colorless",
                "Fire"
            ],
            damage: 50,
            effect: {
                en: "Discard a {R} Energy from this Pokémon.",
                fr: "Défaussez une Énergie {R} de ce Pokémon.",
                es: "Descarta 1 Energía {R} de este Pokémon.",
                it: "Rimuovi un'Energia {R} da questo Pokémon.",
                de: "Lege 1 {R}-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte 1 Energia {R} deste Pokémon.",
                "zh-tw": "將這隻寶可夢身上的1個{R}能量丟棄。",
                ja: "このポケモンから{R}エネルギーを1個トラッシュ。",
                ko: "Discard a {R} Energy from this Pokémon."
            }
        }
    ],
    abilities: [],
    description: {
        en: "The flame on its tail shows the strength of its life-force. If Charmander is weak, the flame also burns weakly.",
        fr: "La flamme au bout de sa queue représente sa vitalité. Quand Salamèche n’est pas au meilleur de sa forme, elle faiblit.",
        es: "La llama de su cola indica su fuerza vital. Si está débil, la llama arderá más tenue.",
        it: "La fiamma che ha sulla coda indica lo stato della sua forza vitale: quando è fiacco, la fiamma è fioca.",
        de: "Die Flamme an seiner Schwanzspitze zeigt seine Lebensenergie an. Geht es ihm nicht gut, wird die Flamme schwächer.",
        "pt-br": "A chama em sua cauda é um indicador da sua força vital. Se Charmander enfraquecer, a chama arderá com menos intensidade.",
        "zh-tw": "尾巴上燃燒的火焰是小火龍生命力的象徵。在牠沒有活力時，火勢會變弱。",
        ja: "尻尾で 燃える 炎は 生命力の 表れ。 元気がないと 炎は 弱まる。",
        ko: "The flame on its tail shows the strength of its life-force. If Charmander is weak, the flame also burns weakly."
    }
};

export default card;
