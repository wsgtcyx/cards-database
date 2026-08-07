import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/010",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/010",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/010",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/010",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/010",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/010",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/010"
    },
    name: {
        en: "Shiftry",
        "fr": "Tengalice",
        "es": "Shiftry",
        "it": "Shiftry",
        "de": "Tengulist",
        "pt-br": "Shiftry",
        "zh-tw": "狡猾天狗",
    },
    illustrator: "Masakazu Fukuda",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Grass"],
    evolveFrom: {
        en: "Nuzleaf",
        "fr": "Feuille de Nuz",
        "es": "Nuzleaf",
        "it": "Nuzleaf",
        "de": "Nuzleaf",
        "pt-br": "Nuzleaf",
        "zh-tw": "長鼻葉",
    },
    description: {
        en: "It lives quietly in the deep forest. It is said to\ncreate chilly winter winds with the fans it holds.",
        "fr": "Il vit tranquillement dans la forêt profonde. On dit de\nCréez des vents froids d'hiver avec les ventilateurs qu'il contient.",
        "es": "Vive tranquilamente en lo profundo del bosque. se dice que\nCrea vientos fríos de invierno con los ventiladores que sostiene.",
        "it": "Vive tranquillamente nella foresta profonda. Si dice\ncrea freddi venti invernali con i fan che contiene.",
        "de": "Es lebt ruhig im tiefen Wald. Es heißt\nErzeugen Sie mit den darin enthaltenen Ventilatoren kühle Winterwinde.",
        "pt-br": "Ele vive tranquilamente nas profundezas da floresta. Diz-se que\ncrie ventos frios de inverno com os ventiladores que contém.",
        "zh-tw": "它安靜地生活在密林深處。據說\n用它所持有的風扇製造寒冷的冬風。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Nipping Cyclone",
                "fr": "Cyclone mordillant",
                "es": "Ciclón mordisqueador",
                "it": "Stroncare il ciclone",
                "de": "Erstickender Zyklon",
                "pt-br": "Ciclone beliscador",
                "zh-tw": "旋風分離器"
            },
            damage: 70,
            cost: ["Grass", "Grass"],
            effect: {
                en: "Discard a random card from your opponent's hand.",
                "fr": "Défaussez une carte aléatoire de la main de votre adversaire.",
                "es": "Descarta una carta aleatoria de la mano de tu oponente.",
                "it": "Scarta una carta a caso dalla mano del tuo avversario.",
                "de": "Wirf eine zufällige Karte aus der Hand deines Gegners ab.",
                "pt-br": "Descarte uma carta aleatória da mão do seu oponente.",
                "zh-tw": "隨機丟棄對手手上的一張牌。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
