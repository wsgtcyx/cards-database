import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4a/074",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4a/074",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4a/074",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4a/074",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4a/074",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4a/074",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4a/074",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4a/074",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4a/074"
    },
    name: {
        en: "Yamper",
        "fr": "Voltoutou",
        "es": "Yamper",
        "it": "Yamper",
        "de": "Voldi",
        "pt-br": "Yamper",
        "zh-tw": "來電汪",
        ja: "ワンパチ",
        ko: "멍파치",
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    description: {
        en: "This gluttonous Pokémon only assists people with\ntheir work because it wants treats. As it runs,\nit crackles with electricity.",
        "fr": "Ce Pokémon glouton n'aide les gens qu'avec\nleur travail parce qu'il veut des friandises. Pendant qu'il court,\nça crépite d'électricité.",
        "es": "Este Pokémon glotón sólo ayuda a las personas con\nsu trabajo porque quiere golosinas. Mientras corre,\ncrepita con electricidad.",
        "it": "Questo Pokémon goloso aiuta solo le persone con\nil loro lavoro perché vuole dei dolcetti. Mentre corre,\ncrepita di elettricità.",
        "de": "Dieses gefräßige Pokémon hilft Menschen nur bei\nihre Arbeit, weil sie Leckereien will. Während es läuft,\nes knistert vor Elektrizität.",
        "pt-br": "Este Pokémon guloso só ajuda pessoas com\nseu trabalho porque quer guloseimas. À medida que corre,\nele estala com eletricidade.",
        "zh-tw": "這只貪吃的神奇寶貝只幫助有能力的人\n他們的工作是因為它需要款待。當它運行時，\n它通電時發出劈啪聲。",
        ja: "おやつに 釣られて 人の 仕事を 手伝う 食いしん坊。 パチパチと 電気を まとって ひた走る。",
        ko: "간식에 끌려 사람의 일을\n돕는 먹보다. 탁탁 튀는\n전기를 두르고 계속 달린다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Zap Kick",
                "fr": "Coup de pied Zap",
                "es": "Patada rápida",
                "it": "Calcio di zap",
                "de": "Zap-Kick",
                "pt-br": "Chute Zap",
                "zh-tw": "電擊踢",
                ja: "エレキック",
                ko: "일렉트릭킥"
            },
            damage: 20,
            cost: ["Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
