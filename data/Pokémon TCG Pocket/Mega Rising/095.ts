import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Yamper",
        "fr": "Yamper",
        "es": "Yamper",
        "it": "Yamper",
        "de": "Yamper",
        "pt-br": "Yamper",
        "zh-tw": "雅珀"
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    description: {
        en: "This gluttonous Pokémon only assists people with\ntheir work because it wants treats. As it runs,\nit crackles with electricity.",
        "fr": "Ce Pokémon glouton n'aide les gens qu'avec\nleur travail parce qu'il veut des friandises. Pendant qu'il court,\nça crépite d'électricité.",
        "es": "Este Pokémon glotón sólo ayuda a las personas con\nsu trabajo porque quiere golosinas. Mientras corre,\ncrepita con electricidad.",
        "it": "Questo Pokémon goloso aiuta solo le persone con\nil loro lavoro perché vuole dei dolcetti. Mentre corre,\ncrepita di elettricità.",
        "de": "Dieses gefräßige Pokémon hilft Menschen nur bei\nihre Arbeit, weil sie Leckereien will. Während es läuft,\nes knistert vor Elektrizität.",
        "pt-br": "Este Pokémon guloso só ajuda pessoas com\nseu trabalho porque quer guloseimas. À medida que corre,\nele estala com eletricidade.",
        "zh-tw": "這只貪吃的神奇寶貝只幫助有能力的人\n他們的工作是因為它需要款待。當它運行時，\n它通電時發出劈啪聲。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Roar",
                "fr": "Rugir",
                "es": "Rugido",
                "it": "Ruggito",
                "de": "Brüllen",
                "pt-br": "Rugido",
                "zh-tw": "吼"
            },
            cost: ["Colorless"],
            effect: {
                en: "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
                "fr": "Remplacez le Pokémon Actif de votre adversaire par le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
                "es": "Cambia el Pokémon Activo de tu rival a la Banca. (Tu oponente elige el nuevo Pokémon Activo).",
                "it": "Scambia il Pokémon attivo del tuo avversario nella panchina. (Il tuo avversario sceglie il nuovo Pokémon attivo.)",
                "de": "Tauschen Sie das aktive Pokémon Ihres Gegners auf die Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)",
                "pt-br": "Troque o Pokémon Ativo do seu oponente para o Banco. (Seu oponente escolhe o novo Pokémon Ativo.)",
                "zh-tw": "將對手的活躍神奇寶貝移至替補席。 （你的對手選擇新的活躍神奇寶貝。）"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
