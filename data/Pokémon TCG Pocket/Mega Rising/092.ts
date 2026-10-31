import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/092",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/092",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/092",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/092",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/092",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/092",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/092",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/092",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/092"
    },
    name: {
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
    illustrator: "Ayaka Yoshida",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 30,
    types: ["Lightning"],
    description: {
        en: "Joltik can be found clinging to other Pokémon.\nIt's soaking up static electricity because it can't\nproduce a charge on its own.",
        "fr": "Joltik peut être trouvé accroché à d'autres Pokémon.\nIl absorbe l'électricité statique parce qu'il ne peut pas\nproduire une charge par lui-même.",
        "es": "Se puede encontrar a Joltik aferrándose a otros Pokémon.\nEstá absorbiendo electricidad estática porque no puede\nproducir una carga por sí solo.",
        "it": "Puoi trovare Joltik aggrappato ad altri Pokémon.\nAssorbe l'elettricità statica perché non può\nprodurre una carica da solo.",
        "de": "Joltik klammert sich an andere Pokémon.\nEs absorbiert statische Elektrizität, weil es das nicht kann\nselbst eine Ladung erzeugen.",
        "pt-br": "Joltik pode ser encontrado agarrado a outros Pokémon.\nEstá absorvendo eletricidade estática porque não consegue\nproduzir uma carga por conta própria.",
        "zh-tw": "喬提克被發現粘在其他神奇寶貝身上。\n它吸收靜電，因為它不能\n自身產生電荷。",
        ja: "ポケモンの 体に くっついて 静電気を 吸い取る。 自分では 電気を つくることが できない。",
        ko: "포켓몬의 몸에 들러붙어\n정전기를 흡수한다.\n스스로는 전기를 만들 수 없다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Attach",
                "fr": "Attacher",
                "es": "Adjuntar",
                "it": "Allegare",
                "de": "Befestigen",
                "pt-br": "Anexar",
                "zh-tw": "附",
                ja: "くっつく",
                ko: "들러붙기"
            },
            damage: 20,
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
