import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/037",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/037",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/037",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/037",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/037",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/037",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/037"
    },
    name: {
        en: "Landorus",
        fr: "Démétéros",
        es: "Landorus",
        it: "Landorus",
        de: "Demeteros",
        "pt-br": "Landorus",
        "zh-tw": "土地雲",
        ko: "랜드로스",
        ja: "ランドロス"
    },
    illustrator: "NC Empire",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    dexId: [645],
    stage: "Basic",
    description: {
        en: "From the forces of lightning and wind, it creates energy to give nutrients to the soil and make the land abundant.",
        fr: "Il utilise l'énergie qu'il tire du vent et de la foudre pour enrichir les sols en nutriments pour les cultures.",
        es: "Utiliza energia que obtiene del viento y del relámpago para nutrir el suelo y generar abundantes cosechas.",
        it: "Rende fertile la terra trasformando l'energia del vento e dei fulmini in nutrimento per il suolo.",
        de: "Seine aus Wind und Donner gewonnene Energie sorgt für reiche Ernten, da sie den Boden mit Nährstoffen anreichert.",
        "pt-br": "Das forças dos raios e do vento, ele cría energia para fornecer nutrientes ao solo e tornar a terra abundante.",
        "zh-tw": "吸收風與雷後轉化成的能量能夠給予土壤營養，讓大地變得豐饒。"
    },
    attacks: [
        {
            cost: ["Fighting", "Fighting", "Colorless"],
            name: {
                en: "Gaia Impact",
                fr: "Impact de Gaïa",
                es: "Impacto Gaia",
                it: "Impatto Gaia",
                de: "Gaia-Einschlag",
                "pt-br": "Impacto Gaia",
                "zh-tw": "蓋亞衝擊"
            },
            effect: {
                en: "Discard all Energy from this Pokémon.",
                fr: "Défaussez toutes les Énergies de ce Pokémon.",
                es: "Descarta todas las Energías de este Pokémon.",
                it: "Rimuovi tutte le Energie assegnate a questo Pokémon.",
                de: "Lege alle Energien von diesem Pokémon ab.",
                "pt-br": "Descarte todas as Energias deste Pokémon.",
                "zh-tw": "將這隻寶可夢身上的能量全部丟棄。"
            },
            damage: 130
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
