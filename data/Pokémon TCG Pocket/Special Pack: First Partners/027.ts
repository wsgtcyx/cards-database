import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/027",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/027",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/027",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/027",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/027",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/027",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/027",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/SP1/027"
    },
    name: {
        en: "Quaxly",
        fr: "Coiffeton",
        es: "Quaxly",
        "pt-br": "Quaxly",
        "zh-tw": "潤水鴨",
        ja: "クワッス",
        ko: "꾸왁스",
        it: "Quaxly",
        de: "Kwaks"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: [
        "Water"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Wing Attack",
                fr: "Cru-Ailes",
                es: "Ataque Ala",
                it: "Attacco d’Ala",
                de: "Flügelschlag",
                "pt-br": "Ataque de Asa",
                "zh-tw": "翅膀攻擊",
                ja: "つばさでうつ",
                ko: "Wing Attack"
            },
            cost: [
                "Colorless",
                "Water"
            ],
            damage: 40
        }
    ],
    abilities: [],
    description: {
        en: "This Pokémon migrated to Paldea from distant lands long ago. The gel secreted by its feathers repels water and grime.",
        fr: "Ce Pokémon a autrefois quitté une contrée lointaine pour s’installer à Paldea. Ses plumes sont recouvertes d’un gel qui repousse l’eau et les saletés.",
        es: "Este Pokémon llegó hace mucho tiempo a Paldea procedente de tierras lejanas. El gel que le recubre las plumas repele el agua y la mugre.",
        it: "Questo Pokémon è arrivato a Paldea da terre lontane molto tempo fa. Le sue piume secernono un gel che le protegge dall’acqua e dallo sporco.",
        de: "Dieses Pokémon ist vor langer Zeit aus fernen Ländern nach Paldea gekommen. Das von seinem Gefieder abgesonderte Gel weist Wasser und Schmutz ab.",
        "pt-br": "Este Pokémon migrou para Paldea de terras distantes há muito tempo. O gel secretado por suas penas repele água e sujeira.",
        "zh-tw": "很久以前從遙遠的土地遷徙到帕底亞地區。羽毛分泌的凝膠能排斥水和污垢。",
        ja: "昔 遠い 土地から やって来て 棲みついた。 羽から 分泌する ジェルは 水と 汚れを 弾く。",
        ko: "This Pokémon migrated to Paldea from distant lands long ago. The gel secreted by its feathers repels water and grime."
    }
};

export default card;
