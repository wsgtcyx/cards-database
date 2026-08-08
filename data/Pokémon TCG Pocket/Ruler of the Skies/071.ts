import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/071",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/071",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/071",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/071",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/071",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/071",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/071"
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
                fr: "Mentor",
                es: "Liderazgo",
                it: "Guida",
                de: "Führen",
                "pt-br": "Liderar",
                "zh-tw": "引路"
            },
            effect: {
                en: "Put a random Supporter card from your deck into your hand.",
                fr: "Ajoutez une carte Supporter au hasard de votre deck à votre main.",
                es: "Pon 1 carta de Partidario aleatoria de tu baraja en tu mano.",
                it: "Metti nella tua mano una carta Aiuto casuale dal tuo mazzo.",
                de: "Nimm eine zufällige Unterstützerkarte aus deinem Deck auf deine Hand.",
                "pt-br": "Coloque 1 carta de Apoiador aleatória do seu baralho na sua mão.",
                "zh-tw": "從自己的牌庫隨機將1張支援者卡加入手牌。"
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
