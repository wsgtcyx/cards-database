import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1a/057",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1a/057",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1a/057",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1a/057",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1a/057",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1a/057",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1a/057",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1a/057",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1a/057"
    },
    name: {
        en: "Porygon2",
        "fr": "Porygon2",
        "es": "Porygon2",
        "it": "Porygon2",
        "de": "Porygon2",
        "pt-br": "Porygon2",
        "zh-tw": "多邊獸Ⅱ",
        ja: "ポリゴン2",
        ko: "폴리곤2"
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
        "zh-tw": "多邊獸",
        ja: "ポリゴン",
        ko: "폴리곤"
    },
    description: {
        en: "This is a Porygon that was updated with special\ndata. Porygon2 develops itself by learning about\nmany different subjects all on its own.",
        "fr": "Il s'agit d'un Porygon qui a été mis à jour avec des fonctionnalités spéciales.\ndonnées. Porygon2 se développe en apprenant\nde nombreux sujets différents à lui seul.",
        "es": "Este es un Porygon que fue actualizado con características especiales.\ndatos. Porygon2 se desarrolla aprendiendo sobre\nmuchos temas diferentes por sí solo.",
        "it": "Questo è un Porygon che è stato aggiornato con qualcosa di speciale\ndati. Porygon2 si sviluppa imparando a conoscere\nmolti argomenti diversi da solo.",
        "de": "Dies ist ein Porygon, der mit etwas Besonderem aktualisiert wurde\nDaten. Porygon2 entwickelt sich durch Lernen\nviele verschiedene Themen für sich.",
        "pt-br": "Este é um Porygon que foi atualizado com especial\ndados. Porygon2 se desenvolve aprendendo sobre\nmuitos assuntos diferentes por conta própria.",
        "zh-tw": "這是一個經過特殊更新的 Porygon\n數據。 Porygon2 通過學習來發展自己\n許多不同的主題都是獨立的。",
        ja: "ポリゴンを 特別な データで アップデート。 さまざまな ことを 自分で 学び 成長する。",
        ko: "폴리곤을 특별한 데이터로\n업데이트했다. 다양한 것을\n스스로 배우고 성장한다."
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
                "zh-tw": "速度攻擊",
                ja: "スピードアタック",
                ko: "스피드어택"
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
