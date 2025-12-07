import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Cubone",
        "fr": "Cubone",
        "es": "cubone",
        "it": "Cubone",
        "de": "Cubone",
        "pt-br": "Cubo",
        "zh-tw": "卡拉卡拉",
    },
    illustrator: "sowsow",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    description: {
        en: "When the memory of its departed mother brings\nit to tears, its cries echo mournfully within the\nskull it wears on its head.",
        "fr": "Quand le souvenir de sa mère disparue lui rappelle\naux larmes, ses cris résonnent tristement dans le\ncrâne qu'il porte sur la tête.",
        "es": "Cuando el recuerdo de su madre fallecida trae\nhasta las lágrimas, sus gritos resuenan tristemente dentro del\ncalavera que lleva en la cabeza.",
        "it": "Quando porta il ricordo della madre defunta\nfino alle lacrime, le sue grida echeggiano tristemente all'interno\nteschio che porta sulla testa.",
        "de": "Wenn die Erinnerung an seine verstorbene Mutter weckt\nes zu Tränen, seine Schreie hallen traurig im Inneren wider\nTotenkopf, den es auf dem Kopf trägt.",
        "pt-br": "Quando a memória de sua falecida mãe traz\naté as lágrimas, seus gritos ecoam tristemente dentro do\ncaveira que usa na cabeça.",
        "zh-tw": "當對已故母親的記憶帶來\n它流淚，它的哭聲在天地裡悲哀地迴響\n它頭上戴著的頭骨。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Growl",
                "fr": "Grognement",
                "es": "Gruñido",
                "it": "Ringhiare",
                "de": "Knurren",
                "pt-br": "Rosnar",
                "zh-tw": "咆哮"
            },
            cost: ["Colorless"],
            effect: {
                en: "During your opponent's next turn, attacks used by the Defending Pokémon do −20 damage.",
                "fr": "Lors du prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent -20 dégâts.",
                "es": "Durante el próximo turno de tu rival, los ataques utilizados por el Pokémon Defensor causan −20 de daño.",
                "it": "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono -20 danni.",
                "de": "Während des nächsten Zuges deines Gegners verursachen Angriffe des verteidigenden Pokémon −20 Schadenspunkte.",
                "pt-br": "Durante o próximo turno do seu oponente, os ataques usados ​​pelo Pokémon Defensor causam -20 de dano.",
                "zh-tw": "在對手的下一個回合中，防御神奇寶貝使用的攻擊造成−20點傷害。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
