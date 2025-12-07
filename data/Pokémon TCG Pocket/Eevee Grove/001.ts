import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Tropius",
        "fr": "Tropius",
        "es": "Tropio",
        "it": "Tropio",
        "de": "Tropius",
        "pt-br": "Trópio",
        "zh-tw": "特羅皮烏斯"
    },
    illustrator: "Oswaldo KATO",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Grass"],
    description: {
        en: "It lives in tropical jungles. The bunch of fruit\naround its neck is delicious. The fruit grows\ntwice a year.",
        "fr": "Il vit dans les jungles tropicales. La grappe de fruits\nautour de son cou est délicieux. Le fruit pousse\ndeux fois par an.",
        "es": "Vive en selvas tropicales. el racimo de fruta\nalrededor de su cuello es delicioso. la fruta crece\ndos veces al año.",
        "it": "Vive nelle giungle tropicali. Il grappolo di frutta\nintorno al collo è delizioso. Il frutto cresce\ndue volte l'anno.",
        "de": "Es lebt in tropischen Dschungeln. Der Fruchthaufen\num den Hals ist köstlich. Die Frucht wächst\nzweimal im Jahr.",
        "pt-br": "Vive em selvas tropicais. O cacho de frutas\nem volta do pescoço é delicioso. A fruta cresce\nduas vezes por ano.",
        "zh-tw": "它生活在熱帶叢林中。那串水果\n脖子上的東西很好吃。果實長大了\n每年兩次。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Cutting Wind",
                "fr": "Couper le vent",
                "es": "Viento cortante",
                "it": "Vento tagliente",
                "de": "Schneidender Wind",
                "pt-br": "Cortando o Vento",
                "zh-tw": "斬風"
            },
            damage: 60,
            cost: ["Colorless", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
