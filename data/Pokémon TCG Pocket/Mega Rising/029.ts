import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/029",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/029",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/029",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/029",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/029",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/029",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/029",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/029",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/029"
    },
    name: {
        en: "Arcanine",
        "fr": "Arcanin",
        "es": "Arcanine",
        "it": "Arcanine",
        "de": "Arkani",
        "pt-br": "Arcanine",
        "zh-tw": "風速狗",
        ja: "ウインディ",
        ko: "윈디",
    },
    illustrator: "Yuu Nishida",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fire"],
    evolveFrom: {
        en: "Growlithe",
        "fr": "Caninos",
        "es": "Growlithe",
        "it": "Growlithe",
        "de": "Fukano",
        "pt-br": "Growlithe",
        "zh-tw": "卡蒂狗",
        ja: "ガーディ",
        ko: "가디",
    },
    description: {
        en: "Its magnificent bark conveys a sense of majesty.\nAnyone hearing it can't help but grovel before it.",
        "fr": "Sa magnifique écorce transmet un sentiment de majesté.\nQuiconque l’entend ne peut s’empêcher de ramper devant lui.",
        "es": "Su magnífica corteza transmite una sensación de majestuosidad.\nCualquiera que lo escuche no puede evitar humillarse ante él.",
        "it": "La sua magnifica corteccia trasmette un senso di maestosità.\nChiunque lo ascolti non può fare a meno di umiliarsi davanti ad esso.",
        "de": "Seine prächtige Rinde vermittelt ein Gefühl von Majestät.\nWer es hört, kann nicht anders, als davor zu kriechen.",
        "pt-br": "A sua magnífica casca transmite uma sensação de majestade.\nQualquer um que ouça isso não pode deixar de rastejar diante disso.",
        "zh-tw": "其雄偉的樹皮給人一種威嚴的感覺。\n任誰聽了都會忍不住跪拜。",
        ja: "堂々とした 鳴き声は 威厳に あふれ 聞いたものは 思わず ひれ伏してしまう。",
        ko: "위풍당당한 울음소리는\n위엄이 넘쳐 소리를 들은 상대는\n무의식중에 몸을 움츠리게 된다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Fire Fang",
                "fr": "Croc de Feu",
                "es": "colmillo de fuego",
                "it": "Zanna di fuoco",
                "de": "Feuerzahn",
                "pt-br": "Presa de Fogo",
                "zh-tw": "火牙",
                ja: "ほのおのキバ",
                ko: "불꽃엄니"
            },
            damage: 50,
            cost: ["Fire", "Fire"],
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Brûlé.",
                "es": "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Quemado.",
                "it": "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è bruciato.",
                "de": "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt verbrannt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "拋一枚硬幣。如果正面，則對手的活躍神奇寶貝現在被燒毀。",
                ja: "コインを1回投げオモテなら、相手のバトルポケモンをやけどにする。",
                ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 화상으로 만든다."
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 3,
	boosters: [
		"mega-blaziken"
	]
};
export default card;
