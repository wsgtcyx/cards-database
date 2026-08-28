import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/102",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/102",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/102",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/102",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/102",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/102",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/102"
    },
    name: {
        en: "Mawile",
        fr: "Mysdibule",
        es: "Mawile",
        it: "Mawile",
        de: "Flunkifer",
        "pt-br": "Mawile",
        "zh-tw": "大嘴娃",
        ko: "입치트",
        ja: "クチート"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 80,
    types: ["Metal"],
    dexId: [303],
    stage: "Basic",
    description: {
        en: "It chomps with its gaping mouth. Its huge jaws are actually steel horns that have been transformed.",
        fr: "Ses cormes d'acier forment une grande mächoire avec laquelle il mord férocement ses adversaires.",
        es: "Sus otrora cuernos de acero se han transformado en grandes fauces con las que muerde a sus enemigos.",
        it: "Le sue corna d'acciaio si sono trasformate in enormi mascelle, con cui morde i nemici.",
        de: "Sein riesiger Kiefer hat sich aus stählernen Hörnern entwickelt. Mit ihm beißt es seine Gegner.",
        "pt-br": "Mastiga de boca aberta. Suas enormes mandibulas, na verdade, são chifres de aco que se transformaram.",
        "zh-tw": "大嘴娃能用自己那由鋼角變化而成的巨大顎部將對手一口緊緊咬住。"
    },
    attacks: [
        {
            cost: ["Metal", "Colorless"],
            name: {
                en: "Cavernous Chomp",
                fr: "Mâchoire Caverneuse",
                es: "Mordisco Cavernoso",
                it: "Mandibola Cavernosa",
                de: "Riesiger Biss",
                "pt-br": "Mastigada Cavernosa",
                "zh-tw": "深咬"
            },
            damage: 50
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
