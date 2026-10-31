import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/074",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/074",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/074",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/074",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/074",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/074",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/074",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/074"
    },
    name: {
        en: "Paldean Clodsire",
        fr: "Terraiste de Paldea",
        es: "Clodsire de Paldea",
        "pt-br": "Clodsire de Paldea",
        "zh-tw": "帕底亞土王",
        ja: "パルデアドオー",
        ko: "팔데아토오",
        it: "Clodsire di Paldea",
        de: "Paldea-Suelord"
    },
    illustrator: "Uta",
    rarity: "Three Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 130,
    types: [
        "Fighting"
    ],
    stage: "Stage1",
    retreat: 3,
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Paldean Wooper",
        fr: "Axoloto de Paldea",
        es: "Wooper de Paldea",
        it: "Wooper di Paldea",
        de: "Paldea-Felino",
        "pt-br": "Wooper de Paldea",
        "zh-tw": "帕底亞烏波",
        ja: "パルデアウパー",
        ko: "Paldean Wooper"
    },
    attacks: [
        {
            name: {
                en: "Earthquake",
                fr: "Séisme",
                es: "Terremoto",
                it: "Terremoto",
                de: "Erdbeben",
                "pt-br": "Terremoto",
                "zh-tw": "地震",
                ja: "じしん",
                ko: "Earthquake"
            },
            cost: [
                "Fighting",
                "Fighting",
                "Fighting"
            ],
            damage: 130,
            effect: {
                en: "This attack also does 20 damage to each of your Benched Pokémon.",
                fr: "Cette attaque inflige aussi 20 dégâts à chacun de vos Pokémon de Banc.",
                es: "Este ataque también hace 20 puntos de daño a cada uno de tus Pokémon en Banca.",
                it: "Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella tua panchina.",
                de: "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 20 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 20 pontos de dano a cada um dos seus Pokémon no Banco.",
                "zh-tw": "自己的所有備戰寶可夢也受到20點傷害。",
                ja: "自分のベンチポケモン全員にも20ダメージ。",
                ko: "This attack also does 20 damage to each of your Benched Pokémon."
            }
        }
    ],
    abilities: [],
    description: {
        en: "When attacked, this Pokémon will retaliate by sticking thick spines out from its body. It’s a risky move that puts everything on the line.",
        fr: "Quand on l’attaque, il riposte en faisant sortir de grosses épines de son tronc, une dangereuse technique qui montre qu’il est prêt à tout risquer.",
        es: "Cuando se siente amenazado, repele al enemigo con sus gruesas púas retráctiles. Esta técnica tan peligrosa es un arma de doble filo.",
        it: "Quando si trova sotto attacco, contrattacca sfoderando le spesse spine retrattili, mettendo così a repentaglio anche se stesso.",
        de: "Wird Suelord angegriffen, wehrt es sich, indem es dicke Stacheln ausfährt. Setzt es diese riskante Attacke ein, ist es bereit, aufs Ganze zu gehen.",
        "pt-br": "Quando atacado, este Pokémon revidará esticando espinhos grossos para fora de seu corpo. É um movimento audacioso que coloca tudo em risco.",
        "zh-tw": "一旦遭到敵人襲擊，就會從肋鰭伸出粗壯的刺來反擊。是帶有雙面刃風險的危險招式。",
        ja: "敵に 襲われると 太い 棘を 胴体から 突き出して 反撃。 身を切る 覚悟の 危険な 技。",
        ko: "When attacked, this Pokémon will retaliate by sticking thick spines out from its body. It’s a risky move that puts everything on the line."
    }
};

export default card;
