import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/410",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/410",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/410",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/410",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/410",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/410",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/410"
    },
    name: {
        en: "Mega Sceptile ex",
        fr: "Méga-Jungko-ex",
        es: "Mega-Sceptile ex",
        it: "Mega Sceptile-ex",
        de: "Mega-Gewaldro-ex",
        "pt-br": "Mega Sceptile ex",
        "zh-tw": "超級蜥蜴王ex",
        ja: "メガジュカインex",
        ko: "메가나무킹 ex"
    },
    illustrator: "5ban Graphics",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 210,
    types: [
        "Grass"
    ],
    dexId: [
        254
    ],
    evolveFrom: {
        en: "Grovyle",
        fr: "Massko",
        es: "Grovyle",
        it: "Grovyle",
        de: "Reptain",
        "pt-br": "Grovyle",
        "zh-tw": "森林蜥蜴",
        ja: "Grovyle",
        ko: "Grovyle"
    },
    stage: "Stage2",
    attacks: [
        {
            cost: [
                "Grass",
                "Grass"
            ],
            name: {
                en: "Terminating Tail",
                fr: "Queue Mortelle",
                es: "Coletazo Letal",
                it: "Codata Letale",
                de: "Vernichtender Schweif",
                "pt-br": "Cauda Terminal",
                "zh-tw": "奪命利尾",
                ja: "Terminating Tail",
                ko: "Terminating Tail"
            },
            effect: {
                en: "Discard {G} Energy from this Pokémon. Your opponent's Active Pokémon is now Poisoned.",
                fr: "Défaussez Énergie {G} de ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
                es: "Descarta Energía {G} de este Pokémon. El Pokémon Activo de tu rival pasa a estar Envenenado.",
                it: "Rimuovi un'Energia {G} da questo Pokémon. Il Pokémon attivo del tuo avversario viene avvelenato.",
                de: "Lege 1 {G}-Energie von diesem Pokémon ab. Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "Descarte Energia {G} deste Pokémon. O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "將這隻寶可夢身上的個{G}能量丟棄。將對手的戰鬥寶可夢中毒。",
                ja: "Discard {G} Energy from this Pokémon. Your opponent's Active Pokémon is now Poisoned.",
                ko: "Discard {G} Energy from this Pokémon. Your opponent's Active Pokémon is now Poisoned."
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
