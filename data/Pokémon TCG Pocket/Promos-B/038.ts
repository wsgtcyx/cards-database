import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/038/f77c5f4e12a02cf0",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/038/f77c5f4e12a02cf0",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/038/f77c5f4e12a02cf0",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/038/f77c5f4e12a02cf0",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/038/f77c5f4e12a02cf0",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/038/f77c5f4e12a02cf0",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/038/f77c5f4e12a02cf0",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/038/f77c5f4e12a02cf0",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/038/f77c5f4e12a02cf0"
    },
    name: {
        en: "Tinkaton",
        fr: "Forgelina",
        es: "Tinkaton",
        it: "Tinkaton",
        de: "Granforgita",
        "pt-br": "Tinkaton",
        "zh-tw": "巨鍛匠",
        ko: "두드리짱",
        ja: "デカヌチャン"
    },
    illustrator: "DOM",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Metal"],
    dexId: [959],
    evolveFrom: {
        en: "Tinkatuff",
        fr: "Forgella",
        es: "Tinkatuff",
        it: "Tinkatuff",
        de: "Tafforgita",
        "pt-br": "Tinkatuff",
        "zh-tw": "巧鍛匠",
        ko: "벼리짱",
        ja: "ナカヌチャン"
    },
    stage: "Stage2",
    description: {
        en: "The hammer tops 220 pounds, yet it gets swung around easily by Tinkaton as it steals whatever it pleases and carries its plunder back home.",
        fr: "Ce Pokémon s'empare de tout ce qu'il convoite en maniant sans effort son marteau de plus de 100 kg et ramène son butin chez lui.",
        es: "Blande sin esfuerzo su pesado martillo de más de 100 kg. Cuando quiere algo, lo roba y se lo lleva de vuelta a su guarida.",
        it: "È capace di brandire il suo martello pesante oltre 100 kg come se niente fosse. Se vede qualcosa che gli piace, lo ruba e lo porta nella sua tana.",
        de: "Granforgita schwingt den über 100 kg schweren Hammer mühelos umher. Es schleppt alles mit sich nach Hause, was ihm gefällt.",
        "pt-br": "O seu martelo chega a pesar 100 kg. Apesar disso, Tinkaton sai com ele por aí como se não fosse nada, roubando o que lhe convém e levando tudo pra casa.",
        "zh-tw": "會輕鬆地揮舞重超過100公斤的鎚子來奪取想要的東西，然後帶回自己的住處。",
        ja: "100キロを 超える ハンマーを 軽々 振りまわして 欲しいものを 奪い取り 棲み処へと 持ち帰る。",
        ko: "100kg이 넘는 해머를 가볍게 휘둘러서\n원하는 것을 빼앗은 다음\n거처로 가지고 간다."
    },
    attacks: [
        {
            cost: ["Metal", "Metal", "Colorless"],
            name: {
                en: "Gigaton Hammer",
                fr: "Marteau Mastoc",
                es: "Martillo Colosal",
                it: "Granmartello",
                de: "Riesenhammer",
                "pt-br": "Martelo Gigatônico",
                "zh-tw": "巨力錘",
                ja: "デカハンマー",
                ko: "거대해머"
            },
            effect: {
                en: "During your next turn, this Pokémon can't use Gigaton Hammer.",
                fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Marteau Mastoc.",
                es: "Durante tu próximo turno, este Pokémon no puede usar Martillo Colosal.",
                it: "Durante il tuo prossimo turno, questo Pokémon non può usare Granmartello.",
                de: "Während deines nächsten Zuges kann dieses Pokémon Riesenhammer nicht einsetzen.",
                "pt-br": "Durante o seu próximo turno, este Pokémon não poderá usar Martelo Gigatônico.",
                "zh-tw": "在下個自己的回合,這隻寶可夢無法使用「巨力錘」。",
                ja: "次の自分の番、このポケモンは「デカハンマー」が使えない。",
                ko: "자신의 다음 차례에 이 포켓몬은 「거대해머」를 사용할 수 없다."
            },
            damage: 140
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2,
    boosters: ["vol5"]
};

export default card;
