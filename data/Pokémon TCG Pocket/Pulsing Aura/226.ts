import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/226",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/226",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/226",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/226",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/226",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/226",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/226",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3/226",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3/226"
    },
    name: {
        en: "Mega Blaziken ex",
        fr: "Méga-Braségali-ex",
        es: "Mega-Blaziken ex",
        it: "Mega Blaziken-ex",
        de: "Mega-Lohgock-ex",
        "pt-br": "Mega Blaziken ex",
        "zh-tw": "超級火焰雞ex",
        ko: "메가번치코 ex",
        ja: "メガバシャーモex"
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 210,
    types: ["Fire"],
    dexId: [257],
    evolveFrom: {
        en: "Combusken",
        fr: "Galifeu",
        es: "Combusken",
        it: "Combusken",
        de: "Jungglut",
        "pt-br": "Combusken",
        "zh-tw": "力壯雞",
        ko: "영치코",
        ja: "ワカシャモ"
    },
    stage: "Stage2",
    attacks: [
        {
            cost: ["Fire", "Fire"],
            name: {
                en: "Mega Burning",
                fr: "Méga Calcination",
                es: "Megaabrasión",
                it: "Megabruciatura",
                de: "Mega-Brand",
                "pt-br": "Megaqueimação",
                "zh-tw": "超級燃燒",
                ja: "メガバーニング",
                ko: "메가버닝"
            },
            effect: {
                en: "Discard a {R} Energy from this Pokémon. Your opponent's Active Pokémon is now Burned.",
                fr: "Défaussez une Énergie {R} de ce Pokémon. Le Pokémon Actif de votre adversaire est désormais Brûlé.",
                es: "Descarta una Energía {R} de este Pokémon. El Pokémon Activo de tu rival ahora está Quemado.",
                it: "Scarta un'Energia {R} da questo Pokémon. Il Pokémon attivo del tuo avversario è ora bruciato.",
                de: "Wirf eine {R}-Energie von diesem Pokémon ab. Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "Descarte uma Energia {R} deste Pokémon. O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "丟棄該寶可夢的 {R} 能量。你對手的活躍寶可夢現在被燒毀了。",
                ja: "このポケモンから{R}エネルギーを1個トラッシュ。相手のバトルポケモンをやけどにする。",
                ko: "이 포켓몬에서 {R}에너지를 1개 트래쉬한다. 상대의 배틀 포켓몬을 화상으로 만든다."
            },
            damage: 120
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
