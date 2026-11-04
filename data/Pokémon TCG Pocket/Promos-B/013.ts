import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/013/06e7a7d8a0b5c4e8",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/013/06e7a7d8a0b5c4e8",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/013/06e7a7d8a0b5c4e8",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/013/06e7a7d8a0b5c4e8",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/013/06e7a7d8a0b5c4e8",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/013/06e7a7d8a0b5c4e8",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/013/06e7a7d8a0b5c4e8",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/013/06e7a7d8a0b5c4e8",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/013/06e7a7d8a0b5c4e8"
    },
    name: {
        en: "Arcanine",
        fr: "Arcanin",
        es: "Arcanine",
        it: "Arcanine",
        de: "Arkani",
        "pt-br": "Arcanine",
        "zh-tw": "風速狗",
        ko: "윈디",
        ja: "ウインディ"
    },
    illustrator: "Atsuko Nishida",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fire"],
    dexId: [59],
    evolveFrom: {
        en: "Growlithe",
        fr: "Caninos",
        es: "Growlithe",
        it: "Growlithe",
        de: "Fukano",
        "pt-br": "Growlithe",
        "zh-tw": "卡蒂狗",
        ko: "가디",
        ja: "ガーディ"
    },
    stage: "Stage1",
    description: {
        en: "Its magnificent bark conveys a sense of majesty. Anyone hearing it can’t help but grovel before it.",
        fr: "Son aboiement est tout simplement majestueux. On ne peut que se prosterner à ses pieds après l'avoir entendu.",
        es: "Su imponente ladrido rebosa majestuosidad de tal forma que todo el que lo escucha no puede sino postrarse ante él.",
        it: "Il suo maestoso ruggito ispira un senso di ammirazione. Chiunque lo senta non può far a meno di prostrarsi.",
        de: "Sein imposantes Bellen klingt so majestätisch, dass sich jeder, der es vernimmt, unwillkürlich zu Boden wirft.",
        "pt-br": "Seu latido magnífico transmite um quê de majestade. Qualquer um que o ouvir não resiste e curva-se perante a ele.",
        "zh-tw": "威風凜凜的叫聲充滿威嚴，不管是誰聽到後，都會不由自主地跪倒下去。",
        ja: "堂々とした 鳴き声は 威厳に あふれ 聞いたものは 思わず ひれ伏してしまう。",
        ko: "위풍당당한 울음소리는\n위엄이 넘쳐 소리를 들은 상대는\n무의식중에 몸을 움츠리게 된다."
    },
    attacks: [
        {
            cost: ["Fire", "Fire"],
            name: {
                en: "Fire Fang",
                fr: "Crocs Feu",
                es: "Colmillo Ígneo",
                it: "Rogodenti",
                de: "Feuerzahn",
                "pt-br": "Presas de Fogo",
                "zh-tw": "火焰牙",
                ja: "ほのおのキバ",
                ko: "불꽃엄니"
            },
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned.",
                fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
                es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Quemado.",
                it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene bruciato.",
                de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verbrannt.",
                "pt-br": "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Queimado.",
                "zh-tw": "擲1次硬幣若為正面,則將對手的戰鬥寶可夢灼傷。",
                ja: "コインを1回投げオモテなら、相手のバトルポケモンをやけどにする。",
                ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 화상으로 만든다."
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 3,
    boosters: ["vol2"]
};

export default card;
