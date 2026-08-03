import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/130",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/130",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/130",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/130",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/130",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/130"
    },
    name: {
        en: "Alolan Raichu ex",
        "fr": "Raichu d'Alola-ex",
        "es": "Raichu de Alola ex",
        "it": "Raichu di Alola-ex",
        "de": "Alola-Raichu-ex",
        "pt-br": "Raichu de Alola ex",
        "zh-tw": "阿羅拉雷丘ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Lightning"],
    evolveFrom: {
        en: "Pikachu",
        "fr": "Pikachu",
        "es": "Pikachu",
        "it": "Pikachu",
        "de": "Pikachu",
        "pt-br": "Pikachu",
        "zh-tw": "皮卡丘"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Psychic",
                "fr": "Psychique",
                "es": "Psíquico",
                "it": "Psichico",
                "de": "Hellseher",
                "pt-br": "Psíquico",
                "zh-tw": "精神"
            },
            damage: 60,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
                "fr": "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
                "es": "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
                "it": "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
                "de": "Dieser Angriff fügt 30 weitere Schadenspunkte für jede Energie zu, die an das Aktive Pokémon deines Gegners angelegt ist.",
                "pt-br": "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
                "zh-tw": "對手的活躍寶可夢身上每附加一個能量，此攻擊就會造成 30 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
