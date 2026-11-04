import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/069/dfcb5c54a69aae85",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/069/dfcb5c54a69aae85",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/069/dfcb5c54a69aae85",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/069/dfcb5c54a69aae85",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/069/dfcb5c54a69aae85",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/069/dfcb5c54a69aae85",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/069/dfcb5c54a69aae85",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/069/dfcb5c54a69aae85",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/069/dfcb5c54a69aae85"
    },
    name: {
        en: "Floragato",
        fr: "Matourgeon",
        es: "Floragato",
        it: "Floragato",
        de: "Feliospa",
        "pt-br": "Floragato",
        "zh-tw": "蒂蕾喵",
        ko: "나로테",
        ja: "ニャローテ"
    },
    illustrator: "nagimiso",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    dexId: [907],
    evolveFrom: {
        en: "Sprigatito",
        fr: "Poussacha",
        es: "Sprigatito",
        it: "Sprigatito",
        de: "Felori",
        "pt-br": "Sprigatito",
        "zh-tw": "新葉喵",
        ko: "나오하",
        ja: "ニャオハ"
    },
    stage: "Stage1",
    description: {
        en: "The hardness of Floragato’s fur depends on the Pokémon’s mood. When Floragato is prepared to battle, its fur becomes pointed and needle sharp.",
        fr: "La rigidité de ses poils dépend de son état d'esprit. Quand il se prépare au combat, ceux-ci se hérissent et sont acérés comme des aiguilles.",
        es: "La dureza de su pelaje cambia según su estado de ánimo. Cuando se prepara para combatir, se vuelve duro y punzante como agujas.",
        it: "La durezza della pelliccia cambia in base al suo stato d'animo. Quando si accinge alla lotta, il suo pelo diventa irto di punte acuminate come aghi.",
        de: "Die Geschmeidigkeit seines Fells ändert sich je nach Laune des Pokémon. Macht es sich für den Kampf bereit, wird das Fell so spitz wie Nadeln.",
        "pt-br": "A rigidez do pelo de Floragato depende do humor do Pokémon. Quando Floragato está pronto para a batalha, seu pelo fica arrepiado e pontiagudo.",
        "zh-tw": "體毛的硬度會隨心情而變。進入迎戰狀態時，體毛會變得如針般尖銳。",
        ja: "体毛の 硬さは 気分で 変わる。 臨戦態勢になると 針のように 鋭利に 尖るぞ。",
        ko: "털의 강도는 기분에 따라 변한다.\n전투태세에 들어가면\n바늘처럼 예리하고 뾰족해진다."
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Leaf Step",
                fr: "Enjambée de Feuillage",
                es: "Paso Hoja",
                it: "Passofoglia",
                de: "Blattschritt",
                "pt-br": "Passo de Folha",
                "zh-tw": "綠葉舞步",
                ja: "リーフステップ",
                ko: "리프스텝"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
