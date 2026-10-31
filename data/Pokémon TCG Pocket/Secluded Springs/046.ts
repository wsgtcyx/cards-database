import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4a/046",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4a/046",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4a/046",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4a/046",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4a/046",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4a/046",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4a/046",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4a/046",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4a/046"
    },
    name: {
        en: "Dwebble",
        "fr": "Crabicoque",
        "es": "Dwebble",
        "it": "Dwebble",
        "de": "Lithomith",
        "pt-br": "Dwebble",
        "zh-tw": "石居蟹",
        ja: "イシズマイ",
        ko: "돌살이",
    },
    illustrator: "Shigenori Negishi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    description: {
        en: "It makes a hole in a suitable rock. If that rock\nbreaks, the Pokémon remains agitated until it\nlocates a replacement.",
        "fr": "Il fait un trou dans une roche appropriée. Si ce rocher\nse brise, le Pokémon reste agité jusqu'à ce qu'il\ntrouve un remplaçant.",
        "es": "Hace un agujero en una roca adecuada. si esa roca\nse rompe, el Pokémon permanece agitado hasta que\nlocaliza un reemplazo.",
        "it": "Fa un buco in una roccia adatta. Se quella roccia\nsi rompe, il Pokémon rimane agitato finché non si rompe\nindividua un sostituto.",
        "de": "Es macht ein Loch in einen geeigneten Stein. Wenn dieser Stein\nbricht, bleibt das Pokémon aufgeregt, bis es\nfindet einen Ersatz.",
        "pt-br": "Faz um buraco numa rocha adequada. Se aquela pedra\nquebra, o Pokémon permanece agitado até\nlocaliza um substituto.",
        "zh-tw": "它在合適的岩石上打一個洞。如果那塊石頭\n打破後，神奇寶貝會一直焦躁不安，直到它\n找到替代品。",
        ja: "手ごろな 石に 穴を 開けて 住処にする。壊されると かわりの 石が 見つかるまで 落ち着かない。",
        ko: "적당한 돌을 찾아 구멍을 뚫어\n살 곳을 만든다. 부서지면 대신할\n돌을 찾을 때까지 불안해한다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sand Spray",
                "fr": "Jet de sable",
                "es": "Aerosol de arena",
                "it": "Spruzzo di sabbia",
                "de": "Sandspray",
                "pt-br": "Spray de areia",
                "zh-tw": "噴砂",
                ja: "すなしぶき",
                ko: "모래보라"
            },
            damage: 30,
            cost: ["Fighting", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
