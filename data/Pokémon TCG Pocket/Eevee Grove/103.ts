import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Moltres ex",
        "fr": "Sulfura ex",
        "es": "Moltres ex",
        "it": "Moltres ex",
        "de": "Moltres ex",
        "pt-br": "Moltres ex",
        "zh-tw": "莫爾特雷斯超級"
    },
    illustrator: "PLANETA Saito",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Fire"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Inferno Dance",
                "fr": "Danse infernale",
                "es": "Danza del infierno",
                "it": "Danza Infernale",
                "de": "Inferno-Tanz",
                "pt-br": "Dança Infernal",
                "zh-tw": "地獄之舞"
            },
            cost: ["Fire"],
            effect: {
                en: "Flip 3 coins. Take an amount of {R} Energy from your Energy Zone equal to the number of heads and attach it to your Benched {R} Pokémon in any way you like.",
                "fr": "Lancez 3 pièces. Prenez une quantité d'Énergie {R} de votre Zone d'Énergie égale au nombre de têtes et attachez-la à votre Pokémon {R} de Banc comme vous le souhaitez.",
                "es": "Lanza 3 monedas. Toma una cantidad de Energía {R} de tu Zona de Energía igual al número de cabezas y únela a tus Pokémon {R} en Banca de la forma que quieras.",
                "it": "Lancia 3 monete. Prendi una quantità di Energia {R} dalla tua Zona Energetica pari al numero di teste e assegnala ai tuoi Pokémon {R} in panchina nel modo che preferisci.",
                "de": "Wirf 3 Münzen. Nimm eine Menge {R}-Energie aus deiner Energiezone, die der Anzahl der Köpfe entspricht, und lege sie auf beliebige Weise an dein Bank-{R}-Pokémon an.",
                "pt-br": "Jogue 3 moedas. Pegue uma quantidade de Energia {R} da sua Zona de Energia igual ao número de cabeças e ligue-a aos seus Pokémon {R} no Banco da maneira que desejar.",
                "zh-tw": "翻轉 3 個硬幣。從你的能量區取出相當於頭部數量的 {R} 能量，並以你喜歡的任何方式將其附加到你的後備 {R} 神奇寶貝上。"
            }
        }, {
            name: {
                en: "Heat Blast",
                "fr": "Coup de chaleur",
                "es": "Explosión de calor",
                "it": "Colpo di calore",
                "de": "Hitzestoß",
                "pt-br": "Explosão de calor",
                "zh-tw": "熱風"
            },
            damage: 70,
            cost: ["Fire", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
