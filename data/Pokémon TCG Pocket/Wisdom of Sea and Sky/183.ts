import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Stantler",
        "fr": "Stantler",
        "es": "Stantler",
        "it": "Stantler",
        "de": "Stantler",
        "pt-br": "Stantler",
        "zh-tw": "斯坦特勒"
    },
    illustrator: "Noriaki Tanimura",
    rarity: "One Star",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    description: {
        en: "This Pokémon apparently used to live in much\nharsher environments, and thus it once had\nstronger psychic powers than it does now.",
        "fr": "Ce Pokémon vivait apparemment dans de nombreux\ndes environnements plus difficiles, et donc il avait autrefois\ndes pouvoirs psychiques plus forts qu'aujourd'hui.",
        "es": "Al parecer, este Pokémon solía vivir en muchas\nentornos más duros y, por lo tanto, alguna vez tuvo\npoderes psíquicos más fuertes que los que tiene ahora.",
        "it": "Sembra che questo Pokémon vivesse in molte zone\nambienti più difficili, come accadeva una volta\npoteri psichici più forti di quelli attuali.",
        "de": "Dieses Pokémon lebte offenbar früher in vielen Gegenden\nraueren Umgebungen, und so war es auch einmal\nstärkere psychische Kräfte als jetzt.",
        "pt-br": "Este Pokémon aparentemente vivia em muito\nambientes mais severos e, portanto, já teve\npoderes psíquicos mais fortes do que agora.",
        "zh-tw": "這只神奇寶貝顯然曾經生活在很多地方\n環境更加惡劣，因此它曾經有過\n比現在更強的精神力量。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Enhanced Horns",
                "fr": "Cornes améliorées",
                "es": "Cuernos mejorados",
                "it": "Corni migliorati",
                "de": "Verbesserte Hörner",
                "pt-br": "Chifres aprimorados",
                "zh-tw": "增強號角"
            },
            damage: 20,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "If this Pokémon has a Pokémon Tool attached, this attack does 50 more damage.",
                "fr": "Si ce Pokémon est attaché à un Outil Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
                "es": "Si este Pokémon tiene una Herramienta Pokémon adjunta, este ataque hace 50 puntos de daño más.",
                "it": "Se questo Pokémon ha un Oggetto Pokémon assegnato, questo attacco infligge 50 danni in più.",
                "de": "Wenn an dieses Pokémon ein Pokémon-Werkzeug angelegt ist, fügt dieser Angriff 50 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon tiver uma Ferramenta Pokémon anexada, este ataque causará 50 de dano a mais.",
                "zh-tw": "如果該神奇寶貝附加了神奇寶貝工具，則此攻擊造成的傷害增加 50 點。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
