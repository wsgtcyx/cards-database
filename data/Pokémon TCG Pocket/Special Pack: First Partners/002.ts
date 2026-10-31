import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/002",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/002",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/002",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/002",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/002",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/002",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/002",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/SP1/002"
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
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
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
                it: "Rimuovi un’Energia {R} da questo Pokémon.",
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
        en: "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.",
        fr: "Depuis sa naissance, une petite flamme brûle au bout de sa queue. Si cette flamme s’éteint, la vie de ce Pokémon s’éteindra elle aussi.",
        es: "Este Pokémon nace con una llama en la punta de la cola. Si se le apagara, fallecería.",
        it: "Una fiamma gli arde sulla punta della coda fin dalla nascita. Se si spegnesse, per lui sarebbe la fine.",
        de: "Von Geburt an brennt die Flamme auf seiner Schwanzspitze. Sobald sie verglimmt, erlischt auch sein Lebenslicht.",
        "pt-br": "Desde o momento em que nasce, uma chama queima na ponta da sua cauda. Se a sua chama apagar, sua vida também apagará.",
        "zh-tw": "從出生時開始尾巴上就有火焰在燃燒。火焰熄滅時，生命也會結束。",
        ja: "生まれたときから しっぽに 炎が ともっている。 炎が 消えたとき その 命は 終わって しまう。",
        ko: "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out."
    }
};

export default card;
