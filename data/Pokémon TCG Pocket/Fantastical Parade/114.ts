import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/114",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/114",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/114",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/114",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/114",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/114",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/114"
    },
    name: {
        en: "Excadrill",
        "fr": "Minotaupe",
        "es": "Excadrill",
        "it": "Excadrill",
        "de": "Stalobor",
        "pt-br": "Excadrill",
        "zh-tw": "龍頭地鼠"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Metal"],
    evolveFrom: {
        en: "Drilbur",
        "fr": "Foreur",
        "es": "taladro",
        "it": "Drilbur",
        "de": "Drilbur",
        "pt-br": "Drilbur",
        "zh-tw": "德里爾布爾"
    },
    description: {
        en: "Its drill, which has evolved into steel, is strong\nenough to bore through iron plates. This\nPokémon is a great help in tunnel construction.",
        "fr": "Sa perceuse, qui a évolué vers l'acier, est solide\nassez pour percer des plaques de fer. Ceci\nPokémon est d'une grande aide dans la construction de tunnels.",
        "es": "Su taladro, que ha evolucionado hasta convertirse en acero, es resistente.\nsuficiente para perforar placas de hierro. esto\nPokémon es de gran ayuda en la construcción de túneles.",
        "it": "La sua punta, che si è evoluta in acciaio, è forte\nabbastanza da forare piastre di ferro. Questo\nI Pokémon sono di grande aiuto nella costruzione dei tunnel.",
        "de": "Sein Bohrer, der sich zu Stahl entwickelt hat, ist stark\ngenug, um Eisenplatten zu durchbohren. Dies\nPokémon ist eine große Hilfe beim Tunnelbau.",
        "pt-br": "Sua broca, que evoluiu para aço, é forte\no suficiente para perfurar placas de ferro. Isto\nPokémon é uma grande ajuda na construção de túneis.",
        "zh-tw": "它的鑽頭已進化為鋼，堅固\n足以穿透鐵板。這個\n神奇寶貝對隧道建設有很大幫助。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Slashing Claw",
                "fr": "Griffe tranchante",
                "es": "Garra cortante",
                "it": "Artiglio Tagliente",
                "de": "Schlagklaue",
                "pt-br": "Garra Cortante",
                "zh-tw": "斬擊利爪"
            },
            damage: 80,
            cost: ["Metal", "Metal", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
