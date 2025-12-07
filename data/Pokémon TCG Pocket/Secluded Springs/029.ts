import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Stunfisk",
        "fr": "Stunfisk",
        "es": "aturdidor",
        "it": "Stunfisk",
        "de": "Stunfisk",
        "pt-br": "Stunfisk",
        "zh-tw": "泥巴魚",
    },
    illustrator: "Naoki Saito",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Lightning"],
    description: {
        en: "Thanks to bacteria that lived in the mud flats with\nit, this Pokémon developed the organs it uses to\ngenerate electricity.",
        "fr": "Grâce aux bactéries qui vivaient dans les vasières avec\nce Pokémon a développé les organes qu'il utilise pour\nproduire de l'électricité.",
        "es": "Gracias a las bacterias que vivían en las marismas con\neste Pokémon desarrolló los órganos que utiliza para\ngenerar electricidad.",
        "it": "Grazie ai batteri che vivevano nelle distese di fango\nit, questo Pokémon ha sviluppato gli organi a cui è abituato\ngenerare elettricità.",
        "de": "Dank Bakterien, die im Watt lebten\nDadurch hat dieses Pokémon die Organe entwickelt, die es benötigt\nStrom erzeugen.",
        "pt-br": "Graças às bactérias que viviam nas planícies lamacentas com\nisso, este Pokémon desenvolveu os órgãos que usa para\ngerar eletricidade.",
        "zh-tw": "感謝生活在泥灘中的細菌\n它，這個神奇寶貝開發了它用來\n發電。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Static Shock",
                "fr": "Choc statique",
                "es": "Choque estático",
                "it": "Shock statico",
                "de": "Statischer Schock",
                "pt-br": "Choque Estático",
                "zh-tw": "靜電衝擊"
            },
            damage: 50,
            cost: ["Lightning", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
