import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/118",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/118",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/118",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/118",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/118",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/118",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/118"
    },
    name: {
        en: "Bewear ex",
        fr: "Chelours-ex",
        es: "Bewear ex",
        "pt-br": "Bewear ex",
        "zh-tw": "穿著熊ex",
        ja: "キテルグマex",
        ko: "이븐곰 ex",
        it: "Bewear-ex",
        de: "Kosturso-ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 160,
    types: [
        "Colorless"
    ],
    stage: "Stage1",
    retreat: 3,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Stufful",
        fr: "Nounourson",
        es: "Stufful",
        it: "Stufful",
        de: "Velursi",
        "pt-br": "Stufful",
        "zh-tw": "童偶熊",
        ja: "Stufful",
        ko: "Stufful"
    },
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Hyper Lariat",
                fr: "Hyper Lasso",
                es: "Hiperlazo",
                it: "Iper Lariat",
                de: "Hyperlasso",
                "pt-br": "Hiperlaço",
                "zh-tw": "必殺金勾臂",
                ja: "Hyper Lariat",
                ko: "Hyper Lariat"
            },
            cost: [
                "Colorless",
                "Colorless",
                "Colorless"
            ],
            damage: "100+",
            effect: {
                en: "Flip 2 coins. If both of them are heads, this attack does 100 more damage.",
                fr: "Lancez 2 pièces. Si toutes sont côté face, cette attaque inflige 100 dégâts de plus.",
                es: "Lanza 2 monedas. Si en las dos sale cara, este ataque hace 100 puntos de daño más.",
                it: "Lancia 2 volte una moneta. Se esce testa entrambe le volte, questo attacco infligge 100 danni in più.",
                de: "Wirf 2 Münzen. Zeigen beide Münzen Kopf, fügt diese Attacke 100 Schadenspunkte mehr zu.",
                "pt-br": "Jogue 2 moedas. Se as duas saírem cara, este ataque causará 100 pontos de dano a mais.",
                "zh-tw": "擲2次硬幣,若全部為正面,則增加100點傷害。",
                ja: "Flip 2 coins. If both of them are heads, this attack does 100 more damage.",
                ko: "Flip 2 coins. If both of them are heads, this attack does 100 more damage."
            }
        }
    ],
    abilities: []
};

export default card;
