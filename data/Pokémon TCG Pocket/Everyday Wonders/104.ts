import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/104",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/104",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/104",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/104",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/104",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/104",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/104"
    },
    name: {
        en: "Indeedee ex",
        fr: "Wimessir-ex",
        es: "Indeedee ex",
        it: "Indeedee-ex",
        de: "Servol-ex",
        "pt-br": "Indeedee ex",
        "zh-tw": "愛管侍ex",
        ko: "에써르 ex",
        ja: "イエッサンex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 130,
    types: ["Psychic"],
    dexId: [876],
    stage: "Basic",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Watch Over",
                fr: "Surveillez",
                es: "Vigilar",
                it: "Veglia",
                de: "Pass auf",
                "pt-br": "Vigiar",
                "zh-tw": "貼心"
            },
            effect: {
                en: "Once during your turn, you may heal 20 damage from your Active Pokémon.",
                fr: "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de votre Pokémon Actif.",
                es: "Una vez durante tu turno, puedes curar 20 daños de tu Pokémon Activo.",
                it: "Una sola volta durante il tuo turno, puoi curare 20 danni dal tuo Pokémon attivo.",
                de: "Einmal während deines Zuges kannst du 20 Schadenspunkte bei deinem Aktiven Pokémon heilen.",
                "pt-br": "Uma vez durante o seu turno, você pode curar 20 pontos de dano do seu Pokémon Ativo.",
                "zh-tw": "在你的回合中，你可以治療 20 點來自你的活躍寶可夢的傷害。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Psychic", "Psychic"],
            name: {
                en: "Psychic",
                fr: "Psyko",
                es: "Psíquico",
                it: "Psichico",
                de: "Psychokinese",
                "pt-br": "Psíquico",
                "zh-tw": "精神強念"
            },
            effect: {
                en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
                fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
                es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
                it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
                de: "Dieser Angriff fügt 30 weitere Schadenspunkte für jede Energie zu, die an das Aktive Pokémon deines Gegners angelegt ist.",
                "pt-br": "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
                "zh-tw": "對手的活躍寶可夢身上每附加一個能量，此攻擊就會造成 30 點額外傷害。"
            },
            damage: "30+"
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
