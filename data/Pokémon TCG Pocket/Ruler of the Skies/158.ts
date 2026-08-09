import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/158",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/158",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/158",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/158",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/158",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/158",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/158"
    },
    name: {
        en: "Kricketune",
        fr: "Mélokrik",
        es: "Kricketune",
        it: "Kricketune",
        de: "Zirpeise",
        "pt-br": "Kricketune",
        "zh-tw": "音箱蟀",
        ko: "귀뚤톡크",
        ja: "コロトック"
    },
    illustrator: "OKACHEKE",
    rarity: "One Star",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    dexId: [402],
    evolveFrom: {
        en: "Kricketot",
        fr: "Crikzik",
        es: "Kricketot",
        it: "Kricketot",
        de: "Zirpurze",
        "pt-br": "Kricketot",
        "zh-tw": "圓法師",
        ko: "귀뚤뚜기",
        ja: "コロボーシ"
    },
    stage: "Stage1",
    description: {
        en: "There is a village that hosts a contest based on the amazingly variable cries of this Pokémon.",
        fr: "Ses cris sont tellement variés qu'on organise un concours en leur honneur dans un certain village.",
        es: "Hay un pueblo en el que celebran un concurso basado en la increíble variedad de sus gritos.",
        it: "C'è un villaggio che organizza una gara basata sulla melodia incredibilmente varia di questo Pokémon.",
        de: "Es gibt ein Dorf, wo ein Wettbewerb abgehalten wird, bei dem man Zirpeise mit ihren vielseitigen Rufen gegeneinander antreten lässt.",
        "pt-br": "Existe um vilarejo que realiza um concurso dos sons mais impressionantes e diferentes deste Pokémon.",
        "zh-tw": "有村子會讓牠們互相\n比拼變化多端的叫聲，\n當成娛樂活動。"
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Bug Buzz",
                fr: "Bourdon",
                es: "Zumbido",
                it: "Bug Buzz",
                de: "Bug Buzz",
                "pt-br": "Zumbido de Inseto",
                "zh-tw": "蟲鳴"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
