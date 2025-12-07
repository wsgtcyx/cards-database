import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Zapdos",
        "fr": "Zapdos",
        "es": "Zapdos",
        "it": "Zapdos",
        "de": "Zapdos",
        "pt-br": "Zapdos",
        "zh-tw": "閃電鳥",
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 100,
    types: ["Lightning"],
    description: {
        en: "This Pokémon has complete control over\nelectricity. There are tales of Zapdos nesting in\nthe dark depths of pitch-black thunderclouds.",
        "fr": "Ce Pokémon a un contrôle total sur\nélectricité. Il y a des histoires de Zapdos nichant dans\nles profondeurs sombres des nuages d’orage d’un noir absolu.",
        "es": "Este Pokémon tiene control total sobre\nelectricidad. Hay historias de Zapdos anidando en\nlas oscuras profundidades de las nubes de tormenta de tono negro.",
        "it": "Questo Pokémon ha il controllo completo su\nelettricità. Ci sono storie di Zapdos che si annidano qui\nle profondità oscure di nubi temporalesche nere come la pece.",
        "de": "Dieses Pokémon hat die vollständige Kontrolle über\nStrom. Es gibt Geschichten über Zapdos, die dort nisten\ndie dunklen Tiefen pechschwarzer Gewitterwolken.",
        "pt-br": "Este Pokémon tem controle total sobre\neletricidade. Existem histórias de Zapdos fazendo ninhos em\nas profundezas escuras das nuvens negras de trovoada.",
        "zh-tw": "這只神奇寶貝完全控制\n電力。有 Zapdos 築巢的故事\n漆黑的雷雨雲的黑暗深處。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Raging Thunder",
                "fr": "Tonnerre déchaîné",
                "es": "Trueno furioso",
                "it": "Tuono furioso",
                "de": "Wütender Donner",
                "pt-br": "Trovão Furioso",
                "zh-tw": "憤怒的雷霆"
            },
            damage: 100,
            cost: ["Lightning", "Lightning", "Colorless"],
            effect: {
                en: "This attack also does 30 damage to 1 of your Benched Pokémon.",
                "fr": "Cette attaque inflige également 30 dégâts à 1 de vos Pokémon de Banc.",
                "es": "Este ataque también hace 30 puntos de daño a 1 de tus Pokémon en Banca.",
                "it": "Questo attacco infligge anche 30 danni a 1 dei tuoi Pokémon in panchina.",
                "de": "Dieser Angriff fügt außerdem 1 deiner Bank-Pokémon 30 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 30 de dano a 1 dos seus Pokémon no Banco.",
                "zh-tw": "這次攻擊還會對你的 1 只後備神奇寶貝造成 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
