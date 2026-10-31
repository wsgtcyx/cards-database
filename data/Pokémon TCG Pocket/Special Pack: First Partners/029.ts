import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/029",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/029",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/029",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/029",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/029",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/029",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/029"
    },
    name: {
        en: "Mew",
        fr: "Mew",
        es: "Mew",
        "pt-br": "Mew",
        "zh-tw": "夢幻",
        ja: "ミュウ",
        ko: "뮤",
        it: "Mew",
        de: "Mew"
    },
    illustrator: "YOSHIROTTEN",
    rarity: "Anomaly",
    category: "Pokemon",
    hp: 70,
    types: [
        "Psychic"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    attacks: [
        {
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
            cost: [
                "Colorless",
                "Psychic"
            ],
            damage: "30+",
            effect: {
                en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
                fr: "Cette attaque inflige 20 dégâts de plus pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
                es: "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
                it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
                de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
                "zh-tw": "增加對手的戰鬥寶可夢身上的能量的數量×20點傷害。",
                ja: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
                ko: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon."
            }
        }
    ],
    abilities: [],
    description: {
        en: "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.",
        fr: "Unique et rare, son existence est remise en cause par les experts. Peu nombreux sont ceux qui l'ont vu.",
        es: "Es tan raro que muchos expertos opinan que es solo una ilusión. Solo unos pocos lo han visto.",
        it: "È così raro che molti esperti sostengono sia un’illusione. Solo qualcuno al mondo l’ha visto.",
        de: "Viele Experten bezweifeln die Existenz dieses Pokémon. Nur wenige Personen haben es gesehen.",
        "pt-br": "Tão raro que muitos especialistas dizem que é uma miragem. Somente algumas pessoas o viram no mundo todo.",
        "zh-tw": "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.",
        ja: "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.",
        ko: "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide."
    }
};

export default card;
