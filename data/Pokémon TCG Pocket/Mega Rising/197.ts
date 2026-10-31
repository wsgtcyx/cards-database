import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/197",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/197",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/197",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/197",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/197",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/197",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/197",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/197",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/197"
    },
    name: {
        en: "Altaria",
        "fr": "Altaria",
        "es": "Altaria",
        "it": "Altaria",
        "de": "Altaria",
        "pt-br": "Altaria",
        "zh-tw": "七夕青鳥",
        ja: "チルタリス",
        ko: "파비코리",
    },
    illustrator: "sui",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
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
        ko: "맑은 날 뭉게구름에 뒤섞인 채로\n넓은 하늘을 자유롭게 날아다니며\n아름다운 소프라노로 노래한다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Do the Wave",
                "fr": "Faites la vague",
                "es": "hacer la ola",
                "it": "Fai l'Onda",
                "de": "Mach die Welle",
                "pt-br": "Faça a onda",
                "zh-tw": "做波浪",
                ja: "ともだちのわ",
                ko: "친구사이"
            },
            damage: "20+",
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "This attack does 20 more damage for each of your Benched Pokémon.",
                "fr": "Cette attaque inflige 20 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
                "es": "Este ataque hace 20 daños más por cada uno de tus Pokémon en Banca.",
                "it": "Questo attacco infligge 20 danni in più per ciascuno dei tuoi Pokémon in panchina.",
                "de": "Dieser Angriff fügt jedem Pokémon auf deiner Bank 20 weitere Schadenspunkte zu.",
                "pt-br": "Este ataque causa 20 danos a mais para cada um dos seus Pokémon no Banco.",
                "zh-tw": "此攻擊對你的每隻後備神奇寶貝造成 20 點額外傷害。",
                ja: "自分のベンチポケモンの数×20ダメージ追加。",
                ko: "자신의 벤치 포켓몬의 수 × 20데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-altaria"
	]
};
export default card;
