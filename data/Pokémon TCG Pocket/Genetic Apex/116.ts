import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A1/116",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A1/116",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A1/116",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A1/116",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A1/116",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A1/116",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A1/116"
    },
    name: {
        en: "Kadabra",
        fr: "Kadabra",
        es: "Kadabra",
        it: "Kadabra",
        de: "Kadabra",
        'pt-br': "Kadabra",
        ko: "윤겔라",
        "zh-tw": "勇基拉",
    },
    illustrator: "Ken Sugimori",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    stage: "Stage1",
    evolveFrom: {
        en: "Abra",
        "fr": "Abra",
        "es": "Abra",
        "it": "Abra",
        "de": "Abra",
        "pt-br": "Abra",
        "zh-tw": "凱西"
    },
    attacks: [{
            cost: ["Psychic", "Colorless", "Colorless"],
            name: {
                en: "Super Psy Bolt",
                fr: "Super Psy",
                es: "Superrayo Psi",
                it: "Superpsico",
                de: "Super-Psischlag",
                'pt-br': "Super-raio Psíquico",
                ko: "초염동력",
                "zh-tw": "超級心靈螺栓"
            },
            damage: "60"
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1,
    rarity: "Two Diamond",
    description: {
        en: "Using its psychic power, Kadabra levitates as it sleeps. It uses its springy tail as a pillow.",
        fr: "Ses pouvoirs psychiques lui permettent de léviter en dormant.\nIl utilise alors sa queue très souple comme un oreiller.",
        es: "Duerme suspendido en el aire gracias a sus\npoderes psíquicos. La cola, de una flexibilidad\nextraordinaria, hace las veces de almohada.",
        it: "I suoi poteri psichici gli permettono di\nlevitare mentre dorme. Come cuscino usa\nla sua coda straordinariamente elastica.",
        de: "Kadabras Psycho-Kräfte ermöglichen es ihm,\nschwebend zu schlafen. Seinen äußerst\nelastischen Schweif nutzt es dabei als Kissen.",
        'pt-br': "Usando seu poder psíquico, Kadabra levita\nenquanto dorme. Usa sua cauda elástica\ncomo um travesseiro.",
        ko: "사이코 파워로 공중에 떠서 잠든다.\n탄력이 뛰어난 꼬리를\n베개 대신으로 사용한다.",
        "zh-tw": "卡達布拉利用其精神力量在睡眠時懸浮。它用有彈性的尾巴作為枕頭。"
    },
    boosters: ["charizard"]
};
export default card;
