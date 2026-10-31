import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4a/058",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4a/058",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4a/058",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4a/058",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4a/058",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4a/058",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4a/058",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4a/058",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4a/058"
    },
    name: {
        en: "Lickilicky",
        "fr": "Coudlangue",
        "es": "Lickilicky",
        "it": "Lickilicky",
        "de": "Schlurplek",
        "pt-br": "Lickilicky",
        "zh-tw": "大舌舔",
        ja: "ベロベルト",
        ko: "내룸벨트",
    },
    illustrator: "Mina Nakai",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Colorless"],
    evolveFrom: {
        en: "Lickitung",
        "fr": "Excelangue",
        "es": "Lickitung",
        "it": "Lickitung",
        "de": "Schlurp",
        "pt-br": "Lickitung",
        "zh-tw": "大舌頭",
        ja: "ベロリンガ",
        ko: "내루미",
    },
    description: {
        en: "Lickilicky's strange tongue can stretch to many\ntimes the length of its body. No one has figured\nout how Lickilicky's tongue can stretch so far.",
        "fr": "L'étrange langue de Lickilicky peut s'étendre à beaucoup\nfois la longueur de son corps. Personne n'a compris\ncomment la langue de Lickilicky peut s'étirer jusqu'à présent.",
        "es": "La extraña lengua de Lickilicky puede extenderse a muchos\nveces la longitud de su cuerpo. Nadie se ha dado cuenta\nDescubra cómo la lengua de Lickilicky puede estirarse hasta tal punto.",
        "it": "La strana lingua di Lickilicky può allungarsi a molti\nvolte la lunghezza del suo corpo. Nessuno lo ha capito\ncome riesce ad allungarsi così tanto la lingua di Lickilicky.",
        "de": "Lickilickys seltsame Zunge kann viele ansprechen\nmal die Länge seines Körpers. Niemand hat es herausgefunden\nFinden Sie heraus, wie weit Lickilickys Zunge sich dehnen kann.",
        "pt-br": "A estranha língua de Lickilicky pode se estender a muitos\nvezes o comprimento do seu corpo. Ninguém imaginou\ndescobrir como a língua de Lickilicky pode esticar tanto.",
        "zh-tw": "Lickilicky 奇怪的舌頭可以延伸到很多\n其身體長度的幾倍。沒有人想到\n看看 Lickilicky 的舌頭如何能伸展這麼遠。",
        ja: "体の 何倍もの 長さまで 伸びる 不思議な ベロを もつ。 その 不思議は 未解明のまま。",
        ko: "몸의 몇 배의 길이로 늘어나는\n신비한 혀를 가졌다.\n그 비밀은 아직 밝혀지지 않았다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Stretch Tongue",
                "fr": "Étirer la langue",
                "es": "Estirar la lengua",
                "it": "Allunga la lingua",
                "de": "Zunge dehnen",
                "pt-br": "Esticar a língua",
                "zh-tw": "伸展舌頭",
                ja: "のびるベロ",
                ko: "늘어나는혀"
            },
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "This attack does 60 damage to 1 of your opponent's Pokémon.",
                "fr": "Cette attaque inflige 60 dégâts à 1 des Pokémon de votre adversaire.",
                "es": "Este ataque hace 60 puntos de daño a 1 de los Pokémon de tu rival.",
                "it": "Questo attacco infligge 60 danni a 1 dei Pokémon del tuo avversario.",
                "de": "Dieser Angriff fügt 1 Pokémon deines Gegners 60 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 60 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "這次攻擊對對手的 1 只神奇寶貝造成 60 點傷害。",
                ja: "相手のポケモン1匹に60ダメージ。",
                ko: "상대의 포켓몬 1마리에게 60데미지를 준다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
