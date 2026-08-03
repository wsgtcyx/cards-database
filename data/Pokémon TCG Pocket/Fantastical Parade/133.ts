import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/133",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/133",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/133",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/133",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/133",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/133"
    },
    name: {
        en: "Swellow",
        "fr": "Hélédelle",
        "es": "Swellow",
        "it": "Swellow",
        "de": "Schwalboss",
        "pt-br": "Swellow",
        "zh-tw": "大王燕"
    },
    illustrator: "Mizue",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    evolveFrom: {
        en: "Taillow",
        "fr": "Queue",
        "es": "cola",
        "it": "Taillow",
        "de": "Taillow",
        "pt-br": "Rabo",
        "zh-tw": "尾洛"
    },
    description: {
        en: "It dives at a steep angle as soon as it spots its\nprey. It catches its prey with sharp claws.",
        "fr": "Il plonge à un angle prononcé dès qu'il repère son\nproie. Il attrape ses proies avec ses griffes acérées.",
        "es": "Se lanza en picado en un ángulo pronunciado tan pronto como ve su\npresa. Atrapa a su presa con garras afiladas.",
        "it": "Si tuffa con un angolo ripido non appena lo vede\npreda. Cattura la preda con artigli affilati.",
        "de": "Es taucht in einem steilen Winkel ab, sobald es es entdeckt\nBeute. Es fängt seine Beute mit scharfen Krallen.",
        "pt-br": "Ele mergulha em um ângulo íngreme assim que avista seu\npresa. Ele captura suas presas com garras afiadas.",
        "zh-tw": "一旦發現它的踪跡，它就會以陡峭的角度俯衝\n獵物。它用鋒利的爪子捕捉獵物。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Repelling Wind",
                "fr": "Repousser le vent",
                "es": "Repeler el viento",
                "it": "Respingere il vento",
                "de": "Wind abwehren",
                "pt-br": "Repelindo o Vento",
                "zh-tw": "驅風"
            },
            effect: {
                en: "Once during your turn, you may switch out your opponent's Active Basic Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
                "fr": "Une fois pendant votre tour, vous pouvez transférer le Pokémon Actif de Base de votre adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
                "es": "Una vez durante tu turno, puedes cambiar el Pokémon Básico Activo de tu rival a la Banca. (Tu oponente elige el nuevo Pokémon Activo).",
                "it": "Una sola volta durante il tuo turno, puoi mettere in panchina il Pokémon Base attivo del tuo avversario. (Il tuo avversario sceglie il nuovo Pokémon attivo.)",
                "de": "Einmal während deines Zuges kannst du das Aktive Basis-Pokémon deines Gegners auf die Bank tauschen. (Dein Gegner wählt das neue Aktive Pokémon.)",
                "pt-br": "Uma vez durante o seu turno, você pode trocar o Pokémon Básico Ativo do seu oponente para o Banco. (Seu oponente escolhe o novo Pokémon Ativo.)",
                "zh-tw": "在你的回合中，你可以將對手的活躍基礎神奇寶貝移至替補席上一次。 （你的對手選擇新的活躍神奇寶貝。）"
            }
        }],
    attacks: [{
            name: {
                en: "Wing Attack",
                "fr": "Attaque d'aile",
                "es": "Ataque de ala",
                "it": "Attacco d'ala",
                "de": "Flügelangriff",
                "pt-br": "Ataque de asa",
                "zh-tw": "翼攻擊"
            },
            damage: 50,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
