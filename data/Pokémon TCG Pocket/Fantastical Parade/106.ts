import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/106"
    },
    name: {
        en: "Scraggy",
        "fr": "Décharné",
        "es": "Flaco",
        "it": "Scarso",
        "de": "Mager",
        "pt-br": "Desgrenhado",
        "zh-tw": "瘦弱的"
    },
    illustrator: "Sekio",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "It will abruptly headbutt anyone that makes eye\ncontact with it. Its skull is extremely hard.",
        "fr": "Il donnera un coup de tête brusque à tous ceux qui font de l'œil\ncontact avec lui. Son crâne est extrêmement dur.",
        "es": "Le dará un abrupto cabezazo a cualquiera que mire\ncontacto con ello. Su cráneo es extremadamente duro.",
        "it": "Darà una testata improvvisa a chiunque attiri l'attenzione\ncontatto con esso. Il suo cranio è estremamente duro.",
        "de": "Es wird jedem, der Aufmerksamkeit erregt, einen plötzlichen Kopfstoß verpassen\nKontakt damit. Sein Schädel ist extrem hart.",
        "pt-br": "Ele vai dar uma cabeçada abrupta em qualquer um que olhar\nentre em contato com ele. Seu crânio é extremamente duro.",
        "zh-tw": "它會突然用頭撞任何引起注意的人\n與它接觸。它的頭骨極其堅硬。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Headbutt",
                "fr": "Coup de tête",
                "es": "cabezazo",
                "it": "Testata",
                "de": "Kopfstoß",
                "pt-br": "Cabeçada",
                "zh-tw": "頭撞"
            },
            damage: 20,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
