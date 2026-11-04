import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    boosters: ["vol11"],
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/097/9afbb33fd0dfe6fe",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/097/9afbb33fd0dfe6fe",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/097/9afbb33fd0dfe6fe",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/097/9afbb33fd0dfe6fe",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/097/9afbb33fd0dfe6fe",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/097/9afbb33fd0dfe6fe",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/097/9afbb33fd0dfe6fe",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/097/9afbb33fd0dfe6fe",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/097/9afbb33fd0dfe6fe"
    },
    name: {
        en: "Kangaskhan",
        "fr": "Kangourex",
        "es": "Kangaskhan",
        "it": "Kangaskhan",
        "de": "Kangama",
        "pt-br": "Kangaskhan",
        "zh-tw": "袋獸",
        ja: "ガルーラ",
        ko: "캥카",
    },
    illustrator: "Kouki Saitou",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    description: {
        en: "Although it's carrying its baby in a pouch on\nits belly, Kangaskhan is swift on its feet. It\nintimidates its opponents with quick jabs.",
        "fr": "Porter son petit dans sa poche ventrale ne l'empêche pas d'avoir un bon jeu de jambes. Ses coups rapides intimident ses ennemis.",
        "es": "Aunque lleve una cría en el marsupio, su juego de pies no pierde ligereza. Abruma al rival con ráfagas de ágiles puñetazos.",
        "it": "Ha un agile gioco di gambe, nonostante si porti appresso il cucciolo nel marsupio ventrale. Intimidisce gli avversari con jab velocissimi.",
        "de": "Obwohl es sein Junges im Beutel trägt, bewegt sich dieses Pokémon äußerst leichtfüßig. Gegner schreckt Kangama mit blitzschnellen Schlägen ab.",
        "pt-br": "Apesar de carregar seu bebê na bolsa em sua barriga, Kangaskhan é veloz. Intimida seus oponentes com golpes rápidos.",
        "zh-tw": "腹部的袋子裡裝著孩子，但是步法非常輕盈。會用高速的刺拳威嚇對手。",
        ja: "腹の 袋に 子どもが いるが フットワークは とても 軽い。 素早いジャブで 相手を 威嚇。",
        ko: "배의 주머니에 새끼가 있지만\n발놀림은 매우 가볍다.\n재빠른 잽으로 상대를 위협한다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Cross-Cut",
                "fr": "Coupe Transversale",
                "es": "Atajar",
                "it": "Fendente Incrociato",
                "de": "Überkreuzzerschneider",
                "pt-br": "Corte em Cruz",
                "zh-tw": "揮擊",
                ja: "ふりおろす",
                ko: "내리치기"
            },
            damage: "20+",
            cost: ["Colorless"],
            effect: {
                en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 40 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 40 dégâts supplémentaires.",
                "es": "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 40 puntos de daño más.",
                "it": "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 40 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 40 Schadenspunkte mehr zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 40 pontos de dano a mais.",
                "zh-tw": "若對手的戰鬥寶可夢為進化寶可夢,則增加40點傷害。",
                ja: "相手のバトルポケモンが進化ポケモンなら、40ダメージ追加。",
                ko: "상대의 배틀 포켓몬이 진화 포켓몬이라면 40데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
