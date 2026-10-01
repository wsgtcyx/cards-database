import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/161",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/161",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/161",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/161",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/161",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/161",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/161"
    },
    name: {
        en: "Honedge",
        fr: "Monorpale",
        es: "Honedge",
        it: "Honedge",
        de: "Gramokles",
        "pt-br": "Honedge",
        "zh-tw": "獨劍鞘",
        ja: "ヒトツキ",
        ko: "단칼빙"
    },
    illustrator: "Suwama Chiaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Metal"
    ],
    description: {
        en: "The blue eye on the sword's handguard is the\ntrue body of Honedge. With its old cloth, it\ndrains people's lives away.",
        fr: "L'œil bleu sur la garde de la lame est le véritable corps de Monorpale. Il aspire l'énergie vitale des gens avec son étoffe usée par le temps.",
        es: "El ojo azul de la empuñadura es su verdadero cuerpo. Absorbe la energía vital de las personas con su paño de aspecto andrajoso.",
        it: "L'occhio blu sull'elsa della spada è il suo vero corpo. Usa il drappo consunto per assorbire la forza vitale degli uomini.",
        de: "Das blaue Auge auf der Parierstange ist sein wahrer Körper. Mithilfe eines alten Tuchs absorbiert es die Lebenskraft von Menschen.",
        "pt-br": "O olho azul na empunhadura da espada é o verdadeiro corpo de Honedge, que suga a vida das pessoas com seu tecido velho.",
        "zh-tw": "獨劍鞘護手上的藍色眼珠是牠的本體。會用陳舊的布吸取人類的精氣。",
        ja: "The blue eye on the sword's handguard is the\ntrue body of Honedge. With its old cloth, it\ndrains people's lives away.",
        ko: "The blue eye on the sword's handguard is the\ntrue body of Honedge. With its old cloth, it\ndrains people's lives away."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Pierce",
                fr: "Transpercement",
                es: "Perforar",
                it: "Perforare",
                de: "Durchbohren",
                "pt-br": "Perfurar",
                "zh-tw": "突刺",
                ja: "Pierce",
                ko: "Pierce"
            },
            damage: 20,
            cost: [
                "Metal"
            ]
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
