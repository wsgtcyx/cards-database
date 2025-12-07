import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Pyroar",
        "fr": "Pyroar",
        "es": "piroar",
        "it": "Pyroar",
        "de": "Pyroar",
        "pt-br": "Piroar",
        "zh-tw": "火炎獅",
    },
    illustrator: "Hitoshi Ariga",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Fire"],
    evolveFrom: {
        en: "Litleo",
        "fr": "Litléo",
        "es": "pequeño",
        "it": "Litleo",
        "de": "Litleo",
        "pt-br": "Pequeno",
        "zh-tw": "小獅獅",
    },
    description: {
        en: "The mane of a male Pyroar heats up to over\n3,600 degrees Fahrenheit during battle. Merely\napproaching it will cause severe burns.",
        "fr": "La crinière d'un Pyroar mâle se réchauffe jusqu'à\n3 600 degrés Fahrenheit pendant la bataille. Simplement\ns’en approcher provoquerait de graves brûlures.",
        "es": "La melena de un Pyroar macho se calienta al máximo\n3.600 grados Fahrenheit durante la batalla. Simplemente\nacercarse a él provocará quemaduras graves.",
        "it": "La criniera di un Pyroar maschio si surriscalda\n3.600 gradi Fahrenheit durante la battaglia. Semplicemente\navvicinarsi causerà gravi ustioni.",
        "de": "Die Mähne eines männlichen Pyroars erhitzt sich auf über 100 °C\n3.600 Grad Fahrenheit während des Kampfes. Nur\nBei Annäherung kann es zu schweren Verbrennungen kommen.",
        "pt-br": "A juba de um Pyroar macho esquenta\n3.600 graus Fahrenheit durante a batalha. Apenas\naproximar-se dele causará queimaduras graves.",
        "zh-tw": "雄性 Pyroar 的鬃毛溫度升高到超過\n戰鬥期間溫度為 3,600 華氏度。僅僅是\n接近它會導致嚴重燒傷。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Fire Blast",
                "fr": "Explosion de feu",
                "es": "Explosión de fuego",
                "it": "Esplosione di fuoco",
                "de": "Feuerstoß",
                "pt-br": "Explosão de Fogo",
                "zh-tw": "火爆"
            },
            damage: 130,
            cost: ["Fire", "Fire", "Colorless"],
            effect: {
                en: "Discard 2 {R} Energy from this Pokémon.",
                "fr": "Défaussez 2 {R} Énergie de ce Pokémon.",
                "es": "Descarta 2 {R} de Energía de este Pokémon.",
                "it": "Scarta 2 Energie {R} da questo Pokémon.",
                "de": "Lege 2 {R}-Energien von diesem Pokémon ab.",
                "pt-br": "Descarte 2 {R} Energias deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的 2 個 {R} 能量。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2
};
export default card;
