import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/127",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/127",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/127",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/127",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/127",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/127"
    },
    name: {
        en: "Klang",
        "fr": "Clic",
        "es": "Klang",
        "it": "Klang",
        "de": "Kliklak",
        "pt-br": "Klang",
        "zh-tw": "齒輪組",
    },
    illustrator: "Akira Komayama",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Metal"],
    evolveFrom: {
        en: "Klink",
        "fr": "Klink",
        "es": "klink",
        "it": "Klink",
        "de": "Klink",
        "pt-br": "Klink",
        "zh-tw": "齒輪兒",
    },
    description: {
        en: "When Klang goes all out, the minigear links up\nperfectly with the outer part of the big gear, and\nthis Pokémon's rotation speed increases sharply.",
        "fr": "Quand Klang met tout en œuvre, le minigear se connecte\nparfaitement avec la partie extérieure du gros engrenage, et\nla vitesse de rotation de ce Pokémon augmente fortement.",
        "es": "Cuando Klang hace todo lo posible, el miniequipo se conecta\nperfectamente con la parte exterior del engranaje grande, y\nLa velocidad de rotación de este Pokémon aumenta drásticamente.",
        "it": "Quando Klang dà il massimo, il miniingranaggio si collega\nperfettamente con la parte esterna del grande ingranaggio, e\nla velocità di rotazione di questo Pokémon aumenta notevolmente.",
        "de": "Wenn der Klang aufs Ganze geht, schaltet sich das Mini-Getriebe ein\nperfekt mit dem äußeren Teil des großen Zahnrads und\nDie Rotationsgeschwindigkeit dieses Pokémon erhöht sich stark.",
        "pt-br": "Quando Klang dá tudo de si, o minigear se conecta\nperfeitamente com a parte externa da engrenagem grande, e\na velocidade de rotação deste Pokémon aumenta drasticamente.",
        "zh-tw": "當巴生全力以赴時，迷你齒輪聯動起來\n與大齒輪的外部完美配合，並且\n該寶可夢的旋轉速度急劇增加。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Gear Cutter",
                "fr": "Coupe-engrenage",
                "es": "Cortador de engranajes",
                "it": "Taglierina per ingranaggi",
                "de": "Zahnradschneider",
                "pt-br": "Cortador de engrenagem",
                "zh-tw": "齒輪銑刀"
            },
            damage: 40,
            cost: ["Metal", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh"]
};
export default card;
