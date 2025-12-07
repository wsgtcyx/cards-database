import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    name: {
        en: "Alcremie",
        es: "Alcremie",
        "fr": "Alcrémie",
        "it": "Alcremie",
        "de": "Alcremie",
        "pt-br": "Alcremie",
        "zh-tw": "阿爾克雷米"
    },
    illustrator: "Tika Matsuno",
    rarity: "One Star",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    evolveFrom: {
        en: "Milcery",
        es: "Milcery",
        "fr": "Milcery",
        "it": "Milcery",
        "de": "Milchwaren",
        "pt-br": "Milcery",
        "zh-tw": "米爾塞里"
    },
    description: {
        en: "When it trusts a Trainer, it will treat them\nto berries it's decorated with cream.",
        es: "Obsequia bayas decoradas con nata a\naquellos Entrenadores en los que confía.",
        "fr": "Quand il fait confiance à un Dresseur, il le traite\naux baies, il est décoré de crème.",
        "it": "Quando si fida di un Allenatore, lo tratterà\nai frutti di bosco si decora con panna.",
        "de": "Wenn es einem Trainer vertraut, wird es ihn behandeln\nZu den Beeren wird es mit Sahne dekoriert.",
        "pt-br": "Quando confia em um Treinador, ele irá tratá-lo\npara frutas vermelhas é decorado com creme.",
        "zh-tw": "當它信任訓練師時，它會對待他們\n漿果則用奶油裝飾。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Sweets Overload",
                es: "Dulzor Extremo",
                "fr": "Surcharge de bonbons",
                "it": "Sovraccarico di dolci",
                "de": "Süßigkeiten-Überladung",
                "pt-br": "Sobrecarga de doces",
                "zh-tw": "糖果超載"
            },
            damage: 40,
            cost: ["Colorless"],
            effect: {
                en: "This attack does 40 damage for each time your Pokémon used Sweets Relay during this game.",
                es: "Este ataque hace 40 puntos de daño por cada vez que tus Pokémon hayan usado Relevo Dulce durante esta partida.",
                "fr": "Cette attaque inflige 40 dégâts à chaque fois que votre Pokémon a utilisé Sweets Relay pendant cette partie.",
                "it": "Questo attacco infligge 40 danni per ogni volta che i tuoi Pokémon hanno utilizzato Sweets Relay durante questo gioco.",
                "de": "Dieser Angriff fügt 40 Schadenspunkte für jedes Mal zu, wenn Ihr Pokémon in diesem Spiel „Sweet Relay“ verwendet hat.",
                "pt-br": "Este ataque causa 40 de dano cada vez que seu Pokémon usou Sweets Relay durante o jogo.",
                "zh-tw": "在此遊戲中，您的神奇寶貝每次使用糖果接力時，此攻擊都會造成 40 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["vol10"]
};
export default card;
