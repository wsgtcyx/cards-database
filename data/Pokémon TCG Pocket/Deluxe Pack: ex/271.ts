import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/271",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/271",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/271",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/271",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/271",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/271",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/271",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/271",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4b/271"
    },
    name: {
        en: "Dragonite ex",
        "fr": "Dracolosse-ex",
        "es": "Dragonite ex",
        "it": "Dragonite-ex",
        "de": "Dragoran-ex",
        "pt-br": "Dragonite ex",
        "zh-tw": "快龍ex",
        ja: "カイリューex",
        ko: "망나뇽 ex",
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 180,
    types: ["Dragon"],
    evolveFrom: {
        en: "Dragonair",
        "fr": "Draco",
        "es": "Dragonair",
        "it": "Dragonair",
        "de": "Dragonir",
        "pt-br": "Dragonair",
        "zh-tw": "哈克龍",
        ja: "ハクリュー",
        ko: "신뇽",
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Giga Impact",
                "fr": "Giga-Impact",
                "es": "Gigaimpacto",
                "it": "Gigaimpatto",
                "de": "Giga-Impact",
                "pt-br": "Giga Impacto",
                "zh-tw": "千兆影響",
                ja: "ギガインパクト",
                ko: "기가임팩트"
            },
            damage: 180,
            cost: ["Water", "Lightning", "Colorless"],
            effect: {
                en: "During your next turn, this Pokémon can't attack.",
                "fr": "Lors de votre prochain tour, ce Pokémon ne peut pas attaquer.",
                "es": "Durante tu próximo turno, este Pokémon no puede atacar.",
                "it": "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
                "de": "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
                "pt-br": "Durante o seu próximo turno, este Pokémon não poderá atacar.",
                "zh-tw": "在你的下一個回合中，這只神奇寶貝無法攻擊。",
                ja: "次の自分の番、このポケモンはワザが使えない。",
                ko: "자신의 다음 차례에 이 포켓몬은 기술을 사용할 수 없다."
            }
        }],
    retreat: 2
};
export default card;
