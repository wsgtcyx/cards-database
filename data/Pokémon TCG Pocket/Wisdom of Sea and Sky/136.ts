import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Porygon2",
        "fr": "Porygon2",
        "es": "Porygon2",
        "it": "Porygon2",
        "de": "Porygon2",
        "pt-br": "Porygon2",
        "zh-tw": "3D龍2",
    },
    illustrator: "Nagomi Nijo",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    evolveFrom: {
        en: "Porygon",
        "fr": "Porygon",
        "es": "Porygón",
        "it": "Porygon",
        "de": "Porygon",
        "pt-br": "Porígon",
        "zh-tw": "多邊獸",
    },
    description: {
        en: "This is a Porygon that was updated with special\ndata. Porygon2 develops itself by learning about\nmany different subjects all on its own.",
        "fr": "Il s'agit d'un Porygon qui a été mis à jour avec des fonctionnalités spéciales.\ndonnées. Porygon2 se développe en apprenant\nde nombreux sujets différents à lui seul.",
        "es": "Este es un Porygon que fue actualizado con características especiales.\ndatos. Porygon2 se desarrolla aprendiendo sobre\nmuchos temas diferentes por sí solo.",
        "it": "Questo è un Porygon che è stato aggiornato con qualcosa di speciale\ndati. Porygon2 si sviluppa imparando a conoscere\nmolti argomenti diversi da solo.",
        "de": "Dies ist ein Porygon, der mit etwas Besonderem aktualisiert wurde\nDaten. Porygon2 entwickelt sich durch Lernen\nviele verschiedene Themen für sich.",
        "pt-br": "Este é um Porygon que foi atualizado com especial\ndados. Porygon2 se desenvolve aprendendo sobre\nmuitos assuntos diferentes por conta própria.",
        "zh-tw": "這是一個經過特殊更新的 Porygon\n數據。 Porygon2 通過學習來發展自己\n許多不同的主題都是獨立的。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Buggy Evolution",
                "fr": "Évolution du buggy",
                "es": "Evolución del buggy",
                "it": "Evoluzione buggy",
                "de": "Buggy-Evolution",
                "pt-br": "Evolução de Buggy",
                "zh-tw": "越野車進化"
            },
            effect: {
                en: "Whenever you attach an Energy from your Energy Zone to this Pokémon, put a random card from your deck that evolves from this Pokémon onto this Pokémon to evolve it.",
                "fr": "À chaque fois que vous attachez une Énergie de votre Zone d'Énergie à ce Pokémon, placez une carte aléatoire de votre deck qui évolue de ce Pokémon sur ce Pokémon pour le faire évoluer.",
                "es": "Siempre que unes una Energía de tu Zona de Energía a este Pokémon, coloca una carta aleatoria de tu mazo que evolucione de este Pokémon en este Pokémon para evolucionarlo.",
                "it": "Ogni volta che assegni un'Energia dalla tua Zona d'Energia a questo Pokémon, metti una carta a caso dal tuo mazzo che si evolve da questo Pokémon a questo Pokémon per farlo evolvere.",
                "de": "Immer wenn du eine Energie aus deiner Energiezone an dieses Pokémon anlegst, lege eine zufällige Karte aus deinem Deck, die sich aus diesem Pokémon entwickelt, auf dieses Pokémon, um es weiterzuentwickeln.",
                "pt-br": "Sempre que você associar uma Energia da sua Zona de Energia a este Pokémon, coloque uma carta aleatória do seu baralho que evolui deste Pokémon neste Pokémon para evoluí-lo.",
                "zh-tw": "每當你將能量區中的能量附加到該神奇寶貝上時，從你的牌組中隨機放置一張由該神奇寶貝進化的卡牌到該神奇寶貝上以使其進化。"
            }
        }],
    attacks: [{
            name: {
                en: "Spinning Attack",
                "fr": "Attaque tournoyante",
                "es": "Ataque giratorio",
                "it": "Attacco rotante",
                "de": "Spinnangriff",
                "pt-br": "Ataque giratório",
                "zh-tw": "旋轉攻擊"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
