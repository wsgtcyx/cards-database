import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Arcanine",
        "fr": "Arcanin",
        "es": "arcanino",
        "it": "Arcano",
        "de": "Arkani",
        "pt-br": "Arcano",
        "zh-tw": "阿爾卡寧"
    },
    illustrator: "Saya Tsuruta",
    category: "Pokemon",
    hp: 130,
    types: ["Fire"],
    evolveFrom: {
        en: "Growlithe",
        "fr": "Growlithe",
        "es": "crecer",
        "it": "Growlithe",
        "de": "Growlithe",
        "pt-br": "Growlithe",
        "zh-tw": "成長"
    },
    description: {
        en: "An ancient picture scroll shows that people\nwere captivated by its movement as it ran\nthrough prairies.",
        "fr": "Un ancien rouleau d'images montre que les gens\nont été captivés par son mouvement alors qu'il courait\nà travers les prairies.",
        "es": "Un antiguo rollo de imágenes muestra que la gente\nquedaron cautivados por su movimiento mientras corría\na través de praderas.",
        "it": "Un antico rotolo di immagini mostra quelle persone\nerano affascinati dal suo movimento mentre correva\nattraverso le praterie.",
        "de": "Eine alte Bildrolle zeigt diese Menschen\nwaren von der Bewegung beim Laufen fasziniert\ndurch Prärien.",
        "pt-br": "Um antigo pergaminho ilustrado mostra que as pessoas\nforam cativados por seu movimento enquanto corria\natravés das pradarias.",
        "zh-tw": "一幅古老的畫卷表明，人們\n被它跑步時的動作迷住了\n穿過大草原。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Heat Tackle",
                "fr": "S'attaquer à la chaleur",
                "es": "Abordaje de calor",
                "it": "Affronto di calore",
                "de": "Hitzegerät",
                "pt-br": "Equipamento térmico",
                "zh-tw": "熱力鏟球"
            },
            damage: 100,
            cost: ["Fire", "Fire", "Colorless"],
            effect: {
                en: "This Pokémon also does 20 damage to itself.",
                "fr": "Ce Pokémon s'inflige également 20 dégâts.",
                "es": "Este Pokémon también se hace 20 daños a sí mismo.",
                "it": "Questo Pokémon infligge anche 20 danni a se stesso.",
                "de": "Dieses Pokémon fügt sich selbst außerdem 20 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 20 de dano a si mesmo.",
                "zh-tw": "這只神奇寶貝也會對自身造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2,
    rarity: "One Shiny"
};
export default card;
