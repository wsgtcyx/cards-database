import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A2/184",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A2/184",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A2/184",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A2/184",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A2/184",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A2/184",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A2/184"
    },
    name: {
        en: "Mismagius ex",
        fr: "Magirêve-ex",
        es: "Mismagius ex",
        it: "Mismagius-ex",
        de: "Traunmagil-ex",
        'pt-br': "Mismagius ex",
        ko: "무우마직 ex",
        "zh-tw": "夢妖魔ex",
    },
    illustrator: "PLANETA Tsuji",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 140,
    types: ["Psychic"],
    evolveFrom: {
        en: "Misdreavus",
        "fr": "Feuforêve",
        "es": "Misdreavus",
        "it": "Misdreavus",
        "de": "Traunfugil",
        "pt-br": "Misdreavus",
        "zh-tw": "夢妖",
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Magical Delusion",
                fr: "Voyage Magique",
                es: "Ilusión Mágica",
                it: "Magillusione",
                de: "Magischer Wahn",
                'pt-br': "Delusão Mágica",
                ko: "매지컬트립",
                "zh-tw": "魔法錯覺"
            },
            damage: 70,
            cost: ["Psychic", "Psychic"],
            effect: {
                en: "Your opponent's Active Pokémon is now Confused.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
                es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
                it: "Il Pokémon attivo del tuo avversario viene confuso.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
                ko: "상대의 배틀 포켓몬을 혼란으로 만든다.",
                'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "你對手的活躍神奇寶貝現在處於混亂狀態。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["palkia"]
};
export default card;
