import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    name: {
        en: "Kabuto",
        fr: "Kabuto",
        es: "Kabuto",
        it: "Kabuto",
        de: "Kabuto",
        'pt-br': "Kabuto",
        ko: "투구",
        "zh-tw": "兜"
    },
    illustrator: "sui",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    stage: "Stage1",
    evolveFrom: {
        en: "Dome Fossil",
        "fr": "Fossile du Dôme",
        "es": "Fósil de cúpula",
        "it": "Cupola fossile",
        "de": "Kuppelfossil",
        "pt-br": "Cúpula Fóssil",
        "zh-tw": "圓頂化石"
    },
    attacks: [{
            cost: ["Fighting"],
            name: {
                en: "Shell Attack",
                fr: "Coquill-Attaque",
                es: "Ataque Caparazón",
                it: "Gusciattacco",
                de: "Muschelangriff",
                'pt-br': "Ataque Carapaça",
                ko: "등껍질 어택",
                "zh-tw": "砲彈攻擊"
            },
            damage: "40"
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1,
    rarity: "Two Diamond",
    description: {
        en: "This species is almost entirely extinct. Kabuto molt every three days, making their shells harder and harder.",
        fr: "Ce Pokémon au bord de l'extinction mue tous les trois jours\net renforce ainsi davantage sa carapace.",
        es: "Un Pokémon casi extinto. Cada tres\ndías, muda el caparazón, que se va\nendureciendo de forma progresiva.",
        it: "È un Pokémon sull'orlo dell'estinzione. Fa la muta\nogni tre giorni indurendo gradualmente il carapace.",
        de: "Dieses Pokémon ist so gut wie ausgestorben.\nSein Panzer wird immer härter, indem es sich\nalle drei Tage häutet.",
        'pt-br': "Esta espécie está quase extinta. Kabuto\nmudam seus cascos a cada três dias,\ntornando-os cada vez mais rígidos.",
        ko: "거의 멸종된 포켓몬이다.\n3일에 1번 탈피하여\n껍질을 점점 단단하게 만든다.",
        "zh-tw": "這個物種幾乎完全滅絕了。 Kabuto 每三天蛻皮一次，使它們的外殼變得越來越硬。"
    },
    boosters: ["charizard"]
};
export default card;
