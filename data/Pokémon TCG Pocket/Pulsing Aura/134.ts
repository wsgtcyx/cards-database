import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/134",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/134"
    },
    name: {
        en: "Regigigas",
        fr: "Regigigas",
        es: "Regigigas",
        it: "Regigigas",
        de: "Regigigas",
        "pt-br": "Regigigas",
        "zh-tw": "雷吉奇卡斯",
        ko: "레지기가스",
        ja: "レジギガス"
    },
    illustrator: "Kouki Saitou",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Colorless"],
    dexId: [486],
    stage: "Basic",
    description: {
        en: "There is an enduring legend that states this Pokémon towed continents with ropes.",
        fr: "Une légende tenace veut que ce Pokémon ait traîné\nles continents en les attachant à des cordes.",
        es: "Una antigua leyenda afirma que este Pokémon arrastraba\ncontinentes con cuerdas.",
        it: "Una leggenda narra che questo Pokémon abbia trainato\ni continenti con delle funi.",
        de: "Es gibt eine Legende, wonach dieses Pokémon die Kontinente\nmit einem Seil gezogen hat.",
        "pt-br": "Existe uma lenda antiga que afirma que este Pokémon rebocou continentes com cordas.",
        "zh-tw": "有一個歷久不衰的傳說，說這隻寶可夢用繩子拖曳著大陸。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Seal of Antiquity",
                fr: "Sceau de l'Antiquité",
                es: "Sello de la Antigüedad",
                it: "Sigillo dell'antichità",
                de: "Siegel der Antike",
                "pt-br": "Selo da Antiguidade",
                "zh-tw": "遠古封印"
            },
            effect: {
                en: "If you don't have Regirock, Regice, and Registeel on your Bench, this Pokémon can't attack.",
                fr: "Si vous n'avez pas Regirock, Regice et Registeel sur votre banc, ce Pokémon ne peut pas attaquer.",
                es: "Si no tienes a Regirock, Regice y Registeel en tu Banca, este Pokémon no puede atacar.",
                it: "Se non hai Regirock, Regice e Registeel nella tua panchina, questo Pokémon non può attaccare.",
                de: "Wenn Regirock, Regice und Registeel nicht auf deiner Bank sind, kann dieses Pokémon nicht angreifen.",
                "pt-br": "Se você não tiver Regirock, Regice e Registeel em seu Banco, este Pokémon não poderá atacar.",
                "zh-tw": "如果你的替補席上沒有雷吉洛克、雷吉艾斯和雷吉斯奇魯，則這隻寶可夢無法攻擊。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Giga Turbo",
                fr: "Giga Turbo",
                es: "Gigaturbo",
                it: "Gigaturbo",
                de: "Giga-Turbo",
                "pt-br": "Gigaturbo",
                "zh-tw": "終極增能"
            },
            effect: {
                en: "Take a {C} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
                fr: "Prenez une Énergie {C} de votre Zone d'Énergie et attachez-la à l'un de vos Pokémon de Banc.",
                es: "Toma una Energía {C} de tu Zona de Energía y únela a 1 de tus Pokémon en Banca.",
                it: "Prendi un'Energia {C} dalla tua Zona Energetica e assegnala a 1 dei tuoi Pokémon in panchina.",
                de: "Nimm eine {C}-Energie aus deiner Energiezone und lege sie an eines deiner Bank-Pokémon an.",
                "pt-br": "Pegue uma Energia {C} da sua Zona de Energia e ligue-a a 1 dos seus Pokémon no Banco.",
                "zh-tw": "從你的能量區取出一個 {C} 能量並將其附加到你的 1 個後備寶可夢身上。"
            },
            damage: 100
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 4
};

export default card;
