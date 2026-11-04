import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/038/8aa9e28d95c94837",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/038/8aa9e28d95c94837",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/038/8aa9e28d95c94837",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/038/8aa9e28d95c94837",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/038/8aa9e28d95c94837",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/038/8aa9e28d95c94837",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/038/8aa9e28d95c94837",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/038/8aa9e28d95c94837",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/038/8aa9e28d95c94837"
    },
    name: {
        en: "Misdreavus",
        fr: "Feuforêve",
        es: "Misdreavus",
        it: "Misdreavus",
        de: "Traunfugil",
        'pt-br': "Misdreavus",
        ja: "ムウマ",
        ko: "무우마",
        "zh-tw": "夢妖",
    },
    illustrator: "Miki Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    stage: "Basic",
    description: {
        en: "This Pokémon startles people in the middle of\nthe night. It gathers fear as its energy.",
        fr: "Il fait peur aux gens en pleine nuit et se nourrit de leur frayeur.",
        es: "Sorprende a la gente en mitad de la noche\ny acumula su miedo como energía.",
        it: "Un Pokémon che terrorizza la gente nel cuore della\nnotte. Assorbe la paura per usarla come energia.",
        de: "Ein Pokémon, das Menschen mitten in der Nacht\nerschreckt. Es sammelt die Angst als seine Energie.",
        'pt-br': "Este Pokémon assusta pessoas no meio da noite.\nAcumula o medo para usar como energia.",
        ja: "真夜中 人を 驚かせては 怖がる心を 集めて 自分の エネルギーに している ポケモン。",
        ko: "한밤중에 사람을 놀라게 하고\n무서워하는 마음을 모아 자신의\n에너지로 만드는 포켓몬이다.",
        "zh-tw": "會在半夜嚇唬人類，然後把收集到的恐懼之心轉化成自身能量的寶可夢。"
    },
    attacks: [{
            name: {
                en: "Confuse Ray",
                fr: "Onde Folie",
                es: "Rayo Confuso",
                it: "Stordiraggio",
                de: "Konfusstrahl",
                'pt-br': "Raio da Confusão",
                ja: "あやしいひかり",
                ko: "이상한빛",
                "zh-tw": "奇異之光"
            },
            cost: ["Psychic"],
            effect: {
                en: "Your opponent's Active Pokémon is now Confused.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
                es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
                it: "Il Pokémon attivo del tuo avversario viene confuso.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
                ja: "相手のバトルポケモンをこんらんにする。",
                ko: "상대의 배틀 포켓몬을 혼란으로 만든다.",
                'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "將對手的戰鬥寶可夢混亂。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["vol4"]
};
export default card;
