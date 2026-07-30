import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/121"
    },
    name: {
        en: "Noibat",
        fr: "Sonistrelle",
        es: "Noibat",
        it: "Noibat",
        de: "eF-eM",
        "pt-br": "Noibat",
        "zh-tw": "嗡蝠",
        ko: "음뱃",
        ja: "オンバット"
    },
    illustrator: "UKUMO uiti",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Dragon"],
    dexId: [714],
    stage: "Basic",
    description: {
        en: "Noibat can change the frequency of its sound waves at will, and it generates ultrasonic waves of up to 200,000 hertz."
    },
    attacks: [
        {
            cost: ["Psychic", "Darkness"],
            name: {
                en: "Wing Attack",
                fr: "Attaque d'aile",
                es: "Ataque de ala",
                it: "Attacco d'ala",
                de: "Flügelangriff",
                "pt-br": "Ataque de asa",
                "zh-tw": "翅膀攻擊"
            },
            damage: 40
        }
    ],
    retreat: 1
};

export default card;
