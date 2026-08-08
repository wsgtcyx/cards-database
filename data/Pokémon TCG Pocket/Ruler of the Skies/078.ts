import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/078",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/078",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/078",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/078",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/078",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/078",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/078"
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
                en: "Supernatural Feather",
                fr: "Plume Surnaturelle",
                es: "Pluma Sobrenatural",
                "pt-br": "Pena Sobrenatural",
                "zh-tw": "妖異羽毛"
            },
            effect: {
                en: "Discard a card from your hand. If you can't, this attack does nothing.",
                fr: "Défaussez une carte de votre main. Si vous ne pouvez pas en défausser, cette attaque ne fait rien.",
                es: "Descarta 1 carta de tu mano. Si no puedes, este ataque no hace nada.",
                it: "Scarta una carta dalla tua mano. Se non puoi, questo attacco non ha alcun effetto.",
                de: "Wirf eine Karte aus deiner Hand ab. Wenn Sie das nicht können, bewirkt dieser Angriff nichts.",
                "pt-br": "Descarte uma carta da sua mão. Se não puder fazer isso, este ataque não fará nada.",
                "zh-tw": "從自己的手牌抽出1張丟棄。若無法丟棄,則這個招式失敗。"
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
