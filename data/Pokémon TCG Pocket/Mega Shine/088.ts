import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/088",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/088",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/088",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/088",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/088",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/088"
    },
    name: {
        en: "Pineco",
        fr: "Pomdepik",
        es: "Pineco",
        it: "Pineco",
        de: "Tannza",
        "pt-br": "Pineco",
        "zh-tw": "榛果球",
        ko: "피콘",
        ja: "クヌギダマ"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    dexId: [204],
    stage: "Basic",
    description: {
        en: "It spits out a fluid that it uses to glue tree bark to its body. The fluid hardens when it touches air.",
        fr: "Il crache un liquide qu’il utilise pour coller l’écorce des arbres sur son corps. Le liquide durcit au contact de l'air.",
        es: "Escupe un líquido que utiliza para pegar la corteza de los árboles a su cuerpo. El líquido se endurece cuando entra en contacto con el aire.",
        it: "Sputa un fluido che usa per incollare la corteccia degli alberi al suo corpo. Il fluido si indurisce quando tocca l'aria.",
        de: "Es spuckt eine Flüssigkeit aus, mit der es Baumrinde an seinen Körper klebt. Die Flüssigkeit härtet aus, wenn sie mit Luft in Berührung kommt.",
        "pt-br": "Ele cospe um fluido que usa para colar a casca da árvore em seu corpo. O fluido endurece quando toca o ar.",
        "zh-tw": "它會吐出一種液體，用來將樹皮黏在身體上。液體接觸空氣時會變硬。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Hang Down",
                fr: "Suspension",
                es: "Prender",
                it: "Tirar Giù",
                de: "Herunterhängen",
                "pt-br": "Dependurar",
                "zh-tw": "垂吊"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
