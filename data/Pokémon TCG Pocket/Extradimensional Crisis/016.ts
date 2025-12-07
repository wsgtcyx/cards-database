import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Blitzle",
        "fr": "Blitz",
        "es": "bombardeo",
        "it": "Blitz",
        "de": "Blitzle",
        "pt-br": "Blitz",
        "zh-tw": "斑斑馬",
    },
    illustrator: "Miki Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    description: {
        en: "When thunderclouds cover the sky, it will appear.\nIt can catch lightning with its mane and store\nthe electricity.",
        "fr": "Lorsque des nuages ​​​​d'orage couvriront le ciel, il apparaîtra.\nIl peut attraper la foudre avec sa crinière et stocker\nl'électricité.",
        "es": "Cuando las nubes de tormenta cubran el cielo, aparecerá.\nPuede atrapar rayos con su melena y almacenar\nla electricidad.",
        "it": "Quando le nuvole temporalesche coprono il cielo, apparirà.\nPuò catturare i fulmini con la criniera e immagazzinarli\nl'elettricità.",
        "de": "Wenn Gewitterwolken den Himmel bedecken, wird es erscheinen.\nMit seiner Mähne kann es Blitze einfangen und speichern\nder Strom.",
        "pt-br": "Quando as nuvens de tempestade cobrirem o céu, ele aparecerá.\nEle pode pegar raios com sua crina e armazenar\na eletricidade.",
        "zh-tw": "當雷雲遮蓋天空時，它就會出現。\n它可以用鬃毛捕捉閃電並儲存\n電力。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Rear Kick",
                "fr": "Coup de pied arrière",
                "es": "Patada trasera",
                "it": "Calcio posteriore",
                "de": "Hinterer Tritt",
                "pt-br": "Chute traseiro",
                "zh-tw": "後踢"
            },
            damage: 40,
            cost: ["Lightning", "Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
