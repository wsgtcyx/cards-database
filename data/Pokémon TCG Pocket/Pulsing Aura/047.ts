import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/047",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/047",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/047",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/047",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/047",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/047",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/047"
    },
    name: {
        en: "Beartic",
        fr: "Polagriffe",
        es: "Beartic",
        it: "Beartic",
        de: "Siberio",
        "pt-br": "Beartic",
        "zh-tw": "凍原熊",
        ko: "툰베어",
        ja: "ツンベアー"
    },
    illustrator: "Rianti Hidayat",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Water"],
    dexId: [614],
    evolveFrom: {
        en: "Cubchoo",
        fr: "Polarhume",
        es: "Cubchoo",
        it: "Cubchoo",
        de: "Petznief",
        "pt-br": "Cubchoo",
        "zh-tw": "噴嚏熊",
        ko: "코고미",
        ja: "クマシュン"
    },
    stage: "Stage1",
    description: {
        en: "Feared as the Snow-White Demon in northern lands, Beartic uses its frosty claws and fangs to attack prey.",
        fr: "Redouté comme le Démon Blanche-Neige dans les terres du nord, Polagriffe utilise ses griffes et ses crocs givrés pour attaquer ses proies.",
        es: "Temido como el demonio blanco como la nieve en las tierras del norte, Beartic usa sus garras y colmillos helados para atacar a sus presas.",
        it: "Temuto come il Demone Biancaneve nelle terre del nord, Beartic usa i suoi artigli e le sue zanne gelidi per attaccare la preda.",
        de: "Siberio wird in den nördlichen Ländern als Schneewittchen-Dämon gefürchtet und nutzt seine frostigen Klauen und Reißzähne, um Beute anzugreifen.",
        "pt-br": "Temido como o Demônio Branco como a Neve nas terras do norte, Beartic usa suas garras e presas geladas para atacar suas presas.",
        "zh-tw": "凍原熊 如同北方大地的白雪惡魔一樣令人畏懼，它使用冰冷的爪子和尖牙攻擊獵物。"
    },
    attacks: [
        {
            cost: ["Water", "Water", "Colorless"],
            name: {
                en: "Frost Smash",
                fr: "Impact Glacial",
                es: "Golpe Gélido",
                it: "Gelocolpo",
                de: "Frostschlag",
                "pt-br": "Pancada Congelada",
                "zh-tw": "冰霜粉碎"
            },
            damage: 80
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
