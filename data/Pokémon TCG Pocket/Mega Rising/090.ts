import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Blitzle",
        "fr": "Blitz",
        "es": "bombardeo",
        "it": "Blitz",
        "de": "Blitzle",
        "pt-br": "Blitz",
        "zh-tw": "閃電戰"
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    description: {
        en: "Its mane shines when it discharges electricity.\nThey use the frequency and rhythm of these flashes\nto communicate.",
        "fr": "Sa crinière brille lorsqu'elle décharge de l'électricité.\nIls utilisent la fréquence et le rythme de ces flashs\npour communiquer.",
        "es": "Su melena brilla cuando descarga electricidad.\nUsan la frecuencia y el ritmo de estos destellos.\npara comunicarse.",
        "it": "La sua criniera brilla quando scarica elettricità.\nUsano la frequenza e il ritmo di questi lampi\ncomunicare.",
        "de": "Seine Mähne glänzt, wenn er Elektrizität abgibt.\nSie nutzen die Frequenz und den Rhythmus dieser Blitze\nzu kommunizieren.",
        "pt-br": "Sua juba brilha quando descarrega eletricidade.\nEles usam a frequência e o ritmo desses flashes\npara se comunicar.",
        "zh-tw": "當它放電時，它的鬃毛會發光。\n他們利用這些閃光的頻率和節奏\n進行溝通。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tiny Charge",
                "fr": "Petite Charge",
                "es": "Pequeña carga",
                "it": "Piccola carica",
                "de": "Winzige Ladung",
                "pt-br": "Carga minúscula",
                "zh-tw": "微小的電荷"
            },
            damage: 10,
            cost: ["Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
