import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/015",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/015",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/015",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/015",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/015",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/015",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/015"
    },
    name: {
        en: "Pawmo",
        fr: "Pohmotte",
        es: "Pawmo",
        it: "Pawmo",
        de: "Pamamo",
        "pt-br": "Pawmo",
        "zh-tw": "布土撥",
        ko: "빠모트",
        ja: "パモット"
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Lightning"],
    dexId: [922],
    evolveFrom: {
        en: "Pawmi",
        fr: "Pohm",
        es: "Pawmi",
        it: "Pawmi",
        de: "Pamo",
        "pt-br": "Pawmi",
        "zh-tw": "布撥",
        ko: "빠모",
        ja: "パモ"
    },
    stage: "Stage1",
    description: {
        en: "Pawmo uses a unique fighting technique in which it uses its forepaws to strike foes and zap them with electricity from its paw pads simultaneously.",
        fr: "Pohmotte utilise une technique de combat unique dans laquelle il utilise ses pattes avant pour frapper les ennemis et les zapper simultanément avec l'électricité de ses coussinets.",
        es: "Pawmo usa una técnica de lucha única en la que usa sus patas delanteras para golpear a los enemigos y atacarlos con electricidad desde las almohadillas de sus patas simultáneamente.",
        it: "Pawmo utilizza una tecnica di combattimento unica in cui usa le zampe anteriori per colpire i nemici e colpirli simultaneamente con l'elettricità proveniente dai polpastrelli.",
        de: "Pamamo verwendet eine einzigartige Kampftechnik, bei der es seine Vorderpfoten nutzt, um Feinde zu schlagen und sie gleichzeitig mit Elektrizität aus seinen Pfotenballen zu belasten.",
        "pt-br": "Pawmo usa uma técnica de luta única na qual usa suas patas dianteiras para atacar os inimigos e acertá-los com eletricidade de suas patas simultaneamente.",
        "zh-tw": "布土撥使用一種獨特的戰鬥技術，它用前爪攻擊敵人，同時用爪墊上的電流擊打敵人。"
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Spark",
                fr: "Étincelle",
                es: "Chispa",
                it: "Scintilla",
                de: "Funkensprung",
                "pt-br": "Faísca",
                "zh-tw": "電光"
            },
            effect: {
                en: "This attack also does 10 damage to 1 of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige également 10 dégâts à 1 des Pokémon de Banc de votre adversaire.",
                es: "Este ataque también hace 10 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge anche 10 danni a 1 dei Pokémon nella panchina del tuo avversario.",
                de: "Dieser Angriff fügt außerdem 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 10 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊也會對對手後備的 1 只寶可夢造成 10 點傷害。"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
