import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/051",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/051",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/051",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/051",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/051",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/051",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/051"
    },
    name: {
        en: "Iron Treads",
        fr: "Roue-de-Fer",
        es: "Ferrodada",
        it: "Solcoferreo",
        de: "Eisenrad",
        "pt-br": "Trilho Férreo",
        "zh-tw": "鐵轍跡",
        ko: "무쇠바퀴",
        ja: "テツノワダチ"
    },
    illustrator: "nagimiso",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Metal"],
    dexId: [990],
    stage: "Basic",
    description: {
        en: "Sightings of this Pokémon have occurred in recent years. It resembles a mysterious object described in an old expedition journal.",
        fr: "Des observations de ce Pokémon ont eu lieu ces dernières années. Cela ressemble à un objet mystérieux décrit dans un ancien journal d’expédition.",
        es: "En los últimos años se han producido avistamientos de este Pokémon. Parece un objeto misterioso descrito en un antiguo diario de expedición.",
        it: "Negli ultimi anni si sono verificati avvistamenti di questo Pokémon. Assomiglia ad un oggetto misterioso descritto in un vecchio diario di spedizione.",
        de: "Dieses Pokémon wurde in den letzten Jahren gesichtet. Es ähnelt einem mysteriösen Objekt, das in einem alten Expeditionstagebuch beschrieben wird.",
        "pt-br": "Avistamentos deste Pokémon ocorreram nos últimos anos. Assemelha-se a um objeto misterioso descrito em um antigo diário de expedição.",
        "zh-tw": "近年來常有人目擊這種寶可夢。它類似於一本古老的探險日記中所描述的神秘物體。"
    },
    attacks: [
        {
            cost: ["Metal", "Metal", "Colorless"],
            name: {
                en: "Roll and Release",
                fr: "Rouler et relâcher",
                es: "Rodar y soltar",
                it: "Arrotolare e rilasciare",
                de: "Rollen und loslassen",
                "pt-br": "Role e solte",
                "zh-tw": "放釋滾"
            },
            effect: {
                en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
                fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
                es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara.",
                it: "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
                de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu.",
                "pt-br": "Jogue uma moeda até sair coroa. Este ataque causa 30 pontos de dano a mais para cada cara.",
                "zh-tw": "拋一枚硬幣，直到出現反面。此攻擊對每個頭造成 30 點額外傷害。"
            },
            damage: "50+"
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
