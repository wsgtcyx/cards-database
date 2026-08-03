import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/216",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/216",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/216",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/216",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/216",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/216",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/216"
    },
    name: {
        en: "Muk",
        fr: "Grotadmorv",
        es: "Muk",
        it: "Muk",
        de: "Sleimok",
        "pt-br": "Muk",
        "zh-tw": "臭臭泥",
        ko: "질뻐기",
        ja: "ベトベトン"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 130,
    types: ["Darkness"],
    dexId: [89],
    evolveFrom: {
        en: "Grimer",
        fr: "Tadmorv",
        es: "Grimer",
        it: "Grimer",
        de: "Sleima",
        "pt-br": "Grimer",
        "zh-tw": "臭泥",
        ko: "질퍽이",
        ja: "ベトベター"
    },
    stage: "Stage1",
    description: {
        en: "They love to gather in smelly areas where sludge accumulates, making the stench around them worse.",
        fr: "Il recherche les endroits sales où il y a des ordures\npour y établir son habitat puant et infect.",
        es: "Les encanta reunirse en zonas apestosas donde se\nacumula el lodo, haciendo su olor más insoportable.",
        it: "Amano riunirsi vicino a puzzolenti liquami di scolo,\nrendendo il fetore ancora più intenso.",
        de: "Sie treffen sich an stinkenden Orten, an denen der\nSchleim sich türmt. Dies merkt man am Gestank.",
        "pt-br": "Eles adoram se reunir em áreas malcheirosas onde o lodo se acumula, piorando o fedor ao seu redor.",
        "zh-tw": "它們喜歡聚集在污泥堆積的臭地方，使周圍的惡臭變得更嚴重。"
    },
    attacks: [
        {
            cost: ["Darkness", "Darkness", "Darkness"],
            name: {
                en: "Gunk Shot",
                fr: "Détricanon",
                es: "Lanzamugre",
                it: "Sporcolancio",
                de: "Mülltreffer",
                "pt-br": "Tiro de Sujeira",
                "zh-tw": "垃圾射擊"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                fr: "Le Pokémon Actif de votre adversaire est désormais Empoisonné.",
                es: "El Pokémon Activo de tu rival ahora está Envenenado.",
                it: "Il Pokémon attivo del tuo avversario ora è avvelenato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "你對手的戰鬥寶可夢現在中毒了。"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
