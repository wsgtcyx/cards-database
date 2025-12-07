import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Whismur",
        "fr": "Chuchotement",
        "es": "Whismur",
        "it": "Sussurro",
        "de": "Whismur",
        "pt-br": "Sussurro",
        "zh-tw": "咕妞妞",
    },
    illustrator: "Tika Matsuno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "When Whismur cries, the sound of its own voice\nstartles it, making the Pokémon cry even louder.\nIt cries until it's exhausted, then it falls asleep.",
        "fr": "Quand Whismur pleure, le son de sa propre voix\nle fait sursauter, faisant pleurer le Pokémon encore plus fort.\nIl pleure jusqu'à épuisement, puis il s'endort.",
        "es": "Cuando Whismur llora, el sonido de su propia voz\nlo sobresalta, haciendo que el Pokémon llore aún más fuerte.\nLlora hasta agotarse y luego se queda dormido.",
        "it": "Quando Whismur piange, il suono della sua stessa voce\nlo spaventa, facendo piangere il Pokémon ancora più forte.\nPiange fino allo sfinimento, poi si addormenta.",
        "de": "Wenn Whismur weint, erklingt seine eigene Stimme\nerschreckt es und lässt das Pokémon noch lauter weinen.\nEs weint, bis es erschöpft ist, dann schläft es ein.",
        "pt-br": "Quando Whismur chora, o som de sua própria voz\nassusta, fazendo o Pokémon chorar ainda mais alto.\nEle chora até ficar exausto e depois adormece.",
        "zh-tw": "當威斯莫哭泣時，是它自己的聲音\n嚇到了它，讓神奇寶貝哭得更大聲。\n它會哭到筋疲力盡，然後就睡著了。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Pound",
                "fr": "Livre",
                "es": "Libra",
                "it": "Libbra",
                "de": "Pfund",
                "pt-br": "Libra",
                "zh-tw": "磅"
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
