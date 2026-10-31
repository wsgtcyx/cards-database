import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/116",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/116",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/116",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/116",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/116",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/116",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/116",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2b/116",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2b/116"
    },
    name: {
        en: "Arboliva",
        fr: "Arboliva",
        es: "Arboliva",
        it: "Arboliva",
        de: "Olithena",
        "pt-br": "Arboliva",
        "zh-tw": "奧利瓦",
        ko: "올리르바",
        ja: "オリーヴァ"
    },
    illustrator: "PLANETA Yamashita",
    rarity: "Crown",
    category: "Pokemon",
    hp: 130,
    types: ["Grass"],
    dexId: [930],
    evolveFrom: {
        en: "Dolliv",
        fr: "Olivado",
        es: "Dolliv",
        it: "Dolliv",
        de: "Olivinio",
        "pt-br": "Dolliv",
        "zh-tw": "奧利紐",
        ko: "올리뇨",
        ja: "オリーニョ"
    },
    stage: "Stage2",
    description: {
        en: "This calm Pokémon is very compassionate. It will share its delicious, nutrient-rich oil with weakened Pokémon.",
        fr: "Ce Pokémon calme est très compatissant. Il partagera sa délicieuse huile riche en nutriments avec les Pokémon affaiblis.",
        es: "Este Pokémon tranquilo es muy compasivo. Compartirá su delicioso aceite rico en nutrientes con los Pokémon debilitados.",
        it: "Questo Pokémon calmo è molto compassionevole. Condividerà il suo delizioso olio ricco di sostanze nutritive con i Pokémon indeboliti.",
        de: "Dieses ruhige Pokémon ist sehr mitfühlend. Es wird sein köstliches, nährstoffreiches Öl mit geschwächten Pokémon teilen.",
        "pt-br": "Este Pokémon calmo é muito compassivo. Ele compartilhará seu óleo delicioso e rico em nutrientes com Pokémon enfraquecidos.",
        "zh-tw": "這隻冷靜的寶可夢非常富有同情心。它會與虛弱的寶可夢分享美味且營養豐富的油。",
        ja: "穏やかで とても 慈悲深い。 栄養豊富な 美味しい オイルを 弱った ポケモンに 分け与える。",
        ko: "온화하면서도 매우 자비롭다.\n영양이 풍부한 맛있는 오일을\n약해진 포켓몬에게 나눠 준다."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Extra Heal",
                fr: "Soins supplémentaires",
                es: "Curación adicional",
                it: "Guarigione extra",
                de: "Zusätzliche Heilung",
                "pt-br": "Cura Extra",
                "zh-tw": "額外治療",
                ja: "エクストラヒール",
                ko: "엑스트라 힐"
            },
            effect: {
                en: "Once during your turn, you may heal 60 damage from 1 of your Pokémon ex that has any Energy attached. If you do, discard a random Energy from that Pokémon.",
                fr: "Une fois pendant votre tour, vous pouvez soigner 60 dégâts d'un de vos ex Pokémon auquel une énergie est attachée. Si vous le faites, défaussez une Énergie aléatoire de ce Pokémon.",
                es: "Una vez durante tu turno, puedes curar 60 daños de 1 de tus Pokémon ex que tenga alguna Energía adjunta. Si lo haces, descarta una Energía aleatoria de ese Pokémon.",
                it: "Una sola volta durante il tuo turno, puoi curare 60 danni da 1 dei tuoi Pokémon ex a cui sono assegnate delle Energie. Se lo fai, scarta un'Energia casuale da quel Pokémon.",
                de: "Einmal während deines Zuges kannst du 60 Schadenspunkte von einem deiner Ex-Pokémon heilen, an das mindestens eine Energie angelegt ist. Wenn du dies tust, wirf eine zufällige Energie von diesem Pokémon ab.",
                "pt-br": "Uma vez durante o seu turno, você pode curar 60 de dano de 1 dos seus Pokémon ex que tenha alguma Energia ligada. Se fizer isso, descarte uma Energia aleatória daquele Pokémon.",
                "zh-tw": "在你的回合中，你可以治療 1 隻帶有能量的寶可夢 {ex}造成的 60 點傷害。如果這樣做，則丟棄該寶可夢的隨機能量。",
                ja: "自分の番に1回使える。エネルギーがついている自分の「ポケモンex」1匹のHPを60回復。その後、そのポケモンからエネルギーをランダムに1個トラッシュ。",
                ko: "자신의 차례에 1번 사용할 수 있다. 에너지가 붙어 있는 자신의 「포켓몬 ex」 1마리의 HP를 60회복. 그 뒤, 그 포켓몬에서 에너지를 랜덤으로 1개 트래쉬한다."
            }
        }
    ],
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Seed Bomb",
                fr: "Canon Graine",
                es: "Bomba Germen",
                it: "Semebomba",
                de: "Samenbomben",
                "pt-br": "Bomba de Sementes",
                "zh-tw": "種子炸彈",
                ja: "タネばくだん",
                ko: "씨폭탄"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
