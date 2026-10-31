import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/093",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/093",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/093",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/093",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/093",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/093",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/093",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/093",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/093"
    },
    name: {
        en: "Galvantula",
        "fr": "Mygavolt",
        "es": "Galvantula",
        "it": "Galvantula",
        "de": "Voltula",
        "pt-br": "Galvantula",
        "zh-tw": "電蜘蛛",
        ja: "デンチュラ",
        ko: "전툴라",
    },
    illustrator: "Yumi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Lightning"],
    evolveFrom: {
        en: "Joltik",
        "fr": "Statitik",
        "es": "Joltik",
        "it": "Joltik",
        "de": "Wattzapf",
        "pt-br": "Joltik",
        "zh-tw": "電電蟲",
        ja: "バチュル",
        ko: "파쪼옥",
    },
    description: {
        en: "It lays traps of electrified threads near the nests\nof bird Pokémon, aiming to snare chicks that are\nnot yet good at flying.",
        "fr": "Il pose des pièges de fils électrifiés à proximité des nids\nde Pokémon oiseaux, visant à piéger les poussins qui sont\npas encore doué pour voler.",
        "es": "Pone trampas de hilos electrificados cerca de los nidos.\nde Pokémon pájaro, con el objetivo de atrapar polluelos que son\nTodavía no soy bueno volando.",
        "it": "Piazza trappole di fili elettrizzati vicino ai nidi\ndi Pokémon uccello, con l'obiettivo di intrappolare i pulcini che lo sono\nnon ancora bravo a volare.",
        "de": "Es legt Fallen aus elektrifizierten Fäden in der Nähe der Nester\nvon Vogel-Pokémon, die darauf abzielen, Küken zu fangen\nnoch nicht gut im Fliegen.",
        "pt-br": "Coloca armadilhas de fios eletrificados perto dos ninhos\nde Pokémon pássaros, com o objetivo de capturar filhotes que estão\nainda não é bom em voar.",
        "zh-tw": "它在巢穴附近放置帶電線陷阱\n鳥類神奇寶貝，旨在誘捕小雞\n還不擅長飛行。",
        ja: "飛ぶのが ヘタな ヒナを 狙い 鳥ポケモンの 巣の 近くに 電気の 糸で 罠を 張るぞ。",
        ko: "잘 날지 못하는 새끼를 노리고\n새포켓몬 둥지 가까이에\n전기로 된 실로 함정을 만든다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Electro Ball",
                "fr": "Boule Électro",
                "es": "Electrobola",
                "it": "Palla elettrica",
                "de": "Elektroball",
                "pt-br": "Bola Eletro",
                "zh-tw": "電球",
                ja: "エレキボール",
                ko: "일렉트릭볼"
            },
            damage: 50,
            cost: ["Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 0,
	boosters: [
		"mega-altaria",
		"mega-blaziken",
		"mega-gyarados"
	]
};
export default card;
