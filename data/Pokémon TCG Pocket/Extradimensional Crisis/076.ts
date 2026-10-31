import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3a/076",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3a/076",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3a/076",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3a/076",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3a/076",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3a/076",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3a/076",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3a/076",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3a/076"
    },
    name: {
        en: "Buzzwole ex",
        "fr": "Mouscoto-ex",
        "es": "Buzzwole ex",
        "it": "Buzzwole-ex",
        "de": "Masskito-ex",
        "pt-br": "Buzzwole ex",
        "zh-tw": "爆肌蚊ex",
        ja: "マッシブーンex",
        ko: "매시붕 ex",
    },
    illustrator: "PLANETA Mochizuki",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 140,
    types: ["Grass"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Punch",
                "fr": "Punch",
                "es": "Puñetazo",
                "it": "Punch",
                "de": "Stempel",
                "pt-br": "Soco",
                "zh-tw": "沖床",
                ja: "パンチ",
                ko: "펀치"
            },
            damage: 30,
            cost: ["Colorless", "Colorless"]
        }, {
            name: {
                en: "Big Beat",
                "fr": "Gros rythme",
                "es": "gran ritmo",
                "it": "Grande colpo",
                "de": "Großer Schlag",
                "pt-br": "Grande batida",
                "zh-tw": "大節奏",
                ja: "ビッグビート",
                ko: "빅비트"
            },
            damage: 120,
            cost: ["Grass", "Grass", "Colorless"],
            effect: {
                en: "During your next turn, this Pokémon can't use Big Beat.",
                "fr": "Lors de votre prochain tour, ce Pokémon ne pourra pas utiliser Big Beat.",
                "es": "Durante tu próximo turno, este Pokémon no puede usar Big Beat.",
                "it": "Durante il tuo prossimo turno, questo Pokémon non può usare Big Beat.",
                "de": "Während deines nächsten Zuges kann dieses Pokémon Big Beat nicht verwenden.",
                "pt-br": "Durante o seu próximo turno, este Pokémon não poderá usar Big Beat.",
                "zh-tw": "在你的下一個回合中，這只神奇寶貝不能使用Big Beat。",
                ja: "次の自分の番、このポケモンは「ビッグビート」が使えない。",
                ko: "자신의 다음 차례에 이 포켓몬은 「빅비트」를 사용할 수 없다."
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
