import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Thwackey",
        "fr": "Thwackey",
        "es": "Thwackey",
        "it": "Thwackey",
        "de": "Thwackey",
        "pt-br": "Thwackey",
        "zh-tw": "斯瓦基"
    },
    illustrator: "Akira Komayama",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    evolveFrom: {
        en: "Grookey",
        "fr": "Groogy",
        "es": "Grookey",
        "it": "Grookey",
        "de": "Grookey",
        "pt-br": "Grookey",
        "zh-tw": "格魯基"
    },
    description: {
        en: "When it's drumming out rapid beats in battle, it\ngets so caught up in the rhythm that it won't even\nnotice that it's already knocked out its opponent.",
        "fr": "Quand il bat des rythmes rapides au combat, il\nest tellement pris par le rythme qu'il ne peut même pas\nremarquez qu'il a déjà assommé son adversaire.",
        "es": "Cuando toca ritmos rápidos en la batalla,\nqueda tan atrapado en el ritmo que ni siquiera\nObserva que ya ha noqueado a su oponente.",
        "it": "Quando suona ritmi rapidi in battaglia, esso\nrimane così preso dal ritmo che non lo farà nemmeno\nnota che ha già messo KO il suo avversario.",
        "de": "Wenn es im Kampf schnelle Beats trommelt, ist es\nverfängt sich so sehr im Rhythmus, dass es gar nicht mehr funktioniert\nBeachten Sie, dass es seinen Gegner bereits KO geschlagen hat.",
        "pt-br": "Quando está tocando batidas rápidas na batalha,\nfica tão preso no ritmo que nem consegue\nobserve que ele já nocauteou seu oponente.",
        "zh-tw": "當它在戰鬥中敲出急促的節拍時，\n完全陷入節奏以至於無法\n請注意，它已經擊敗了對手。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Hammer In",
                "fr": "Marteler",
                "es": "Martillo adentro",
                "it": "Martella dentro",
                "de": "Einschlagen",
                "pt-br": "Martelo",
                "zh-tw": "錘入"
            },
            damage: 50,
            cost: ["Grass", "Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
