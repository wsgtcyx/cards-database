import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Charizard ex",
        "fr": "Dracaufeu ex",
        "es": "ex charizard",
        "it": "Charizard ex",
        "de": "Glurak ex",
        "pt-br": "Ex-Charizard",
        "zh-tw": "噴火龍 ex",
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 180,
    types: ["Fire"],
    evolveFrom: {
        en: "Charmeleon",
        "fr": "Charméléon",
        "es": "Charmeleon",
        "it": "Charmeleon",
        "de": "Charmeleon",
        "pt-br": "Charmeleon",
        "zh-tw": "變色龍"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Stoke",
                "fr": "Alimenter",
                "es": "Cebar",
                "it": "Stoke",
                "de": "Schüren",
                "pt-br": "Stoke",
                "zh-tw": "斯托克"
            },
            cost: ["Fire"],
            effect: {
                en: "Take 3 {R} Energy from your Energy Zone and attach it to this Pokémon.",
                "fr": "Prenez 3 {R} Énergie de votre Zone d'Énergie et attachez-la à ce Pokémon.",
                "es": "Toma 3 Energías {R} de tu Zona de Energía y únelas a este Pokémon.",
                "it": "Prendi 3 Energie {R} dalla tua Zona Energetica e assegnale a questo Pokémon.",
                "de": "Nimm 3 {R}-Energie aus deiner Energiezone und lege sie an dieses Pokémon an.",
                "pt-br": "Pegue 3 {R} Energias da sua Zona de Energia e ligue-as a este Pokémon.",
                "zh-tw": "從你的能量區取出 3 個 {R} 能量並將其附加到這只神奇寶貝身上。"
            }
        }, {
            name: {
                en: "Steam Artillery",
                "fr": "Artillerie à vapeur",
                "es": "Artillería a vapor",
                "it": "Artiglieria a vapore",
                "de": "Dampfartillerie",
                "pt-br": "Artilharia a Vapor",
                "zh-tw": "蒸汽火砲"
            },
            damage: 150,
            cost: ["Fire", "Fire", "Fire", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 3
};
export default card;
