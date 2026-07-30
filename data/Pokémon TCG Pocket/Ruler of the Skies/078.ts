import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/078"
    },
    name: {
        en: "Oricorio",
        fr: "Plumeline",
        es: "Oricorio",
        it: "Oricorio",
        de: "Choreogel",
        "pt-br": "Oricorio",
        "zh-tw": "花舞鳥",
        ko: "춤추새",
        ja: "オドリドリ"
    },
    illustrator: "mingo",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    dexId: [741],
    stage: "Basic",
    description: {
        en: "The elegant, attractive dance of these Oricorio is popular with adults, but the Oricorio themselves are hard to find in Paldea."
    },
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Supernatural Feather"
            },
            effect: {
                en: "Discard a card from your hand. If you can't, this attack does nothing.",
                fr: "Défaussez une carte de votre main. Si vous n’y parvenez pas, cette attaque ne fait rien.",
                es: "Descarta una carta de tu mano. Si no puedes, este ataque no hace nada.",
                it: "Scarta una carta dalla tua mano. Se non puoi, questo attacco non ha alcun effetto.",
                de: "Wirf eine Karte aus deiner Hand ab. Wenn Sie das nicht können, bewirkt dieser Angriff nichts.",
                "pt-br": "Descarte uma carta da sua mão. Se não conseguir, este ataque não fará nada.",
                "zh-tw": "棄掉你手上的一張牌。如果你做不到，那麼這次攻擊就沒有任何作用。"
            },
            damage: 50
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
