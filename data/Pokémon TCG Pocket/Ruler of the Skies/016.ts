import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/016"
    },
    name: {
        en: "Pheromosa",
        fr: "Cancrelove",
        es: "Pheromosa",
        it: "Pheromosa",
        de: "Schabelle",
        "pt-br": "Pheromosa",
        "zh-tw": "費洛美螂",
        ko: "페로코체",
        ja: "フェローチェ"
    },
    illustrator: "Hitoshi Ariga",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Grass"],
    dexId: [795],
    stage: "Basic",
    description: {
        en: "One of the Ultra Beasts. It refuses to touch anything, perhaps because it senses some uncleanness in this world.",
        fr: "L’une des Ultra-Chimères. Elle semble refuser\nde toucher les choses de ce monde, comme si\ntout était souillé à ses yeux.",
        es: "Este Ultraente se muestra reacio al contacto,\nprobablemente porque percibe inmundicia en\ntodo cuanto le rodea.",
        it: "Un’Ultracreatura che cerca di evitare ogni\ncontatto con le cose di questo mondo, come\nse lo considerasse contaminato.",
        de: "Diese Ultrabestie scheint diese Welt für unrein\nzu halten und zieht es daher vor, mit nichts und\nniemandem in Berührung zu kommen.",
        "zh-tw": "ＵＢ的一種。\n或許是覺得這個世界上萬物污穢不堪，\n因此不願用手觸及分毫。"
    },
    attacks: [
        {
            cost: ["Grass", "Grass"],
            name: {
                en: "Prelude"
            },
            effect: {
                en: "If you haven't gotten any points, this attack does 60 more damage."
            },
            damage: "30+"
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
