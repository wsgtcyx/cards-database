import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Porygon2",
        "fr": "Porygon2",
        "es": "Porygon2",
        "it": "Porygon2",
        "de": "Porygon2",
        "pt-br": "Porygon2",
        "zh-tw": "多邊獸II"
    },
    illustrator: "Kent Kanetsuna",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    evolveFrom: {
        en: "Porygon",
        "fr": "Porygon",
        "es": "Porygon",
        "it": "Porygon",
        "de": "Porygon",
        "pt-br": "Porygon",
        "zh-tw": "多邊獸"
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
    attacks: [{
            name: {
                en: "Speed Attack",
                "fr": "Attaque rapide",
                "es": "Ataque de velocidad",
                "it": "Attacco veloce",
                "de": "Geschwindigkeitsangriff",
                "pt-br": "Ataque Rápido",
                "zh-tw": "速度攻擊"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
