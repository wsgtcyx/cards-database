import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Gloom",
        "fr": "Obscurité",
        "es": "Oscuridad",
        "it": "Tristezza",
        "de": "Düsternis",
        "pt-br": "Melancolia",
        "zh-tw": "臭臭花",
    },
    illustrator: "Kyoko Umemoto",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    evolveFrom: {
        en: "Oddish",
        "fr": "Bizarre",
        "es": "Extraño",
        "it": "Strano",
        "de": "Seltsam",
        "pt-br": "Estranho",
        "zh-tw": "走路草",
    },
    description: {
        en: "Its pistils exude an incredibly foul odor.\nThe horrid stench can cause fainting at a distance\nof 1.25 miles.",
        "fr": "Ses pistils dégagent une odeur incroyablement nauséabonde.\nL'horrible odeur peut provoquer des évanouissements à distance\nde 1,25 milles.",
        "es": "Sus pistilos exudan un olor increíblemente fétido.\nEl horrible hedor puede provocar desmayos a distancia.\nde 1,25 millas.",
        "it": "I suoi pistilli emanano un odore incredibilmente disgustoso.\nL'orrendo fetore può provocare svenimenti a distanza\ndi 1,25 miglia.",
        "de": "Seine Stempel verströmen einen unglaublich üblen Geruch.\nDer schreckliche Gestank kann aus der Ferne zu Ohnmachtsanfällen führen\nvon 1,25 Meilen.",
        "pt-br": "Seus pistilos exalam um odor incrivelmente desagradável.\nO fedor horrível pode causar desmaios à distância\nde 1,25 milhas.",
        "zh-tw": "它的雌蕊散發著令人難以置信的惡臭。\n可怕的惡臭會導致遠處暈厥\n1.25 英里。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Leaf Step",
                "fr": "Étape de la feuille",
                "es": "Paso de hoja",
                "it": "Passo delle foglie",
                "de": "Blattschritt",
                "pt-br": "Passo Folha",
                "zh-tw": "葉步"
            },
            damage: 40,
            cost: ["Grass", "Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
