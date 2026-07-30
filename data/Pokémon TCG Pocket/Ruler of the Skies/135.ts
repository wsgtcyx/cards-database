import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/135"
    },
    name: {
        en: "Delcatty",
        fr: "Delcatty",
        es: "Delcatty",
        it: "Delcatty",
        de: "Enekoro",
        "pt-br": "Delcatty",
        "zh-tw": "優雅貓",
        ko: "델케티",
        ja: "エネコロロ"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    dexId: [301],
    evolveFrom: {
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
    stage: "Stage1",
    description: {
        en: "It is highly popular among female Trainers for its sublime fur. It does not keep a nest.",
        fr: "Les femmes Dresseurs raffolent de sa sublime\nfourrure. Il ne possède pas de nid.",
        es: "Tiene mucho éxito entre las Entrenadoras por su suave\npelaje. No vive en un sitio fijo.",
        it: "Ha successo fra gli Allenatori di sesso femminile per\nla sua bellissima pelliccia. Non ha una tana fissa.",
        de: "Dieses Pokémon ist bei weiblichen Trainern\naufgrund seines Fells beliebt."
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Energy Blender"
            },
            effect: {
                en: "You may move any amount of Energy from your Pokémon in play to your other Pokémon in any way you like."
            },
            damage: 50
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
