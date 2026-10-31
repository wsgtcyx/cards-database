import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/079",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/079",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/079",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/079",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/079",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/079",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/079",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/079",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/079"
    },
    name: {
        en: "Rockruff",
        fr: "Rocabot",
        es: "Rockruff",
        "pt-br": "Rockruff",
        "zh-tw": "岩狗狗",
        ja: "イワンコ",
        ko: "암멍이",
        it: "Rockruff",
        de: "Wuffels"
    },
    illustrator: "OKACHEKE",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 70,
    types: [
        "Fighting"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Paw Shake Punch",
                fr: "Coup de Patte",
                es: "Sacudir y Dar la Patita",
                it: "Pugno Qua la Zampa",
                de: "Pfötchenhieb",
                "pt-br": "Dá Soquinho",
                "zh-tw": "握手拳",
                ja: "おてパンチ",
                ko: "손펀치"
            },
            cost: [
                "Fighting"
            ],
            damage: 10
        }
    ],
    abilities: [],
    description: {
        en: "This Pokémon is very friendly when it’s young. Its disposition becomes vicious once it matures, but it never forgets the kindness of its master.",
        fr: "Ce Pokémon est très amical lorsqu’il est jeune. Il devient plus féroce avec le temps, mais sa loyauté envers son Dresseur reste infaillible.",
        es: "Cuando es pequeño es muy cariñoso. A medida que crece se vuelve más agresivo, pero la lealtad hacia su Entrenador perdura para siempre.",
        it: "I cuccioli di Rockruff si affezionano subito. Crescendo diventano più feroci, ma provano per sempre gratitudine verso chi li ha allenati.",
        de: "Wuffels ist sehr zutraulich, solange es jung ist. Mit dem Alter wird es zunehmend wilder, doch es bleibt seinem Trainer auf ewig verbunden.",
        "pt-br": "Este Pokémon é amigável quando jovem. Adquire um temperamento cruel ao crescer, mas nunca se esquece da bondade de seu mestre.",
        "zh-tw": "年幼時非常容易親近。雖然長大後脾氣會變得粗暴，卻絕不會忘記主人的恩情。",
        ja: "小さいころは よく 懐く。 育つと 気性が 荒くなるが 主への 恩は 忘れない。",
        ko: "어렸을 때는 매우 잘 따른다.\n자라면서 성질이 사나워지지만\n주인에게 입은 은혜는 잊지 않는다."
    }
};

export default card;
