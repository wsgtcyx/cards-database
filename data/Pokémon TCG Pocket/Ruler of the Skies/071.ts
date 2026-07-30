import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/071"
    },
    name: {
        en: "Ralts",
        fr: "Tarsal",
        es: "Ralts",
        it: "Ralts",
        de: "Trasla",
        "pt-br": "Ralts",
        "zh-tw": "拉魯拉絲",
        ko: "랄토스",
        ja: "ラルトス"
    },
    illustrator: "Nagomi Nijo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    dexId: [280],
    stage: "Basic",
    description: {
        en: "It is highly attuned to the emotions of people and POKéMON. It hides if it senses hostility."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Lead",
                fr: "Plomb",
                es: "Dirigir",
                it: "Guida",
                de: "Führen",
                "pt-br": "Liderar",
                "zh-tw": "引路"
            },
            effect: {
                en: "Put a random Supporter card from your deck into your hand.",
                fr: "Mettez une carte Supporter aléatoire de votre deck dans votre main.",
                es: "Pon una carta de Partidario aleatoria de tu mazo en tu mano.",
                it: "Metti nella tua mano una carta Aiuto casuale dal tuo mazzo.",
                de: "Nimm eine zufällige Unterstützerkarte aus deinem Deck auf deine Hand.",
                "pt-br": "Coloque uma carta de Apoiador aleatória do seu baralho na sua mão.",
                "zh-tw": "將你牌庫中的一張隨機支持者卡置入你的手牌。"
            }
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
