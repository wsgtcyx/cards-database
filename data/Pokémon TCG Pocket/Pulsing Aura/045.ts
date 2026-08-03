import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/045",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/045",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/045",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/045",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/045",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/045",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/045"
    },
    name: {
        en: "Regice",
        fr: "Regice",
        es: "Regice",
        it: "Regice",
        de: "Regice",
        "pt-br": "Regice",
        "zh-tw": "雷吉艾斯",
        ko: "레지아이스",
        ja: "レジアイス"
    },
    illustrator: "kodama",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Water"],
    dexId: [378],
    stage: "Basic",
    description: {
        en: "This Pokémon’s body is made of solid ice. It’s said that Regice was born beneath thick ice in the ice age.",
        fr: "Ce Pokémon de l’ère glaciaire dont le corps\nest entièrement composé d’eau gelée serait\nné sous une épaisse couche de glace.",
        es: "Todo su cuerpo está compuesto de hielo.\nSe dice que surgió bajo una gruesa placa\nde hielo durante alguna glaciación.",
        it: "Il suo corpo è interamente costituito da ghiaccio.\nSi narra che nacque sotto un massiccio strato\ndi ghiaccio durante l’era glaciale.",
        de: "Sein gesamter Körper besteht aus Eis. Man sagt,\nes wurde während der Eiszeit unter einer dicken\nEisschicht geboren.",
        "pt-br": "O corpo deste Pokémon é feito de gelo sólido. Diz-se que Regice nasceu sob gelo espesso na era glacial.",
        "zh-tw": "全身都是由冰塊構成。\n據說牠是在冰河時期\n誕生在厚實的冰層下。"
    },
    attacks: [
        {
            cost: ["Water", "Colorless", "Colorless"],
            name: {
                en: "Reflect Energy",
                fr: "Renvoi d'Énergie",
                es: "Reflejar Energía",
                it: "Rifletti Energia",
                de: "Energiereflexion",
                "pt-br": "Refletir Energia",
                "zh-tw": "能量反射"
            },
            effect: {
                en: "Move 2 random Energy from this Pokémon to 1 of your Benched Pokémon.",
                fr: "Déplacez 2 Énergies aléatoires de ce Pokémon vers l'un de vos Pokémon de Banc.",
                es: "Mueve 2 Energías aleatorias de este Pokémon a 1 de tus Pokémon en Banca.",
                it: "Sposta due Energie casuali da questo Pokémon a 1 dei tuoi Pokémon in panchina.",
                de: "Verschiebe 2 zufällige Energien von diesem Pokémon auf 1 deiner Bank-Pokémon.",
                "pt-br": "Mova 2 Energias aleatórias deste Pokémon para 1 dos seus Pokémon no Banco.",
                "zh-tw": "將該寶可夢中的 2 個隨機能量移到你後備的 1 個寶可夢上。"
            },
            damage: 70
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
