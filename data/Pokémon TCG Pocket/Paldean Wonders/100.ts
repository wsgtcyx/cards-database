import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/100",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/100"
    },
    name: {
        en: "Meowscarada",
        fr: "Miascarade",
        es: "Meowscarada",
        it: "Meowscarada",
        de: "Maskagato",
        'pt-br': "Meowscarada",
        "zh-tw": "魔幻假面喵",
        ko: "마스카나"
    },
    suffix: "EX",
    illustrator: "5ban Graphics",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 160,
    types: ["Grass"],
    evolveFrom: {
        en: "Floragato",
        fr: "Matourgeon",
        es: "Floragato",
        it: "Floragato",
        de: "Feliospa",
        'pt-br': "Floragato",
        "zh-tw": "蒂蕾喵",
        ko: "나로테"
    },
    dexId: [908],
    stage: "Stage2",
    attacks: [
        {
            name: {
                en: "Flower Trick",
                "fr": "Astuce de fleur",
                "es": "Truco de flores",
                "it": "Trucco dei fiori",
                "de": "Blumentrick",
                "pt-br": "Truque de flores",
                "zh-tw": "花戲法"
            },
            cost: ["Grass"],
            effect: {
                en: "Choose a spot from among your opponent's Active Spot and Bench. At the end of your opponent's next turn, do 70 damage to the Pokémon in the spot you chose.",
                "fr": "Choisissez un emplacement parmi l'emplacement actif et le banc de votre adversaire. À la fin du prochain tour de votre adversaire, infligez 70 dégâts au Pokémon à l'endroit que vous avez choisi.",
                "es": "Elige un lugar entre el Punto Activo y el Banco de tu oponente. Al final del siguiente turno de tu rival, haz 70 puntos de daño al Pokémon en el lugar que hayas elegido.",
                "it": "Scegli un posto tra il posto attivo e la panchina del tuo avversario. Alla fine del prossimo turno del tuo avversario, infliggi 70 danni al Pokémon nel punto che hai scelto.",
                "de": "Wählen Sie einen Platz aus dem aktiven Platz und der Bank Ihres Gegners. Füge am Ende des nächsten Zuges deines Gegners dem Pokémon an der von dir gewählten Stelle 70 Schadenspunkte zu.",
                "pt-br": "Escolha um lugar entre o Ponto Ativo e o Banco do seu oponente. No final do próximo turno do seu oponente, cause 70 de dano ao Pokémon no local que você escolheu.",
                "zh-tw": "從對手的戰鬥場和備戰區中選擇一個位置。對手的下一回合結束時，對你選擇的位置的寶可夢造成 70 點傷害。"
            },
        },
        {
            name: {
                en: "Solar Beam",
                fr: "Lance-Soleil",
                es: "Rayo Solar",
                it: "Solarraggio",
                de: "Solarstrahl",
                "pt-br": "Raio Solar",
                "zh-tw": "太陽光束",
                'es-mx': "Rayo Solar",
                pt: "Raio Solar"
            },
            damage: 80,
            cost: ["Grass", "Grass"],
        },
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
