import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Darkrai",
        "fr": "Darkrai",
        "es": "Darkrai",
        "it": "Darkrai",
        "de": "Darkrai",
        "pt-br": "Darkrai",
        "zh-tw": "達克萊伊"
    },
    illustrator: "Uta",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Darkness"],
    description: {
        en: "It can lull people to sleep and make them dream.\nIt is active during nights of the new moon.",
        "fr": "Cela peut endormir les gens et les faire rêver.\nIl est actif les nuits de nouvelle lune.",
        "es": "Puede adormecer a la gente y hacerles soñar.\nEstá activo durante las noches de luna nueva.",
        "it": "Può far addormentare le persone e farle sognare.\nÈ attivo durante le notti di luna nuova.",
        "de": "Es kann Menschen in den Schlaf wiegen und zum Träumen bringen.\nEs ist in den Nächten des Neumondes aktiv.",
        "pt-br": "Pode acalmar as pessoas para dormir e fazê-las sonhar.\nEstá ativo durante as noites de lua nova.",
        "zh-tw": "它可以使人入睡並做夢。\n它在新月的夜晚很活躍。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Shadow Cage",
                "fr": "Cage de l'Ombre",
                "es": "Jaula de sombras",
                "it": "Gabbia dell'Ombra",
                "de": "Schattenkäfig",
                "pt-br": "Jaula das Sombras",
                "zh-tw": "暗影牢籠"
            },
            damage: 70,
            cost: ["Darkness", "Darkness", "Colorless"],
            effect: {
                en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
                "fr": "Lors du prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
                "es": "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
                "it": "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
                "de": "Während des nächsten Zuges deines Gegners kann sich das verteidigende Pokémon nicht zurückziehen.",
                "pt-br": "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
                "zh-tw": "在對手的下一個回合中，守方寶可夢不能撤退。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
