import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/116",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/116",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/116",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/116",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/116",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/116",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/116"
    },
    name: {
        en: "Indeedee ex",
        fr: "Wimessir-ex",
        es: "Indeedee ex",
        it: "Indeedee-ex",
        de: "Servol-ex",
        "pt-br": "Indeedee ex",
        "zh-tw": "愛管侍ex",
        ja: "イエッサンex",
        ko: "에써르 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 130,
    types: [
        "Psychic"
    ],
    dexId: [
        876
    ],
    stage: "Basic",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Watch Over",
                fr: "Veille",
                es: "Cuidados",
                it: "Cura Protettiva",
                de: "Obhut",
                "pt-br": "Cuidar",
                "zh-tw": "貼心",
                ja: "Watch Over",
                ko: "Watch Over"
            },
            effect: {
                en: "Once during your turn, you may heal 20 damage from your Active Pokémon.",
                fr: "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de votre Pokémon Actif.",
                es: "Una vez durante tu turno, puedes curar 20 puntos de daño a tu Pokémon Activo.",
                it: "Una sola volta durante il tuo turno, puoi curare il tuo Pokémon attivo da 20 danni.",
                de: "Einmal während deines Zuges kannst du 20 Schadenspunkte bei deinem Aktiven Pokémon heilen.",
                "pt-br": "Uma vez durante o seu turno, você poderá curar 20 pontos de dano do seu Pokémon Ativo.",
                "zh-tw": "在自己的回合時,可使用1次。將自己的戰鬥寶可夢恢復20HP。",
                ja: "Once during your turn, you may heal 20 damage from your Active Pokémon.",
                ko: "Once during your turn, you may heal 20 damage from your Active Pokémon."
            }
        }
    ],
    attacks: [
        {
            cost: [
                "Psychic",
                "Psychic"
            ],
            name: {
                en: "Psychic",
                fr: "Psyko",
                es: "Psíquico",
                it: "Psichico",
                de: "Psychokinese",
                "pt-br": "Psíquico",
                "zh-tw": "精神強念",
                ja: "Psychic",
                ko: "Psychic"
            },
            effect: {
                en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
                fr: "Cette attaque inflige 30 dégâts de plus pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
                es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
                it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
                de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
                "zh-tw": "增加對手的戰鬥寶可夢身上的能量的數量×30點傷害。",
                ja: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
                ko: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon."
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
