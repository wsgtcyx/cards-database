import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/041",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/041",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/041",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/041",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/041",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/041",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/041"
    },
    name: {
        en: "Horsea",
        "fr": "Hypotrempe",
        "es": "Horsea",
        "it": "Horsea",
        "de": "Seeper",
        "pt-br": "Horsea",
        "zh-tw": "墨海馬",
    },
    illustrator: "Yukiko Baba",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Water"],
    description: {
        en: "Horsea makes its home in oceans with gentle\ncurrents. If this Pokémon is under attack, it spits\nout pitch-black ink and escapes.",
        "fr": "Horsea s'installe dans les océans avec la douceur\ncourants. Si ce Pokémon est attaqué, il crache\nsort de l'encre noire et s'échappe.",
        "es": "Horsea hace su hogar en los océanos con suave\ncorrientes. Si este Pokémon está siendo atacado, escupe\nSale tinta negra como boca de lobo y se escapa.",
        "it": "Horsea vive negli oceani con delicatezza\ncorrenti. Se questo Pokémon è sotto attacco, sputa\nesce inchiostro nero come la pece e fugge.",
        "de": "Horsea ist sanft in den Ozeanen zu Hause\nStrömungen. Wenn dieses Pokémon angegriffen wird, spuckt es\npechschwarze Tinte und Fluchten ausstoßen.",
        "pt-br": "Horsea faz seu lar nos oceanos com suaves\ncorrentes. Se este Pokémon estiver sob ataque, ele cospe\ntinta preta como breu e escapa.",
        "zh-tw": "Horsea 以溫和的方式在海洋中安家\n電流。如果這只神奇寶貝受到攻擊，它會吐口水\n流出漆黑的墨水並逃脫。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Hook",
                "fr": "Crochet",
                "es": "Gancho",
                "it": "Gancio",
                "de": "Haken",
                "pt-br": "Gancho",
                "zh-tw": "鉤"
            },
            damage: 30,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
