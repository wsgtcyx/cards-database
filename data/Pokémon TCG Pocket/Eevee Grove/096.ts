import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Electrode",
        "fr": "Électrode",
        "es": "Electrodo",
        "it": "Elettrodo",
        "de": "Elektrode",
        "pt-br": "Eletrodo",
        "zh-tw": "頑皮雷彈",
    },
    illustrator: "Scav",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 80,
    types: ["Lightning"],
    evolveFrom: {
        en: "Voltorb",
        "fr": "Voltorbe",
        "es": "voltorb",
        "it": "Voltorb",
        "de": "Voltorb",
        "pt-br": "Voltorb",
        "zh-tw": "伏爾托布"
    },
    description: {
        en: "The more energy it charges up, the faster\nit gets. But this also makes it more likely\nto explode.",
        "fr": "Plus il charge d'énergie, plus vite\nça arrive. Mais cela rend également plus probable\nexploser.",
        "es": "Cuanta más energía cargue, más rápido\nse pone. Pero esto también hace que sea más probable\npara explotar.",
        "it": "Più energia si carica, più velocemente\nottiene. Ma questo lo rende anche più probabile\nesplodere.",
        "de": "Je mehr Energie es auflädt, desto schneller\nes wird. Aber das macht es auch wahrscheinlicher\nexplodieren.",
        "pt-br": "Quanto mais energia ele carrega, mais rápido\nfica. Mas isso também torna mais provável\nexplodir.",
        "zh-tw": "充電的能量越多，速度就越快\n它得到了。但這也使得更有可能\n爆炸。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Rolling Attack",
                "fr": "Attaque roulante",
                "es": "Ataque rodante",
                "it": "Attacco rotolante",
                "de": "Rollender Angriff",
                "pt-br": "Ataque Rolante",
                "zh-tw": "滾動攻擊"
            },
            damage: 50,
            cost: ["Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
