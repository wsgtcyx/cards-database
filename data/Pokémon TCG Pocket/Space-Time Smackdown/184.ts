import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    name: {
        en: "Mismagius ex",
        fr: "Magirêve-ex",
        es: "Mismagius ex",
        it: "Mismagius-ex",
        de: "Traunmagil-ex",
        'pt-br': "Mismagius ex",
        ko: "무우마직 ex",
        "zh-tw": "夢妖魔 ex",
    },
    illustrator: "PLANETA Tsuji",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 140,
    types: ["Psychic"],
    evolveFrom: {
        en: "Misdreavus",
        "fr": "Misdreavus",
        "es": "Misdreavus",
        "it": "Misdreavus",
        "de": "Misdreavus",
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
