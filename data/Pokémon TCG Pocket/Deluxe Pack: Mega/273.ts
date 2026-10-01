import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/273",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/273",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/273",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/273",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/273",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/273",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/273"
    },
    name: {
        en: "Squirtle",
        fr: "Carapuce",
        es: "Squirtle",
        it: "Squirtle",
        de: "Schiggy",
        "pt-br": "Squirtle",
        "zh-tw": "傑尼龜",
        ja: "ゼニガメ",
        ko: "꼬부기"
    },
    illustrator: "Naoki Saito",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: [
        "Water"
    ],
    description: {
        en: "When it feels threatened, it draws its limbs inside\nits shell and sprays water from its mouth.",
        fr: "S'il se sent menacé, il rétracte ses pattes dans sa carapace pour se protéger et crache de l'eau.",
        es: "Cuando se siente en peligro, se esconde en su caparazón y escupe chorros de agua por la boca.",
        it: "Se si sente minacciato, ritira le zampe nel guscio e inizia a spruzzare acqua dalla bocca.",
        de: "Fühlt es sich bedroht, verkriecht es sich in seinen Panzer und spuckt Wasser aus seinem Maul.",
        "pt-br": "Quando este Pokémon sente-se ameaçado, esconde-se dentro do seu casco e lança água pela boca.",
        "zh-tw": "當牠遇到危險的時候，會將四肢收回甲殼裡保護自己，同時從嘴裡噴出水來。",
        ja: "When it feels threatened, it draws its limbs inside\nits shell and sprays water from its mouth.",
        ko: "When it feels threatened, it draws its limbs inside\nits shell and sprays water from its mouth."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Tail Whap",
                fr: "Queue Battoir",
                es: "Coletón",
                it: "Codabotta",
                de: "Schweifvertrimmer",
                "pt-br": "Surra de Cauda",
                "zh-tw": "擺尾拍擊",
                ja: "Tail Whap",
                ko: "Tail Whap"
            },
            damage: 40,
            cost: [
                "Water",
                "Colorless"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
