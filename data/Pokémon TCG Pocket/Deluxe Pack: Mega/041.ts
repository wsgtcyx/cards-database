import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/041",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/041",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/041",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/041",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/041",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/041",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/041",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/041",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/041"
    },
    name: {
        en: "Mega Blaziken ex",
        fr: "Méga-Braségali-ex",
        es: "Mega-Blaziken ex",
        it: "Mega Blaziken-ex",
        de: "Mega-Lohgock-ex",
        "pt-br": "Mega Blaziken ex",
        "zh-tw": "超級火焰雞ex",
        ja: "メガバシャーモex",
        ko: "메가번치코 ex"
    },
    illustrator: "PLANETA Yamashita",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 210,
    types: [
        "Fire"
    ],
    evolveFrom: {
        en: "Combusken",
        fr: "Galifeu",
        es: "Combusken",
        it: "Combusken",
        de: "Jungglut",
        "pt-br": "Combusken",
        "zh-tw": "力壯雞",
        ja: "ワカシャモ",
        ko: "영치코"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [
        {
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
            damage: 120,
            cost: [
                "Fire",
                "Fire"
            ],
            effect: {
                en: "Discard a {R} Energy from this Pokémon. Your opponent's Active Pokémon is now Burned.",
                fr: "Défaussez une Énergie {R} de ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
                es: "Descarta 1 Energía {R} de este Pokémon. El Pokémon Activo de tu rival pasa a estar Quemado.",
                it: "Rimuovi un'Energia {R} da questo Pokémon. Il Pokémon attivo del tuo avversario viene bruciato.",
                de: "Lege 1 {R}-Energie von diesem Pokémon ab. Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "Descarte 1 Energia {R} deste Pokémon. O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "將這隻寶可夢身上的1個{R}能量丟棄。將對手的戰鬥寶可夢灼傷。",
                ja: "このポケモンから{R}エネルギーを1個トラッシュ。相手のバトルポケモンをやけどにする。",
                ko: "이 포켓몬에서 {R}에너지를 1개 트래쉬한다. 상대의 배틀 포켓몬을 화상으로 만든다."
            }
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
