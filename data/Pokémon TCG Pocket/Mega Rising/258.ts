import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Mega Ampharos ex",
        "fr": "Méga Ampharos ex",
        "es": "Mega Ampharos ex",
        "it": "Mega Ampharos es",
        "de": "Mega Ampharos ex",
        "pt-br": "Mega Ampharos ex",
        "zh-tw": "巨型安法羅斯EX"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 210,
    types: ["Lightning"],
    evolveFrom: {
        en: "Flaaffy",
        "fr": "Flaaffy",
        "es": "flaco",
        "it": "Flaaffy",
        "de": "Flaaffy",
        "pt-br": "Flaaffy",
        "zh-tw": "弗拉菲"
    },
    description: {
        en: "The tail's tip shines brightly and can be seen from\nfar away. It acts as a beacon for lost people.",
        "fr": "Le bout de la queue brille de mille feux et peut être vu depuis\ntrès loin. Il agit comme un phare pour les personnes perdues.",
        "es": "La punta de la cola brilla intensamente y puede verse desde\nmuy lejos. Actúa como un faro para las personas perdidas.",
        "it": "La punta della coda brilla intensamente e può essere vista\nlontano. Funziona come un faro per le persone scomparse.",
        "de": "Die Schwanzspitze leuchtet hell und ist gut sichtbar\nweit weg. Es fungiert als Leuchtturm für verlorene Menschen.",
        "pt-br": "A ponta da cauda brilha intensamente e pode ser vista de\nlonge. Ele atua como um farol para pessoas perdidas.",
        "zh-tw": "尾巴的尖端閃閃發光，可以從\n很遠。它充當迷失者的燈塔。"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Lightning Lancer",
                "fr": "Lancier éclair",
                "es": "Lancero relámpago",
                "it": "Lanciere Fulminante",
                "de": "Lightning Lancer",
                "pt-br": "Lanceiro Relâmpago",
                "zh-tw": "閃電槍騎兵"
            },
            damage: 100,
            cost: ["Lightning", "Lightning", "Colorless"],
            effect: {
                en: "1 of your opponent's Benched Pokémon is chosen at random 3 times. For each time a Pokémon was chosen, also do 20 damage to it.",
                "fr": "1 des Pokémon de Banc de votre adversaire est choisi au hasard 3 fois. À chaque fois qu'un Pokémon est choisi, infligez-lui également 20 dégâts.",
                "es": "1 de los Pokémon en Banca de tu rival se elige al azar 3 veces. Por cada vez que se elija un Pokémon, también hazle 20 daños.",
                "it": "1 dei Pokémon nella panchina del tuo avversario viene scelto casualmente 3 volte. Per ogni volta che viene scelto un Pokémon, infliggigli anche 20 danni.",
                "de": "1 Pokémon auf der Bank deines Gegners wird dreimal zufällig ausgewählt. Füge ihm jedes Mal, wenn ein Pokémon ausgewählt wurde, außerdem 20 Schadenspunkte zu.",
                "pt-br": "1 dos Pokémon no Banco do seu oponente é escolhido aleatoriamente 3 vezes. Para cada vez que um Pokémon for escolhido, cause também 20 de dano a ele.",
                "zh-tw": "隨機選擇對手 1 只後備神奇寶貝 3 次。每次選擇一隻神奇寶貝，也會對其造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
