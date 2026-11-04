import { Card } from "../../../interfaces";
import Set from "../Promos-C";

const card: Card = {
    set: Set,
    name: {
        en: "Inkay",
        fr: "Sepiatop",
        es: "Inkay",
        it: "Inkay",
        de: "Iscalar",
        "pt-br": "Inkay",
        "zh-tw": "好啦魷",
        ja: "マーイーカ",
        ko: "오케이징"
    },
    illustrator: "sui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Psychic"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Perplex",
                fr: "Affolement",
                es: "Desconcierto",
                "pt-br": "Perplexo",
                "zh-tw": "蠱惑",
                ja: "まどわす",
                ko: "혼란시키기",
                de: "Perplex",
                it: "Sconcerto"
            },
            cost: [
                "Psychic"
            ],
            effect: {
                en: "Your opponent's Active Pokémon is now Confused.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
                es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
                ja: "相手のバトルポケモンをこんらんにする。",
                ko: "상대의 배틀 포켓몬을 혼란으로 만든다.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
                it: "Il Pokémon attivo del tuo avversario viene confuso.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "將對手的戰鬥寶可夢混亂。"
            }
        }
    ],
    description: {
        en: "It protects itself from tough foes by flashing its luminescent spots to discourage them.",
        fr: "Il se protège des ennemis puissants en faisant clignoter les points lumineux sur son corps, ce qui sape leur volonté de l'attaquer.",
        es: "Los destellos de luz intermitente que emiten sus órganos luminosos aplacan el ánimo del rival, lo que le permite protegerse de enemigos fuertes.",
        it: "Fa perdere la motivazione agli avversari facendo lampeggiare i motivi che ha sul corpo. In questo modo riesce a difendersi dai nemici più forti.",
        de: "Es schützt sich vor starken Feinden, indem es die Punkte auf seinem Körper blinken lässt und Gegnern so den Kampfeswillen raubt.",
        "pt-br": "Pisca suas marcas luminescentes para se proteger dos inimigos e desencorajá-los.",
        "zh-tw": "會閃爍發光體讓對手提不起勁，從而保護自己免受強敵襲擊。",
        ja: "発光体を 点滅させて 相手の やる気を なくさせることで 強敵から 身を 守っている。",
        ko: "발광체를 깜빡여서 상대의 의욕을 상실시키는 방식으로 강적으로부터 몸을 지킨다."
    },
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-C/004/0b303095fc167289",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-C/004/0b303095fc167289",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-C/004/0b303095fc167289",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-C/004/0b303095fc167289",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-C/004/0b303095fc167289",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-C/004/0b303095fc167289",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-C/004/0b303095fc167289",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-C/004/0b303095fc167289",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-C/004/0b303095fc167289"
    }
};

export default card;
