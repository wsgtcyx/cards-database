import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/107",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/107",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/107",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/107",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/107",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/107"
    },
    name: {
        en: "Scrafty",
        "fr": "Baggaïd",
        "es": "Scrafty",
        "it": "Scrafty",
        "de": "Irokex",
        "pt-br": "Scrafty",
        "zh-tw": "頭巾混混"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Darkness"],
    evolveFrom: {
        en: "Scraggy",
        "fr": "Décharné",
        "es": "Flaco",
        "it": "Scarso",
        "de": "Mager",
        "pt-br": "Desgrenhado",
        "zh-tw": "瘦弱的"
    },
    description: {
        en: "This Pokémon may be rude, but it takes very\ngood care of its family, its friends, and its turf.",
        "fr": "Ce Pokémon est peut-être impoli, mais il lui faut beaucoup\nbon soin de sa famille, de ses amis et de son territoire.",
        "es": "Este Pokémon puede ser rudo, pero requiere mucha\nbuen cuidado de su familia, sus amigos y su territorio.",
        "it": "Questo Pokémon può essere scortese, ma ci vuole molto\nbuona cura della sua famiglia, dei suoi amici e del suo territorio.",
        "de": "Dieses Pokémon mag unhöflich sein, aber es braucht sehr viel\ngut für seine Familie, seine Freunde und sein Revier sorgen.",
        "pt-br": "Este Pokémon pode ser rude, mas é preciso muito\ncuidar bem de sua família, de seus amigos e de seu território.",
        "zh-tw": "這個神奇寶貝可能很粗魯，但它需要非常\n照顧好它的家人、朋友和地盤。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Crush the Weak",
                "fr": "Écraser les faibles",
                "es": "Aplastar a los débiles",
                "it": "Schiaccia i deboli",
                "de": "Zerstöre die Schwachen",
                "pt-br": "Esmague os fracos",
                "zh-tw": "碾壓弱者"
            },
            damage: 50,
            cost: ["Darkness", "Darkness"],
            effect: {
                en: "If this Pokémon has more Energy attached than your opponent's Active Pokémon, this attack does 50 more damage.",
                "fr": "Si ce Pokémon a plus d'Énergie attachée que le Pokémon Actif de votre adversaire, cette attaque inflige 50 dégâts supplémentaires.",
                "es": "Si este Pokémon tiene más Energía unida que el Pokémon Activo de tu rival, este ataque hace 50 puntos de daño más.",
                "it": "Se questo Pokémon ha più Energie assegnate rispetto al Pokémon attivo del tuo avversario, questo attacco infligge 50 danni in più.",
                "de": "Wenn an dieses Pokémon mehr Energie angelegt ist als an das Aktive Pokémon deines Gegners, fügt dieser Angriff 50 Schadenspunkte mehr zu.",
                "pt-br": "Se este Pokémon tiver mais Energia ligada do que o Pokémon Ativo do seu oponente, este ataque causará 50 pontos de dano a mais.",
                "zh-tw": "如果該神奇寶貝所附加的能量比對手的活躍神奇寶貝多，則此攻擊造成的傷害增加 50 點。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
