import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/024",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/024",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/024",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/024",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/024",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/024",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/024"
    },
    name: {
        en: "Smoliv",
        fr: "Olivini",
        es: "Smoliv",
        it: "Smoliv",
        de: "Olini",
        "pt-br": "Smoliv",
        "zh-tw": "迷你芙",
        ja: "ミニーブ",
        ko: "미니브"
    },
    illustrator: "yuu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Grass"
    ],
    dexId: [
        928
    ],
    description: {
        en: "It protects itself from enemies by emitting oil from the fruit on its head. This oil is bitter and astringent enough to make someone flinch.",
        fr: "Le fruit qui surmonte sa tête sécrète une huile qui le protège de ses adversaires. Ce liquide a un goût si désagréable qu'il fait grimacer.",
        es: "Se defiende de sus rivales segregando por el fruto de su cabeza un aceite tan amargo y agrio que cualquiera daría un respingo al probarlo.",
        it: "Si protegge dai nemici secernendo un olio dal gusto incredibilmente amaro e allappante dal frutto che ha sulla testa.",
        de: "Um sich vor Feinden zu schützen, sondert es aus der Frucht auf seinem Kopf Öl ab. Dieses ist so bitter, dass es einen zusammenzucken lässt.",
        "pt-br": "Protege-se dos inimigos liberando azeite da fruta em sua cabeça. O azeite é amargo e tão forte que é capaz de fazer alguém desistir de atacar.",
        "zh-tw": "會從頭上的果實噴出油來保護自己不受敵人攻擊。油的味道苦澀到會讓人跳起來。",
        ja: "It protects itself from enemies by emitting oil from the fruit on its head. This oil is bitter and astringent enough to make someone flinch.",
        ko: "It protects itself from enemies by emitting oil from the fruit on its head. This oil is bitter and astringent enough to make someone flinch."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Absorb",
                fr: "Vole-Vie",
                es: "Absorber",
                it: "Assorbimento",
                de: "Absorber",
                "pt-br": "Absorção",
                "zh-tw": "吸取",
                pt: "Absorção",
                ja: "Absorb",
                ko: "Absorb"
            },
            damage: 10,
            cost: [
                "Grass"
            ],
            effect: {
                en: "Heal 10 damage from this Pokémon.",
                fr: "Soignez 10 dégâts de ce Pokémon.",
                es: "Cura 10 puntos de daño a este Pokémon.",
                it: "Cura questo Pokémon da 10 danni.",
                de: "Heile 10 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 10 pontos de dano deste Pokémon.",
                "zh-tw": "將這隻寶可夢恢復10HP。",
                pt: "Cure 10 pontos de dano deste Pokémon.",
                ja: "Heal 10 damage from this Pokémon.",
                ko: "Heal 10 damage from this Pokémon."
            }
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
