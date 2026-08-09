import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A1/144",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A1/144",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A1/144",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A1/144",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A1/144",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A1/144",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A1/144"
    },
    name: {
        en: "Machoke",
        fr: "Machopeur",
        es: "Machoke",
        it: "Machoke",
        de: "Maschock",
        'pt-br': "Machoke",
        ko: "근육몬",
        "zh-tw": "豪力",
    },
    illustrator: "match",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    stage: "Stage1",
    evolveFrom: {
        en: "Machop",
        "fr": "Machoc",
        "es": "Machop",
        "it": "Machop",
        "de": "Machollo",
        "pt-br": "Machop",
        "zh-tw": "腕力"
    },
    attacks: [{
            cost: ["Fighting", "Fighting"],
            name: {
                en: "Strength",
                fr: "Force",
                es: "Fuerza",
                it: "Forza",
                de: "Stärke",
                'pt-br': "Força",
                ko: "괴력",
                "zh-tw": "力量"
            },
            damage: "50"
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 2,
    rarity: "Two Diamond",
    description: {
        en: "Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions.",
        fr: "Son corps est si puissant qu'il lui faut\nune ceinture pour maîtriser sa force.",
        es: "Su musculoso cuerpo es tan fuerte que usa un\ncinto antifuerza para controlar sus movimientos.",
        it: "Il suo corpo muscoloso è così forte che usa\nuna cintura per contenere la sua potenza.",
        de: "Dieses Pokémon ist superstark. Es kann sich nur\nmit einem kraftregulierenden Gürtel bewegen.",
        'pt-br': "Sua massa muscular é tão poderosa que ele\nprecisa usar um cinto de economia de energia\npara controlar seus movimentos.",
        ko: "엄청나게 강한 육체를 지녔기 때문에\n파워 세이브 벨트를 차서\n힘을 제어하고 있다.",
        "zh-tw": "它肌肉發達的身體如此強大，必須佩戴節能帶才能調節其動作。"
    },
    boosters: ["charizard"]
};
export default card;
