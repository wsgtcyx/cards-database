import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/181",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/181",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/181",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/181",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/181",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/181",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/181",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/181",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/181"
    },
    name: {
        en: "Pidgeotto",
        "fr": "Roucoups",
        "es": "Pidgeotto",
        "it": "Pidgeotto",
        "de": "Tauboga",
        "pt-br": "Pidgeotto",
        "zh-tw": "比比鳥",
        ja: "ピジョン",
        ko: "피죤"
    },
    illustrator: "Mizue",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    evolveFrom: {
        en: "Pidgey",
        "fr": "Roucool",
        "es": "Pidgey",
        "it": "Pidgey",
        "de": "Taubsi",
        "pt-br": "Pidgey",
        "zh-tw": "波波",
        ja: "ポッポ",
        ko: "구구",
    },
    description: {
        en: "Very protective of its sprawling territorial area,\nthis Pokémon will fiercely peck at any intruder.",
        "fr": "Très protectrice de son territoire tentaculaire,\nce Pokémon picorera férocement tout intrus.",
        "es": "Muy protectora de su extensa área territorial,\nEste Pokémon picoteará ferozmente a cualquier intruso.",
        "it": "Molto protettivo nei confronti della sua vasta area territoriale,\nquesto Pokémon beccherà ferocemente qualsiasi intruso.",
        "de": "Sehr beschützerisch für sein weitläufiges Territorium,\nDieses Pokémon wird jeden Eindringling heftig angreifen.",
        "pt-br": "Muito protetor da sua extensa área territorial,\neste Pokémon bicará ferozmente qualquer intruso.",
        "zh-tw": "非常保護其廣闊的領土面積，\n這只神奇寶貝會猛烈地啄食任何入侵者。",
        ja: "広い 縄張りを 持っており 侵入する 邪魔者は 徹底的に つつかれてしまう。",
        ko: "넓은 영역을 가지고 있어\n침입한 방해자는\n철저하게 쪼아버린다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Speed Wing",
                "fr": "Aile de vitesse",
                "es": "Ala de velocidad",
                "it": "Ala di velocità",
                "de": "Geschwindigkeitsflügel",
                "pt-br": "Asa de velocidade",
                "zh-tw": "速度之翼",
                ja: "スピードウイング",
                ko: "스피드윙"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-altaria",
		"mega-blaziken",
		"mega-gyarados"
	]
};
export default card;
