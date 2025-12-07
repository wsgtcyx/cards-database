import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Togekiss",
        "fr": "Togekiss",
        "es": "Togekiss",
        "it": "Togekiss",
        "de": "Togekuss",
        "pt-br": "Togekiss",
        "zh-tw": "托蓋基斯"
    },
    illustrator: "sui",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Psychic"],
    evolveFrom: {
        en: "Togetic",
        "fr": "Ensemble",
        "es": "togetico",
        "it": "Togetico",
        "de": "Zusammen",
        "pt-br": "Togético",
        "zh-tw": "托蓋蒂克"
    },
    description: {
        en: "These Pokémon are never seen anywhere near\nconflict or turmoil. In recent times, they've hardly\nbeen seen at all.",
        "fr": "Ces Pokémon ne sont jamais vus à proximité\nconflit ou troubles. Ces derniers temps, ils ont à peine\nété vu du tout.",
        "es": "Estos Pokémon nunca se ven cerca\nconflicto o agitación. En los últimos tiempos apenas han\nsido visto en absoluto.",
        "it": "Questi Pokémon non vengono mai visti da nessuna parte\nconflitto o tumulto. Negli ultimi tempi, difficilmente lo hanno fatto\nstato visto affatto.",
        "de": "Diese Pokémon werden nie in der Nähe gesehen\nKonflikt oder Aufruhr. In letzter Zeit haben sie kaum noch\nüberhaupt gesehen worden.",
        "pt-br": "Esses Pokémon nunca são vistos por perto\nconflito ou turbulência. Nos últimos tempos, eles dificilmente\nsido visto.",
        "zh-tw": "這些神奇寶貝在附近從未見過\n衝突或動亂。最近一段時間，他們幾乎沒有\n完全被看見了。"
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Celestial Blessing",
                "fr": "Bénédiction céleste",
                "es": "Bendición Celestial",
                "it": "Benedizione celeste",
                "de": "Himmlischer Segen",
                "pt-br": "Bênção Celestial",
                "zh-tw": "祜"
            },
            effect: {
                en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
                "fr": "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce de monnaie. Si c’est face, évitez ces dégâts.",
                "es": "Si los ataques le hacen algún daño a este Pokémon, lanza una moneda. Si sale cara, evite ese daño.",
                "it": "Se gli attacchi infliggono danni a questo Pokémon, lancia una moneta. Se esce testa, previeni il danno.",
                "de": "Wenn diesem Pokémon durch Angriffe Schaden zugefügt wird, wirf eine Münze. Wenn Köpfe, verhindern Sie diesen Schaden.",
                "pt-br": "Se algum dano for causado a este Pokémon por ataques, jogue uma moeda. Se der cara, evite esse dano.",
                "zh-tw": "如果這只神奇寶貝受到攻擊造成的傷害，則擲硬幣。如果是正面，請防止損壞。"
            }
        }],
    attacks: [{
            name: {
                en: "Magical Shot",
                "fr": "Tir magique",
                "es": "Disparo mágico",
                "it": "Colpo magico",
                "de": "Magischer Schuss",
                "pt-br": "Tiro Mágico",
                "zh-tw": "魔法射擊"
            },
            damage: 70,
            cost: ["Psychic", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
