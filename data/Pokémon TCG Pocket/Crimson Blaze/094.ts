import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Sandshrew",
        "fr": "Sabelette",
        "es": "Sandshrew",
        "it": "Sandshrew",
        "de": "Sandan",
        "pt-br": "Sandshrew",
        "zh-tw": "穿山鼠"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    description: {
        en: "It burrows into the ground to create its nest. If\nhard stones impede its tunneling, it uses its sharp\nclaws to shatter them and then carries on digging.",
        "fr": "Il s'enfouit dans le sol pour créer son nid. Si\nles pierres dures entravent son creusement, il utilise ses pointes acérées\ngriffes pour les briser puis continue à creuser.",
        "es": "Se esconde en el suelo para crear su nido. si\nLas piedras duras impiden su excavación, utiliza su afilado\ngarras para romperlas y luego continúa cavando.",
        "it": "Scava nel terreno per creare il suo nido. Se\nle pietre dure gli impediscono di scavare tunnel, usa il suo tagliente\nartigli per frantumarli e poi continua a scavare.",
        "de": "Es gräbt sich in den Boden ein, um sein Nest zu bauen. Wenn\nHarte Steine erschweren ihm den Tunnelbau, er nutzt seine Schärfe\nKrallen, um sie zu zerschmettern, und gräbt dann weiter.",
        "pt-br": "Ele se enterra no solo para criar seu ninho. Se\npedras duras impedem a sua construção de túneis, ele usa suas pontas afiadas\ngarras para quebrá-los e depois continua cavando.",
        "zh-tw": "它鑽入地下以築巢。如果\n堅硬的石頭阻礙了它的隧道挖掘，它利用其鋒利的\n用爪子把它們打碎，然後繼續挖掘。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sand Spray",
                "fr": "Jet de sable",
                "es": "Aerosol de arena",
                "it": "Spruzzo di sabbia",
                "de": "Sandspray",
                "pt-br": "Spray de areia",
                "zh-tw": "噴砂"
            },
            damage: 20,
            cost: ["Fighting"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
