import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3b/103",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3b/103",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3b/103",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3b/103",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3b/103",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3b/103",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3b/103",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3b/103",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3b/103"
    },
    name: {
        en: "Moltres ex",
        "fr": "Sulfura-ex",
        "es": "Moltres ex",
        "it": "Moltres-ex",
        "de": "Lavados-ex",
        "pt-br": "Moltres ex",
        "zh-tw": "火焰鳥ex",
        ja: "ファイヤーex",
        ko: "파이어 ex",
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
                "zh-tw": "地獄之舞",
                ja: "れっかのまい",
                ko: "열화의춤"
            },
            cost: ["Fire"],
            effect: {
                en: "Flip 3 coins. Take an amount of {R} Energy from your Energy Zone equal to the number of heads and attach it to your Benched {R} Pokémon in any way you like.",
                "fr": "Lancez 3 pièces. Prenez une quantité d'Énergie {R} de votre Zone d'Énergie égale au nombre de têtes et attachez-la à votre Pokémon {R} de Banc comme vous le souhaitez.",
                "es": "Lanza 3 monedas. Toma una cantidad de Energía {R} de tu Zona de Energía igual al número de cabezas y únela a tus Pokémon {R} en Banca de la forma que quieras.",
                "it": "Lancia 3 monete. Prendi una quantità di Energia {R} dalla tua Zona Energetica pari al numero di teste e assegnala ai tuoi Pokémon {R} in panchina nel modo che preferisci.",
                "de": "Wirf 3 Münzen. Nimm eine Menge {R}-Energie aus deiner Energiezone, die der Anzahl der Köpfe entspricht, und lege sie auf beliebige Weise an dein Bank-{R}-Pokémon an.",
                "pt-br": "Jogue 3 moedas. Pegue uma quantidade de Energia {R} da sua Zona de Energia igual ao número de cabeças e ligue-a aos seus Pokémon {R} no Banco da maneira que desejar.",
                "zh-tw": "翻轉 3 個硬幣。從你的能量區取出相當於頭部數量的 {R} 能量，並以你喜歡的任何方式將其附加到你的後備 {R} 神奇寶貝上。",
                ja: "コインを3回投げ、オモテの数ぶんの{R}エネルギーを自分のエネルギーゾーンから出し、ベンチの{R}ポケモンに好きなようにつける。",
                ko: "동전을 3번 던져서 앞면이 나온 수만큼의 {R}에너지를 자신의 에너지존에서 내보내 벤치의 {R}포켓몬에게 원하는 대로 붙인다."
            }
        }, {
            name: {
                en: "Heat Blast",
                "fr": "Coup de chaleur",
                "es": "Explosión de calor",
                "it": "Colpo di calore",
                "de": "Hitzestoß",
                "pt-br": "Explosão de calor",
                "zh-tw": "熱風",
                ja: "ヒートブラスト",
                ko: "히트블라스트"
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
