import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/076",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/076",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/076",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/076",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/076",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/076",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/076",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4/076",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4/076"
    },
    name: {
        en: "Swoobat",
        fr: "Rhinolove",
        es: "Swoobat",
        it: "Swoobat",
        de: "Fletiamo",
        "pt-br": "Swoobat",
        "zh-tw": "心蝙蝠",
        ko: "맘박쥐",
        ja: "ココロモリ"
    },
    illustrator: "Narumi Sato",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Psychic"],
    dexId: [528],
    evolveFrom: {
        en: "Woobat",
        fr: "Chovsourir",
        es: "Woobat",
        it: "Woobat",
        de: "Fleknoil",
        "pt-br": "Woobat",
        "zh-tw": "滾滾蝙蝠",
        ko: "또르박쥐",
        ja: "コロモリ"
    },
    stage: "Stage1",
    description: {
        en: "The auspicious shape of this Pokémon’s nose apparently led some regions to consider Swoobat a symbol of good luck.",
        fr: "Certaines contrées le vénèrent et pensent\nque la forme de son nez est un symbole\nde chance et de bonheur.",
        es: "En algunas regiones se venera a este Pokémon,\nya que consideran la forma de su nariz como un\nsímbolo de felicidad.",
        it: "Si dice che in alcune regioni venga venerato\nper via della forma del suo naso, ritenuta\ndi buon auspicio.",
        de: "Es wird in manchen Regionen für seine Nasenform\nverehrt, die angeblich Glück bringen soll.",
        "pt-br": "Dizem que o formato auspicioso do nariz deste Pokémon levou algumas regiões a considerar Swoobat um símbolo de boa sorte.",
        "zh-tw": "據說有些地區的人覺得\n牠鼻子的形狀很吉利，\n而把牠當成幸福的象徵來祭拜。",
        ja: "鼻の 形が おめでたいと 幸福を 呼ぶ シンボルとして 祭る 地域も あるという。",
        ko: "코의 모양이 복스럽다고\n행복을 부르는 상징으로\n여기는 지역도 있다고 한다."
    },
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Mind Bend",
                fr: "Contrôleur d'Esprit",
                es: "Fusión Mental",
                "pt-br": "Dobra Mentes",
                "zh-tw": "精神歪曲",
                "it": "Fusione Mentale",
                "de": "Gedankenverbiegung",
                ja: "サイコトリップ",
                ko: "사이코트립"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Confused.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
                es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
                it: "Il Pokémon attivo del tuo avversario è ora confuso.",
                de: "Das aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "將對手的戰鬥寶可夢混亂。",
                ja: "相手のバトルポケモンをこんらんにする。",
                ko: "상대의 배틀 포켓몬을 혼란으로 만든다."
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};
export default card;
