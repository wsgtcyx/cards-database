import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/191",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/191",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/191",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/191",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/191",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/191",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/191"
    },
    name: {
        en: "Quilava",
        fr: "Feurisson",
        es: "Quilava",
        "pt-br": "Quilava",
        "zh-tw": "火岩鼠",
        ja: "マグマラシ",
        ko: "마그케인",
        it: "Quilava",
        de: "Igelavar"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 80,
    types: [
        "Fire"
    ],
    stage: "Stage1",
    retreat: 1,
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Cyndaquil",
        fr: "Héricendre",
        es: "Cyndaquil",
        it: "Cyndaquil",
        de: "Feurigel",
        "pt-br": "Cyndaquil",
        "zh-tw": "火球鼠",
        ja: "Cyndaquil",
        ko: "Cyndaquil"
    },
    attacks: [
        {
            name: {
                en: "Heat Wave",
                fr: "Canicule",
                es: "Onda Ígnea",
                it: "Ondacalda",
                de: "Hitzewelle",
                "pt-br": "Onda de Calor",
                "zh-tw": "熱風",
                ja: "Heat Wave",
                ko: "Heat Wave"
            },
            cost: [
                "Fire",
                "Fire"
            ],
            damage: 30,
            effect: {
                en: "Your opponent's Active Pokémon is now Burned.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
                es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
                it: "Il Pokémon attivo del tuo avversario viene bruciato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "將對手的戰鬥寶可夢灼傷。",
                ja: "Your opponent's Active Pokémon is now Burned.",
                ko: "Your opponent's Active Pokémon is now Burned."
            }
        }
    ],
    abilities: [],
    description: {
        en: "The fur covering this Pokémon’s body never burns, no matter what. It can shrug off any kind of fire attack.",
        fr: "La fourrure qui recouvre ce Pokémon est incombustible et peut résister à n’importe quelle attaque de feu.",
        es: "El pelaje de este Pokémon es ignífugo. Puede soportar cualquier ataque con fuego.",
        it: "La pelliccia che ricopre il suo corpo è completamente ignifuga. Può resistere a qualsiasi attacco di fuoco.",
        de: "Das Fell dieses Pokémon ist nicht entflammbar. Feuer-Angriffe jeglicher Art machen ihm nichts aus.",
        "pt-br": "O pelo que cobre seu corpo nunca queima, não importa o que aconteça. É capaz de resistir a qualquer ataque de fogo.",
        "zh-tw": "一身的毛皮因不會燃燒，無論任何火焰攻擊都能安然無恙。",
        ja: "The fur covering this Pokémon’s body never burns, no matter what. It can shrug off any kind of fire attack.",
        ko: "The fur covering this Pokémon’s body never burns, no matter what. It can shrug off any kind of fire attack."
    }
};

export default card;
