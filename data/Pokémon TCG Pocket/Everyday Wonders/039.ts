import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/039",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/039"
    },
    name: {
        en: "Sandygast",
        fr: "Bacabouh",
        es: "Sandygast",
        it: "Sandygast",
        de: "Sankabuh",
        "pt-br": "Sandygast",
        "zh-tw": "沙丘娃",
        ko: "모래꿍",
        ja: "スナバァ"
    },
    illustrator: "Sekio",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    dexId: [769],
    stage: "Basic",
    description: {
        en: "It flings sand into the eyes of its prey and tries to close in on them while they’re blinded, but since Sandygast is so slow, the prey tends to escape.",
        fr: "Il jette du sable dans les yeux de ses proies et tente de se rapprocher d'elles pendant qu'elles sont aveuglées, mais comme Bacabouh est si lent, la proie a tendance à s'échapper.",
        es: "Arroja arena a los ojos de su presa e intenta acercarse a ellos mientras está ciega, pero como Sandygast es tan lento, la presa tiende a escapar.",
        it: "Lancia la sabbia negli occhi della preda e cerca di avvicinarsi mentre è accecata, ma poiché Sandygast è così lento, la preda tende a scappare.",
        de: "Es schleudert Sand in die Augen seiner Beute und versucht, sich ihnen zu nähern, während sie geblendet sind. Da Sankabuh jedoch so langsam ist, neigt die Beute dazu, zu entkommen.",
        "pt-br": "Ele joga areia nos olhos de suas presas e tenta se aproximar delas enquanto elas estão cegas, mas como Sandygast é muito lento, a presa tende a escapar.",
        "zh-tw": "它將沙子扔進獵物的眼睛裡，並試圖在獵物失明時接近獵物，但由於 沙丘娃 速度太慢，獵物往往會逃跑。"
    },
    attacks: [
        {
            cost: ["Fighting"],
            name: {
                en: "Sand Spray",
                fr: "Jet Sableux",
                es: "Rociado de Arena",
                it: "Silicospruzzo",
                de: "Sandspray",
                "pt-br": "Spray de Areia",
                "zh-tw": "沙沫"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
