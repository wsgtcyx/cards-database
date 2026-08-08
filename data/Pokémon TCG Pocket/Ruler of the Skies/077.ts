import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/077",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/077",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/077",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/077",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/077",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/077",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/077"
    },
    name: {
        en: "Hoopa",
        fr: "Hoopa",
        es: "Hoopa",
        it: "Hoopa",
        de: "Hoopa",
        "pt-br": "Hoopa",
        "zh-tw": "胡帕",
        ko: "후파",
        ja: "フーパ"
    },
    illustrator: "akagi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    dexId: [720],
    stage: "Basic",
    description: {
        en: "It gathers things it likes and passes them through its loop to teleport them to a secret place.",
        fr: "Il a la faculté de téléporter les choses en les faisant\npasser au travers de ses anneaux. Il envoie les objets\nqui lui plaisent dans une cachette connue de lui seul.",
        es: "Reúne los objetos que le atraen para esconderlos\nen una guarida secreta, teletransportándolos a\ntravés de sus anillos.",
        it: "Usa i suoi anelli per intrappolare qualunque cosa\ngli piaccia e teletrasportarla in un luogo segreto.",
        de: "Mithilfe seiner Ringe hortet es Dinge, die ihm gefallen,\nan einem geheimen Ort. Es teleportiert diese, indem es\nsie durch seine Ringe bewegt."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Mischievous Ring",
                fr: "Anneau Facétieux",
                es: "Anillo Travieso",
                "pt-br": "Anel Travesso",
                "zh-tw": "惡作劇圓環",
                "it": "Anello Monello",
                "de": "Schabernackring"
            },
            effect: {
                en: "Before doing damage, shuffle all Pokémon Tools from each of your opponent's Pokémon into their deck.",
                fr: "Avant d'infliger des dégâts, mélangez tous les Outils Pokémon de chacun des Pokémon de votre adversaire avec son deck.",
                es: "Antes de infligir daño, pon todas las Herramientas Pokémon de cada uno de los Pokémon de tu rival en su baraja y baraja todas las cartas.",
                "pt-br": "Antes de causar dano, embaralhe todas as Ferramentas Pokémon de cada um dos Pokémon do seu oponente no baralho dele.",
                "zh-tw": "在造成傷害前,將對手的所有寶可夢身上的「寶可夢道具」卡全部放回對手的牌庫。"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};
export default card;
