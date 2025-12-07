import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Crabominable",
        "fr": "Crabominable",
        "es": "cangrejominable",
        "it": "Crabominabile",
        "de": "Krabbenfähig",
        "pt-br": "Crabominável",
        "zh-tw": "好勝毛蟹",
    },
    illustrator: "tetsuya koizumi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fighting"],
    evolveFrom: {
        en: "Crabrawler",
        "fr": "Crabrawler",
        "es": "cangrejo",
        "it": "Crabrawler",
        "de": "Krabbenjäger",
        "pt-br": "Caranguejo",
        "zh-tw": "爬行者"
    },
    description: {
        en: "Though its punches are powerful, this Pokémon's\nmovements are sluggish. It blows icy bubbles\nfrom its mouth to immobilize its opponents.",
        "fr": "Bien que ses coups soient puissants, celui de ce Pokémon\nles mouvements sont lents. Il souffle des bulles glacées\nde sa bouche pour immobiliser ses adversaires.",
        "es": "Aunque sus golpes son poderosos, el poder de este Pokémon\nlos movimientos son lentos. Sopla burbujas heladas\nde su boca para inmovilizar a sus oponentes.",
        "it": "Anche se i suoi pugni sono potenti, quelli di questo Pokémon\ni movimenti sono lenti. Soffia bolle ghiacciate\ndalla bocca per immobilizzare i suoi avversari.",
        "de": "Obwohl seine Schläge mächtig sind, sind die dieses Pokémon\nBewegungen sind träge. Es bläst eisige Blasen\naus seinem Mund, um seine Gegner bewegungsunfähig zu machen.",
        "pt-br": "Embora seus socos sejam poderosos, a habilidade deste Pokémon\nos movimentos são lentos. Sopra bolhas geladas\nde sua boca para imobilizar seus oponentes.",
        "zh-tw": "雖然它的拳頭很強大，但這只神奇寶貝的\n動作遲緩。它吹出冰冷的泡泡\n從它的嘴裡發出來使對手動彈不得。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Last-Chance Punch",
                "fr": "Coup de poing de la dernière chance",
                "es": "Golpe de última oportunidad",
                "it": "Pugno dell'ultima possibilità",
                "de": "Schlag der letzten Chance",
                "pt-br": "Soco de última chance",
                "zh-tw": "最後機會重拳"
            },
            damage: 30,
            cost: ["Fighting"],
            effect: {
                en: "If this Pokémon's remaining HP is 30 or less, this attack does 60 more damage.",
                "fr": "Si les PV restants de ce Pokémon sont de 30 ou moins, cette attaque inflige 60 dégâts supplémentaires.",
                "es": "Si los HP restantes de este Pokémon son 30 o menos, este ataque hace 60 puntos de daño más.",
                "it": "Se i PS rimanenti di questo Pokémon sono 30 o meno, questo attacco infligge 60 danni in più.",
                "de": "Wenn die verbleibenden HP dieses Pokémon 30 oder weniger betragen, fügt dieser Angriff 60 Schadenspunkte mehr zu.",
                "pt-br": "Se o HP restante deste Pokémon for 30 ou menos, este ataque causará 60 de dano a mais.",
                "zh-tw": "如果這只寶可夢的剩餘生命值在 30 以下，則這次攻擊造成的傷害增加 60 點。"
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 3
};
export default card;
