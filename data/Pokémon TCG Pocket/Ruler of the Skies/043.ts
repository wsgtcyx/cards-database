import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/043",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/043",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/043",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/043",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/043",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/043",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/043"
    },
    name: {
        en: "Dewott",
        fr: "Mateloutre",
        es: "Dewott",
        it: "Dewott",
        de: "Zwottronin",
        "pt-br": "Dewott",
        "zh-tw": "雙刃丸",
        ko: "쌍검자비",
        ja: "フタチマル"
    },
    illustrator: "Megumi Higuchi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    dexId: [502],
    evolveFrom: {
        en: "Oshawott",
        fr: "Moustillon",
        es: "Oshawott",
        it: "Oshawott",
        de: "Ottaro",
        "pt-br": "Oshawott",
        "zh-tw": "水水獺",
        ko: "수댕이",
        ja: "ミジュマル"
    },
    stage: "Stage1",
    description: {
        en: "Dewott has a studious and stern personality. It masters the use of its scalchops through dedicated, repeated training.",
        fr: "Grâce à un entraînement rigoureux et répété, ce Pokémon consciencieux et assidu maîtrise l'usage de ses « coupillages ».",
        es: "Estoico y diligente, perfecciona el manejo de sus cuchilleiras mediante un entrenamiento basado en la constancia y la repetición.",
        it: "Ha un'indole coscienziosa e austera. Padroneggia l'uso delle sue mollusciabole grazie a un costante e scrupoloso esercizio.",
        de: "Es ist fleißig und diszipliniert. Durch regelmäßiges sowie hingebungsvolles Training hat es sich die Handhabung seiner Muscheln zu eigen gemacht.",
        "pt-br": "Dewott tem uma personalidade rígida e aplicada. Domina o uso de suas scalchops treinando repetidamente e com muito esforço.",
        "zh-tw": "性情勤勉，嚴以律己。\n會透過紮實的反覆練習，\n學成運用扇貝貝的刀法。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Razor Shell",
                fr: "Coqui-Lame",
                es: "Concha Filo",
                it: "Conchilama",
                de: "Kalkklinge",
                "zh-tw": "貝殼刃",
                "pt-br": "Concha Navalha"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                de: "Wirf eine Münze. Bei „Kopf“ verursacht dieser Angriff 30 weitere Schadenspunkte.",
                "pt-br": "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
                "zh-tw": "擲1次硬幣若為正面,則增加30點傷害。"
            },
            damage: "20+"
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
