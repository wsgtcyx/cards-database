import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A2/063",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A2/063",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A2/063",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A2/063",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A2/063",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A2/063"
    },
    name: {
        en: "Togepi",
        fr: "Togepi",
        es: "Togepi",
        it: "Togepi",
        de: "Togepi",
        'pt-br': "Togepi",
        ko: "토게피",
        "zh-tw": "波克比",
    },
    illustrator: "Narumi Sato",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Psychic"],
    description: {
        en: "The shell seems to be filled with joy. It is said that it will share good luck when treated kindly.",
        fr: "Sa coquille est remplie de joie.\nOn dit que s'il est bien traité, il porte chance.",
        es: "El cascarón parece estar lleno de alegría.\nDicen que trae buena suerte si se le trata con cariño.",
        it: "Sembra che il suo guscio sia ricolmo di felicità.\nSi dice che porti fortuna se lo si tratta bene.",
        de: "Seine Schale ist voll von Freude. Es heißt,\nwenn man es freundlich und gut behandelt,\nteile es sein Glück.",
        'pt-br': "Sua casca parece ser cheia de alegria e dizem que\ncompartilha a boa sorte quando é tratado com carinho.",
        ko: "껍질 안에 행복이 가득 차 있어서\n상냥하게 대해준 사람에게\n행운을 나누어 준다고 한다.",
        "zh-tw": "貝殼裡似乎充滿了喜悅。據說，如果受到善待，它會分享好運。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Pound",
                fr: "Écras'Face",
                es: "Destructor",
                it: "Botta",
                de: "Klaps",
                'pt-br': "Pancada",
                ko: "막치기",
                "zh-tw": "磅"
            },
            damage: 20,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["dialga", "palkia"]
};
export default card;
