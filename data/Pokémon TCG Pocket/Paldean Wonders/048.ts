import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/048",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/048"
    },
    name: {
        en: "Ceruledge",
        fr: "Malvalame",
        es: "Ceruledge",
        it: "Ceruledge",
        de: "Azugladis",
        "pt-br": "Ceruledge",
        "zh-tw": "蒼炎刃鬼",
        pt: "Ceruledge"
    },
    illustrator: "Ryota Murayama",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Psychic"],
    dexId: [937],
    evolveFrom: {
        en: "Charcadet",
        fr: "Charbambin",
        es: "Charcadet",
        it: "Charcadet",
        de: "Knarbon",
        "pt-br": "Charcadet",
        "zh-tw": "炭小侍",
        pt: "Charcadet"
    },
    description: {
        en: "An old set of armor steeped in grudges caused this Pokémon's evolution. Ceruledge cuts its enemies to pieces without mercy.",
        "fr": "Une vieille armure imprégnée de rancune a provoqué l'évolution de ce Pokémon. Malvalame coupe ses ennemis en morceaux sans pitié.",
        "es": "Una vieja armadura cargada de rencores provocó la evolución de este Pokémon. Ceruledge corta en pedazos a sus enemigos sin piedad.",
        "it": "Una vecchia armatura intrisa di rancore ha causato l'evoluzione di questo Pokémon. Ceruledge fa a pezzi i suoi nemici senza pietà.",
        "de": "Eine alte, von Groll durchdrungene Rüstung war der Auslöser für die Entwicklung dieses Pokémon. Azugladis schneidet seine Feinde gnadenlos in Stücke.",
        "pt-br": "Uma antiga armadura repleta de rancores causou a evolução deste Pokémon. Ceruledge corta seus inimigos em pedaços sem piedade.",
        "zh-tw": "一套充滿怨恨的舊盔甲導致了這隻寶可夢的進化。 蒼炎刃鬼毫不留情地將敵人切成碎片。"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Fighting Sword",
                fr: "Épée Combattante",
                es: "Espada Combativa",
                it: "Spada Combattente",
                de: "Kampfschwert",
                "pt-br": "Espada de Combate",
                "zh-tw": "鬥劍",
                pt: "Espada de Combate"
            },
            damage: "70+",
            cost: ["Psychic", "Psychic", "Colorless"],
            effect: {
                en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 70 more damage.",
                fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-{ex}, cette attaque inflige 70 dégâts supplémentaires.",
                es: "Si el Pokémon Activo de tu rival es un Pokémon {ex}, este ataque hace 70 puntos de daño más.",
                it: "Se il Pokémon attivo del tuo avversario è un Pokémon-{ex}, questo attacco infligge 70 danni in più.",
                de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-{ex} ist, fügt diese Attacke 70 Schadenspunkte mehr zu.",
                'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon {ex}, este ataque causará 70 pontos de dano a mais.",
                "zh-tw": "如果對手的戰鬥寶可夢是寶可夢 {ex}，則此攻擊造成的傷害增加 70 點。",
                ko: "상대의 배틀 포켓몬이 「포켓몬 {ex}」라면 70데미지를 추가한다."
            },
        },
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20",
        },
    ],
    retreat: 2,
};
export default card;
