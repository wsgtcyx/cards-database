import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/063",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/063"
    },
    name: {
        en: "Meowscarada ex",
        fr: "Miascarade-ex",
        es: "Meowscarada ex",
        it: "Meowscarada-ex",
        de: "Maskagato-ex",
        "pt-br": "Meowscarada ex",
        "zh-tw": "魔幻假面喵ex",
        ko: "마스카나 ex",
        ja: "マスカーニャex"
    },
    illustrator: "5ban Graphics",
    rarity: "None",
    category: "Pokemon",
    hp: 160,
    types: ["Grass"],
    dexId: [908],
    evolveFrom: {
        en: "Floragato",
        fr: "Matourgeon",
        es: "Floragato",
        it: "Floragato",
        de: "Feliospa",
        "pt-br": "Floragato",
        "zh-tw": "蒂蕾喵",
        ko: "나로테",
        ja: "ニャローテ"
    },
    stage: "Stage2",
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Flower Trick",
                fr: "Magie Florale",
                es: "Truco Floral",
                it: "Prestigiafiore",
                de: "Blumentrick",
                "pt-br": "Truque Floral",
                "zh-tw": "千變萬花"
            },
            effect: {
                en: "Choose a spot from among your opponent's Active Spot and Bench. At the end of your opponent's next turn, do 70 damage to the Pokémon in the spot you chose.",
                fr: "Choisissez un emplacement parmi l'emplacement actif et le banc de votre adversaire. À la fin du prochain tour de votre adversaire, infligez 70 dégâts au Pokémon à l'endroit que vous avez choisi.",
                es: "Elige un lugar entre el Punto Activo y el Banco de tu oponente. Al final del siguiente turno de tu rival, haz 70 puntos de daño al Pokémon en el lugar que hayas elegido.",
                it: "Scegli un posto tra il posto attivo e la panchina del tuo avversario. Alla fine del prossimo turno del tuo avversario, infliggi 70 danni al Pokémon nel punto che hai scelto.",
                de: "Wählen Sie einen Platz aus dem aktiven Platz und der Bank Ihres Gegners. Füge am Ende des nächsten Zuges deines Gegners dem Pokémon an der von dir gewählten Stelle 70 Schadenspunkte zu.",
                "pt-br": "Escolha um lugar entre o Ponto Ativo e o Banco do seu oponente. No final do próximo turno do seu oponente, cause 70 de dano ao Pokémon no local que você escolheu.",
                "zh-tw": "從對手的戰鬥場和備戰區中選擇一個位置。對手的下一回合結束時，對你選擇的位置的寶可夢造成 70 點傷害。"
            }
        },
        {
            cost: ["Grass", "Grass"],
            name: {
                en: "Solar Beam",
                fr: "Lance-Soleil",
                es: "Rayo Solar",
                it: "Solarraggio",
                de: "Solarstrahl",
                "pt-br": "Raio Solar",
                "zh-tw": "日光束"
            },
            damage: 80
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
