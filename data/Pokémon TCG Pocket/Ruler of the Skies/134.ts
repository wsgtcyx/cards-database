import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/134"
    },
    name: {
        en: "Skitty",
        fr: "Skitty",
        es: "Skitty",
        it: "Skitty",
        de: "Eneco",
        "pt-br": "Skitty",
        "zh-tw": "向尾喵",
        ko: "에나비",
        ja: "エネコ"
    },
    illustrator: "kawayoo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [300],
    stage: "Basic",
    description: {
        en: "It shows its cute side by chasing its own tail until it gets dizzy.",
        fr: "Un Pokémon très mignon qui aime parfois courir\nen cercle en chassant sa propre queue.",
        es: "Le gusta jugar persiguiéndose la cola hasta que se\nmarea, mostrando así su lado más mono.",
        it: "È davvero carino quando barcolla per i giramenti di\ntesta, dopo aver cercato di mordersi la coda.",
        de: "Es zeigt gerne seine niedliche Seite, indem es seinen\neigenen Schweif jagt, bis ihm schwindlig wird."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Charm",
                fr: "Charme",
                es: "Encanto",
                it: "Fascino",
                de: "Charme",
                "pt-br": "Encantar",
                "zh-tw": "撒嬌"
            },
            effect: {
                en: "During your opponent's next turn, attacks used by the Defending Pokémon do -20 damage."
            }
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
