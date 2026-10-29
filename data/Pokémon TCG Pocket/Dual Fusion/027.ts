import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/027",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/027",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/027",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/027",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/027",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/027",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/027"
    },
    name: {
        en: "Armarouge",
        fr: "Carmadura",
        es: "Armarouge",
        "pt-br": "Armarouge",
        "zh-tw": "紅蓮鎧騎",
        ja: "グレンアルマ",
        ko: "카디나르마",
        it: "Armarouge",
        de: "Crimanzo"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 120,
    types: [
        "Fire"
    ],
    stage: "Stage1",
    retreat: 2,
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Charcadet",
        fr: "Charbambin",
        es: "Charcadet",
        it: "Charcadet",
        de: "Knarbon",
        "pt-br": "Charcadet",
        "zh-tw": "炭小侍",
        ja: "Charcadet",
        ko: "Charcadet"
    },
    attacks: [
        {
            name: {
                en: "Boundless Power",
                fr: "Puissance Illimitée",
                es: "Poder Ilimitado",
                it: "Potere Incontenibile",
                de: "Unbegrenzte Kraft",
                "pt-br": "Poder Ilimitado",
                "zh-tw": "潛力",
                ja: "Boundless Power",
                ko: "Boundless Power"
            },
            cost: [
                "Fire",
                "Fire",
                "Fire"
            ],
            damage: 130,
            effect: {
                en: "During your next turn, this Pokémon can't attack.",
                fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
                es: "Durante tu próximo turno, este Pokémon no puede atacar.",
                it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
                de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
                "pt-br": "Durante o seu próximo turno, este Pokémon não poderá atacar.",
                "zh-tw": "在下個自己的回合,這隻寶可夢無法使用招式。",
                ja: "During your next turn, this Pokémon can't attack.",
                ko: "During your next turn, this Pokémon can't attack."
            }
        }
    ],
    abilities: [],
    description: {
        en: "Armarouge evolved through the use of a set of armor that belonged to a distinguished warrior. This Pokémon is incredibly loyal.",
        fr: "Il a évolué grâce à l’armure d’une illustre âme guerrière. Ce Pokémon est extrêmement loyal.",
        es: "Evolucionó al portar la armadura de un guerrero de renombre. Este Pokémon destaca por su gran lealtad.",
        it: "Si è evoluto in questa forma grazie all’armatura di un guerriero distintosi sul campo di battaglia. È noto per la sua estrema fedeltà.",
        de: "Es entwickelte sich durch die Rüstung eines heldenhaften Kriegers zu dieser Form. Crimanzo besitzt einen ausgeprägten Sinn für Loyalität.",
        "pt-br": "Armarouge evoluiu ao usar um conjunto de armadura que pertencia a um guerreiro renomado. Este Pokémon é bastante leal.",
        "zh-tw": "藉由立下眾多戰績的戰士所穿的鎧甲進化成的樣子。是忠心耿耿的寶可夢。",
        ja: "Armarouge evolved through the use of a set of armor that belonged to a distinguished warrior. This Pokémon is incredibly loyal.",
        ko: "Armarouge evolved through the use of a set of armor that belonged to a distinguished warrior. This Pokémon is incredibly loyal."
    }
};

export default card;
