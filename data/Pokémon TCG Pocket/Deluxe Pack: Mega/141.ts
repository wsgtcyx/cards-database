import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/141",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/141",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/141",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/141",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/141",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/141",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/141"
    },
    name: {
        en: "Mega Gengar ex",
        fr: "Méga-Ectoplasma-ex",
        es: "Mega-Gengar ex",
        it: "Mega Gengar-ex",
        de: "Mega-Gengar-ex",
        "pt-br": "Mega Gengar ex",
        "zh-tw": "超級耿鬼ex",
        ja: "メガゲンガーex",
        ko: "메가팬텀 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 210,
    types: [
        "Darkness"
    ],
    dexId: [
        94
    ],
    evolveFrom: {
        en: "Haunter",
        fr: "Spectrum",
        es: "Haunter",
        it: "Haunter",
        de: "Alpollo",
        "pt-br": "Haunter",
        "zh-tw": "鬼斯通",
        ja: "Haunter",
        ko: "Haunter"
    },
    stage: "Stage2",
    attacks: [
        {
            cost: [
                "Darkness",
                "Darkness",
                "Darkness",
                "Colorless"
            ],
            name: {
                en: "Labyrinth of Shadows",
                fr: "Labyrinthe des Ombres",
                es: "Laberinto de Sombras",
                it: "Labirinto delle Ombre",
                de: "Labyrinth der Schatten",
                "pt-br": "Labirinto das Sombras",
                "zh-tw": "暗影迷宮",
                ja: "Labyrinth of Shadows",
                ko: "Labyrinth of Shadows"
            },
            effect: {
                en: "During your opponent's next turn, they can't play any Trainer cards from their hand.",
                fr: "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Dresseur de sa main.",
                es: "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Entrenador de su mano.",
                it: "Il tuo avversario non può giocare le carte Allenatore che ha in mano durante il suo prossimo turno.",
                de: "Dein Gegner kann während seines nächsten Zuges keine Trainerkarten aus seiner Hand spielen.",
                "pt-br": "Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Treinador da mão dele.",
                "zh-tw": "在下個對手的回合,對手無法從手牌使出訓練家卡。",
                ja: "During your opponent's next turn, they can't play any Trainer cards from their hand.",
                ko: "During your opponent's next turn, they can't play any Trainer cards from their hand."
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
