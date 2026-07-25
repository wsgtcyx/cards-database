import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/029",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/029",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/029",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/029",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/029",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/029"
    },
    name: {
        en: "Iron Boulder",
        fr: "Roc-de-Fer",
        es: "Ferromole",
        it: "Massoferreo",
        de: "Eisenfels",
        "pt-br": "Rocha Férrea",
        "zh-tw": "鐵磐岩",
        ko: "무쇠암석",
        ja: "テツノイワオ"
    },
    illustrator: "Tonji Matsuno",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Psychic"],
    dexId: [1022],
    stage: "Basic",
    description: {
        en: "It was named after a mysterious object recorded in an old book. Its body seems to be metallic.",
        fr: "Il doit son nom à un objet mystérieux enregistré dans un vieux livre. Son corps semble métallique.",
        es: "Lleva el nombre de un objeto misterioso registrado en un libro antiguo. Su cuerpo parece metálico.",
        it: "Prende il nome da un oggetto misterioso registrato in un vecchio libro. Il suo corpo sembra metallico.",
        de: "Es wurde nach einem mysteriösen Objekt benannt, das in einem alten Buch aufgezeichnet ist. Sein Körper scheint metallisch zu sein.",
        "pt-br": "Recebeu o nome de um objeto misterioso registrado em um livro antigo. Seu corpo parece ser metálico.",
        "zh-tw": "它因一本古書上記載的神祕物體而得名。它的身體似乎是金屬的。"
    },
    attacks: [
        {
            cost: ["Psychic", "Psychic", "Colorless", "Colorless"],
            name: {
                en: "Modular Axe",
                fr: "Hache modulaire",
                es: "Hacha modular",
                it: "Ascia modulare",
                de: "Modulare Axt",
                "pt-br": "Machado Modular",
                "zh-tw": "模組斧"
            },
            effect: {
                en: "If this Pokémon has a Pokémon Tool attached, this attack does 40 more damage.",
                fr: "Si ce Pokémon est attaché à un Outil Pokémon, cette attaque inflige 40 dégâts supplémentaires.",
                es: "Si este Pokémon tiene una Herramienta Pokémon adjunta, este ataque hace 40 puntos de daño más.",
                it: "Se questo Pokémon ha un Oggetto Pokémon assegnato, questo attacco infligge 40 danni in più.",
                de: "Wenn an dieses Pokémon ein Pokémon-Werkzeug angelegt ist, fügt dieser Angriff 40 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon tiver uma Ferramenta Pokémon anexada, este ataque causará 40 de dano a mais.",
                "zh-tw": "如果該寶可夢附加了寶可夢工具，則此攻擊造成的傷害增加 40 點。"
            },
            damage: "80+"
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
