import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Haunter",
        "fr": "Hanteur",
        "es": "Perseguidor",
        "it": "Infestatore",
        "de": "Haunter",
        "pt-br": "Assombrado",
        "zh-tw": "鬼魂"
    },
    illustrator: "Nisota Niso",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    evolveFrom: {
        en: "Gastly",
        "fr": "Gastly",
        "es": "gastly",
        "it": "Gastly",
        "de": "Gastly",
        "pt-br": "Gastosamente",
        "zh-tw": "加斯特利"
    },
    description: {
        en: "It likes to lurk in the dark and tap shoulders\nwith a gaseous hand. Its touch causes endless\nshuddering.",
        "fr": "Il aime se cacher dans le noir et taper sur les épaules\navec une main gazeuse. Son contact provoque une infinité de\nfrissonnant.",
        "es": "Le gusta acechar en la oscuridad y tocar los hombros.\ncon una mano gaseosa. Su tacto provoca infinitas\nestremeciéndose.",
        "it": "Gli piace nascondersi nell'oscurità e toccare le spalle\ncon una mano gassosa. Il suo tocco provoca infinite\ntremante.",
        "de": "Es lauert gerne im Dunkeln und tippt sich auf die Schultern\nmit einer gasförmigen Hand. Seine Berührung verursacht Unendlichkeit\nschaudernd.",
        "pt-br": "Ele gosta de se esconder no escuro e bater nos ombros\ncom uma mão gasosa. Seu toque causa infinitas\nestremecendo.",
        "zh-tw": "牠喜歡潛伏在黑暗中拍拍肩膀\n用氣手。它的觸動引發無盡的\n顫抖。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Will-O-Wisp",
                "fr": "Feu Follet",
                "es": "Fuego fatuo",
                "it": "Fuoco fatuo",
                "de": "Irrlicht",
                "pt-br": "Will-O-Wisp",
                "zh-tw": "鬼火"
            },
            damage: 30,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
