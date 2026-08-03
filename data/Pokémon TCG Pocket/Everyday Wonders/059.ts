import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/059",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/059",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/059",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/059",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/059",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/059",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/059"
    },
    name: {
        en: "Hisuian Zorua",
        fr: "Zorua de Hisui",
        es: "Zorua de Hisui",
        it: "Zorua di Hisui",
        de: "Hisui-Zorua",
        "pt-br": "Zorua de Hisui",
        "zh-tw": "洗翠索羅亞",
        ko: "히스이 조로아",
        ja: "ヒスイ ゾロア"
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [570],
    stage: "Basic",
    description: {
        en: "A once-departed soul, returned to life in Hisui. Derives power from resentment, which rises as energy atop its head and takes on the forms of foes. In this way, Zorua vents lingering malice.",
        fr: "Une âme autrefois disparue, revenue à la vie à Hisui. Il tire son pouvoir du ressentiment, qui s'élève sous forme d'énergie au sommet de sa tête et prend la forme d'ennemis. De cette façon, Zorua évacue la méchanceté persistante.",
        es: "Un alma que una vez partió, volvió a la vida en Hisui. Obtiene poder del resentimiento, que se eleva como energía sobre su cabeza y adopta la forma de enemigos. De esta manera, Zorua desahoga la malicia persistente.",
        it: "Un'anima un tempo defunta, tornata in vita a Hisui. Trae potere dal risentimento, che sale come energia sulla sua testa e assume la forma di nemici. In questo modo, Zorua dà sfogo alla malizia persistente.",
        de: "Eine einst verstorbene Seele, die in Hisui zum Leben zurückgekehrt ist. Bezieht seine Kraft aus Ressentiments, die als Energie auf seinem Kopf aufsteigen und die Gestalt von Feinden annehmen. Auf diese Weise macht Zorua der anhaltenden Bosheit Luft.",
        "pt-br": "Uma alma que já partiu, voltou à vida em Hisui. Deriva o poder do ressentimento, que surge como energia acima de sua cabeça e assume a forma de inimigos. Dessa forma, Zorua exala malícia persistente.",
        "zh-tw": "曾經離去的靈魂，在翡翠中重生。從怨恨中獲得力量，怨恨在頭頂上以能量的形式升起，並呈現出敵人的形態。就這樣，索羅亞發洩了揮之不去的惡意。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Run Around",
                fr: "Courir partout",
                es: "Correr por todas partes",
                it: "Corri in giro",
                de: "Herumlaufen",
                "pt-br": "Correr",
                "zh-tw": "雀躍"
            },
            effect: {
                en: "Switch this Pokémon with 1 of your Benched Pokémon.",
                fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
                es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
                it: "Scambia questo Pokémon con 1 dei tuoi Pokémon in panchina.",
                de: "Tausche dieses Pokémon gegen eines deiner Bank-Pokémon aus.",
                "pt-br": "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
                "zh-tw": "將此寶可夢與你的 1 個備戰寶可夢交換。"
            }
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
