import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/077"
    },
    name: {
        en: "Hoopa",
        fr: "Hoopa",
        es: "Hoopa",
        it: "Hoopa",
        de: "Hoopa",
        "pt-br": "Hoopa",
        "zh-tw": "胡帕",
        ko: "후파",
        ja: "フーパ"
    },
    illustrator: "akagi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    dexId: [720],
    stage: "Basic",
    description: {
        en: "It gathers things it likes and passes them through its loop to teleport them to a secret place.",
        fr: "Il a la faculté de téléporter les choses en les faisant\npasser au travers de ses anneaux. Il envoie les objets\nqui lui plaisent dans une cachette connue de lui seul.",
        es: "Reúne los objetos que le atraen para esconderlos\nen una guarida secreta, teletransportándolos a\ntravés de sus anillos.",
        it: "Usa i suoi anelli per intrappolare qualunque cosa\ngli piaccia e teletrasportarla in un luogo segreto.",
        de: "Mithilfe seiner Ringe hortet es Dinge, die ihm gefallen,\nan einem geheimen Ort. Es teleportiert diese, indem es\nsie durch seine Ringe bewegt."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Mischievous Ring"
            },
            effect: {
                en: "Before doing damage, shuffle all Pokémon Tools from each of your opponent's Pokémon into their deck."
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
