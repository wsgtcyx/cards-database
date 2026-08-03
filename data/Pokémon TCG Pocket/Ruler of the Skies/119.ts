import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/119",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/119",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/119",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/119",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/119"
    },
    name: {
        en: "Rayquaza",
        fr: "Rayquaza",
        es: "Rayquaza",
        it: "Rayquaza",
        de: "Rayquaza",
        "pt-br": "Rayquaza",
        "zh-tw": "烈空坐",
        ko: "레쿠쟈",
        ja: "レックウザ"
    },
    illustrator: "kawayoo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Dragon"],
    dexId: [384],
    stage: "Basic",
    description: {
        en: "It flies in the ozone layer, way up high in the sky. Until recently, no one had ever seen it.",
        fr: "On ne l’a vu pour la première fois que très récemment\ncar il vit dans la lointaine couche d’ozone.",
        es: "Como hasta hace poco volaba a la altura de la capa\nde ozono, nadie lo había visto nunca.",
        it: "Vive in alto, nello strato di ozono, troppo lontano\nperché qualcuno l’abbia mai potuto avvistare.",
        de: "Da es in der Ozonschicht hoch über den Wolken lebt,\nbekam es bis vor Kurzem noch niemand zu Gesicht."
    },
    attacks: [
        {
            cost: ["Fire", "Lightning", "Colorless", "Colorless"],
            name: {
                en: "Dragon Impact",
                fr: "Impact du Dragon",
                es: "Impacto Dragón",
                "pt-br": "Impacto do Dragão",
                "zh-tw": "狂龍衝擊"
            },
            effect: {
                en: "Discard 2 random Energy from this Pokémon.",
                fr: "Défaussez 2 Énergies au hasard de ce Pokémon.",
                es: "Descarta 2 Energías aleatorias de este Pokémon.",
                it: "Rimuovi 2 Energie a caso da questo Pokémon.",
                de: "Lege 2 zufällige Energien von diesem Pokémon ab.",
                "pt-br": "Descarte 2 Energias aleatórias deste Pokémon.",
                "zh-tw": "將這隻寶可夢身上的隨機2個能量丟棄。"
            },
            damage: 140
        }
    ],
    retreat: 2
};

export default card;
