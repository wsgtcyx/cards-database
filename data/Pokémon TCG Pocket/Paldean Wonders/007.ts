import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/007",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/007",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/007",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/007",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/007",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/007"
    },
    name: {
        en: "Smoliv",
        fr: "Olivini",
        es: "Smoliv",
        it: "Smoliv",
        de: "Olini",
        "pt-br": "Smoliv",
        "zh-tw": "迷你芙",
        pt: "Smoliv"
    },
    illustrator: "yuu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    dexId: [928],
    description: {
        en: "It protects itself from enemies by emitting oil from the fruit on its head. This oil is bitter and astringent enough to make someone flinch.",
        "fr": "Il se protège des ennemis en émettant de l'huile du fruit sur sa tête. Cette huile est suffisamment amère et astringente pour faire tressaillir quelqu’un.",
        "es": "Se protege de los enemigos emitiendo aceite del fruto que tiene en la cabeza. Este aceite es lo suficientemente amargo y astringente como para hacer que alguien se estremezca.",
        "it": "Si protegge dai nemici emettendo olio dal frutto sulla sua testa. Questo olio è abbastanza amaro e astringente da far sussultare qualcuno.",
        "de": "Es schützt sich vor Feinden, indem es Öl aus der Frucht auf seinem Kopf abgibt. Dieses Öl ist so bitter und adstringierend, dass es jemanden zusammenzucken lässt.",
        "pt-br": "Ele se protege dos inimigos emitindo óleo da fruta em sua cabeça. Este óleo é amargo e adstringente o suficiente para fazer alguém estremecer.",
        "zh-tw": "它透過從頭上的果實中噴出油來保護自己免受敵人的侵害。這種油又苦又澀，足以讓人畏縮。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Absorb",
                fr: "Vol-Vie",
                es: "Absorber",
                it: "Assorbimento",
                de: "Absorber",
                "pt-br": "Absorver",
                "zh-tw": "吸收",
                pt: "Absorção"
            },
            damage: "10",
            cost: ["Grass"],
            effect: {
                en: "Heal 10 damage from this Pokémon.",
                fr: "Soignez 10 dégâts à ce Pokémon.",
                es: "Cura 10 puntos de daño a este Pokémon.",
                it: "Cura questo Pokémon da 10 danni.",
                de: "Heile 10 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 10 pontos de dano deste Pokémon.",
                "zh-tw": "治療該寶可夢造成的 10 點傷害。",
                pt: "Cure 10 pontos de dano deste Pokémon."
            },
        },
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
