import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Cosmoem",
        "fr": "Cosmoème",
        "es": "Cosmoem",
        "it": "Cosmoem",
        "de": "Cosmoem",
        "pt-br": "Cosmoema",
        "zh-tw": "科斯莫姆"
    },
    illustrator: "Aya Kusube",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    evolveFrom: {
        en: "Cosmog",
        "fr": "Cosmog",
        "es": "cosmog",
        "it": "Cosmog",
        "de": "Kosmog",
        "pt-br": "Cosmog",
        "zh-tw": "科斯莫格"
    },
    description: {
        en: "The king who ruled Alola in times of antiquity called it\nthe \"cocoon of the stars\" and built an altar to worship it.",
        "fr": "Le roi qui dirigeait Alola dans l'Antiquité l'appelait\nle « cocon des étoiles » et construisit un autel pour l'adorer.",
        "es": "El rey que gobernó Alola en tiempos de la antigüedad la llamó\nel \"capullo de las estrellas\" y construyó un altar para adorarlo.",
        "it": "Lo chiamò il re che governava Alola nell'antichità\nil \"bozzolo delle stelle\" e costruì un altare per venerarlo.",
        "de": "Der König, der in der Antike über Alola herrschte, nannte es\nden „Kokon der Sterne“ und baute einen Altar, um ihn anzubeten.",
        "pt-br": "O rei que governou Alola nos tempos da antiguidade chamou-lhe\no \"casulo das estrelas\" e construiu um altar para adorá-lo.",
        "zh-tw": "古代統治阿羅拉的國王稱其為\n並築壇祭祀“星之繭”。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Stiffen",
                "fr": "Raidir",
                "es": "Endurecer",
                "it": "Irrigidirsi",
                "de": "Versteifen",
                "pt-br": "Endurecer",
                "zh-tw": "變硬"
            },
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "During your opponent's next turn, this Pokémon takes −50 damage from attacks.",
                "fr": "Lors du prochain tour de votre adversaire, ce Pokémon subit -50 dégâts des attaques.",
                "es": "Durante el próximo turno de tu rival, este Pokémon recibe -50 de daño por ataques.",
                "it": "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -50 danni dagli attacchi.",
                "de": "Während des nächsten Zuges deines Gegners erleidet dieses Pokémon −50 Schadenspunkte durch Angriffe.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon sofrerá −50 de dano de ataques.",
                "zh-tw": "在對手的下一個回合中，這只神奇寶貝受到的攻擊傷害為-50。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 3
};
export default card;
