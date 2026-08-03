import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/039",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/039",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/039",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/039",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/039",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/039"
    },
    name: {
        en: "Poliwhirl",
        "fr": "Têtarte",
        "es": "Poliwhirl",
        "it": "Poliwhirl",
        "de": "Quaputzi",
        "pt-br": "Poliwhirl",
        "zh-tw": "蚊香君",
    },
    illustrator: "Scav",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    evolveFrom: {
        en: "Poliwag",
        "fr": "Poliwag",
        "es": "Poliwag",
        "it": "Poliwag",
        "de": "Poliwag",
        "pt-br": "Poliwag",
        "zh-tw": "蚊香蝌蚪",
    },
    description: {
        en: "Staring at the swirl on its belly causes drowsiness.\nThis trait of Poliwhirl's has been used in place of\nlullabies to get children to go to sleep.",
        "fr": "Regarder le tourbillon sur son ventre provoque de la somnolence.\nCe trait de Poliwhirl a été utilisé à la place de\ndes berceuses pour endormir les enfants.",
        "es": "Mirar fijamente el remolino en su vientre le provoca somnolencia.\nEste rasgo de Poliwhirl se ha utilizado en lugar de\nCanciones de cuna para que los niños se duerman.",
        "it": "Fissare il turbinio sulla sua pancia provoca sonnolenza.\nQuesta caratteristica di Poliwhirl è stata usata al posto di\nninne nanne per far addormentare i bambini.",
        "de": "Das Starren auf den Wirbel auf seinem Bauch führt zu Schläfrigkeit.\nDiese Eigenschaft von Poliwhirl wurde anstelle von verwendet\nSchlaflieder, um Kinder zum Einschlafen zu bringen.",
        "pt-br": "Olhar para o redemoinho em sua barriga causa sonolência.\nEsta característica de Poliwhirl tem sido usada no lugar de\ncanções de ninar para fazer as crianças dormirem.",
        "zh-tw": "盯著腹部的漩渦會讓人昏昏欲睡。\nPoliwhirl 的這一特性已被用來代替\n搖籃曲讓孩子們入睡。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Wave Splash",
                "fr": "Éclaboussure de vague",
                "es": "Salpicadura de onda",
                "it": "Spruzzo dell'onda",
                "de": "Wellenspritzer",
                "pt-br": "Respingo de onda",
                "zh-tw": "波浪飛濺"
            },
            damage: 30,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
