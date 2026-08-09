import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/026",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/026",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/026",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/026",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/026",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/026",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/026"
    },
    name: {
        en: "Cinderace",
        "fr": "Pyrobut",
        "es": "Cinderace",
        "it": "Cinderace",
        "de": "Liberlo",
        "pt-br": "Cinderace",
        "zh-tw": "閃焰王牌"
    },
    illustrator: "Kouki Saitou",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Fire"],
    evolveFrom: {
        en: "Raboot",
        "fr": "Lapyro",
        "es": "Raboot",
        "it": "Raboot",
        "de": "Kickerlo",
        "pt-br": "Raboot",
        "zh-tw": "騰蹴小將"
    },
    description: {
        en: "Using a ball that it made out of flames,\nCinderace blinds its opponents and\nkeeps them at bay.",
        "fr": "En utilisant une balle qu'il a fabriquée avec des flammes,\nCinderace aveugle ses adversaires et\nles tient à distance.",
        "es": "Usando una bola que hizo con llamas,\nCinderace ciega a sus oponentes y\nlos mantiene a raya.",
        "it": "Usando una palla fatta di fiamme,\nCenerentola acceca i suoi avversari e\nli tiene a bada.",
        "de": "Mit einer Kugel, die es aus Flammen gemacht hat,\nCinderace blendet seine Gegner und\nhält sie in Schach.",
        "pt-br": "Usando uma bola feita de chamas,\nCinderace cega seus oponentes e\nos mantém afastados.",
        "zh-tw": "使用由火焰製成的球，\n灰燼使對手失明並\n讓他們遠離。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Fireball Shot",
                "fr": "Tir de boule de feu",
                "es": "Disparo de bola de fuego",
                "it": "Colpo di palla di fuoco",
                "de": "Feuerballschuss",
                "pt-br": "Tiro de bola de fogo",
                "zh-tw": "火球射擊"
            },
            damage: 120,
            cost: ["Fire", "Fire"],
            effect: {
                en: "During your next turn, this Pokémon can't attack.",
                "fr": "Lors de votre prochain tour, ce Pokémon ne peut pas attaquer.",
                "es": "Durante tu próximo turno, este Pokémon no puede atacar.",
                "it": "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
                "de": "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
                "pt-br": "Durante o seu próximo turno, este Pokémon não poderá atacar.",
                "zh-tw": "在你的下一個回合中，這只神奇寶貝無法攻擊。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 0
};
export default card;
