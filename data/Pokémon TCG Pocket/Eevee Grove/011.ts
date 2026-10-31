import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3b/011",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3b/011",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3b/011",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3b/011",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3b/011",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3b/011",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3b/011",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3b/011",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3b/011"
    },
    name: {
        en: "Litten",
        "fr": "Flamiaou",
        "es": "Litten",
        "it": "Litten",
        "de": "Flamiau",
        "pt-br": "Litten",
        "zh-tw": "火斑喵",
        ja: "ニャビー",
        ko: "냐오불",
    },
    illustrator: "0313",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fire"],
    description: {
        en: "If you try too hard to get close to it, it won't\nopen up to you. Even if you do grow close,\ngiving it too much affection is still a no-no.",
        "fr": "Si vous essayez trop de vous en approcher, ce ne sera pas le cas.\ns'ouvrir à vous. Même si tu te rapproches,\nlui donner trop d'affection est toujours un non-non.",
        "es": "Si intentas demasiado acercarte a él, no lo hará.\nabrirse a ti. Incluso si te acercas,\ndarle demasiado cariño sigue siendo un no-no.",
        "it": "Se ti sforzi troppo per avvicinarti ad esso, non lo farà\naprirmi a te. Anche se ti avvicini,\ndargli troppo affetto è ancora un no-no.",
        "de": "Wenn man sich zu sehr anstrengt, sich ihm zu nähern, wird es nicht funktionieren\nöffne mich dir. Auch wenn Sie sich näher kommen,\nEs ist immer noch ein Tabu, ihm zu viel Zuneigung zu schenken.",
        "pt-br": "Se você tentar muito chegar perto disso, não vai\nse abra para você. Mesmo que você se aproxime,\ndar muito carinho ainda é proibido.",
        "zh-tw": "如果你太努力去接近它，它不會\n向你敞開心扉。就算你們的關係越來越親近，\n給予它太多的感情仍然是一個禁忌。",
        ja: "しつこく 付きまとわれると 心を 開かなくなる。 懐いてきても 過剰な スキンシップは 禁物。",
        ko: "집요하게 따라다니면\n마음을 열지 않는다. 친밀해져도\n과도한 스킨십은 금물이다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Flare",
                "fr": "Éclater",
                "es": "Llamarada",
                "it": "Bagliore",
                "de": "Fackel",
                "pt-br": "Sinalizador",
                "zh-tw": "耀斑",
                ja: "ほのお",
                ko: "불꽃"
            },
            damage: 40,
            cost: ["Fire", "Colorless"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
