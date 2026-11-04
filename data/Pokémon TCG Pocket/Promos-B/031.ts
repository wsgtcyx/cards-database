import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/031/cfb3088e017742b7",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/031/cfb3088e017742b7",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/031/cfb3088e017742b7",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/031/cfb3088e017742b7",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/031/cfb3088e017742b7",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/031/cfb3088e017742b7",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/031/cfb3088e017742b7",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/031/cfb3088e017742b7",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/031/cfb3088e017742b7"
    },
    name: {
        en: "Cinderace",
        fr: "Pyrobut",
        es: "Cinderace",
        it: "Cinderace",
        de: "Liberlo",
        "pt-br": "Cinderace",
        "zh-tw": "閃焰王牌",
        ko: "에이스번",
        ja: "エースバーン"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Fire"],
    dexId: [815],
    evolveFrom: {
        en: "Raboot",
        fr: "Lapyro",
        es: "Raboot",
        it: "Raboot",
        de: "Kickerlo",
        "pt-br": "Raboot",
        "zh-tw": "騰蹴小將",
        ko: "래비풋",
        ja: "ラビフット"
    },
    stage: "Stage2",
    description: {
        en: "Using a ball that it made out of flames, Cinderace blinds its opponents and keeps them at bay.",
        fr: "Il crée des ballons de flammes et s'en sert pour tenir ses adversaires à distance ou pour les aveugler.",
        es: "Maneja los balones de fuego que crea para mantener a raya a sus adversarios o cegarlos.",
        it: "Adopera la sua palla di fuoco per tenere a bada l'avversario e accecarlo.",
        de: "Es erschafft einen Ball aus Flammen, mit dem es seine Gegner blendet und in Schach hält.",
        "pt-br": "Com a sua bola de fogo, Cinderace cega os oponentes e os mantém bem longe.",
        "zh-tw": "會控制火焰做成的球來牽制對手，或將球用在障眼法上。",
        ja: "炎で 作った ボールを 操って 相手を 牽制したり 目くらましに 使ったりする。",
        ko: "불꽃으로 만든 볼을 움직여\n상대를 견제하거나\n눈속임에 사용하거나 한다."
    },
    attacks: [
        {
            cost: ["Fire", "Fire"],
            name: {
                en: "Fireball Shot",
                fr: "Tir Boule de Feu",
                es: "Balonazo de Fuego",
                it: "Colpo Palladifuoco",
                de: "Feuerballschuss",
                "pt-br": "Bicada de Bola de Fogo",
                "zh-tw": "火球射擊",
                ja: "ひのたまシュート",
                ko: "불구슬슛"
            },
            effect: {
                en: "During your next turn, this Pokémon can't attack.",
                fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
                es: "Durante tu próximo turno, este Pokémon no puede atacar.",
                it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
                de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
                "pt-br": "Durante o seu próximo turno, este Pokémon não poderá atacar.",
                "zh-tw": "在下個自己的回合,這隻寶可夢無法使用招式。",
                ja: "次の自分の番、このポケモンはワザが使えない。",
                ko: "자신의 다음 차례에 이 포켓몬은 기술을 사용할 수 없다."
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
    retreat: 0,
    boosters: []
};

export default card;
