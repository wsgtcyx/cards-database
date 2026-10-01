import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/089",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/089",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/089",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/089",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/089",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/089",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/089"
    },
    name: {
        en: "Flaaffy",
        fr: "Lainergie",
        es: "Flaaffy",
        it: "Flaaffy",
        de: "Waaty",
        "pt-br": "Flaaffy",
        "zh-tw": "茸茸羊",
        ja: "モココ",
        ko: "보송송"
    },
    illustrator: "Shibuzoh.",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: [
        "Lightning"
    ],
    evolveFrom: {
        en: "Mareep",
        fr: "Wattouat",
        es: "Mareep",
        it: "Mareep",
        de: "Voltilamm",
        "pt-br": "Mareep",
        "zh-tw": "咩利羊",
        ja: "Mareep",
        ko: "Mareep"
    },
    description: {
        en: "Because of its rubbery, electricity-resistant skin,\nit can store lots of electricity in its fur.",
        fr: "Bien que sa peau soit isolante et lisse comme du caoutchouc, sa laine peut facilement emmagasiner de l'électricité.",
        es: "Como su piel es gomosa y aislante, puede almacenar mucha electricidad en su pelaje sin problema.",
        it: "La sua pelle è gommosa e isolante, ma il suo vello può immagazzinare moltissima elettricità.",
        de: "Die gummiartige Haut von Waaty leitet keinen Strom, aber seine Wolle kann viel Elektrizität speichern.",
        "pt-br": "Consegue armazenar grandes quantidades de energia em seu pelo porque sua pele elástica é resistente à eletricidade.",
        "zh-tw": "如同橡膠般光滑的皮膚並不導電，但體毛卻很容易蓄電。",
        ja: "Because of its rubbery, electricity-resistant skin,\nit can store lots of electricity in its fur.",
        ko: "Because of its rubbery, electricity-resistant skin,\nit can store lots of electricity in its fur."
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Electric Punch",
                fr: "Poing Électrique",
                es: "Puño Eléctrico",
                it: "Pugno Elettrico",
                de: "Elektroschlag",
                "pt-br": "Murro Elétrico",
                "zh-tw": "麻麻拳",
                ja: "Electric Punch",
                ko: "Electric Punch"
            },
            damage: 40,
            cost: [
                "Lightning",
                "Colorless"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
