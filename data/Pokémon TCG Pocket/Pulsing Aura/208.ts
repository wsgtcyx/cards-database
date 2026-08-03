import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/208",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/208",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/208",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/208",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/208",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/208",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/208"
    },
    name: {
        en: "Blaziken",
        fr: "Braségali",
        es: "Blaziken",
        it: "Blaziken",
        de: "Lohgock",
        "pt-br": "Blaziken",
        "zh-tw": "火焰雞",
        ko: "번치코",
        ja: "バシャーモ"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Fire"],
    dexId: [257],
    evolveFrom: {
        en: "Combusken",
        fr: "Galifeu",
        es: "Combusken",
        it: "Combusken",
        de: "Jungglut",
        "pt-br": "Combusken",
        "zh-tw": "力壯雞",
        ko: "영치코",
        ja: "ワカシャモ"
    },
    stage: "Stage2",
    description: {
        en: "When facing a tough foe, it looses flames from its wrists. Its powerful legs let it jump clear over buildings.",
        fr: "Quand il est face à un ennemi, il laisse s’échapper\ndes gerbes de flammes par ses poignets. Ses jambes\nlui permettent de sauter par-dessus les immeubles.",
        es: "Ante un rival difícil, expulsa llamas por las muñecas.\nTiene mucha fuerza en las patas; hasta puede saltar\nedificios.",
        it: "Quando affronta un forte nemico lancia fiammate\ndai polsi. Le zampe poderose gli permettono di\nscavalcare interi palazzi.",
        de: "Trifft es auf einen hartnäckigen Gegner, schießen\nFlammen aus seinen Handgelenken. Seine starken\nBeine ermöglichen ihm, über Häuser zu springen.",
        "pt-br": "Ao enfrentar um inimigo difícil, ele solta chamas de seus pulsos. Suas pernas poderosas permitem que ele salte sobre edifícios.",
        "zh-tw": "面對強敵時，手腕會釋放火焰。它強大的腿讓它能夠跳過建築物。"
    },
    attacks: [
        {
            cost: ["Fire", "Fire"],
            name: {
                en: "Blaze Kick",
                fr: "Pied Brûleur",
                es: "Patada Ígnea",
                it: "Calciardente",
                de: "Feuerfeger",
                "pt-br": "Chute Labareda",
                "zh-tw": "火焰踢"
            },
            effect: {
                en: "Discard a {R} Energy from this Pokémon.",
                fr: "Défaussez une Énergie {R} de ce Pokémon.",
                es: "Descarta una Energía {R} de este Pokémon.",
                it: "Scarta un'Energia {R} da questo Pokémon.",
                de: "Wirf eine {R}-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte uma Energia {R} deste Pokémon.",
                "zh-tw": "丟棄該寶可夢的 {R} 能量。"
            },
            damage: 100
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
