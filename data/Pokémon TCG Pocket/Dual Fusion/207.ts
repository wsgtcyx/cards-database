import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/207",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/207",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/207",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/207",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/207",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/207",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/207",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/207"
    },
    name: {
        en: "Mega Sceptile ex",
        fr: "Méga-Jungko-ex",
        es: "Mega-Sceptile ex",
        "pt-br": "Mega Sceptile ex",
        "zh-tw": "超級蜥蜴王ex",
        ja: "メガジュカインex",
        ko: "메가나무킹 ex",
        it: "Mega Sceptile-ex",
        de: "Mega-Gewaldro-ex"
    },
    illustrator: "PLANETA Mamiya",
    rarity: "Two Shiny",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 210,
    types: [
        "Grass"
    ],
    stage: "Stage2",
    retreat: 1,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Grovyle",
        fr: "Massko",
        es: "Grovyle",
        it: "Grovyle",
        de: "Reptain",
        "pt-br": "Grovyle",
        "zh-tw": "森林蜥蜴",
        ja: "ジュプトル",
        ko: "Grovyle"
    },
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Terminating Tail",
                fr: "Queue Mortelle",
                es: "Coletazo Letal",
                it: "Codata Letale",
                de: "Vernichtender Schweif",
                "pt-br": "Cauda Terminal",
                "zh-tw": "奪命利尾",
                ja: "デッドリーテール",
                ko: "Terminating Tail"
            },
            cost: [
                "Grass",
                "Grass"
            ],
            damage: 130,
            effect: {
                en: "Discard a {G} Energy from this Pokémon. Your opponent's Active Pokémon is now Poisoned.",
                fr: "Défaussez une Énergie {G} de ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
                es: "Descarta 1 Energía {G} de este Pokémon. El Pokémon Activo de tu rival pasa a estar Envenenado.",
                it: "Rimuovi un'Energia {G} da questo Pokémon. Il Pokémon attivo del tuo avversario viene avvelenato.",
                de: "Lege 1 {G}-Energie von diesem Pokémon ab. Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "Descarte 1 Energia {G} deste Pokémon. O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "將這隻寶可夢身上的1個{G}能量丟棄。將對手的戰鬥寶可夢中毒。",
                ja: "このポケモンから{G}エネルギーを1個トラッシュ。相手のバトルポケモンをどくにする。",
                ko: "Discard a {G} Energy from this Pokémon. Your opponent's Active Pokémon is now Poisoned."
            }
        }
    ],
    abilities: []
};

export default card;
