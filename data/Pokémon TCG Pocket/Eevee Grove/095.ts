import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Voltorb",
        "fr": "Voltorbe",
        "es": "voltorb",
        "it": "Voltorb",
        "de": "Voltorb",
        "pt-br": "Voltorb",
        "zh-tw": "伏爾托布"
    },
    illustrator: "Scav",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    description: {
        en: "It rolls to move. If the ground is uneven, a sudden\njolt from hitting a bump can cause it to explode.",
        "fr": "Il roule pour bouger. Si le sol est inégal, un coup\nune secousse provoquée par une bosse peut la faire exploser.",
        "es": "Rueda para moverse. Si el terreno es irregular, un repentino\nLa sacudida al golpear un golpe puede hacer que explote.",
        "it": "Rotola per muoversi. Se il terreno è irregolare, all'improvviso\nla scossa provocata da un urto può farla esplodere.",
        "de": "Es rollt, um sich zu bewegen. Wenn der Boden uneben ist, plötzlich\nEin Stoß durch einen Stoß kann dazu führen, dass es explodiert.",
        "pt-br": "Ele rola para se mover. Se o terreno for irregular, um repentino\nO choque ao bater em um solavanco pode fazer com que ele exploda.",
        "zh-tw": "它滾動移動。如果地面不平整，突然\n撞擊碰撞時的震動可能會導致爆炸。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Big Explosion",
                "fr": "Grosse explosion",
                "es": "gran explosión",
                "it": "Grande esplosione",
                "de": "Große Explosion",
                "pt-br": "Grande Explosão",
                "zh-tw": "大霹靂"
            },
            damage: 30,
            cost: ["Lightning"],
            effect: {
                en: "This Pokémon also does 10 damage to itself.",
                "fr": "Ce Pokémon s'inflige également 10 dégâts.",
                "es": "Este Pokémon también se hace 10 daños a sí mismo.",
                "it": "Questo Pokémon infligge anche 10 danni a se stesso.",
                "de": "Dieses Pokémon fügt sich selbst außerdem 10 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 10 de dano a si mesmo.",
                "zh-tw": "該神奇寶貝也會對其自身造成 10 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
