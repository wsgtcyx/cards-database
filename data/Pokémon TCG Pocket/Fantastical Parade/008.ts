import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/008"
    },
    name: {
        en: "Chespin",
        "fr": "Chespin",
        "es": "Chespin",
        "it": "Chespin",
        "de": "Chespin",
        "pt-br": "Chespin",
        "zh-tw": "切斯平"
    },
    illustrator: "5ban Graphics",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "Eating lots of berries makes the bark shell that\ncovers Chespin's head and body grow sturdier.",
        "fr": "Manger beaucoup de baies donne naissance à l'écorce qui\ncouvre la tête et le corps de Chespin et deviennent plus solides.",
        "es": "Comer muchas bayas hace que la cáscara de la corteza\ncubre la cabeza y el cuerpo de Chespin se vuelven más resistentes.",
        "it": "Mangiare molte bacche fa sì che la corteccia si sguscia\ncopre la testa e il corpo di Chespin che diventano più robusti.",
        "de": "Wenn man viele Beeren isst, bildet sich die Rindenschale\nbedeckt Chespins Kopf und Körper werden stabiler.",
        "pt-br": "Comer muitas frutas faz com que a casca da casca fique\ncobre a cabeça e o corpo de Chespin ficam mais robustos.",
        "zh-tw": "吃大量漿果會使樹皮殼\n覆蓋了切斯平的頭部，身體變得更加堅固。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Vine Whip",
                "fr": "Fouet de vigne",
                "es": "Látigo de vid",
                "it": "Frusta di vite",
                "de": "Weinpeitsche",
                "pt-br": "Chicote de videira",
                "zh-tw": "藤鞭"
            },
            damage: 30,
            cost: ["Grass", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
