import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Charizard",
        "fr": "Dracaufeu",
        "es": "Charizard",
        "it": "Charizard",
        "de": "Glurak",
        "pt-br": "Charizard",
        "zh-tw": "噴火龍"
    },
    illustrator: "DOM",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Fire"],
    evolveFrom: {
        en: "Charmeleon",
        "fr": "Reptincel",
        "es": "Charmeleon",
        "it": "Charmeleon",
        "de": "Glutexo",
        "pt-br": "Charmeleon",
        "zh-tw": "火恐龍"
    },
    description: {
        en: "Its wings can carry this Pokémon close to an\naltitude of 4,600 feet. It blows out fire at very\nhigh temperatures.",
        "fr": "Ses ailes peuvent transporter ce Pokémon près d'un\naltitude de 4 600 pieds. Il éteint le feu à très grande vitesse\ntempératures élevées.",
        "es": "Sus alas pueden llevar a este Pokémon cerca de un\naltitud de 4.600 pies. Expulsa fuego a muy\naltas temperaturas.",
        "it": "Le sue ali possono portare questo Pokémon vicino ad un\naltitudine di 4.600 piedi. Spegne il fuoco molto\nalte temperature.",
        "de": "Seine Flügel können dieses Pokémon in die Nähe tragen\nHöhe von 4.600 Fuß. Es bläst das Feuer sehr schnell aus\nhohe Temperaturen.",
        "pt-br": "Suas asas podem levar este Pokémon para perto de um\naltitude de 4.600 pés. Ele apaga fogo muito\naltas temperaturas.",
        "zh-tw": "它的翅膀可以攜帶該神奇寶貝靠近\n海拔 4,600 英尺。它在非常\n高溫。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Inferno Onrush",
                "fr": "Déferlement infernal",
                "es": "Ataque infernal",
                "it": "L'Inferno Onrush",
                "de": "Inferno-Ansturm",
                "pt-br": "Investida Infernal",
                "zh-tw": "地獄突襲"
            },
            damage: 150,
            cost: ["Fire", "Fire", "Fire", "Colorless"],
            effect: {
                en: "This Pokémon also does 30 damage to itself.",
                "fr": "Ce Pokémon s'inflige également 30 dégâts.",
                "es": "Este Pokémon también se hace 30 daños a sí mismo.",
                "it": "Questo Pokémon infligge anche 30 danni a se stesso.",
                "de": "Dieses Pokémon fügt sich selbst außerdem 30 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 30 de dano a si mesmo.",
                "zh-tw": "這只神奇寶貝也會對自身造成 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 3
};
export default card;
