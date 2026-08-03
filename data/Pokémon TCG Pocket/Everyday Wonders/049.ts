import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/049",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/049",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/049",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/049",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/049",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/049",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/049"
    },
    name: {
        en: "Hisuian Sliggoo",
        fr: "Colimucus de Hisui",
        es: "Sliggoo de Hisui",
        it: "Sliggoo di Hisui",
        de: "Hisui-Viscargot",
        "pt-br": "Sliggoo de Hisui",
        "zh-tw": "洗翠 黏美兒",
        ko: "히스이 미끄네일",
        ja: "ヒスイ ヌメイル"
    },
    illustrator: "Kouki Saitou",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Dragon"],
    dexId: [705],
    evolveFrom: {
        en: "Goomy",
        fr: "Mucuscule",
        es: "Goomy",
        it: "Goomy",
        de: "Viscora",
        "pt-br": "Goomy",
        "zh-tw": "黏黏寶",
        ko: "미끄메라",
        ja: "ヌメラ"
    },
    stage: "Stage1",
    description: {
        en: "A creature given to melancholy. I suspect its metallic shell developed as a result of the mucus on its skin reacting with the iron in Hisui’s water.",
        fr: "Une créature mélancolique. Je soupçonne que sa coque métallique s’est développée à la suite de la réaction du mucus sur sa peau avec le fer contenu dans l’eau d’Hisui.",
        es: "Una criatura dada a la melancolía. Sospecho que su capa metálica se desarrolló como resultado de la reacción del moco en su piel con el hierro en el agua de Hisui.",
        it: "Una creatura dedita alla malinconia. Sospetto che il suo guscio metallico si sia sviluppato a causa della reazione del muco sulla pelle con il ferro presente nell'acqua di Hisui.",
        de: "Ein Wesen, das zur Melancholie neigt. Ich vermute, dass seine metallische Hülle durch die Reaktion des Schleims auf seiner Haut mit dem Eisen in Hisuis Wasser entstanden ist.",
        "pt-br": "Uma criatura dada à melancolia. Suspeito que sua concha metálica se desenvolveu como resultado da reação do muco de sua pele com o ferro da água de Hisui.",
        "zh-tw": "一種生來憂鬱的生物。我懷疑它的金屬外殼是由於其皮膚上的粘液與翡翠水中的鐵發生反應而形成的。"
    },
    attacks: [
        {
            cost: ["Water", "Metal"],
            name: {
                en: "Hammer In",
                fr: "Enfoncement",
                es: "Martillear",
                it: "Martello",
                de: "Einhämmern",
                "pt-br": "Martelada",
                "zh-tw": "頭突"
            },
            damage: 60
        }
    ],
    retreat: 3
};

export default card;
