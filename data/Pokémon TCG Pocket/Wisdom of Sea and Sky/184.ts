import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Smeargle",
        "fr": "Diffuser",
        "es": "untar",
        "it": "Smeargle",
        "de": "Schmiere",
        "pt-br": "Espalhar",
        "zh-tw": "斯米爾格爾"
    },
    illustrator: "MINAMINAMI Take",
    rarity: "One Star",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    description: {
        en: "The fluid of Smeargle's tail secretions changes\nin the intensity of its hue as the Pokémon's\nemotions change.",
        "fr": "Le liquide des sécrétions de la queue de Smeargle change\ndans l'intensité de sa teinte comme celle du Pokémon\nles émotions changent.",
        "es": "El líquido de las secreciones de la cola de Smeargle cambia.\nen la intensidad de su tono como el del Pokémon\nlas emociones cambian.",
        "it": "Il fluido delle secrezioni della coda di Smeargle cambia\nnell'intensità della sua tonalità come quella del Pokémon\nle emozioni cambiano.",
        "de": "Die Flüssigkeit der Schwanzsekrete von Smeargle verändert sich\nin der Intensität seines Farbtons wie der des Pokémon\nEmotionen verändern sich.",
        "pt-br": "O fluido das secreções da cauda de Smeargle muda\nna intensidade de sua tonalidade como a do Pokémon\nas emoções mudam.",
        "zh-tw": "Smeargle尾部分泌物的液體發生變化\n其色調的強度與神奇寶貝的顏色一樣\n情緒發生變化。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Splatter Coating",
                "fr": "Revêtement anti-éclaboussures",
                "es": "Recubrimiento contra salpicaduras",
                "it": "Rivestimento antispruzzo",
                "de": "Spritzbeschichtung",
                "pt-br": "Revestimento de respingos",
                "zh-tw": "飛濺塗層"
            },
            damage: 50,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Change the type of a random Energy attached to your opponent's Active Pokémon to 1 of the following at random: {G}, {R}, {W}, {L}, {P}, {F}, {D}, or {M}.",
                "fr": "Remplacez aléatoirement le type d'Énergie attachée au Pokémon Actif de votre adversaire par l'un des types suivants : {G}, {R}, {W}, {L}, {P}, {F}, {D} ou {M}.",
                "es": "Cambia el tipo de Energía aleatoria unida al Pokémon Activo de tu rival a 1 de los siguientes al azar: {G}, {R}, {W}, {L}, {P}, {F}, {D} o {M}.",
                "it": "Cambia il tipo di un'Energia casuale assegnata al Pokémon attivo del tuo avversario con una delle seguenti Energia casuale: {G}, {R}, {W}, {L}, {P}, {F}, {D} o {M}.",
                "de": "Ändere den Typ einer zufälligen Energie, die an das Aktive Pokémon deines Gegners angelegt ist, zufällig zu einem der folgenden: {G}, {R}, {W}, {L}, {P}, {F}, {D} oder {M}.",
                "pt-br": "Mude o tipo de Energia aleatória ligada ao Pokémon Ativo do seu oponente para 1 dos seguintes aleatoriamente: {G}, {R}, {W}, {L}, {P}, {F}, {D} ou {M}.",
                "zh-tw": "將對手的活躍神奇寶貝所附帶的隨機能量類型隨機更改為以下其中一種：{G}、{R}、{W}、{L}、{P}、{F}、{D}或{M}。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
