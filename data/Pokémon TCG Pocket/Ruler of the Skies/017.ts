import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/017"
    },
    name: {
        en: "Poltchageist",
        fr: "Poltchageist",
        es: "Poltchageist",
        it: "Poltchageist",
        de: "Mortcha",
        "pt-br": "Poltchageist",
        "zh-tw": "斯魔茶",
        ko: "차데스",
        ja: "チャデス"
    },
    illustrator: "Miki Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 40,
    types: ["Grass"],
    dexId: [1012],
    stage: "Basic",
    description: {
        en: "Poltchageist looks like a regional form of Sinistea, but it was recently discovered that the two Pokémon are entirely unrelated."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Hospitality",
                fr: "Aux Petits Soins",
                es: "Hospitalidad",
                it: "Ospitalità",
                de: "Gastlichkeit",
                "zh-tw": "款待"
            },
            effect: {
                en: "Once during your turn, when you put this Pokémon from your hand onto your Bench, you may heal 20 damage from your Active {G} Pokémon."
            }
        }
    ],
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Spray Fluid",
                fr: "Fluide de pulvérisation",
                es: "Líquido de pulverización",
                it: "Fluido spray",
                de: "Sprühflüssigkeit",
                "pt-br": "Fluido de pulverização",
                "zh-tw": "噴汁"
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
