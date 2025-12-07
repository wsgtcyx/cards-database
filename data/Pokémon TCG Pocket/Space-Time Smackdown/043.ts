import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    name: {
        en: "Lumineon",
        fr: "Luminéon",
        es: "Lumineon",
        it: "Lumineon",
        de: "Lumineon",
        'pt-br': "Lumineon",
        ko: "네오라이트",
        "zh-tw": "魯米尼恩"
    },
    illustrator: "rika",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    evolveFrom: {
        en: "Finneon",
        "fr": "Finnéon",
        "es": "finneon",
        "it": "Finneon",
        "de": "Finneon",
        "pt-br": "Finneon",
        "zh-tw": "芬尼翁"
    },
    description: {
        en: "With its shining light, it lures its prey close. However, the light also happens to attract ferocious fish Pokémon—its natural predators.",
        fr: "La lumière qu'il émet pour attirer ses\nproies attire également ses prédateurs,\ndes Pokémon poissons féroces.",
        es: "Atrae a sus presas con el destello que emite,\naunque eso también llama la atención de sus\nferoces depredadores marinos.",
        it: "Con la sua luce attira le prede, ma anche i feroci\nPokémon acquatici che sono suoi predatori naturali.",
        de: "Mit seinem Licht lockt es Beute an. Leider\nwerden dadurch auch grausame Fisch-Pokémon\nangezogen – seine natürlichen Fressfeinde.",
        'pt-br': "Ao brilhar intensamente, atrai as presas para perto. Porém,\na luz também chega a atrair Pokémon peixe ferozes, seus\npredadores naturais.",
        ko: "빛으로 먹이를 유인하지만\n천적인 사나운 물고기포켓몬까지\n다가온다.",
        "zh-tw": "它用耀眼的光芒引誘獵物靠近。然而，光線也恰好吸引了兇猛的魚類神奇寶貝——它的天敵。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Waterfall",
                fr: "Cascade",
                es: "Cascada",
                it: "Cascata",
                de: "Kaskade",
                'pt-br': "Cachoeira",
                ko: "폭포오르기",
                "zh-tw": "瀑布"
            },
            damage: 50,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["dialga", "palkia"]
};
export default card;
