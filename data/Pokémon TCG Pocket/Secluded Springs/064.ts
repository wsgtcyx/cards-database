import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Swablu",
        "fr": "Swablu",
        "es": "swablu",
        "it": "Swablu",
        "de": "Schwablu",
        "pt-br": "Swablu",
        "zh-tw": "斯瓦布盧"
    },
    illustrator: "0313",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Colorless"],
    description: {
        en: "It constantly grooms its cotton-like wings. It takes\na shower to clean itself if it becomes dirty.",
        "fr": "Il nettoie constamment ses ailes cotonneuses. Il faut\nune douche pour se nettoyer si elle devient sale.",
        "es": "Se limpia constantemente sus alas parecidas al algodón. se necesita\nuna ducha para limpiarse si se ensucia.",
        "it": "Si pulisce costantemente le sue ali simili al cotone. Ci vuole\nuna doccia per pulirsi se si sporca.",
        "de": "Es pflegt ständig seine watteähnlichen Flügel. Es dauert\neine Dusche, um sich selbst zu reinigen, wenn sie schmutzig wird.",
        "pt-br": "Ele limpa constantemente suas asas parecidas com algodão. É preciso\num chuveiro para se limpar caso fique sujo.",
        "zh-tw": "它不斷地梳理棉花般的翅膀。這需要\n如果弄髒了，可以自行清潔淋浴。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Peck",
                "fr": "Picorer",
                "es": "Picotear",
                "it": "Pecca",
                "de": "Picken",
                "pt-br": "Peck",
                "zh-tw": "啄"
            },
            damage: 20,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
