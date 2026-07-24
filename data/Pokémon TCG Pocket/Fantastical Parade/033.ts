import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/033"
    },
    name: {
        en: "Mudkip",
        "fr": "Boue",
        "es": "Mudkip",
        "it": "Mudkip",
        "de": "Schlammkippe",
        "pt-br": "Mudkip",
        "zh-tw": "水雀"
    },
    illustrator: "Aya Kusube",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "When it uses its large tail fin, it picks up speed\nrapidly in the water. It is strong in spite of its\nsmall size.",
        "fr": "Lorsqu’il utilise sa grande nageoire caudale, il prend de la vitesse\nrapidement dans l'eau. Il est fort malgré son\npetite taille.",
        "es": "Cuando utiliza su gran aleta caudal, gana velocidad.\nrápidamente en el agua. Es fuerte a pesar de su\ntamaño pequeño.",
        "it": "Quando usa la sua grande pinna caudale, aumenta la velocità\nrapidamente nell'acqua. È forte nonostante ciò\npiccola dimensione.",
        "de": "Wenn es seine große Schwanzflosse nutzt, nimmt es Fahrt auf\nschnell im Wasser. Es ist trotz allem stark\nkleine Größe.",
        "pt-br": "Quando usa sua grande barbatana caudal, ganha velocidade\nrapidamente na água. É forte apesar de sua\ntamanho pequeno.",
        "zh-tw": "當它使用大尾鰭時，它會加快速度\n迅速在水中。儘管它的實力很強\n尺寸小。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tackle",
                "fr": "Tacle",
                "es": "Abordar",
                "it": "Attrezzatura",
                "de": "Tackle",
                "pt-br": "Enfrentar",
                "zh-tw": "處理"
            },
            damage: 20,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
