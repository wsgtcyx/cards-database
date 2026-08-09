import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/212",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/212",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/212",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/212",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/212",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/212",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/212"
    },
    name: {
        en: "Mewtwo",
        fr: "Mewtwo",
        es: "Mewtwo",
        it: "Mewtwo",
        de: "Mewtu",
        "pt-br": "Mewtwo",
        "zh-tw": "超夢",
        ko: "뮤츠",
        ja: "ミュウツー"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 120,
    types: ["Psychic"],
    dexId: [150],
    stage: "Basic",
    description: {
        en: "The research efforts of a certain scientist ultimately resulted in this Pokémon. Its powers are dedicated to battling.",
        "fr": "Ce Pokémon est le fruit des expériences d'un scientifique. Sa puissance se révèle tout particulièrement en combat.",
        "es": "Este Pokémon es el fruto de la investigación de cierto cientifico. La fuerza que atesora luce en codo su esplendor durante los combates.",
        "it": "È stato creato da uno scienziato dopo lunghe ricerche. a sua potenza cere specimente nei lott",
        "de": "Dieses Pokémon ist das Resultat der Experimente eines gewissen Forschers: Es setzt all seine Kraft fürs Kämpfen ein.",
        "pt-br": "A pesquisa de um certo cientista acabou resultando neste Pokémon. Seus poderes existem unicamente para a batalha.",
        "zh-tw": "某位科學家的研究\n造就了超夢的誕生，\n牠的力量專為戰鬥而存在。"
    },
    attacks: [
        {
            cost: ["Psychic", "Psychic", "Psychic"],
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
                en: "This attack does 40 more damage for each Energy attached to your opponent's Active Pokémon.",
                fr: "Cette attaque inflige 40 dégâts de plus pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
                es: "Este ataque hace 40 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
                "pt-br": "Este ataque causa 40 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
                "zh-tw": "增加對手的戰鬥寶可夢身上的能量的數量×40點傷害。",
                "it": "Questo attacco infligge 40 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
                "de": "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 40 Schadenspunkte mehr zu."
            },
            damage: "10+"
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 2
};
export default card;
