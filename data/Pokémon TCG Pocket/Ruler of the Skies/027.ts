import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/027",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/027",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/027",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/027",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/027",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/027",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/027"
    },
    name: {
        en: "Houndour",
        fr: "Malosse",
        es: "Houndour",
        it: "Houndour",
        de: "Hunduster",
        "pt-br": "Houndour",
        "zh-tw": "戴魯比",
        ko: "델빌",
        ja: "デルビル"
    },
    illustrator: "Kurata So",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    dexId: [228],
    stage: "Basic",
    description: {
        en: "It uses different kinds of cries for communicating with others of its kind and for pursuing its prey.",
        fr: "Quand il communique avec ses semblables, il ne pousse pas les mêmes cris que quand il poursuit une proie.",
        es: "Usa diferentes tipos de aullidos para comunicarse con los de su especie o para perseguir a su presa.",
        it: "Usa versi differenti per comunicare con i suoi simili e per braccare la preda.",
        de: "Sein Ruf bei der Beutejagd unterscheidet sich von dem Ruf, den es zum Kommunizieren mit Artgenossen verwendet.",
        "pt-br": "Usa diferentes tipos de chamados para se comunicar com outros de sua espécie e para perseguir sua presa.",
        "zh-tw": "聯絡夥伴和追逐獵物\n的時候，會分別發出\n不同種類的叫聲。"
    },
    attacks: [
        {
            cost: ["Fire"],
            name: {
                en: "Sharp Claws",
                fr: "Griffes Affûtées",
                es: "Garras Afiladas",
                "pt-br": "Garras Cortantes",
                "zh-tw": "銳利之爪",
                "it": "Artigli Affilati",
                "de": "Scharfe Krallen"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 20 more damage.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts de plus.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
                de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 20 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
                "zh-tw": "擲1次硬幣若為正面,則增加20點傷害。"
            },
            damage: "10+"
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};
export default card;
