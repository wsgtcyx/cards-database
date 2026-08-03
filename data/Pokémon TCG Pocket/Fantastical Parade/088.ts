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
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/088"
    },
    name: {
        en: "Drilbur",
        "fr": "Rototaupe",
        "es": "Drilbur",
        "it": "Drilbur",
        "de": "Rotomurf",
        "pt-br": "Drilbur",
        "zh-tw": "螺釘地鼠"
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
        "zh-tw": "它通過放置快速穿過土壤\n雙爪併攏，高速旋轉。"
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
                "zh-tw": "頭撞彈跳"
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
