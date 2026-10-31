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
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/031",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/031",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3/031",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3/031"
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
        "zh-tw": "在古代，燃燒蟲被崇拜為太陽的使者。然而，它也被視為一種負擔，因為它經常引起森林火災。",
        ja: "大昔は 太陽の遣い と 崇められたが しばしば 山火事を 起こすこともあり 煙たがられた。",
        ko: "먼 옛날에는 태양의 사자라며\n떠받들어졌으나, 여러 차례\n산불을 일으킨 까닭에 멀리하게 되었다."
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
                "zh-tw": "吐火",
                ja: "ひをはく",
                ko: "불토하기"
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
