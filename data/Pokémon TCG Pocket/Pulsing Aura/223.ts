import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/223",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/223",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/223",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/223",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/223",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/223",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/223"
    },
    name: {
        en: "Porygon2",
        fr: "Porygon2",
        es: "Porygon2",
        it: "Porygon2",
        de: "Porygon2",
        "pt-br": "Porygon2",
        "zh-tw": "多邊獸Ⅱ",
        ko: "폴리곤2",
        ja: "ポリゴン2"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    dexId: [233],
    evolveFrom: {
        en: "Porygon",
        fr: "Porygon",
        es: "Porygon",
        it: "Porygon",
        de: "Porygon",
        "pt-br": "Porygon",
        "zh-tw": "多邊獸",
        ko: "폴리곤",
        ja: "ポリゴン"
    },
    stage: "Stage1",
    description: {
        en: "This is a Porygon that was updated with special data. Porygon2 develops itself by learning about many different subjects all on its own.",
        fr: "Fruit de la mise à jour d'un Porygon avec des données spéciales,\nil peut apprendre et se développer de manière autonome.",
        es: "Se trata de una versión mejorada de Porygon mediante un\nsoftware especial. Tiene capacidad de aprendizaje autónomo.",
        it: "È un Porygon aggiornato con dei dati particolari.\nCresce imparando autonomamente svariate cose.",
        de: "Durch ein Update mit besonderen Daten wurde\nPorygon zu Porygon2. Es erweitert sein Wissen,\nindem es selbstständig verschiedene Dinge lernt.",
        "pt-br": "Este é um Porygon que foi atualizado com dados\nespeciais. Porygon2 se desenvolve ao aprender\nsobre diversos assuntos por conta própria.",
        "zh-tw": "這是一個用特殊數據更新的 Porygon。 Porygon2 通過自行學習許多不同的主題來發展自己。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Speed Attack",
                fr: "Attaque Rapide",
                es: "Ataque Fugaz",
                it: "Attacco Veloce",
                de: "Tempoangriff",
                "pt-br": "Ataque em Velocidade",
                "zh-tw": "高速攻擊"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
