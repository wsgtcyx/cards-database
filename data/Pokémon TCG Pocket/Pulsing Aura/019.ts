import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/019",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/019",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/019",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/019",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/019",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/019",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/019"
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
    illustrator: "Mizue",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 40,
    types: ["Grass"],
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
            cost: ["Colorless"],
            name: {
                en: "Share",
                fr: "Répartition",
                es: "Compartir",
                it: "Condiviso",
                de: "Verteiler",
                "pt-br": "Compartilhar",
                "zh-tw": "分贈"
            },
            effect: {
                en: "Heal 30 damage from 1 of your Benched Pokémon.",
                fr: "Soignez 30 dégâts à l'un de vos Pokémon de Banc.",
                es: "Cura 30 puntos de daño de 1 de tus Pokémon en Banca.",
                it: "Cura 1 dei tuoi Pokémon in panchina da 30 danni.",
                de: "Heile 30 Schadenspunkte bei 1 Pokémon auf deiner Bank.",
                "pt-br": "Cure 30 de dano de 1 dos seus Pokémon no Banco.",
                "zh-tw": "治療你 1 隻後備寶可夢造成的 30 點傷害。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
