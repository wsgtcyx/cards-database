import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Articuno",
        "fr": "Articuno",
        "es": "Articuno",
        "it": "Articuno",
        "de": "Artikuno",
        "pt-br": "Articuno",
        "zh-tw": "急凍鳥"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    description: {
        en: "It's said that this Pokémon's beautiful blue wings\nare made of ice. Articuno flies over snowy\nmountains, its long tail fluttering along behind it.",
        "fr": "On dit que les belles ailes bleues de ce Pokémon\nsont faits de glace. Articuno survole la neige\nmontagnes, sa longue queue flottant derrière lui.",
        "es": "Se dice que las hermosas alas azules de este Pokémon\nestán hechos de hielo. Articuno sobrevuela nevado\nmontañas, su larga cola revoloteando detrás de él.",
        "it": "Si dice che le bellissime ali blu di questo Pokémon\nsono fatti di ghiaccio. Articuno vola sopra la neve\nmontagne, con la lunga coda che sventola dietro di lui.",
        "de": "Es wird gesagt, dass dieses Pokémon wunderschöne blaue Flügel hat\nbestehen aus Eis. Articuno fliegt über Schnee\nBerge, sein langer Schwanz flattert hinter ihm her.",
        "pt-br": "Dizem que as lindas asas azuis deste Pokémon\nsão feitos de gelo. Articuno voa sobre a neve\nmontanhas, sua longa cauda flutuando atrás dele.",
        "zh-tw": "據說這只神奇寶貝有著美麗的藍色翅膀\n是由冰製成的。急凍鳥飛過雪地\n山，長長的尾巴在身後飄揚。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Ice Beam",
                "fr": "Faisceau de glace",
                "es": "Rayo de hielo",
                "it": "Raggio di ghiaccio",
                "de": "Eisstrahl",
                "pt-br": "Raio de Gelo",
                "zh-tw": "冰光束"
            },
            damage: 60,
            cost: ["Water", "Water", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Paralysé.",
                "es": "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                "it": "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è paralizzato.",
                "de": "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt gelähmt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
                "zh-tw": "拋一枚硬幣。如果正面，則對手的活躍神奇寶貝現在處於麻痺狀態。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
