import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/027",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/027",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/027",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/027",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/027",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/027",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/027"
    },
    name: {
        en: "Team Rocket's Drowzee",
        fr: "Soporifik de la Team Rocket",
        es: "Drowzee del Team Rocket",
        it: "Drowzee del Team Rocket",
        de: "Team Rockets Traumato",
        "pt-br": "Drowzee da Equipe Rocket",
        "zh-tw": "火箭隊的催眠貘",
        ko: "로켓단의 슬리프",
        ja: "ロケット団のスリープ"
    },
    illustrator: "Shinji Kanda",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    stage: "Basic",
    description: {
        en: "When it twitches its nose, it can tell where someone is sleeping and what that person is dreaming about.",
        fr: "Quand il remue son nez, il devine où sont les personnes endormies et de quoi elles rêvent.",
        es: "Cuando tuerce su protuberante nariz, puede saber dónde hay alguien dormido y con qué está soñando en ese momento.",
        it: "Quando fiuta con il suo grande naso, riesce a localizzare chi dorme e a capire che sogni sta facendo.",
        de: "Wenn es mit seiner großen Nase zuckt, kann es feststellen, wo jemand schläft und was er gerade träumt.",
        "pt-br": "Quando contrai seu nariz, consegue saber onde alguém está dormindo e com o que está sonhando.",
        "zh-tw": "據說當牠抽動凸出的鼻子，無論是誰在哪裡做著什麼夢，都會被牠知道得一清二楚。"
    },
    attacks: [
        {
            cost: ["Psychic", "Colorless"],
            name: {
                en: "Mumble",
                fr: "Murmure",
                es: "Farfullar",
                it: "Borbottio",
                de: "Grummeln",
                "pt-br": "Resmungo",
                "zh-tw": "囈語"
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
