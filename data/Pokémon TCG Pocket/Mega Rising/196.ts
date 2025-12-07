import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Swablu",
        "fr": "Swablu",
        "es": "swablu",
        "it": "Swablu",
        "de": "Schwablu",
        "pt-br": "Swablu",
        "zh-tw": "青綿鳥",
    },
    illustrator: "Kanako Eo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Colorless"],
    description: {
        en: "It can't relax if it or its surroundings are not clean.\nIt wipes off dirt with its wings.",
        "fr": "Il ne peut pas se détendre si lui-même ou ses environs ne sont pas propres.\nIl essuie la saleté avec ses ailes.",
        "es": "No puede relajarse si él o sus alrededores no están limpios.\nLimpia la suciedad con sus alas.",
        "it": "Non può rilassarsi se lui o i suoi dintorni non sono puliti.\nElimina lo sporco con le ali.",
        "de": "Es kann sich nicht entspannen, wenn es oder seine Umgebung nicht sauber sind.\nMit seinen Flügeln wischt es Schmutz weg.",
        "pt-br": "Ele não pode relaxar se ele ou seus arredores não estiverem limpos.\nEle limpa a sujeira com suas asas.",
        "zh-tw": "如果它或它的周圍環境不干淨，它就不能放鬆。\n它用翅膀擦去污垢。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sing",
                "fr": "Chanter",
                "es": "Cantar",
                "it": "Cantare",
                "de": "Singen",
                "pt-br": "Cantar",
                "zh-tw": "唱歌"
            },
            cost: ["Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Endormi.",
                "es": "El Pokémon Activo de tu rival ahora está Dormido.",
                "it": "Il Pokémon attivo del tuo avversario è addormentato.",
                "de": "Das aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "你對手的活躍神奇寶貝現在處於睡眠狀態。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
