import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/180",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/180",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/180",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/180",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/180",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/180",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/180"
    },
    name: {
        en: "Mega Sceptile ex",
        fr: "Méga-Jungko-ex",
        es: "Mega-Sceptile ex",
        it: "Mega Sceptile-ex",
        de: "Mega-Gewaldro-ex",
        "pt-br": "Mega Sceptile ex",
        "zh-tw": "超級蜥蜴王ex",
        ko: "메가나무킹 ex",
        ja: "メガジュカインex"
    },
    illustrator: "PLANETA Mamiya",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 210,
    types: ["Grass"],
    dexId: [254],
    evolveFrom: {
        en: "Grovyle",
        fr: "Massko",
        es: "Grovyle",
        it: "Grovyle",
        de: "Reptain",
        "pt-br": "Grovyle",
        "zh-tw": "森林蜥蜴",
        ko: "나무돌이",
        ja: "ジュプトル"
    },
    stage: "Stage2",
    attacks: [
        {
            cost: ["Grass", "Grass"],
            name: {
                en: "Terminating Tail",
                fr: "Queue Mortelle",
                es: "Coletazo Letal",
                it: "Codata Letale",
                de: "Vernichtender Schweif",
                "pt-br": "Cauda Terminal",
                "zh-tw": "奪命利尾"
            },
            effect: {
                en: "Discard Grass{G} Energy from this Pokémon. Your opponent's Active Pokémon is now Poisoned.",
                fr: "Défaussez l'Énergie Plante{G} de ce Pokémon. Le Pokémon Actif de votre adversaire est désormais Empoisonné.",
                es: "Descarta Energía Hierba{G} de este Pokémon. El Pokémon Activo de tu rival ahora está Envenenado.",
                it: "Scarta Energia Grass{G} da questo Pokémon. Il Pokémon attivo del tuo avversario ora è avvelenato.",
                de: "Lege Grass{G}-Energie von diesem Pokémon ab. Das aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "Descarte a Energia Grass{G} deste Pokémon. O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "丟棄該寶可夢的草{G}能量。你對手的主動寶可夢現在中毒了。"
            },
            damage: 130
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
