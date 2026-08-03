import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/039",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/039",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/039",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/039",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/039",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/039"
    },
    name: {
        en: "Vanilluxe",
        "fr": "Sorbouboul",
        "es": "Vanilluxe",
        "it": "Vanilluxe",
        "de": "Gelatwino",
        "pt-br": "Vanilluxe",
        "zh-tw": "雙倍多多冰"
    },
    illustrator: "kodama",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Water"],
    evolveFrom: {
        en: "Vanillish",
        "fr": "Vanillé",
        "es": "vainilla",
        "it": "Vanillish",
        "de": "Vanillin",
        "pt-br": "Vanilizado",
        "zh-tw": "香草味"
    },
    description: {
        en: "People believe this Pokémon formed when two\nVanillish stuck together. Its body temperature is\nroughly 21 degrees Fahrenheit.",
        "fr": "Les gens croient que ce Pokémon s'est formé lorsque deux\nVanillish est resté ensemble. Sa température corporelle est\nenviron 21 degrés Fahrenheit.",
        "es": "La gente cree que este Pokémon se formó cuando dos\nVanillish se mantuvo unido. Su temperatura corporal es\naproximadamente 21 grados Fahrenheit.",
        "it": "La gente crede che questo Pokémon si sia formato quando aveva due anni\nI Vanillish sono rimasti uniti. La sua temperatura corporea è\ncirca 21 gradi Fahrenheit.",
        "de": "Die Leute glauben, dass sich dieses Pokémon zu zweit gebildet hat\nVanillin klebte zusammen. Seine Körpertemperatur beträgt\nungefähr 21 Grad Fahrenheit.",
        "pt-br": "As pessoas acreditam que este Pokémon se formou quando dois\nVanillish grudado. Sua temperatura corporal é\ncerca de 21 graus Fahrenheit.",
        "zh-tw": "人們相信這個神奇寶貝是由兩個\n瓦尼利甚粘在一起了。它的體溫是\n大約 21 華氏度。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Sweets Relay",
                "fr": "Relais des Bonbons",
                "es": "Relevo de dulces",
                "it": "Relè dei dolci",
                "de": "Süßigkeiten-Staffel",
                "pt-br": "Revezamento de Doces",
                "zh-tw": "糖果接力賽"
            },
            damage: 60,
            cost: ["Water", "Water"],
            effect: {
                en: "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 60 more damage.",
                "fr": "Si 1 de vos Pokémon a utilisé Relais Bonbons lors de votre dernier tour, cette attaque inflige 60 dégâts supplémentaires.",
                "es": "Si 1 de tus Pokémon usó Sweets Relay durante tu último turno, este ataque hace 60 daños más.",
                "it": "Se 1 dei tuoi Pokémon ha utilizzato Sweets Relay durante il tuo ultimo turno, questo attacco infligge 60 danni in più.",
                "de": "Wenn eines deiner Pokémon in deinem letzten Zug „Sweet Relay“ verwendet hat, fügt dieser Angriff 60 weitere Schadenspunkte zu.",
                "pt-br": "Se 1 dos seus Pokémon usou Sweets Relay durante seu último turno, este ataque causará 60 de dano a mais.",
                "zh-tw": "如果你的 1 個神奇寶貝在你的最後回合中使用了糖果接力，則此攻擊造成的傷害增加 60 點。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 2
};
export default card;
