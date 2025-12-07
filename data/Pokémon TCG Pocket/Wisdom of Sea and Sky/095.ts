import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Gliscor",
        "fr": "Gliscor",
        "es": "Gliscor",
        "it": "Gliscor",
        "de": "Gliscor",
        "pt-br": "Gliscor",
        "zh-tw": "格力斯科"
    },
    illustrator: "Shiburingaru",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    evolveFrom: {
        en: "Gligar",
        "fr": "Gligare",
        "es": "Gligar",
        "it": "Gligar",
        "de": "Gligar",
        "pt-br": "Gligar",
        "zh-tw": "格利加爾"
    },
    description: {
        en: "It observes prey while hanging inverted from\nbranches. When the chance presents itself,\nit swoops!",
        "fr": "Il observe ses proies en étant suspendu à l'envers.\nbranches. Quand l'occasion se présente,\nça fonce !",
        "es": "Observa a sus presas mientras cuelga invertido.\nramas. Cuando se presenta la oportunidad,\n¡se lanza en picado!",
        "it": "Osserva la preda mentre pende capovolto\nrami. Quando si presenta l'occasione,\npiomba!",
        "de": "Es beobachtet Beute, während es kopfüber hängt\nZweige. Wenn sich die Chance bietet,\nes schwappt!",
        "pt-br": "Ele observa a presa enquanto está pendurado invertido\nfiliais. Quando a oportunidade se apresenta,\nele desce!",
        "zh-tw": "它倒掛在空中觀察獵物\n分支機構。當機會出現時，\n它猛撲！"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Sharp Fang",
                "fr": "Croc acéré",
                "es": "Colmillo afilado",
                "it": "Zanna affilata",
                "de": "Scharfer Fangzahn",
                "pt-br": "Presa Afiada",
                "zh-tw": "尖牙"
            },
            damage: 60,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
