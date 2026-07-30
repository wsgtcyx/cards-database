import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/118"
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
    illustrator: "Naoyo Kimura",
    rarity: "Three Diamond",
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
                en: "Hyper Beam",
                fr: "Ultralaser",
                es: "Hiperrayo",
                it: "Iper Raggio",
                de: "Hyperstrahl",
                "pt-br": "Hiper-raio",
                "zh-tw": "破壞光線"
            },
            effect: {
                en: "Discard a random Energy from your opponent's Active Pokémon.",
                fr: "Défaussez une Énergie aléatoire du Pokémon Actif de votre adversaire.",
                es: "Descarta una Energía aleatoria del Pokémon Activo de tu rival.",
                it: "Scarta un'Energia casuale dal Pokémon attivo del tuo avversario.",
                de: "Lege eine zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Descarte uma Energia aleatória do Pokémon Ativo do seu oponente.",
                "zh-tw": "丟棄對手的活躍寶可夢中的隨機能量。"
            },
            damage: 110
        }
    ],
    retreat: 3
};

export default card;
