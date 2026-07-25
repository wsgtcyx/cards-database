import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/107",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/107",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/107",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/107",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/107",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/107"
    },
    name: {
        en: "Dragonite",
        fr: "Dracolosse",
        es: "Dragonite",
        it: "Dragonite",
        de: "Dragoran",
        "pt-br": "Dragonite",
        "zh-tw": "快龍",
        ko: "망나뇽",
        ja: "カイリュー"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 150,
    types: ["Dragon"],
    dexId: [149],
    evolveFrom: {
        en: "Dragonair",
        fr: "Draco",
        es: "Dragonair",
        it: "Dragonair",
        de: "Dragonir",
        "pt-br": "Dragonair",
        "zh-tw": "哈克龍",
        ko: "신뇽",
        ja: "ハクリュー"
    },
    stage: "Stage2",
    description: {
        en: "It can fly in spite of its big and bulky physique. It circles the globe in just 16 hours.",
        fr: "Malgré son poids et son physique imposant,\nDracolosse est capable de voler. Il peut faire le tour\ndu monde en 16 heures.",
        es: "A pesar del tamaño que tiene y de lo pesado que es,\npuede volar. Es capaz de dar la vuelta al mundo en\nsolo 16 horas.",
        it: "Nonostante la stazza, è in grado di volare.\nPuò compiere il giro del mondo in 16 ore.",
        de: "Trotz seines wuchtigen und massiven Körpers kann\nes fliegen. Es umrundet den Erdball in nur 16 Stunden.",
        "pt-br": "Ele pode voar apesar de seu físico grande e volumoso. Ele circunda o globo em apenas 16 horas.",
        "zh-tw": "儘管體型龐大，但它仍能飛。只需 16 小時即可繞地球一圈。"
    },
    attacks: [
        {
            cost: ["Water", "Lightning", "Colorless"],
            name: {
                en: "Dragon Wave",
                fr: "Vague de Dragon",
                es: "Ola de Dragón",
                it: "Ondadrago",
                de: "Drachenwelle",
                "pt-br": "Onda de Dragão",
                "zh-tw": "龍波"
            },
            effect: {
                en: "Discard a {W} and a {L} Energy from this Pokémon.",
                fr: "Défaussez une Énergie {W} et une {L} de ce Pokémon.",
                es: "Descarta una Energía {W} y una {L} de este Pokémon.",
                it: "Scarta un'Energia {W} e un'Energia {L} da questo Pokémon.",
                de: "Lege eine {W}- und eine {L}-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte uma energia {W} e uma {L} deste Pokémon.",
                "zh-tw": "丟棄該寶可夢的 {W} 和 {L} 能量。"
            },
            damage: 150
        }
    ],
    retreat: 3
};

export default card;
