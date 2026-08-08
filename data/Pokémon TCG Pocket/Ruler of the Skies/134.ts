import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/134",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/134",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/134",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/134",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/134",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/134",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/134"
    },
    name: {
        en: "Skitty",
        fr: "Skitty",
        es: "Skitty",
        it: "Skitty",
        de: "Eneco",
        "pt-br": "Skitty",
        "zh-tw": "向尾喵",
        ko: "에나비",
        ja: "エネコ"
    },
    illustrator: "kawayoo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [300],
    stage: "Basic",
    description: {
        en: "It shows its cute side by chasing its own tail until it gets dizzy.",
        fr: "Un Pokémon très mignon qui aime parfois courir\nen cercle en chassant sa propre queue.",
        es: "Le gusta jugar persiguiéndose la cola hasta que se\nmarea, mostrando así su lado más mono.",
        it: "È davvero carino quando barcolla per i giramenti di\ntesta, dopo aver cercato di mordersi la coda.",
        de: "Es zeigt gerne seine niedliche Seite, indem es seinen\neigenen Schweif jagt, bis ihm schwindlig wird.",
        "pt-br": "Mostra seu lado engraçado ao perseguir sua própria cauda até ficar tonto"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Charm",
                fr: "Charme",
                es: "Encanto",
                it: "Fascino",
                de: "Charme",
                "pt-br": "Encantar",
                "zh-tw": "撒嬌"
            },
            effect: {
                en: "During your opponent's next turn, attacks used by the Defending Pokémon do −20 damage.",
                fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent − 20 dégâts.",
                es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen -20 puntos de daño.",
                "pt-br": "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão −20 pontos de dano.",
                "zh-tw": "在下個對手的回合,受到這個招式的寶可夢使用招式的傷害-20點。",
                "it": "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono -20 danni.",
                "de": "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon – 20 Schadenspunkte zu."
            }
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};
export default card;
