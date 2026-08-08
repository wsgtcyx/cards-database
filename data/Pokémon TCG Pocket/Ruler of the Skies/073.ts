import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/073",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/073",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/073",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/073",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/073",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/073",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/073"
    },
    name: {
        en: "Chimecho",
        fr: "Éoko",
        es: "Chimecho",
        it: "Chimecho",
        de: "Palimpalim",
        "pt-br": "Chimecho",
        "zh-tw": "風鈴鈴",
        ko: "치렁",
        ja: "チリーン"
    },
    illustrator: "Shibuzoh.",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    dexId: [358],
    stage: "Basic",
    description: {
        en: "Its cries echo inside its hollow body to emerge as beautiful notes for startling and repelling foes."
    },
    attacks: [
        {
            cost: ["Psychic", "Colorless"],
            name: {
                en: "Extrasensory",
                fr: "Extrasenseur",
                es: "Paranormal",
                it: "Extrasenso",
                de: "Sondersensor",
                "zh-tw": "神通力",
                "pt-br": "Extrassensorial"
            },
            effect: {
                en: "If you have the same number of cards in your hand as your opponent, this attack does 40 more damage.",
                fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 40 dégâts supplémentaires.",
                es: "Si tienes la misma cantidad de cartas en tu mano que tu rival, este ataque hace 40 puntos de daño más.",
                "pt-br": "Se você tiver o mesmo número de cartas na sua mão que seu oponente, este ataque causará 40 pontos de dano a mais.",
                "zh-tw": "若自己的手牌與對手的手牌張數相同,則增加40點傷害。",
                "it": "Se hai lo stesso numero di carte in mano del tuo avversario, questo attacco infligge 40 danni in più.",
                "de": "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, fügt diese Attacke 40 Schadenspunkte mehr zu."
            },
            damage: "40+"
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};
export default card;
