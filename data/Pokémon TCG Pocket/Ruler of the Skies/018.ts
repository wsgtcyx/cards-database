import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/018",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/018",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/018",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/018",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/018",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/018",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/018",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4/018",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4/018"
    },
    name: {
        en: "Sinistcha",
        fr: "Théffroyable",
        es: "Sinistcha",
        it: "Sinistcha",
        de: "Fatalitcha",
        "pt-br": "Sinistcha",
        "zh-tw": "來悲粗茶",
        ko: "그우린차",
        ja: "ヤバソチャ"
    },
    illustrator: "Tomokazu Komiya",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    dexId: [1013],
    evolveFrom: {
        en: "Poltchageist",
        fr: "Poltchageist",
        es: "Poltchageist",
        it: "Poltchageist",
        de: "Mortcha",
        "pt-br": "Poltchageist",
        "zh-tw": "斯魔茶",
        ko: "차데스",
        ja: "チャデス"
    },
    stage: "Stage1",
    description: {
        en: "It prefers cool, dark places, such as the back of a shelf or the space beneath a home's floorboards. It wanders in search of prey after sunset.",
        "fr": "il aime les endroits frais et sombres, comme le dessous d'un plancher ou le fond d'une étagère. A la nuit tombée, il erre en quête de proies.",
        es: "Prefiere los lugares fríos y oscuros, como el fondo de las estanterías o bajo el suelo de las casas. Vaga en pos de presas tras el ocaso.",
        "it": "Gli piace stare in posti bui e freschi, ad esempio in fondo agli scaffali o sotto i pavimenti delle case. Dopo il tramonto vaga in cerca di prede.",
        de: "Es hält sich gern an dunklen und kalten Orten auf wie etwa unter Fußböden oder hinter Regalen. Nach Sonnenuntergang geht es auf Beutejagd.",
        "pt-br": "Prefere lugares escuros e frescos, como o fundo de uma prateleira ou o espaço sob o assoalho de uma casa. Perambula em busca de presas após o pôr do sol.",
        "zh-tw": "喜歡待在民宅的地板下或\n架子深處等陰涼的地方。\n日落後會四處徘徊尋找獵物。",
        ja: "民家の 床下や 棚の奥など 冷暗所を 好む。 日没後 獲物を 探して 徘徊する。※ キタカミの里での冒険で出会うことができます。",
        ko: "민가의 마루 밑이나 선반 구석 등\n서늘하고 어두운 곳을 선호한다.\n일몰 후에 먹이를 찾아 돌아다닌다."
    },
    attacks: [
        {
            cost: ["Grass", "Colorless"],
            name: {
                en: "Scald",
                fr: "Ébullition",
                es: "Escaldar",
                it: "Idrovampata",
                de: "Siedewasser",
                "zh-tw": "熱水",
                "pt-br": "Escaldada",
                ja: "ねっとう",
                ko: "열탕"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Burned.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
                es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
                it: "Il Pokémon attivo del tuo avversario è ora bruciato.",
                de: "Das aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "將對手的戰鬥寶可夢灼傷。",
                ja: "相手のバトルポケモンをやけどにする。",
                ko: "상대의 배틀 포켓몬을 화상으로 만든다."
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};
export default card;
