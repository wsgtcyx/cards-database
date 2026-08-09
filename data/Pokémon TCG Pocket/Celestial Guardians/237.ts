import { Card } from "../../../interfaces";
import Set from "../Celestial Guardians";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3/237",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3/237",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3/237",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3/237",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3/237",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3/237",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3/237"
    },
    name: {
        en: "Wigglytuff ex",
        fr: "Grodoudou-ex",
        es: "Wigglytuff ex",
        it: "Wigglytuff-ex",
        de: "Knuddeluff-ex",
        'pt-br': "Wigglytuff ex",
        ko: "푸크린 ex",
        "zh-tw": "胖可丁ex",
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Colorless"],
    evolveFrom: {
        en: "Jigglypuff",
        "fr": "Rondoudou",
        "es": "Jigglypuff",
        "it": "Jigglypuff",
        "de": "Pummeluff",
        "pt-br": "Jigglypuff",
        "zh-tw": "胖丁",
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Sleepy Song",
                fr: "Chanson Berçante",
                es: "Canción Adormecedora",
                it: "Cantilena",
                de: "Schlummerlied",
                'pt-br': "Canção Sonolenta",
                ko: "슬리피송",
                "zh-tw": "昏昏欲睡的歌"
            },
            damage: 80,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
                es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
                it: "Il Pokémon attivo del tuo avversario viene addormentato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt schläft.",
                ko: "상대의 배틀 포켓몬을 잠듦으로 만든다.",
                'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "你對手的活躍神奇寶貝現在處於睡眠狀態。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["solgaleo"]
};
export default card;
