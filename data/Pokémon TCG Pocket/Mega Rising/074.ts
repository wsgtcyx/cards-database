import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/074",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/074",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/074",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/074",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/074",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/074",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/074",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/074",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/074"
    },
    name: {
        en: "Bergmite",
        "fr": "Grelaçon",
        "es": "Bergmite",
        "it": "Bergmite",
        "de": "Arktip",
        "pt-br": "Bergmite",
        "zh-tw": "冰寶",
        ja: "カチコール",
        ko: "꽁어름",
    },
    illustrator: "Miki Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    description: {
        en: "They live in mountainous regions of frigid cold.\nOn rare occasions, they ride on the back of an\nAvalugg to cross seas and move to new habitats.",
        "fr": "Ils vivent dans des régions montagneuses au froid glacial.\nEn de rares occasions, ils montent à dos d'un\nAvalugg pour traverser les mers et se déplacer vers de nouveaux habitats.",
        "es": "Viven en regiones montañosas de frío glacial.\nEn raras ocasiones, viajan a lomos de un\nAvalugg para cruzar mares y trasladarse a nuevos hábitats.",
        "it": "Vivono in regioni montuose dal freddo gelido.\nIn rare occasioni cavalcano sul dorso di un\nAvalugg attraversa i mari e si sposta verso nuovi habitat.",
        "de": "Sie leben in eiskalten Bergregionen.\nIn seltenen Fällen reiten sie auf dem Rücken eines\nAvalugg soll Meere überqueren und in neue Lebensräume vordringen.",
        "pt-br": "Eles vivem em regiões montanhosas de frio intenso.\nEm raras ocasiões, eles andam nas costas de um\nAvalugg para cruzar mares e mudar para novos habitats.",
        "zh-tw": "他們生活在寒冷的山區。\n在極少數情況下，他們騎在馬背上\nAvalugg 跨越海洋並遷移到新的棲息地。",
        ja: "極寒の 山岳地で 暮らすが まれに クレベースの 背中に 乗り 海を 渡って 棲み処を 変える。",
        ko: "혹한의 산악 지대에 살지만\n드물게 크레베이스의 등에 올라\n바다를 건너 거처를 옮기기도 한다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Icicle",
                "fr": "Stalactite",
                "es": "Carámbano",
                "it": "Ghiacciolo",
                "de": "Eiszapfen",
                "pt-br": "Sincelo",
                "zh-tw": "冰柱",
                ja: "つらら",
                ko: "고드름"
            },
            damage: 30,
            cost: ["Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 2,
	boosters: [
		"mega-gyarados"
	]
};
export default card;
