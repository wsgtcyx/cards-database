import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/046",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/046",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/046",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/046",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/046",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/046",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/046"
    },
    name: {
        en: "Dewpider",
        fr: "Araqua",
        es: "Dewpider",
        it: "Dewpider",
        de: "Araqua",
        "pt-br": "Dewpider",
        "zh-tw": "滴蛛",
        ko: "물거미",
        ja: "シズクモ"
    },
    illustrator: "sui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [751],
    stage: "Basic",
    description: {
        en: "It supports the water bubble that envelops its head with three of its legs. Sometimes it secretly swaps which legs are holding up the bubble.",
        fr: "Trois de ses pattes soutiennent la bulle d'eau qui enveloppe sa tête. Il change parfois de pattes lorsque personne ne le regarde.",
        es: "Sujeta con tres patas la burbuja que le rodea la cabeza. No son siempre las mismas, ya que las cambia en ocasiones con disimulo.",
        it: "Di tanto in tanto cambia furtivamente le tre zampe con cui sostiene la bolla che gli avvolge la testa.",
        de: "Araqua stützt die Wasserblase, die seinen Kopf einhüllt, mit dreien seiner Beine. Manchmal wechselt es diese heimlich.",
        "pt-br": "A bolha de água que envolve sua cabeça é apoiada por suas tres pernas. As vezes, troca sutilmente as pernas que sustentam sua bolha.",
        "zh-tw": "用3隻腳支撐著\n包裹頭部的水泡。\n有時會偷偷地換腳。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Wave Splash",
                fr: "Grosse Vague",
                es: "Chapoteo Ondulante",
                it: "Schizzi d'Onda",
                de: "Wellenplatscher",
                "pt-br": "Onda Borrifante",
                "zh-tw": "飛濺"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};
export default card;
