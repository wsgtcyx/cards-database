import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/166",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/166",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/166",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/166",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/166",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/166",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/166",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/166",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/166"
    },
    name: {
        en: "Ferroseed",
        "fr": "Grindur",
        "es": "Ferroseed",
        "it": "Ferroseed",
        "de": "Kastadur",
        "pt-br": "Ferroseed",
        "zh-tw": "種子鐵球",
        ja: "テッシード",
        ko: "철시드",
    },
    illustrator: "ryoma uratsuka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    description: {
        en: "Mossy caves are their preferred dwellings.\nEnzymes contained in mosses help Ferroseed's\nspikes grow big and strong.",
        "fr": "Les grottes moussues sont leurs habitations préférées.\nLes enzymes contenues dans les mousses aident Ferroseed\nles pointes deviennent grandes et fortes.",
        "es": "Las cuevas cubiertas de musgo son sus viviendas preferidas.\nLas enzimas contenidas en los musgos ayudan a Ferroseed\nlas espinas crecen grandes y fuertes.",
        "it": "Le grotte muschiose sono le loro dimore preferite.\nGli enzimi contenuti nei muschi aiutano i Ferroseed\nle punte diventano grandi e forti.",
        "de": "Moosbewachsene Höhlen sind ihre bevorzugte Behausung.\nIn Moosen enthaltene Enzyme helfen Ferroseed\nDie Ähren werden groß und stark.",
        "pt-br": "Cavernas cobertas de musgo são suas habitações preferidas.\nAs enzimas contidas nos musgos ajudam o Ferroseed\nos espinhos ficam grandes e fortes.",
        "zh-tw": "長滿青苔的洞穴是他們最喜歡的住所。\n苔蘚中含有的酶有助於 Ferroseed\n穗狀花序長得又大又強。",
        ja: "苔むした 洞窟を 好む。 苔が 含む 酵素が 棘を 大きく 丈夫に 育むのだ。",
        ko: "이끼 낀 동굴을 좋아한다.\n이끼에 함유된 효소가 가시를\n크고 튼튼하게 만들어준다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Rolling Tackle",
                "fr": "Matériel roulant",
                "es": "Aparejo rodante",
                "it": "Contrasto rotolante",
                "de": "Rollendes Gerät",
                "pt-br": "Equipamento de rolamento",
                "zh-tw": "滾動釣具",
                ja: "ころがりタックル",
                ko: "구르기 태클"
            },
            damage: 20,
            cost: ["Metal"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2,
	boosters: [
		"mega-altaria",
		"mega-blaziken",
		"mega-gyarados"
	]
};
export default card;
