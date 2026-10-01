import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/340",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/340",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/340",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/340",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/340",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/340",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/340"
    },
    name: {
        en: "Aegislash",
        fr: "Exagide",
        es: "Aegislash",
        it: "Aegislash",
        de: "Durengard",
        "pt-br": "Aegislash",
        "zh-tw": "堅盾劍怪",
        ja: "ギルガルド",
        ko: "킬가르도"
    },
    illustrator: "Ryuta Fuse",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: [
        "Metal"
    ],
    evolveFrom: {
        en: "Doublade",
        fr: "Dimoclès",
        es: "Doublade",
        it: "Doublade",
        de: "Duokles",
        "pt-br": "Doublade",
        "zh-tw": "雙劍鞘",
        ja: "Doublade",
        ko: "Doublade"
    },
    description: {
        en: "Its potent spectral powers allow it to manipulate\nothers. It once used its powers to force people\nand Pokémon to build a kingdom to its liking.",
        fr: "Grâce à ses puissants pouvoirs spirituels, il a contrôlé des humains et des Pokémon pour créer un pays conforme à ses idéaux.",
        es: "Mediante el control ejercido con su inmenso poder espectral, logró que humanos y Pokémon le forjaran un país a medida de sus necesidades.",
        it: "Ha manipolato il pensiero di esseri umani e Pokémon con il suo potere spettrale facendogli costruire un paese adatto alle sue esigenze.",
        de: "Mithilfe seiner mysteriösen Kräfte kontrollierte es Menschen und Pokémon und ließ sie ein Land nach seinen Vorstellungen erschaffen.",
        "pt-br": "Seus formidáveis poderes espectrais permitem que Aegislash manipule os outros. Certa vez, usou seus poderes para forçar pessoas e Pokémon a construir um reino segundo os seus caprichos.",
        "zh-tw": "堅盾劍怪曾經用強大的靈力控制人和寶可夢，建立了適合自己生活的國家。",
        ja: "Its potent spectral powers allow it to manipulate\nothers. It once used its powers to force people\nand Pokémon to build a kingdom to its liking.",
        ko: "Its potent spectral powers allow it to manipulate\nothers. It once used its powers to force people\nand Pokémon to build a kingdom to its liking."
    },
    stage: "Stage2",
    attacks: [
        {
            name: {
                en: "Superb Shield",
                fr: "Bouclier Exquis",
                es: "Escudo Magno",
                it: "Scudo Superbo",
                de: "Grandioser Schild",
                "pt-br": "Escudo Espetacular",
                "zh-tw": "卓越盾牌",
                ja: "Superb Shield",
                ko: "Superb Shield"
            },
            damage: 80,
            cost: [
                "Metal",
                "Metal",
                "Metal"
            ],
            effect: {
                en: "During your opponent's next turn, this Pokémon takes −80 damage from attacks from your opponent's Pokémon ex.",
                fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit − 80 dégâts provenant des attaques des Pokémon‐ex de votre adversaire.",
                es: "Durante el próximo turno de tu rival, los ataques de los Pokémon ex de tu rival hacen ‐80 puntos de daño a este Pokémon.",
                it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -80 danni dagli attacchi dei Pokémon-ex avversari.",
                de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken von Pokémon-ex deines Gegners -80 Schadenspunkte zugefügt.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon receberá −80 pontos de dano de ataques dos Pokémon ex do seu oponente.",
                "zh-tw": "在下個對手的回合,這隻寶可夢受到對手的「寶可夢ex」招式的傷害-80點。",
                ja: "During your opponent's next turn, this Pokémon takes −80 damage from attacks from your opponent's Pokémon ex.",
                ko: "During your opponent's next turn, this Pokémon takes −80 damage from attacks from your opponent's Pokémon ex."
            }
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
