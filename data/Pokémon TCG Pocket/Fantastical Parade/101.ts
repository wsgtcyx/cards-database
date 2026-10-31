import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/101",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/101",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/101",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/101",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/101",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/101",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/101",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/101",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/101"
    },
    name: {
        en: "Stunky",
        "fr": "Moufouette",
        "es": "Stunky",
        "it": "Stunky",
        "de": "Skunkapuh",
        "pt-br": "Stunky",
        "zh-tw": "臭鼬噗",
        ja: "スカンプー",
        ko: "스컹뿡"
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Darkness"],
    description: {
        en: "The foul fluid from its rear is so revolting that it\ncan make people feel queasy up to a mile and a\nquarter away.",
        "fr": "Le liquide fétide provenant de son arrière est si répugnant qu'il\npeut rendre les gens mal à l'aise jusqu'à un kilomètre et un\nquart de distance.",
        "es": "El fluido fétido de su trasero es tan repugnante que\npuede hacer que las personas se sientan mareadas hasta una milla y una\ncuarto de distancia.",
        "it": "Il fluido disgustoso che esce dalla sua parte posteriore è così disgustoso che\npuò far sentire le persone nauseate fino a un miglio e un\nquarto di distanza.",
        "de": "Die üble Flüssigkeit aus seinem Hinterteil ist so abscheulich, dass es\nkann dazu führen, dass sich Menschen bis zu einer Entfernung von einer Meile und einer Meile unwohl fühlen\nViertel entfernt.",
        "pt-br": "O fluido imundo que sai de sua parte traseira é tão nojento que\npode fazer as pessoas se sentirem enjoadas até um quilômetro e meio\nquarto de distância.",
        "zh-tw": "從它尾部流出的污濁液體令人作嘔\n可以讓人感到噁心一英里\n四分之一遠。",
        ja: "お尻から 飛ばす 液体の 臭いは ２キロも 離れた 人が 具合を 悪くするほど くさい。",
        ko: "엉덩이에서 내뿜는 액체의 냄새는\n2km 떨어진 곳에 있는 사람이\n상태가 나빠질 정도로 역하다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Spray Fluid",
                "fr": "Fluide de pulvérisation",
                "es": "Líquido de pulverización",
                "it": "Fluido spray",
                "de": "Sprühflüssigkeit",
                "pt-br": "Fluido de pulverização",
                "zh-tw": "噴霧液",
                ja: "しるをとばす",
                ko: "분비액뿜기"
            },
            damage: 30,
            cost: ["Darkness", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
