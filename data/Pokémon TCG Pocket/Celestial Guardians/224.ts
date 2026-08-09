import { Card } from "../../../interfaces";
import Set from "../Celestial Guardians";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3/224",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3/224",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3/224",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3/224",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3/224",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3/224",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3/224"
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
    illustrator: "Shin Nagasawa",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    evolveFrom: {
        en: "Machop",
        "fr": "Machoc",
        "es": "Machop",
        "it": "Machop",
        "de": "Machollo",
        "pt-br": "Machop",
        "zh-tw": "腕力",
    },
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
    stage: "Stage1",
    attacks: [{
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
            damage: 50,
            cost: ["Fighting", "Fighting"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["solgaleo"]
};
export default card;
