import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/259",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/259",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/259",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/259",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/259",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/259",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/259",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/259",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/259"
    },
    name: {
        en: "Mega Altaria ex",
        "fr": "Méga-Altaria-ex",
        "es": "Mega-Altaria ex",
        "it": "Mega Altaria-ex",
        "de": "Mega-Altaria-ex",
        "pt-br": "Mega Altaria ex",
        "zh-tw": "超級七夕青鳥ex",
        ja: "メガチルタリスex",
        ko: "메가파비코리 ex",
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 190,
    types: ["Psychic"],
    evolveFrom: {
        en: "Swablu",
        "fr": "Tylton",
        "es": "Swablu",
        "it": "Swablu",
        "de": "Wablu",
        "pt-br": "Swablu",
        "zh-tw": "青綿鳥",
        ja: "チルット",
        ko: "파비코",
    },
    description: {
        en: "On sunny days, it flies freely through the sky and\nblends into the clouds. It sings in a beautiful\nsoprano.",
        "fr": "Les jours ensoleillés, il vole librement dans le ciel et\nse fond dans les nuages. Il chante d'une belle manière\nsoprano.",
        "es": "En los días soleados, vuela libremente por el cielo y\nse funde con las nubes. canta en una hermosa\nsoprano.",
        "it": "Nelle giornate soleggiate vola liberamente nel cielo e\nsi fonde con le nuvole. Canta in modo bellissimo\nsoprano.",
        "de": "An sonnigen Tagen fliegt es frei durch den Himmel und\nverschmilzt mit den Wolken. Es singt wunderschön\nSopran.",
        "pt-br": "Em dias ensolarados, ele voa livremente pelo céu e\nse mistura com as nuvens. Ele canta de uma forma linda\nsoprano.",
        "zh-tw": "陽光明媚的日子裡，它在天空中自由自在地飛翔，\n融入雲彩。它用優美的歌聲歌唱\n女高音。",
        ja: "晴れた日 綿雲に まぎれながら 大空を 自由に 飛び回り 美しい ソプラノで 歌う。",
        ko: "녹아내릴 것만 같은 촉감의 털은\n단 몇 가닥으로 덤프트럭을\n매달아 올릴 수 있을 정도로 튼튼하다."
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Mega Harmony",
                "fr": "Méga Harmonie",
                "es": "Mega armonía",
                "it": "Megaarmonia",
                "de": "Mega Harmonie",
                "pt-br": "Mega Harmonia",
                "zh-tw": "超級和諧",
                ja: "メガハーモニー",
                ko: "메가하모니"
            },
            damage: "40+",
            cost: ["Psychic", "Psychic"],
            effect: {
                en: "This attack does 30 more damage for each of your Benched Pokémon.",
                "fr": "Cette attaque inflige 30 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
                "es": "Este ataque hace 30 daños más por cada uno de tus Pokémon en Banca.",
                "it": "Questo attacco infligge 30 danni in più per ciascuno dei tuoi Pokémon in panchina.",
                "de": "Dieser Angriff fügt jedem Pokémon auf deiner Bank 30 weitere Schadenspunkte zu.",
                "pt-br": "Este ataque causa 30 danos a mais para cada um dos seus Pokémon no Banco.",
                "zh-tw": "此攻擊對你的每隻後備神奇寶貝造成 30 點額外傷害。",
                ja: "自分のベンチポケモンの数×30ダメージ追加。",
                ko: "자신의 벤치 포켓몬의 수 × 30데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-altaria"
	]
};
export default card;
