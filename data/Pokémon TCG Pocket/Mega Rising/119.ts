import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Carbink",
        "fr": "Carabine",
        "es": "carabina",
        "it": "Carbink",
        "de": "Carbink",
        "pt-br": "Carabina",
        "zh-tw": "卡賓克"
    },
    illustrator: "Sanosuke Sakuma",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Psychic"],
    description: {
        en: "It's said that somewhere in the world, there's\na mineral vein housing a large pack of slumbering\nCarbink. It's also said that this pack has a queen.",
        "fr": "On dit que quelque part dans le monde, il y a\nune veine minérale abritant un gros paquet de\nCarabine. On dit aussi que cette meute a une reine.",
        "es": "Se dice que en algún lugar del mundo hay\nuna veta mineral que alberga un gran paquete de durmientes\nCarbón. También se dice que esta manada tiene una reina.",
        "it": "Si dice che da qualche parte nel mondo esista\nuna vena minerale che ospita un grande branco di dormienti\nCarbink. Si dice anche che questo branco abbia una regina.",
        "de": "Es heißt, dass es irgendwo auf der Welt so etwas gibt\neine mineralische Ader, in der ein großes Rudel schlummert\nCarbink. Es heißt auch, dass dieses Rudel eine Königin hat.",
        "pt-br": "Diz-se que em algum lugar do mundo existe\num veio mineral que abriga um grande pacote de adormecidos\nCarabina. Também é dito que este bando tem uma rainha.",
        "zh-tw": "據說，在世界的某個地方，有\n礦脈裡藏著一大群沉睡的人\n卡賓克。據說這個包裡有一個女王。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Guard Press",
                "fr": "Presse de garde",
                "es": "Prensa de guardia",
                "it": "Stampa della Guardia",
                "de": "Gardepresse",
                "pt-br": "Imprensa da Guarda",
                "zh-tw": "守衛壓力機"
            },
            damage: 30,
            cost: ["Psychic"],
            effect: {
                en: "During your opponent's next turn, this Pokémon takes −30 damage from attacks.",
                "fr": "Lors du prochain tour de votre adversaire, ce Pokémon subit -30 dégâts des attaques.",
                "es": "Durante el próximo turno de tu rival, este Pokémon recibe -30 de daño por ataques.",
                "it": "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -30 danni dagli attacchi.",
                "de": "Während des nächsten Zuges deines Gegners erleidet dieses Pokémon −30 Schadenspunkte durch Angriffe.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon sofrerá -30 de dano de ataques.",
                "zh-tw": "在對手的下一個回合中，這只神奇寶貝受到的攻擊傷害為-30。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
