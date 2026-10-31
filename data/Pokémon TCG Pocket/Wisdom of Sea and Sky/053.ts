import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/053",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/053",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/053",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/053",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/053",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/053",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/053",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/053",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/053"
    },
    name: {
        en: "Qwilfish",
        "fr": "Qwilfish",
        "es": "Qwilfish",
        "it": "Qwilfish",
        "de": "Baldorfish",
        "pt-br": "Qwilfish",
        "zh-tw": "千針魚",
        ja: "ハリーセン",
        ko: "침바루",
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    description: {
        en: "Be cautious if this Pokémon starts sucking in\nwater—it will soon attack by scattering the toxic\nspikes that grow all over its body.",
        "fr": "Soyez prudent si ce Pokémon commence à aspirer\nl'eau - elle attaquera bientôt en dispersant les substances toxiques\ndes pointes qui poussent sur tout son corps.",
        "es": "Ten cuidado si este Pokémon comienza a succionar\nagua: pronto atacará dispersando el tóxico\npúas que crecen por todo su cuerpo.",
        "it": "Fai attenzione se questo Pokémon inizia ad aspirare\nacqua: presto attaccherà disperdendo le sostanze tossiche\nspine che crescono su tutto il corpo.",
        "de": "Seien Sie vorsichtig, wenn dieses Pokémon anfängt einzusaugen\nWasser – es wird bald angreifen, indem es das Gift verstreut\nStacheln, die über den ganzen Körper wachsen.",
        "pt-br": "Tenha cuidado se este Pokémon começar a sugar\nágua - em breve atacará, espalhando o tóxico\nespinhos que crescem por todo o seu corpo.",
        "zh-tw": "如果這只神奇寶貝開始吸入，請小心\n水——它很快就會通過散佈有毒物質進行攻擊\n全身長出尖刺。",
        ja: "水を 飲みこみはじめたら 危険。 全身に 生えている 毒針を まき散らし 襲いかかってくる。",
        ko: "물을 들이마시기 시작하면 위험하다.\n온몸에 난 독침을 흩뿌려서\n공격해 오기 때문이다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Poison Sting",
                "fr": "Piqûre de poison",
                "es": "Picadura de veneno",
                "it": "Puntura di veleno",
                "de": "Giftstich",
                "pt-br": "Picada Venenosa",
                "zh-tw": "毒刺",
                ja: "どくばり",
                ko: "독침"
            },
            damage: 20,
            cost: ["Water"],
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Empoisonné.",
                "es": "El Pokémon Activo de tu rival ahora está Envenenado.",
                "it": "Il Pokémon attivo del tuo avversario ora è avvelenato.",
                "de": "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "你對手的主動神奇寶貝現在中毒了。",
                ja: "相手のバトルポケモンをどくにする。",
                ko: "상대의 배틀 포켓몬을 독으로 만든다."
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
