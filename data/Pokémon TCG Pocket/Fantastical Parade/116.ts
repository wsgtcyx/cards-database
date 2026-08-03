import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/116",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/116",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/116",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/116",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/116",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/116"
    },
    name: {
        en: "Ferrothorn",
        "fr": "Ferroépine",
        "es": "ferroespino",
        "it": "Ferrothorn",
        "de": "Ferrothorn",
        "pt-br": "Ferroespinho",
        "zh-tw": "鐵松"
    },
    illustrator: "Midori Harada",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 120,
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
                en: "Pummel",
                "fr": "Martelage",
                "es": "Aporrear",
                "it": "Legnata",
                "de": "Trommler",
                "pt-br": "Esmurrar",
                "zh-tw": "揍"
            },
            damage: 40,
            cost: ["Metal", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, this attack does 60 more damage.",
                "fr": "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts de plus.",
                "es": "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
                "it": "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
                "de": "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se sair cara, este ataque causará 60 pontos de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 60 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3
};
export default card;
