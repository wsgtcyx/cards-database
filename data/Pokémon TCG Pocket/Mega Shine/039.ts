import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/039",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/039",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/039",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/039",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/039",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/039"
    },
    name: {
        en: "Mega Gengar ex",
        fr: "Méga-Ectoplasma-ex",
        es: "Mega-Gengar ex",
        it: "Mega Gengar-ex",
        de: "Mega-Gengar-ex",
        "pt-br": "Mega Gengar ex",
        "zh-tw": "超級耿鬼ex",
        ko: "메가팬텀 ex",
        ja: "メガゲンガーex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 210,
    types: ["Darkness"],
    dexId: [94],
    evolveFrom: {
        en: "Haunter",
        fr: "Spectrum",
        es: "Haunter",
        it: "Haunter",
        de: "Alpollo",
        "pt-br": "Haunter",
        "zh-tw": "鬼斯通",
        ko: "고우스트",
        ja: "ゴースト"
    },
    stage: "Stage2",
    attacks: [
        {
            cost: ["Darkness", "Darkness", "Darkness", "Colorless"],
            name: {
                en: "Labyrinth of Shadows",
                fr: "Labyrinthe des Ombres",
                es: "Laberinto de Sombras",
                it: "Labirinto delle Ombre",
                de: "Labyrinth der Schatten",
                "pt-br": "Labirinto das Sombras",
                "zh-tw": "暗影迷宮"
            },
            effect: {
                en: "During your opponent's next turn, they can't play any Trainer cards from their hand.",
                fr: "Lors du prochain tour de votre adversaire, celui-ci ne pourra jouer aucune carte Dresseur de sa main.",
                es: "Durante el siguiente turno de tu oponente, no puede jugar ninguna carta de Entrenador de su mano.",
                it: "Durante il prossimo turno del tuo avversario, lui non potrà giocare nessuna carta Allenatore dalla sua mano.",
                de: "Während des nächsten Zuges deines Gegners kann er keine Trainerkarten aus seiner Hand spielen.",
                "pt-br": "Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Treinador da sua mão.",
                "zh-tw": "在對手的下一個回合中，他們不能從手上打出任何訓練家卡。"
            },
            damage: 120
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
