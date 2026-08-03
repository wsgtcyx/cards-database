import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/120",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/120",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/120",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/120",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/120",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/120",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/120"
    },
    name: {
        en: "Pawmo",
        fr: "Pohmotte",
        es: "Pawmo",
        it: "Pawmo",
        de: "Pamamo",
        "pt-br": "Pawmo",
        "zh-tw": "布土撥",
        'es-mx': "Pawmo",
        pt: "Pawmo"
    },
    illustrator: "whomor Inc.",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 90,
    types: ["Lightning"],
    dexId: [922],
    evolveFrom: {
        en: "Pawmi",
        fr: "Pohm",
        es: "Pawmi",
        it: "Pawmi",
        de: "Pamo",
        'pt-br': "Pawmi",
        "zh-tw": "布撥",
        ko: "빠모"
    },
    stage: "Stage1",
    description: {
        en: "Pawmo uses a unique fighting technique in which it uses its forepaws to strike foes and zap them with electricity from its paw pads simultaneously.",
        "fr": "Pohmotte utilise une technique de combat unique dans laquelle il utilise ses pattes avant pour frapper les ennemis et les zapper simultanément avec l'électricité de ses coussinets.",
        "es": "Pawmo usa una técnica de lucha única en la que usa sus patas delanteras para golpear a los enemigos y atacarlos con electricidad desde las almohadillas de sus patas simultáneamente.",
        "it": "Pawmo utilizza una tecnica di combattimento unica in cui usa le zampe anteriori per colpire i nemici e colpirli simultaneamente con l'elettricità proveniente dai polpastrelli.",
        "de": "Pamamo verwendet eine einzigartige Kampftechnik, bei der es seine Vorderpfoten nutzt, um Feinde zu schlagen und sie gleichzeitig mit Elektrizität aus seinen Pfotenballen zu belasten.",
        "pt-br": "Pawmo usa uma técnica de luta única na qual usa suas patas dianteiras para atacar os inimigos e acertá-los com eletricidade de suas patas simultaneamente.",
        "zh-tw": "布土撥使用一種獨特的戰鬥技術，它用前爪攻擊敵人，同時用爪墊上的電流擊打敵人。"
    },
    attacks: [
        {
            name: {
                en: "Head Bolt",
                fr: "Éclair Frontal",
                es: "Rayo de Cabeza",
                it: "Zuccalampo",
                de: "Kopf-Blitz",
                "pt-br": "Parafuso de cabeça",
                "zh-tw": "頭部螺栓",
                pt: "Raio de Cabeça",
                'es-mx': "Rayo Capital"
            },
            damage: 30,
            cost: ["Lightning"],
        },
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
