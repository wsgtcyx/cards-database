import { Card } from "../../../interfaces";
import Set from "../Promos-C";

const card: Card = {
    set: Set,
    name: {
        en: "Malamar",
        fr: "Sepiatroce",
        es: "Malamar",
        it: "Malamar",
        de: "Calamanero",
        "pt-br": "Malamar",
        "zh-tw": "烏賊王",
        ja: "カラマネロ",
        ko: "칼라마네로"
    },
    illustrator: "Tomokazu Komiya",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: [
        "Psychic"
    ],
    stage: "Stage1",
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
                en: "Pester the Dizzy",
                fr: "Accabler les Confus",
                es: "Saña Mareante",
                "pt-br": "Cutucar a Confusão",
                "zh-tw": "暈眩追擊",
                ja: "めまいのついげき",
                ko: "현기증추격",
                de: "Piesacken der Taumelnden",
                it: "Confusattacco"
            },
            cost: [
                "Psychic"
            ],
            damage: "10+",
            effect: {
                en: "If your opponent's Active Pokémon is Confused, this attack does 90 more damage.",
                fr: "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 90 dégâts de plus.",
                es: "Si el Pokémon Activo de tu rival está Confundido, este ataque hace 90 puntos de daño más.",
                ja: "相手のバトルポケモンがこんらんなら、90ダメージ追加。",
                ko: "상대의 배틀 포켓몬이 혼란이라면 90데미지를 추가한다.",
                de: "Wenn das Aktive Pokémon deines Gegners verwirrt ist, fügt diese Attacke 90 Schadenspunkte mehr zu.",
                it: "Se il Pokémon attivo del tuo avversario è confuso, questo attacco infligge 90 danni in più.",
                "pt-br": "Se o Pokémon Ativo do seu oponente estiver Confuso, este ataque causará 90 pontos de dano a mais.",
                "zh-tw": "若對手的戰鬥寶可夢混亂，則增加90點傷害。"
            }
        }
    ],
    evolveFrom: {
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
    description: {
        en: "Its hypnotic powers are dangerously strong. Anyone who falls under Malamar's control loses their memories surrounding the event.",
        fr: "Ses pouvoirs hypnotiques sont sans égal, si bien que ses victimes ne gardent aucun souvenir du moment où elles étaient sous son contrôle.",
        es: "Sus potentes poderes hipnóticos no tienen rival. Aquellos a los que controla no recuerdan en absoluto haber estado sometidos a su voluntad.",
        it: "Ha poteri ipnotici straordinariamente forti, tanto che chi cade in suo controllo ne perde poi ogni ricordo.",
        de: "Seine hypnotischen Kräfte sind unfassbar stark. Hat es sich ein Opfer gefügig gemacht, verliert dieses jegliche Erinnerung an den Vorfall.",
        "pt-br": "Seus poderes hipnóticos são fortes e perigosos. Quem ficar sob o controle de Malamar perde toda a memória do ocorrido.",
        "zh-tw": "由於牠的催眠術過於強大，導致被操控的對手會失去在那前後的記憶。",
        ja: "強力すぎる さいみんじゅつ。 操られていた 相手は 前後の 記憶を 失っている。",
        ko: "어마어마하게 강한 최면술을 쓴다. 조종당한 상대는 전후의 기억을 잃어버린다."
    },
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-C/005/e273bb37f512016e",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-C/005/e273bb37f512016e",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-C/005/e273bb37f512016e",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-C/005/e273bb37f512016e",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-C/005/e273bb37f512016e",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-C/005/e273bb37f512016e",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-C/005/e273bb37f512016e",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-C/005/e273bb37f512016e",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-C/005/e273bb37f512016e"
    }
};

export default card;
