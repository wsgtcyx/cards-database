import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Heatran",
        "fr": "Heatran",
        "es": "Heatran",
        "it": "Heatran",
        "de": "Heatran",
        "pt-br": "Heatran",
        "zh-tw": "赫特蘭"
    },
    illustrator: "Kazumasa Yasukuni",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Fire"],
    description: {
        en: "It dwells in volcanic caves. It digs in with its\ncross-shaped feet to crawl on ceilings and walls.",
        "fr": "Il habite dans des grottes volcaniques. Il creuse avec son\npieds en forme de croix pour ramper sur les plafonds et les murs.",
        "es": "Habita en cuevas volcánicas. Se clava con su\nPies en forma de cruz para gatear por techos y paredes.",
        "it": "Abita nelle grotte vulcaniche. Scava con il suo\npiedi a forma di croce per strisciare su soffitti e pareti.",
        "de": "Es wohnt in vulkanischen Höhlen. Es gräbt sich ein\nkreuzförmige Füße zum Klettern an Decken und Wänden.",
        "pt-br": "Habita cavernas vulcânicas. Ele cava com seu\npés em forma de cruz para rastejar em tetos e paredes.",
        "zh-tw": "它棲息在火山洞穴中。它用它的方式挖掘\n十字形的腳可以在天花板和牆壁上爬行。"
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Speed Link",
                "fr": "Lien rapide",
                "es": "Enlace de velocidad",
                "it": "Collegamento veloce",
                "de": "Speedlink",
                "pt-br": "Link de velocidade",
                "zh-tw": "極速鏈接"
            },
            effect: {
                en: "If you have Arceus or Arceus ex in play, this Pokémon has no Retreat Cost.",
                "fr": "Si vous avez Arceus ou Arceus ex en jeu, ce Pokémon n'a pas de coût de retraite.",
                "es": "Si tienes a Arceus o Arceus ex en juego, este Pokémon no tiene coste de retirada.",
                "it": "Se hai Arceus o Arceus ex in gioco, questo Pokémon non ha costo di ritirata.",
                "de": "Wenn du Arceus oder Arceus ex im Spiel hast, hat dieses Pokémon keine Rückzugskosten.",
                "pt-br": "Se você tiver Arceus ou Arceus ex em jogo, este Pokémon não terá custo de recuo.",
                "zh-tw": "如果你場上有阿爾宙斯或阿爾宙斯 ex，則該神奇寶貝沒有撤退成本。"
            }
        }],
    attacks: [{
            name: {
                en: "Ragin' Mad Strike",
                "fr": "Frappe folle de Ragin'",
                "es": "Golpe loco furioso",
                "it": "Colpo furioso",
                "de": "Ragin' Mad Strike",
                "pt-br": "Ragin 'Mad Strike",
                "zh-tw": "狂暴的瘋狂打擊"
            },
            damage: 40,
            cost: ["Fire", "Fire"],
            effect: {
                en: "If this Pokémon has damage on it, this attack does 40 more damage.",
                "fr": "Si ce Pokémon subit des dégâts, cette attaque inflige 40 dégâts supplémentaires.",
                "es": "Si este Pokémon tiene daño, este ataque hace 40 puntos de daño más.",
                "it": "Se questo Pokémon ha dei danni su di sé, questo attacco infligge 40 danni in più.",
                "de": "Wenn dieses Pokémon Schaden hat, fügt dieser Angriff 40 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon sofrer dano, este ataque causará 40 de dano a mais.",
                "zh-tw": "如果這只神奇寶貝受到傷害，則這次攻擊會造成額外 40 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 3
};
export default card;
