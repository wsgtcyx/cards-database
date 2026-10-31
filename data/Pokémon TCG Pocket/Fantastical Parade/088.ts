import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/088",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/088",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/088",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/088",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/088",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/088",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/088",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/088",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/088"
    },
    name: {
        en: "Drilbur",
        "fr": "Rototaupe",
        "es": "Drilbur",
        "it": "Drilbur",
        "de": "Rotomurf",
        "pt-br": "Drilbur",
        "zh-tw": "螺釘地鼠",
        ja: "モグリュー",
        ko: "두더류"
    },
    illustrator: "Midori Harada",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    description: {
        en: "It makes its way swiftly through the soil by putting\nboth claws together and rotating at high speed.",
        "fr": "Il se fraye un chemin rapidement à travers le sol en mettant\nles deux griffes ensemble et tournant à grande vitesse.",
        "es": "Se abre paso rápidamente a través del suelo poniendo\nambas garras juntas y girando a alta velocidad.",
        "it": "Si fa strada rapidamente attraverso il terreno mettendo\nentrambi gli artigli insieme e ruotano ad alta velocità.",
        "de": "Durch das Setzen bahnt es sich schnell seinen Weg durch den Boden\nbeide Klauen zusammen und drehen sich mit hoher Geschwindigkeit.",
        "pt-br": "Ele abre caminho rapidamente pelo solo, colocando\nambas as garras juntas e girando em alta velocidade.",
        "zh-tw": "它通過放置快速穿過土壤\n雙爪併攏，高速旋轉。",
        ja: "両手の ツメを 重ね合わせて 体を 高速 回転させると 猛スピードで 地中を 進む。",
        ko: "양손의 손톱을 서로 겹치고\n몸을 고속 회전시키면서\n맹렬한 속도로 땅속을 헤쳐 나간다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Headbutt Bounce",
                "fr": "Rebond de coup de tête",
                "es": "Rebote de cabezazo",
                "it": "Rimbalzo della testata",
                "de": "Kopfstoß-Abprall",
                "pt-br": "Salto de cabeçada",
                "zh-tw": "頭撞彈跳",
                ja: "とびだしヘッド",
                ko: "머리박치기"
            },
            damage: 30,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
