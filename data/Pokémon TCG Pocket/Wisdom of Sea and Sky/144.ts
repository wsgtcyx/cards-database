import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Dunsparce",
        "fr": "Dunsparce",
        "es": "Dunsparce",
        "it": "Dunsparce",
        "de": "Dunsparce",
        "pt-br": "Dunsparce",
        "zh-tw": "土龍弟弟",
    },
    illustrator: "Kazuma Koda",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Colorless"],
    description: {
        en: "It creates mazes in dark locations. When spotted,\nit flees into the ground by digging with its tail.",
        "fr": "Cela crée des labyrinthes dans des endroits sombres. Une fois repéré,\nil s'enfuit dans le sol en creusant avec sa queue.",
        "es": "Crea laberintos en lugares oscuros. Cuando se ve,\nhuye al suelo cavando con la cola.",
        "it": "Crea labirinti in luoghi bui. Quando avvistato,\nfugge nel terreno scavando con la coda.",
        "de": "Es schafft Labyrinthe an dunklen Orten. Wenn entdeckt,\nEs flüchtet in den Boden, indem es mit seinem Schwanz gräbt.",
        "pt-br": "Cria labirintos em locais escuros. Quando avistado,\nele foge para o chão cavando com a cauda.",
        "zh-tw": "它在黑暗的地方創造迷宮。當被發現時，\n它用尾巴挖洞逃入地下。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sudden Flash",
                "fr": "Éclair soudain",
                "es": "Destello repentino",
                "it": "Lampo improvviso",
                "de": "Plötzlicher Blitz",
                "pt-br": "Flash repentino",
                "zh-tw": "突然閃光"
            },
            damage: 20,
            cost: ["Colorless"],
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
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh", "lugia"]
};
export default card;
