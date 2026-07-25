import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/031",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/031",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/031",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/031",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/031",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/031"
    },
    name: {
        en: "Larvesta",
        fr: "Pyronille",
        es: "Larvesta",
        it: "Larvesta",
        de: "Ignivor",
        "pt-br": "Larvesta",
        "zh-tw": "燃燒蟲",
        ko: "활화르바",
        ja: "メラルバ"
    },
    illustrator: "Suwama Chiaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    dexId: [636],
    stage: "Basic",
    description: {
        en: "In ancient times, Larvesta was worshiped as the emissary of the sun. However, it was also viewed as a burden since it often caused forest fires.",
        fr: "Dans les temps anciens, Pyronille était vénéré comme l’émissaire du soleil. Cependant, cela était également considéré comme un fardeau car il provoquait souvent des incendies de forêt.",
        es: "En la antigüedad, Larvesta era adorado como el emisario del sol. Sin embargo, también se consideraba una carga, ya que a menudo provocaba incendios forestales.",
        it: "Nei tempi antichi, Larvesta era venerato come l'emissario del sole. Tuttavia, era anche considerato un peso poiché spesso causava incendi boschivi.",
        de: "In der Antike wurde Ignivor als Abgesandter der Sonne verehrt. Allerdings wurde es auch als Belastung empfunden, da es häufig zu Waldbränden kam.",
        "pt-br": "Nos tempos antigos, Larvesta era adorado como o emissário do sol. No entanto, também era visto como um fardo, uma vez que provocava frequentemente incêndios florestais.",
        "zh-tw": "在古代，燃燒蟲被崇拜為太陽的使者。然而，它也被視為一種負擔，因為它經常引起森林火災。"
    },
    attacks: [
        {
            cost: ["Fire"],
            name: {
                en: "Steady Firebreathing",
                fr: "Crachage de Feu Régulier",
                es: "Lanzallamas Continuo",
                it: "Soffiofuoco Mirato",
                de: "Stetiger Feuerhauch",
                "pt-br": "Hálito de Fogo Constante",
                "zh-tw": "吐火"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
