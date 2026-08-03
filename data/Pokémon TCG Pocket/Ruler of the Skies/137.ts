import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/137",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/137",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/137",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/137",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/137"
    },
    name: {
        en: "Pidove",
        fr: "Poichigeon",
        es: "Pidove",
        it: "Pidove",
        de: "Dusselgurr",
        "pt-br": "Pidove",
        "zh-tw": "豆豆鴿",
        ko: "콩둘기",
        ja: "マメパト"
    },
    illustrator: "Naoki Saito",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [519],
    stage: "Basic",
    description: {
        en: "It’s forgetful and not very bright, but many Trainers love it anyway for its friendliness and sincerity.",
        fr: "Il n’est pas très malin et un peu distrait,\nmais beaucoup de Dresseurs l’apprécient pour\nson caractère affectueux et sa bonne volonté.",
        es: "Es muy olvidadizo y no demasiado avispado,\npero muchos Entrenadores le tienen simpatía\npor su carácter afable y sincero.",
        it: "È un po’ smemorato e non molto sveglio.\nTuttavia è diligente e si affeziona facilmente,\ne per questo molti Allenatori lo adorano.",
        de: "Sie sind vergesslich und nicht besonders clever,\naber da sie sehr zutraulich und fleißig sind, haben\nviele Trainer sie ins Herz geschlossen.",
        "zh-tw": "雖然既健忘又不太聰明，\n因為性格認真且容易親近人，\n所以受到了許多訓練家的喜愛。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Gust",
                fr: "Tornade",
                es: "Tornado",
                it: "Raffica",
                de: "Windstoß",
                "pt-br": "Lufada de Vento",
                "zh-tw": "起風"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
