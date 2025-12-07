import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Ferrothorn",
        "fr": "Ferroépine",
        "es": "ferroespino",
        "it": "Ferrothorn",
        "de": "Ferrothorn",
        "pt-br": "Ferroespinho",
        "zh-tw": "堅果啞鈴",
    },
    illustrator: "Hasuno",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Metal"],
    evolveFrom: {
        en: "Ferroseed",
        "fr": "Graine de fer",
        "es": "Ferrosa",
        "it": "Ferroseme",
        "de": "Ferroseed",
        "pt-br": "Ferrosemente",
        "zh-tw": "鐵玫瑰"
    },
    description: {
        en: "Its spikes are harder than steel. This Pokémon\ncrawls across rock walls by stabbing the spikes\non its feelers into the stone.",
        "fr": "Ses pointes sont plus dures que l'acier. Ce Pokémon\nrampe à travers les parois rocheuses en poignardant les pointes\nsur ses antennes dans la pierre.",
        "es": "Sus púas son más duras que el acero. este pokemon\nse arrastra a través de paredes de roca apuñalando las púas\ncon sus antenas en la piedra.",
        "it": "Le sue punte sono più dure dell'acciaio. Questo Pokémon\nstriscia attraverso le pareti rocciose trafiggendo le punte\nsulle antenne nella pietra.",
        "de": "Seine Spitzen sind härter als Stahl. Dieses Pokémon\nkriecht über Felswände, indem es die Stacheln durchsticht\nauf seinen Fühlern in den Stein.",
        "pt-br": "Suas pontas são mais duras que o aço. Este Pokémon\nrasteja pelas paredes rochosas apunhalando os espinhos\nem suas antenas na pedra.",
        "zh-tw": "它的尖刺比鋼還硬。這只寶可夢\n通過刺穿尖刺爬過岩壁\n用它的觸角進入石頭。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Guard Press",
                "fr": "Presse de garde",
                "es": "Prensa de guardia",
                "it": "Stampa della Guardia",
                "de": "Gardepresse",
                "pt-br": "Imprensa da Guarda",
                "zh-tw": "守衛壓力機"
            },
            damage: 50,
            cost: ["Metal", "Metal"],
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
