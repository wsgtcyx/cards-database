import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/057",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/057",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/057",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/057",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/057",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/057",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/057"
    },
    name: {
        en: "Druddigon",
        fr: "Drakkarmin",
        es: "Druddigon",
        it: "Druddigon",
        de: "Shardrago",
        "pt-br": "Druddigon",
        "zh-tw": "赤面龍",
        ko: "크리만",
        ja: "クリムガン"
    },
    illustrator: "kawayoo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Dragon"],
    dexId: [621],
    stage: "Basic",
    description: {
        en: "Druddigon are vicious and cunning. They take up residence in nests dug out by other Pokémon, treating the stolen nests as their own lairs.",
        fr: "Féroce et perfide, Drakkarmin s’approprie\nles terriers creusés par d’autres Pokémon\npour en faire son antre.",
        es: "Posee una personalidad despiadada y ladina.\nSe apropia de los túneles excavados por otros\nPokémon y los habita.",
        it: "Brutale e scaltro, si appropria delle tane scavate\nda altri Pokémon facendone la propria dimora.",
        de: "Shardrago ist grausam und gerissen. Es nimmt die\nselbstgegrabenen Höhlen anderer Pokémon ein,\num sie zu seinem Unterschlupf zu machen.",
        "pt-br": "Druddigon são cruéis e astutos. Eles passam a residir em ninhos escavados por outros Pokémon, tratando os ninhos roubados como seus próprios covis.",
        "zh-tw": "性情凶暴且狡猾。會搶奪\n其他寶可夢挖好的巢穴，\n來當作是自己的窩。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Clutch",
                fr: "Serre",
                es: "Embrague",
                it: "Grinfie",
                de: "Greifer",
                "pt-br": "Agarramento",
                "zh-tw": "緊抓"
            },
            effect: {
                en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
                fr: "Lors du prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
                es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
                it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
                de: "Während des nächsten Zuges deines Gegners kann sich das verteidigende Pokémon nicht zurückziehen.",
                "pt-br": "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
                "zh-tw": "在對手的下一個回合中，守方寶可夢不能撤退。"
            },
            damage: 40
        }
    ],
    retreat: 2
};

export default card;
