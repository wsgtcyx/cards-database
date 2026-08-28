import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/012",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/012",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/012",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/012",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/012",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/012",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/012"
    },
    name: {
        en: "Delphox",
        fr: "Goupelin",
        es: "Delphox",
        it: "Delphox",
        de: "Fennexis",
        "pt-br": "Delphox",
        "zh-tw": "妖火紅狐",
        ko: "마폭시",
        ja: "マフォクシー"
    },
    illustrator: "5ban Graphics",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Fire"],
    dexId: [655],
    evolveFrom: {
        en: "Braixen",
        fr: "Roussil",
        es: "Braixen",
        it: "Braixen",
        de: "Rutena",
        "pt-br": "Braixen",
        "zh-tw": "長尾火狐",
        ko: "테르나",
        ja: "テールナー"
    },
    stage: "Stage2",
    description: {
        en: "It controls flames telekinetically, trapping its foes in a fiery vortex surpassing 5,400 degrees Fahrenheit and burning them to a crisp.",
        fr: "Il manipule le feu avec ses pouvoirs télékinétiques et consume ses adversaires en les enveloppant dans un tourbillon de flammes à 3 000 °C.",
        es: "Maneja las llamas con sus poderes psíquicos. Envuelve a su oponente en un vórtice de fuego a 3000°C y lo calcina.",
        it: "Controlla il fuoco con i suoi poteri psichici. Avvolge i nemici in un vortice di fiamme a 3.000 °C e li incenerisce.",
        de: "Es kontrolliert Flammen mithilfe von Telekinese und hüllt Gegner in 3000 °C heiße Wirbel aus Feuer, die sie zu Asche verbrennen.",
        "pt-br": "Controla chamas por telecinesia, aprisionando os inimigos em um vórtice ardente de mais de 3.000 °C e os queimando até virarem cinzas.",
        "zh-tw": "能用念力操控火焰。攝氏３０００度的火焰旋渦會包圍對手並將其燒成灰燼。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
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
                fr: "Cette attaque inflige 30 dégâts de plus pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
                es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
                it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
                de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
                "zh-tw": "增加對手的戰鬥寶可夢身上的能量的數量×30點傷害。"
            },
            damage: "60+"
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
