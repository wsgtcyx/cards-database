import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Stakataka",
        "fr": "Stakataka",
        "es": "estakataka",
        "it": "Stakataka",
        "de": "Stakataka",
        "pt-br": "Stakataka",
        "zh-tw": "壘磊石",
    },
    illustrator: "Anesaki Dynamic",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Metal"],
    description: {
        en: "It appeared from an Ultra Wormhole. Each one\nappears to be made up of many life-forms\nstacked one on top of each other.",
        "fr": "Il est apparu depuis un Ultra Wormhole. Chacun\nsemble être composé de nombreuses formes de vie\nempilés les uns sur les autres.",
        "es": "Apareció de un Ultra Wormhole. cada uno\nparece estar formado por muchas formas de vida\napilados uno encima del otro.",
        "it": "È apparso da un Ultravarco. Ognuno\nsembra essere composto da molte forme di vita\nimpilati uno sopra l'altro.",
        "de": "Es erschien aus einem Ultra-Wurmloch. Jeder einzelne\nscheint aus vielen Lebensformen zu bestehen\nübereinander gestapelt.",
        "pt-br": "Apareceu de um Ultra Wormhole. Cada um\nparece ser composto de muitas formas de vida\nempilhados um em cima do outro.",
        "zh-tw": "它是從究極蟲洞中出現的。每一個\n似乎由許多生命形式組成\n一個一個地疊起來。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Brass Rock",
                "fr": "Roche de laiton",
                "es": "Roca de latón",
                "it": "Roccia d'ottone",
                "de": "Messingrock",
                "pt-br": "Rocha de latão",
                "zh-tw": "黃銅岩"
            },
            damage: 40,
            cost: ["Metal", "Colorless"],
            effect: {
                en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks.",
                "fr": "Lors du prochain tour de votre adversaire, ce Pokémon subit -20 dégâts des attaques.",
                "es": "Durante el próximo turno de tu rival, este Pokémon recibe -20 de daño por ataques.",
                "it": "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -20 danni dagli attacchi.",
                "de": "Während des nächsten Zuges deines Gegners erleidet dieses Pokémon −20 Schadenspunkte durch Angriffe.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon sofrerá -20 de dano de ataques.",
                "zh-tw": "在對手的下一個回合中，這只神奇寶貝受到的攻擊傷害為-20。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3
};
export default card;
