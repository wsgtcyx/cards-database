import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/065",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/065",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/065",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/065",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/065",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/065",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/065",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/065",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/065"
    },
    name: {
        en: "Gardevoir",
        "fr": "Gardevoir",
        "es": "Gardevoir",
        "it": "Gardevoir",
        "de": "Guardevoir",
        "pt-br": "Gardevoir",
        "zh-tw": "沙奈朵",
        ja: "サーナイト",
        ko: "가디안"
    },
    illustrator: "mingo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Psychic"],
    evolveFrom: {
        en: "Kirlia",
        "fr": "Kirlia",
        "es": "Kirlia",
        "it": "Kirlia",
        "de": "Kirlia",
        "pt-br": "Kirlia",
        "zh-tw": "奇魯莉安",
        ja: "キルリア",
        ko: "킬리아"
    },
    description: {
        en: "It unleashes psychokinetic energy at full power\nwhen protecting a Trainer it has bonded closely\nwith.",
        "fr": "Il libère l'énergie psychokinétique à pleine puissance\nlorsqu'il protège un dresseur, il s'est étroitement lié\navec.",
        "es": "Desata energía psicoquinética a máxima potencia.\nAl proteger a un entrenador, se ha unido estrechamente.\ncon.",
        "it": "Scatena l'energia psicocinetica a piena potenza\nquando protegge un Allenatore si lega strettamente\ncon.",
        "de": "Es setzt psychokinetische Energie mit voller Kraft frei\nBeim Schutz eines Trainers hat es sich eng verbunden\nmit.",
        "pt-br": "Ele libera energia psicocinética com potência total\nao proteger um treinador, ele está intimamente ligado\ncom.",
        "zh-tw": "它全力釋放心動能量\n當保護訓練師時，它已經緊密結合\n與.",
        ja: "心の 通い合った トレーナーを 守るとき 最大 パワーの サイコエネルギーが 発揮される。",
        ko: "마음이 서로 통한 트레이너를\n지킬 때 최대 파워의\n사이코 에너지가 발휘된다."
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Psy Turbo",
                "fr": "Psy Turbo",
                "es": "Psico Turbo",
                "it": "Psico Turbo",
                "de": "Psy Turbo",
                "pt-br": "Psy Turbo",
                "zh-tw": "心靈渦輪",
                ja: "サイコターボ",
                ko: "사이코터보"
            },
            damage: 60,
            cost: ["Psychic", "Psychic"],
            effect: {
                en: "Take 2 {P} Energy from your Energy Zone and attach it to 1 of your Benched {P} Pokémon.",
                "fr": "Prenez 2 {P} Énergie de votre Zone d'Énergie et attachez-la à 1 de vos Pokémon {P} de Banc.",
                "es": "Toma 2 Energías {P} de tu Zona de Energía y únelas a 1 de tus Pokémon {P} en Banca.",
                "it": "Prendi 2 Energie {P} dalla tua Zona Energetica e assegnale a 1 dei tuoi Pokémon {P} in panchina.",
                "de": "Nimm 2 {P}-Energie aus deiner Energiezone und lege sie an eines deiner {P}-Pokémon auf deiner Bank an.",
                "pt-br": "Pegue 2 {P} Energias da sua Zona de Energia e ligue-as a 1 dos seus Pokémon {P} no Banco.",
                "zh-tw": "從你的能量區取出 2 個 {P} 能量並將其附加到你後備的 1 只 {P} 神奇寶貝上。",
                ja: "自分のエネルギーゾーンから{P}エネルギーを2個出し、ベンチの{P}ポケモン1匹につける。",
                ko: "자신의 에너지존에서 {P}에너지를 2개 내보내 벤치의 {P}포켓몬 1마리에게 붙인다."
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
