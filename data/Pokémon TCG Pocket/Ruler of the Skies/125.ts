import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/125",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/125",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/125",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/125",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/125"
    },
    name: {
        en: "Applin",
        fr: "Verpom",
        es: "Applin",
        it: "Applin",
        de: "Knapfel",
        "pt-br": "Applin",
        "zh-tw": "啃果蟲",
        ko: "과사삭벌레",
        ja: "カジッチュ"
    },
    illustrator: "Miki Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 40,
    types: ["Dragon"],
    dexId: [840],
    stage: "Basic",
    description: {
        en: "Applin lives inside an apple. When an Applin is separated from its apple, its body loses moisture and the Pokémon grows weak.",
        fr: "Verpom vit dans une pomme. Lorsqu'un Verpom est séparé de sa pomme, son corps perd de l'humidité et le Pokémon s'affaiblit.",
        es: "Applin vive dentro de una manzana. Cuando un Applin se separa de su manzana, su cuerpo pierde humedad y el Pokémon se debilita.",
        it: "Applin vive dentro una mela. Quando uno Applin viene separato dalla sua mela, il suo corpo perde umidità e il Pokémon si indebolisce.",
        de: "Knapfel lebt in einem Apfel. Wenn ein Knapfel von seinem Apfel getrennt wird, verliert sein Körper Feuchtigkeit und das Pokémon wird schwach.",
        "pt-br": "Applin vive dentro de uma maçã. Quando um Applin é separado de sua maçã, seu corpo perde umidade e o Pokémon fica fraco.",
        "zh-tw": "啃果蟲 住在蘋果裡面。當啃果蟲與蘋果分離時，它的身體會失去水分，寶可夢會變得虛弱。"
    },
    attacks: [
        {
            cost: ["Grass", "Fire"],
            name: {
                en: "Rolling Tackle",
                fr: "Roulé-Boulé",
                es: "Placaje Giro",
                it: "Rollazione",
                de: "Rolltackle",
                "pt-br": "Golpe de Colisão Rolante",
                "zh-tw": "滾動衝撞"
            },
            damage: 40
        }
    ],
    retreat: 1
};

export default card;
