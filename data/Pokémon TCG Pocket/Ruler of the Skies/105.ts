import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/105"
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
    illustrator: "0313",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Metal"],
    dexId: [303],
    stage: "Basic",
    description: {
        en: "It chomps with its gaping mouth. Its huge jaws are actually steel horns that have been transformed.",
        fr: "Ses cornes d’acier forment une grande mâchoire\navec laquelle il mord férocement ses adversaires.",
        es: "Sus otrora cuernos de acero se han transformado\nen grandes fauces con las que muerde a sus\nenemigos.",
        it: "Le sue corna d’acciaio si sono trasformate in\nenormi mascelle, con cui morde i nemici.",
        de: "Sein riesiger Kiefer hat sich aus stählernen\nHörnern entwickelt. Mit ihm beißt es seine\nGegner.",
        "zh-tw": "大嘴娃能用自己那由鋼角\n變化而成的巨大顎部\n將對手一口緊緊咬住。"
    },
    attacks: [
        {
            cost: ["Metal", "Colorless"],
            name: {
                en: "Play Rough",
                fr: "Câlinerie",
                es: "Carantoña",
                it: "Carineria",
                de: "Knuddler",
                "pt-br": "Jogo Duro",
                "zh-tw": "嬉鬧"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 20 more damage.",
                fr: "Lancez une pièce de monnaie. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
                es: "Lanza una moneda. Si sale cara, este ataque hace 20 daños más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
                de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 20 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 20 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，這次攻擊會造成 20 點額外傷害。"
            },
            damage: "40+"
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
