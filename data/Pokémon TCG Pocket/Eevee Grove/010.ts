import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3b/010",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3b/010",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3b/010",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3b/010",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3b/010",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3b/010",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3b/010",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3b/010",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3b/010"
    },
    name: {
        en: "Torkoal",
        "fr": "Chartor",
        "es": "Torkoal",
        "it": "Torkoal",
        "de": "Qurtel",
        "pt-br": "Torkoal",
        "zh-tw": "煤炭龜",
        ja: "コータス",
        ko: "코터스",
    },
    illustrator: "sui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fire"],
    description: {
        en: "It burns coal inside its shell for energy. It blows\nout black soot if it is endangered.",
        "fr": "Il brûle du charbon à l’intérieur de sa coquille pour produire de l’énergie. Ça souffle\nla suie noire si elle est en danger.",
        "es": "Quema carbón dentro de su caparazón para obtener energía. sopla\neliminar el hollín negro si está en peligro.",
        "it": "Brucia il carbone all'interno del suo guscio per produrre energia. Soffia\nfuori la fuliggine nera se è in pericolo.",
        "de": "Es verbrennt Kohle in seiner Hülle zur Energiegewinnung. Es bläst\nschwarzen Ruß entfernen, wenn dieser gefährdet ist.",
        "pt-br": "Ele queima carvão dentro de sua casca para obter energia. Isso sopra\neliminar fuligem preta se estiver em perigo.",
        "zh-tw": "它在殼內燃燒煤炭來獲取能量。吹起來\n如果它瀕臨滅絕，請清除黑色煙灰。",
        ja: "甲羅の 内側で 石炭を 燃やし 敵に 襲われると 黒い煙を まき散らして 逃げる。",
        ko: "등껍질 안에서 석탄을 태운다.\n적에게 공격받으면 검은 연기를\n흩뿌리고 도망친다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Flamethrower",
                "fr": "Lance-flammes",
                "es": "Echador de llama",
                "it": "Lanciafiamme",
                "de": "Flammenwerfer",
                "pt-br": "Lança-chamas",
                "zh-tw": "噴火器",
                ja: "かえんほうしゃ",
                ko: "화염방사"
            },
            damage: 70,
            cost: ["Fire", "Fire"],
            effect: {
                en: "Discard a {R} Energy from this Pokémon.",
                "fr": "Défaussez une Énergie {R} de ce Pokémon.",
                "es": "Descarta una Energía {R} de este Pokémon.",
                "it": "Scarta un'Energia {R} da questo Pokémon.",
                "de": "Wirf eine {R}-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte uma Energia {R} deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的 {R} 能量。",
                ja: "このポケモンから{R}エネルギーを1個トラッシュ。",
                ko: "이 포켓몬에서 {R}에너지를 1개 트래쉬한다."
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2
};
export default card;
