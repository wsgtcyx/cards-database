import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/112",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/112",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/112",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/112",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/112",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/112",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/112",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/112"
    },
    name: {
        en: "Zangoose",
        fr: "Mangriff",
        es: "Zangoose",
        "pt-br": "Zangoose",
        "zh-tw": "貓鼬斬",
        ja: "ザングース",
        ko: "쟝고",
        it: "Zangoose",
        de: "Sengo"
    },
    illustrator: "DOM",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 80,
    types: [
        "Colorless"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Claw Slash",
                fr: "Tranch'Griffe",
                es: "Cuchillada Garra",
                it: "Lacerartiglio",
                de: "Klauenschlitzer",
                "pt-br": "Golpe de Garra",
                "zh-tw": "利爪劈擊",
                ja: "ツメできりさく",
                ko: "Claw Slash"
            },
            cost: [
                "Colorless"
            ],
            damage: 30
        }
    ],
    abilities: [
        {
            name: {
                en: "Immunity",
                fr: "Vaccin",
                es: "Inmunidad",
                it: "Immunità",
                de: "Immunität",
                "pt-br": "Imunidade",
                "zh-tw": "免疫",
                ja: "めんえき",
                ko: "Immunity"
            },
            effect: {
                en: "This Pokémon can't be affected by any Special Conditions.",
                fr: "Ce Pokémon ne peut être affecté par aucun État Spécial.",
                es: "Este Pokémon no puede verse afectado por ninguna Condición Especial.",
                it: "Questo Pokémon non può essere influenzato da condizioni speciali.",
                de: "Dieses Pokémon kann nicht von Speziellen Zuständen betroffen werden.",
                "pt-br": "Este Pokémon não pode ser afetado por quaisquer Condições Especiais.",
                "zh-tw": "這隻寶可夢不會陷入特殊狀態。",
                ja: "このポケモンは特殊状態にならない。",
                ko: "This Pokémon can't be affected by any Special Conditions."
            },
            type: "Ability"
        }
    ],
    description: {
        en: "It’s Seviper’s archenemy. To threaten those it encounters, it fans out the claws on its front paws.",
        fr: "Mangriff est l’ennemi juré de Séviper. Quand il le croise, il sort instantanément ses griffes pour l’intimider.",
        es: "Le une una relación de enemistad con Seviper. Al toparse con uno, alarga sus afiladas zarpas para intimidarlo.",
        it: "Acerrimo nemico di Seviper. Quando lo incontra, sfodera subito gli artigli per minacciarlo.",
        de: "Dieses Pokémon ist der Erzfeind von Vipitis. Begegnet es ihm, fährt es unverzüglich die Klauen an den Vorderbeinen aus, um es einzuschüchtern.",
        "pt-br": "O arqui-inimigo de Seviper. Para ameaçar aqueles que encontra, exibe as garras em suas patas dianteiras.",
        "zh-tw": "和飯匙蛇是死對頭。一旦撞見彼此，就會立刻張開鋒利的爪子來威嚇對方。",
        ja: "ハブネークとは 因縁の あいだ。 出会うと すかさず 前足の ツメを 広げて 威嚇するのだ。",
        ko: "It’s Seviper’s archenemy. To threaten those it encounters, it fans out the claws on its front paws."
    }
};

export default card;
