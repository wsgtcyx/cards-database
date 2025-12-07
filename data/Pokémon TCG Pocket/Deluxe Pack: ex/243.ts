import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Sneasel",
        "fr": "Sneasel",
        "es": "Sneasel",
        "it": "Sneasel",
        "de": "Nieseln",
        "pt-br": "Sneasel",
        "zh-tw": "斯內塞爾"
    },
    illustrator: "Hasuno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "This cunning Pokémon hides under the cover of\ndarkness, waiting to attack its prey.",
        "fr": "Ce Pokémon rusé se cache sous le couvert de\nl'obscurité, attendant d'attaquer sa proie.",
        "es": "Este astuto Pokémon se esconde al amparo de\noscuridad, esperando atacar a su presa.",
        "it": "Questo Pokémon astuto si nasconde sotto la copertura di\noscurità, in attesa di attaccare la sua preda.",
        "de": "Dieses schlaue Pokémon versteckt sich unter dem Deckmantel von\nDunkelheit, die darauf wartet, ihre Beute anzugreifen.",
        "pt-br": "Este Pokémon astuto se esconde sob a capa de\nescuridão, esperando para atacar sua presa.",
        "zh-tw": "這個狡猾的神奇寶貝隱藏在\n黑暗，等待著攻擊它的獵物。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Double Scratch",
                "fr": "Double rayure",
                "es": "Doble rasguño",
                "it": "Doppio graffio",
                "de": "Doppelter Kratzer",
                "pt-br": "Raspadinha Dupla",
                "zh-tw": "雙划痕"
            },
            damage: 20,
            cost: ["Darkness"],
            effect: {
                en: "Flip 2 coins. This attack does 20 damage for each heads.",
                "fr": "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque tête.",
                "es": "Lanza 2 monedas. Este ataque hace 20 daños por cada cabeza.",
                "it": "Lancia 2 monete. Questo attacco infligge 20 danni per ogni testa.",
                "de": "Wirf 2 Münzen. Dieser Angriff verursacht 20 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 20 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
