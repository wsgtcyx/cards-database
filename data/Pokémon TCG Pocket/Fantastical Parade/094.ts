import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/094",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/094",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/094",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/094",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/094"
    },
    name: {
        en: "Alolan Meowth",
        "fr": "Miaouss d'Alola",
        "es": "Meowth de Alola",
        "it": "Meowth di Alola",
        "de": "Alola-Miau",
        "pt-br": "Meowth de Alola",
        "zh-tw": "阿羅拉喵"
    },
    illustrator: "Megumi Mizutani",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "Deeply proud and keenly smart, this Pokémon\nmoves with cunning during battle and relentlessly\nattacks enemies' weak points.",
        "fr": "Profondément fier et extrêmement intelligent, ce Pokémon\nse déplace avec ruse pendant la bataille et sans relâche\nattaque les points faibles des ennemis.",
        "es": "Profundamente orgulloso y profundamente inteligente, este Pokémon\nse mueve con astucia durante la batalla e implacablemente\nAtaca los puntos débiles de los enemigos.",
        "it": "Profondamente orgoglioso e profondamente intelligente, questo Pokémon\nsi muove con astuzia durante la battaglia e senza sosta\nattacca i punti deboli dei nemici.",
        "de": "Dieses Pokémon ist zutiefst stolz und überaus klug\nbewegt sich im Kampf mit List und unerbittlich\ngreift die Schwachstellen der Feinde an.",
        "pt-br": "Profundamente orgulhoso e extremamente inteligente, este Pokémon\nmove-se com astúcia durante a batalha e incansavelmente\nataca os pontos fracos dos inimigos.",
        "zh-tw": "這只神奇寶貝非常自豪且非常聰明\n在戰鬥中狡猾而無情地行動\n攻擊敵人的弱點。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Swagger",
                "fr": "Fanfaronnade",
                "es": "Pavonearse",
                "it": "Spavalderia",
                "de": "Stolzieren",
                "pt-br": "Arrogância",
                "zh-tw": "昂首闊步"
            },
            cost: ["Darkness"],
            effect: {
                en: "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, défaussez une Énergie aléatoire du Pokémon Actif de votre adversaire.",
                "es": "Lanza una moneda. Si sale cara, descarta una Energía aleatoria del Pokémon Activo de tu rival.",
                "it": "Lancia una moneta. Se esce testa, scarta un'Energia casuale dal Pokémon attivo del tuo avversario.",
                "de": "Wirf eine Münze. Bei „Kopf“ wirf eine zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Jogue uma moeda. Se sair cara, descarte uma Energia aleatória do Pokémon Ativo do seu oponente.",
                "zh-tw": "拋一枚硬幣。如果出現正面，則丟棄對手的活躍神奇寶貝中的隨機能量。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
