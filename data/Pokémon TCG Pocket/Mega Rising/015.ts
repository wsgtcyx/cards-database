import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/015",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/015",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/015",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/015",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/015",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/015"
    },
    name: {
        en: "Cottonee",
        "fr": "Doudouvet",
        "es": "Cottonee",
        "it": "Cottonee",
        "de": "Waumboll",
        "pt-br": "Cottonee",
        "zh-tw": "木棉球",
    },
    illustrator: "Yuka Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Grass"],
    description: {
        en: "It shoots cotton from its body to protect itself.\nIf it gets caught up in hurricane-strength winds,\nit can get sent to the other side of the Earth.",
        "fr": "Il tire du coton de son corps pour se protéger.\nS'il est emporté par des vents violents d'ouragan,\nil peut être envoyé à l’autre bout de la Terre.",
        "es": "Lanza algodón de su cuerpo para protegerse.\nSi queda atrapado en vientos huracanados,\npuede ser enviado al otro lado de la Tierra.",
        "it": "Spara cotone dal corpo per proteggersi.\nSe viene travolto da venti forti come un uragano,\npuò essere inviato dall'altra parte della Terra.",
        "de": "Um sich zu schützen, schießt es Baumwolle von seinem Körper.\nWenn es von orkanstarken Winden erfasst wird,\nes kann auf die andere Seite der Erde geschickt werden.",
        "pt-br": "Ele atira algodão de seu corpo para se proteger.\nSe for apanhado por ventos com força de furacão,\nele pode ser enviado para o outro lado da Terra.",
        "zh-tw": "它從體內射出棉花來保護自己。\n如果遭遇颶風強度的大風，\n它可以被發送到地球的另一邊。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Razor Leaf",
                "fr": "Feuille de rasoir",
                "es": "Hoja de afeitar",
                "it": "Foglia di rasoio",
                "de": "Rasiermesserblatt",
                "pt-br": "Folha Navalha",
                "zh-tw": "剃刀葉"
            },
            damage: 20,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
