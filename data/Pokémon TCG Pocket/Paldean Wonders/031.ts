import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/031",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/031"
    },
    name: {
        en: "Veluza",
        fr: "Délestin",
        es: "Veluza",
        it: "Veluza",
        de: "Agiluza",
        "pt-br": "Veluza",
        "zh-tw": "輕身鱈",
        pt: "Veluza"
    },
    illustrator: "Oswaldo KATO",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    dexId: [976],
    description: {
        en: "Veluza has excellent regenerative capabilities. It sheds spare flesh from its body to boost its agility, then charges at its prey.",
        "fr": "Délestin possède d’excellentes capacités de régénération. Il se débarrasse de la chair restante de son corps pour augmenter son agilité, puis charge sa proie.",
        "es": "Veluza tiene excelentes capacidades regenerativas. Se desprende de la carne sobrante de su cuerpo para aumentar su agilidad y luego ataca a su presa.",
        "it": "Veluza ha eccellenti capacità rigenerative. Perde la carne in eccesso dal corpo per aumentare la sua agilità, quindi carica la preda.",
        "de": "Agiluza verfügt über hervorragende Regenerationsfähigkeiten. Es wirft überschüssiges Fleisch von seinem Körper ab, um seine Beweglichkeit zu steigern, und greift dann seine Beute an.",
        "pt-br": "Veluza possui excelentes capacidades regenerativas. Ele tira a carne restante de seu corpo para aumentar sua agilidade e depois ataca sua presa.",
        "zh-tw": "輕身鱈具有出色的再生能力。它會從身體上脫落多餘的肉來增強敏捷性，然後向獵物衝鋒。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Shedding Spiral",
                "fr": "Spirale de perte",
                "es": "Espiral derramada",
                "it": "Spirale di spargimento",
                "de": "Haarausfallspirale",
                "pt-br": "Espiral de derramamento",
                "zh-tw": "脫落螺旋"
            },
            damage: "90",
            cost: ["Water", "Colorless", "Colorless", "Colorless"],
            effect: {
                en: "If you have no cards in your deck, this attack can be used for 1 Water Energy.",
                "fr": "Si vous n'avez aucune carte dans votre deck, cette attaque peut être utilisée pour 1 Énergie Eau.",
                "es": "Si no tienes cartas en tu mazo, este ataque se puede usar por 1 Energía de Agua.",
                "it": "Se non hai carte nel tuo mazzo, questo attacco può essere utilizzato per 1 Energia Water.",
                "de": "Wenn Sie keine Karten in Ihrem Deck haben, kann dieser Angriff für 1 Wasserenergie verwendet werden.",
                "pt-br": "Se você não tiver cartas em seu baralho, este ataque pode ser usado por 1 Energia Água.",
                "zh-tw": "如果你的牌組中沒有卡牌，則此攻擊可以消耗 1 點水能量。"
            },
        },
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20",
        },
    ],
    retreat: 2,
};
export default card;
