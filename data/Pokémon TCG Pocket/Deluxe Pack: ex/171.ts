import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Giratina",
        "fr": "Giratine",
        "es": "giratina",
        "it": "Giratina",
        "de": "Giratina",
        "pt-br": "Giratina",
        "zh-tw": "騎拉帝納"
    },
    illustrator: "AKIRA EGAWA",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Psychic"],
    description: {
        en: "This Pokémon is said to live in a world on the\nreverse side of ours, where common knowledge is\ndistorted and strange.",
        "fr": "On dit que ce Pokémon vit dans un monde sur le\nl'envers du nôtre, là où la connaissance commune est\ndéformé et étrange.",
        "es": "Se dice que este Pokémon vive en un mundo en el\nel reverso del nuestro, donde el conocimiento común es\ndistorsionado y extraño.",
        "it": "Si dice che questo Pokémon viva in un mondo sul\nrovescio del nostro, dove si trova la conoscenza comune\ndistorto e strano.",
        "de": "Dieses Pokémon soll in einer Welt leben\nKehrseite von uns, wo Allgemeinwissen ist\nverzerrt und seltsam.",
        "pt-br": "Diz-se que este Pokémon vive em um mundo no\nreverso do nosso, onde o conhecimento comum é\ndistorcido e estranho.",
        "zh-tw": "據說這只神奇寶貝生活在\n我們的另一面，常識是\n扭曲而奇怪。"
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Levitate",
                "fr": "Léviter",
                "es": "Erigir por levitación",
                "it": "Levitare",
                "de": "Schweben",
                "pt-br": "Levitar",
                "zh-tw": "懸浮"
            },
            effect: {
                en: "If this Pokémon has any Energy attached, it has no Retreat Cost.",
                "fr": "Si ce Pokémon a de l'Énergie attachée, il n'a pas de Coût de Retraite.",
                "es": "Si este Pokémon tiene alguna Energía unida, no tiene Coste de Retirada.",
                "it": "Se questo Pokémon ha delle Energie assegnate, non ha costo di ritirata.",
                "de": "Wenn an dieses Pokémon Energie angelegt ist, fallen keine Rückzugskosten an.",
                "pt-br": "Se este Pokémon tiver alguma Energia ligada, ela não terá Custo de Recuo.",
                "zh-tw": "如果該神奇寶貝附加了任何能量，則它沒有撤退成本。"
            }
        }],
    attacks: [{
            name: {
                en: "Spooky Shot",
                "fr": "Tir effrayant",
                "es": "Tiro espeluznante",
                "it": "Colpo spettrale",
                "de": "Gruseliger Schuss",
                "pt-br": "Tiro assustador",
                "zh-tw": "幽靈射擊"
            },
            damage: 70,
            cost: ["Psychic", "Psychic", "Colorless"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 3
};
export default card;
