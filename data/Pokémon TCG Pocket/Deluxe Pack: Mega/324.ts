import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/324",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/324",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/324",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/324",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/324",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/324",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/324"
    },
    name: {
        en: "Alolan Grimer",
        fr: "Tadmorv d'Alola",
        es: "Grimer de Alola",
        it: "Grimer di Alola",
        de: "Alola-Sleima",
        "pt-br": "Grimer de Alola",
        "zh-tw": "阿羅拉臭泥",
        ja: "アローラベトベター",
        ko: "알로라질퍽이"
    },
    illustrator: "Sekio",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: [
        "Darkness"
    ],
    description: {
        en: "Alolan Grimer will gladly gobble up any kind\nof trash, making it a widely used and popular\nPokémon at garbage disposal facilities.",
        fr: "On apprécie son travail dans les décharges, car il se délecte de n'importe quel type d'ordures.",
        es: "Se comen con ganas cualquier tipo de basura, por lo que son muy útiles y bien recibidos en los vertederos.",
        it: "Mangia di gusto ogni sorta di immondizia e per questo il suo contributo è apprezzatissimo negli impianti di smaltimento rifiuti.",
        de: "Da es sämtliche Arten von Müll mit Freuden verschlingt, gilt es als großer Star einer jeden Abfallentsorgungsanlage.",
        "pt-br": "Grimer de Alola devora alegremente qualquer tipo de lixo, o que o torna um Pokémon muito usado e popular em centros de tratamento de lixo.",
        "zh-tw": "任何垃圾都會美味地吃下肚，因此在垃圾處理場不辭辛勞大顯身手，在那非常受歡迎。",
        ja: "Alolan Grimer will gladly gobble up any kind\nof trash, making it a widely used and popular\nPokémon at garbage disposal facilities.",
        ko: "Alolan Grimer will gladly gobble up any kind\nof trash, making it a widely used and popular\nPokémon at garbage disposal facilities."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Pound",
                fr: "Écras'Face",
                es: "Destructor",
                it: "Botta",
                de: "Klaps",
                "pt-br": "Pancada",
                "zh-tw": "拍擊",
                ja: "Pound",
                ko: "Pound"
            },
            damage: 20,
            cost: [
                "Colorless",
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
    retreat: 2
};

export default card;
