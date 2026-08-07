import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/236",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/236",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/236",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/236",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/236",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/236",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/236"
    },
    name: {
        en: "Pachirisu ex",
        "fr": "Pachirisu-ex",
        "es": "Pachirisu ex",
        "it": "Pachirisu-ex",
        "de": "Pachirisu-ex",
        "pt-br": "Pachirisu ex",
        "zh-tw": "帕奇利茲ex",
    },
    illustrator: "PLANETA Tsuji",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 120,
    types: ["Lightning"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Sparking Gadget",
                "fr": "Gadget étincelant",
                "es": "Dispositivo chispeante",
                "it": "Gadget scintillante",
                "de": "Funkendes Gerät",
                "pt-br": "Gadget brilhante",
                "zh-tw": "火花小工具"
            },
            damage: 40,
            cost: ["Lightning", "Lightning"],
            effect: {
                en: "If this Pokémon has a Pokémon Tool attached, this attack does 40 more damage.",
                "fr": "Si ce Pokémon est attaché à un Outil Pokémon, cette attaque inflige 40 dégâts supplémentaires.",
                "es": "Si este Pokémon tiene una Herramienta Pokémon adjunta, este ataque hace 40 puntos de daño más.",
                "it": "Se questo Pokémon ha un Oggetto Pokémon assegnato, questo attacco infligge 40 danni in più.",
                "de": "Wenn an dieses Pokémon ein Pokémon-Werkzeug angelegt ist, fügt dieser Angriff 40 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon tiver uma Ferramenta Pokémon anexada, este ataque causará 40 de dano a mais.",
                "zh-tw": "如果該神奇寶貝附加了神奇寶貝工具，則此攻擊造成的傷害增加 40 點。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
