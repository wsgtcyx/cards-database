import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/026",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/026",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/026",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/026",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/026",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/026",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/026",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/026",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/026"
    },
    name: {
        en: "Thwackey",
        "fr": "Badabouin",
        "es": "Thwackey",
        "it": "Thwackey",
        "de": "Chimstix",
        "pt-br": "Thwackey",
        "zh-tw": "啪咚猴",
        ja: "バチンキー",
        ko: "채키몽",
    },
    illustrator: "Akira Komayama",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    evolveFrom: {
        en: "Grookey",
        "fr": "Ouistempo",
        "es": "Grookey",
        "it": "Grookey",
        "de": "Chimpep",
        "pt-br": "Grookey",
        "zh-tw": "敲音猴",
        ja: "サルノリ",
        ko: "흥나숭",
    },
    description: {
        en: "When it's drumming out rapid beats in battle, it\ngets so caught up in the rhythm that it won't even\nnotice that it's already knocked out its opponent.",
        "fr": "Quand il bat des rythmes rapides au combat, il\nest tellement pris par le rythme qu'il ne peut même pas\nremarquez qu'il a déjà assommé son adversaire.",
        "es": "Cuando toca ritmos rápidos en la batalla,\nqueda tan atrapado en el ritmo que ni siquiera\nObserva que ya ha noqueado a su oponente.",
        "it": "Quando suona ritmi rapidi in battaglia, esso\nrimane così preso dal ritmo che non lo farà nemmeno\nnota che ha già messo KO il suo avversario.",
        "de": "Wenn es im Kampf schnelle Beats trommelt, ist es\nverfängt sich so sehr im Rhythmus, dass es gar nicht mehr funktioniert\nBeachten Sie, dass es seinen Gegner bereits KO geschlagen hat.",
        "pt-br": "Quando está tocando batidas rápidas na batalha,\nfica tão preso no ritmo que nem consegue\nobserve que ele já nocauteou seu oponente.",
        "zh-tw": "當它在戰鬥中敲出急促的節拍時，\n完全陷入節奏以至於無法\n請注意，它已經擊敗了對手。",
        ja: "激しい ビートを 刻むことに 夢中になる あまり 戦いで 相手が 気絶しても 気づかない。",
        ko: "격렬한 비트를 내는데\n열중한 나머지 싸움에서\n상대가 기절해도 모른다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Hammer In",
                "fr": "Marteler",
                "es": "Martillo adentro",
                "it": "Martella dentro",
                "de": "Einschlagen",
                "pt-br": "Martelo",
                "zh-tw": "錘入",
                ja: "ぶちかます",
                ko: "한방 먹이기"
            },
            damage: 50,
            cost: ["Grass", "Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2,
	boosters: [
		"mega-altaria"
	]
};
export default card;
