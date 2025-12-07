import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Wiglett",
        "fr": "Wiglett",
        "es": "wilett",
        "it": "Wiglett",
        "de": "Wiglett",
        "pt-br": "Wiglett",
        "zh-tw": "海地鼠",
    },
    illustrator: "miki kudo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "This Pokémon can pick up the scent of a Veluza\njust over 65 feet away and will hide itself in\nthe sand.",
        "fr": "Ce Pokémon peut capter l'odeur d'un Veluza\nà un peu plus de 65 pieds et se cachera dans\nle sable.",
        "es": "Este Pokémon puede captar el olor de una Veluza\na poco más de 65 pies de distancia y se esconderá en\nla arena.",
        "it": "Questo Pokémon può sentire l'odore di un Veluza\npoco più di 65 piedi di distanza e si nasconderà dentro\nla sabbia.",
        "de": "Dieses Pokémon kann den Geruch eines Veluza wahrnehmen\netwas mehr als 65 Fuß entfernt und wird sich darin verstecken\nder Sand.",
        "pt-br": "Este Pokémon pode sentir o cheiro de uma Veluza\na pouco mais de 20 metros de distância e se esconderá em\na areia.",
        "zh-tw": "這只神奇寶貝可以聞到貝魯扎的氣味\n距離僅超過 65 英尺，將隱藏在\n沙子。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Spring Out",
                "fr": "Printemps",
                "es": "Primavera",
                "it": "Primavera fuori",
                "de": "Frühling raus",
                "pt-br": "Primavera",
                "zh-tw": "春天來了"
            },
            cost: ["Water"],
            effect: {
                en: "1 of your opponent's Pokémon is chosen at random. Do 30 damage to it.",
                "fr": "1 des Pokémon de votre adversaire est choisi au hasard. Faites-lui 30 dégâts.",
                "es": "1 de los Pokémon de tu oponente se elige al azar. Hazle 30 daños.",
                "it": "Viene scelto a caso 1 dei Pokémon del tuo avversario. Infliggigli 30 danni.",
                "de": "1 Pokémon deines Gegners wird zufällig ausgewählt. Füge ihm 30 Schaden zu.",
                "pt-br": "1 dos Pokémon do seu oponente é escolhido aleatoriamente. Cause 30 de dano a ele.",
                "zh-tw": "隨機選擇 1 只對手的神奇寶貝。對其造成 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
