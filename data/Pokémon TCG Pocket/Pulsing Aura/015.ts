import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/015",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/015",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/015",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/015",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/015",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/015"
    },
    name: {
        en: "Sewaddle",
        fr: "Larveyette",
        es: "Sewaddle",
        it: "Sewaddle",
        de: "Strawickl",
        "pt-br": "Sewaddle",
        "zh-tw": "蟲寶包",
        ko: "두르보",
        ja: "クルミル"
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    dexId: [540],
    stage: "Basic",
    description: {
        en: "The bumps on their heads are sensory organs. When Sewaddle meet, they greet each other by rubbing these bumps together.",
        fr: "Les bosses sur leur tête sont des organes sensoriels. Lorsque les Larveyette se rencontrent, ils se saluent en frottant ces bosses les unes contre les autres.",
        es: "Los bultos que tienen en la cabeza son órganos sensoriales. Cuando Sewaddle se encuentran, se saludan frotando estos bultos.",
        it: "I dossi sulla testa sono organi di senso. Quando gli Sewaddle si incontrano, si salutano strofinando insieme queste protuberanze.",
        de: "Die Beulen auf ihrem Kopf sind Sinnesorgane. Wenn Strawickl sich treffen, begrüßen sie sich, indem sie diese Beulen aneinander reiben.",
        "pt-br": "As protuberâncias em suas cabeças são órgãos sensoriais. Quando Sewaddle se encontram, eles se cumprimentam esfregando essas saliências.",
        "zh-tw": "他們頭上的凸起是感覺器官。當蟲寶包見面時，他們透過摩擦這些凸起來互相打招呼。"
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Gnaw",
                fr: "Ronge",
                es: "Roer",
                it: "Rosicchiamento",
                de: "Nagen",
                "pt-br": "Roída",
                "zh-tw": "咬"
            },
            damage: 20
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
